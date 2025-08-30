import { google } from 'googleapis';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "text";
  howDidYouHear: "google" | "instagram" | "facebook" | "referral" | "other";
  otherSource?: string;
  subject: string;
  message: string;
  formType?: string;
}

export async function logToGoogleSheets(formData: ContactFormData) {
  try {
    // Check if Google Sheets integration is configured
    if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY || 
        !process.env.GOOGLE_SHEETS_CLIENT_EMAIL || 
        !process.env.GOOGLE_SHEETS_SHEET_ID) {
      console.log('Google Sheets not configured, skipping logging');
      return;
    }

    // Parse the private key (handle escaped newlines)
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n');

    // Create JWT auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // Create sheets API client
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles', // Pacific Time for Haidee
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const rowData = [
      timestamp,
      formData.name,
      formData.email,
      formData.phone,
      formData.preferredContact,
      formData.howDidYouHear,
      formData.otherSource || '',
      formData.subject,
      formData.message,
      formData.formType || 'Contact Form'
    ];

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'Sheet1!A:J', // Updated to include new fields
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Successfully logged form submission to Google Sheets');
  } catch (error) {
    console.error('Error logging to Google Sheets:', error);
    // Don't throw error - we don't want to break form submission if sheets logging fails
  }
}
