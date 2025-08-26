// Quick email preview script
const fs = require('fs');

const sampleFormData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  phone: "(555) 987-6543",
  preferredContact: "email",
  subject: "Chronic shoulder pain treatment",
  message: "Hi Haidee, I've been experiencing chronic shoulder pain for the past year after a sports injury. I'm looking for a holistic approach to treatment and would love to discuss your fascial counterstrain techniques."
};

function generateThankYouEmail(formData) {
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
          <p>Thank you for reaching out! I've received your message about <span class="highlight">"${formData.subject}"</span> and I'm excited to help you on your wellness journey.</p>
          
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
          <p>This is an automated confirmation email. Please don't reply to this message.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate and save the preview
const emailHtml = generateThankYouEmail(sampleFormData);
fs.writeFileSync('email-preview.html', emailHtml);

console.log('✅ Email preview generated!');
console.log('📧 Sample data used:');
console.log(`   Name: ${sampleFormData.name}`);
console.log(`   Subject: ${sampleFormData.subject}`);
console.log(`   Contact method: ${sampleFormData.preferredContact}`);
console.log('\n🌐 Opening preview in browser...');
