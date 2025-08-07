# 🚀 Resend Email Setup Guide

Your contact form is now built with shadcn/ui and ready to send emails! You just need to configure Resend.

## Step 1: Get Your Resend API Key

1. **Sign up at [resend.com](https://resend.com)**
2. **Verify your email** and complete account setup
3. **Go to API Keys** in your dashboard
4. **Create a new API key** (give it a name like "Haidee PT Website")
5. **Copy the API key** (it starts with `re_`)

## Step 2: Configure Environment Variables

1. **Create a `.env.local` file** in your project root (if it doesn't exist)
2. **Add all required environment variables**:
```bash
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Email addresses
HAIDEE_EMAIL=haidee@yourdomain.com
FROM_EMAIL=noreply@yourdomain.com
```

**Replace with your actual values:**
- `HAIDEE_EMAIL`: Where contact form submissions will be sent
- `FROM_EMAIL`: The "from" address for emails (must be from your verified domain)

## Step 3: Domain Setup (For Production)

For production use, you'll need to:

1. **Add your domain** in Resend dashboard
2. **Verify DNS records** (Resend will provide instructions)
3. **Update `FROM_EMAIL`** to use your verified domain (e.g., `noreply@yourdomain.com`)

## Step 4: Test Your Form

1. **Start your development server**: `npm run dev`
2. **Navigate to your contact form**
3. **Fill out and submit the form**
4. **Check your email** for both the notification and thank you emails

## 🎉 You're All Set!

Your contact form now:
- ✅ Uses beautiful shadcn/ui components
- ✅ Has proper form validation with Zod
- ✅ Sends professional HTML emails via Resend
- ✅ Sends thank you emails to users
- ✅ Has loading states and error handling

## Troubleshooting

**If emails aren't sending:**
1. Check your `.env.local` file exists and has the correct API key
2. Make sure you restarted your development server after adding the API key
3. Check the browser console and server logs for errors
4. Verify your Resend account is active and API key is valid

**Free Tier Limits:**
- 3,000 emails per month
- 100 emails per day
- Perfect for a contact form!

Need help? Check the [Resend documentation](https://resend.com/docs) or contact their support.
