'use server';
/**
 * @fileOverview A flow to handle contact form submissions.
 *
 * - sendEmail - A function that handles the contact form data.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  SendEmailInputSchema,
  type SendEmailInput,
} from '@/ai/schemas/send-email-schema';

// This flow currently only logs the data to the console.
// To send an actual email, you would integrate an email service provider
// like Resend, SendGrid, or Nodemailer here. This typically requires
// an API key which should be stored securely as an environment variable.
const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.object({success: z.boolean(), message: z.string()}),
  },
  async (input) => {
    console.log('Received contact form submission:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Subject:', input.subject);
    console.log('Message:', input.message);

    // To send an email, you can use a service like Resend.
    // 1. Add the package: `npm install resend`
    // 2. Get an API key from https://resend.com
    // 3. Store the key in a .env.local file: `RESEND_API_KEY=your_key_here`
    // 4. Uncomment and adapt the code below.
    /*
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Must be a verified domain
        to: 'karthikeyagupta93@gmail.com',
        subject: `New message from ${input.name}: ${input.subject}`,
        html: `
          <p>You have a new message from your portfolio contact form.</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return { success: true, message: 'Email sent successfully.' };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false, message: 'Failed to send email.' };
    }
    */

    return {success: true, message: 'Form submitted successfully.'};
  }
);

export async function sendEmail(
  input: SendEmailInput
): Promise<{success: boolean; message: string}> {
  const result = await sendEmailFlow(input);
  if (!result.success) {
    throw new Error(result.message);
  }
  return result;
}
