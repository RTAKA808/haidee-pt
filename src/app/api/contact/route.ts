import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import { logToGoogleSheets } from '@/lib/googleSheets';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "text";
  subject: string;
  message: string;
}

function generateHaideeEmail(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4B2A74; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #4B2A74; }
        .value { margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; }
        .message-box { background-color: white; padding: 15px; border-left: 4px solid #4B2A74; margin-top: 10px; border-radius: 4px; }
        .footer { text-align: center; padding: 15px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Someone has contacted you through your website</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${formData.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Preferred Contact Method:</div>
            <div class="value">${formData.preferredContact.charAt(0).toUpperCase() + formData.preferredContact.slice(1)}</div>
          </div>
          
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${formData.subject}</div>
          </div>
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${formData.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sent from your Haidee PT website contact form</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateThankYouEmail(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You - Message Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #F6F5F0; color: black; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; }
        .highlight { color: #4B2A74; font-weight: bold; }
        .footer { text-align: center; padding: 20px; font-size: 14px; color: #666; }
        .cta-box { background-color: #e4dcf5; padding: 15px; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://haideesuipt.com/assets/haidee-logo.png" alt="Haidee PT Logo" style="max-width: 200px; height: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
          <h1>Thank You, ${formData.name}!</h1>
          <p>Your message has been received</p>
        </div>
        <div class="content">
          <p>Thank you for reaching out! I&apos;ve received your message about <span class="highlight">"${formData.subject}"</span> and I&apos;m excited to help you on your wellness journey.</p>
          
          <div class="cta-box">
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>I'll review your message carefully</li>
              <li>You'll hear back from me within <span class="highlight">1-3 business days</span></li>
              <li>I'll contact you via your preferred method: <span class="highlight">${formData.preferredContact}</span></li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to explore more about my approach to physical therapy and the services I offer on my <a href="https://haideesuipt.com/" style="color: #4B2A74; text-decoration: none; font-weight: bold;">website</a>.</p>
          
          <p>Looking forward to connecting with you soon!</p>
          
          <p><strong>Warm regards,</strong><br>
          Haidee Sui<br>
          <em>Doctor of Physical Therapy</em></p>
        </div>
        <div class="footer">
          <p>This is an automated confirmation email. Please don&apos;t reply to this message.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormData]?.trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    // Check if required environment variables are configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }
    
    if (!process.env.HAIDEE_EMAIL) {
      console.error("HAIDEE_EMAIL is not configured");
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 }
      );
    }
    
    if (!process.env.FROM_EMAIL) {
      console.error("FROM_EMAIL is not configured");
      return NextResponse.json(
        { error: "Sender email not configured" },
        { status: 500 }
      );
    }
    
    // Generate email content
    const haideeEmailHtml = generateHaideeEmail(body);
    const thankYouEmailHtml = generateThankYouEmail(body);
    
    try {
      // Send email to Haidee
      await resend.emails.send({
        from: `Contact Form <${process.env.FROM_EMAIL}>`,
        to: [process.env.HAIDEE_EMAIL!],
        subject: `New Contact Form: ${body.subject}`,
        html: haideeEmailHtml,
      });

      // Send thank you email to user
      await resend.emails.send({
        from: `Haidee PT <${process.env.FROM_EMAIL}>`,
        to: [body.email],
        subject: 'Thank you for contacting me - Message Received',
        html: thankYouEmailHtml,
      });

      // Log to Google Sheets (after successful email sending)
      await logToGoogleSheets({
        ...body,
        formType: 'Contact Form'
      });

      return NextResponse.json({ success: true });
      
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      return NextResponse.json(
        { error: "Failed to send emails" },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
