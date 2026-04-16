// ---------------------------------------------------------------------------
// Email Utilities (placeholder)
// TODO: Integrate with Resend (https://resend.com) for production emails.
//       Install: npm install resend
//       Import:  import { Resend } from "resend";
//       Init:    const resend = new Resend(process.env.RESEND_API_KEY);
// ---------------------------------------------------------------------------

/**
 * Send a confirmation email to the person who submitted the contact form.
 * Currently logs to console — replace with Resend integration for production.
 */
export async function sendContactConfirmation(
  to: string,
  name: string
): Promise<void> {
  // TODO: Replace with Resend email send
  console.log(
    `[email] Would send contact confirmation to ${name} <${to}>`
  );
}

/**
 * Notify the Opslogica team about a new lead submission.
 * Currently logs to console — replace with Resend integration for production.
 */
export async function sendLeadNotification(
  lead: Record<string, unknown>
): Promise<void> {
  // TODO: Replace with Resend email send
  console.log(
    `[email] Would send lead notification for: ${JSON.stringify(lead, null, 2)}`
  );
}
