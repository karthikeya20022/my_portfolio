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
import {Resend} from 'resend';

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.object({success: z.boolean(), message: z.string()}),
  },
  async (input) => {
    if (!process.env.RESEND_API_KEY) {
      console.error(
        'RESEND_API_KEY is not set. Please set it in your .env.local file.'
      );
      return {
        success: false,
        message:
          'Server configuration error. Could not send email at this time.',
      };
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // This must be a verified domain in Resend
        to: 'karthikeyagupta93@gmail.com',
        reply_to: input.email,
        subject: `New message from ${input.name}: ${input.subject}`,
        html: `
          <p>You have a new message from your portfolio contact form.</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return {success: true, message: 'Email sent successfully.'};
    } catch (error) {
      console.error('Failed to send email:', error);
      return {success: false, message: 'Failed to send email.'};
    }
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
