import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Opslogica <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "hello@opslogica.com";

/**
 * Send a confirmation email to the person who submitted the contact form.
 */
export async function sendContactConfirmation(
  to: string,
  name: string
): Promise<void> {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject: "We received your request — Opslogica",
      html: `
        <div style="font-family: 'IBM Plex Sans', system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #14181f;">
          <div style="border-bottom: 1px solid #e2e4e9; padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; font-weight: 600; margin: 0;">Opslogica</h1>
          </div>
          <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
          <p style="font-size: 16px; line-height: 1.6; color: #676f7e;">
            Thank you for reaching out. We've received your request and our team
            will get back to you within <strong style="color: #14181f;">24 hours</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #676f7e;">
            In the meantime, feel free to explore our
            <a href="https://opslogica.com/case-studies" style="color: #14181f; text-decoration: underline;">case studies</a>
            to see how we've helped businesses like yours.
          </p>
          <div style="border-top: 1px solid #e2e4e9; margin-top: 32px; padding-top: 20px;">
            <p style="font-size: 13px; color: #676f7e; margin: 0;">
              Opslogica — Automate. Accelerate. Dominate.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[email] Confirmation send error:", error);
    }
  } catch (err) {
    console.error("[email] Confirmation failed:", err);
  }
}

/**
 * Notify the admin about a new lead submission.
 */
export async function sendLeadNotification(
  lead: Record<string, unknown>
): Promise<void> {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `New Lead: ${lead.name} — ${lead.industry || "General"}`,
      html: `
        <div style="font-family: 'IBM Plex Sans', system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #14181f;">
          <div style="border-bottom: 1px solid #e2e4e9; padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; font-weight: 600; margin: 0;">New Lead Received</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e; width: 140px;">Name</td>
              <td style="padding: 10px 0; font-weight: 500;">${lead.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e;">Email</td>
              <td style="padding: 10px 0;">${lead.email}</td>
            </tr>
            ${lead.phone ? `
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e;">Phone</td>
              <td style="padding: 10px 0;">${lead.phone}</td>
            </tr>` : ""}
            ${lead.company ? `
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e;">Company</td>
              <td style="padding: 10px 0;">${lead.company}</td>
            </tr>` : ""}
            ${lead.industry ? `
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e;">Industry</td>
              <td style="padding: 10px 0;">${lead.industry}</td>
            </tr>` : ""}
            ${lead.budget_range ? `
            <tr style="border-bottom: 1px solid #e2e4e9;">
              <td style="padding: 10px 0; color: #676f7e;">Budget</td>
              <td style="padding: 10px 0;">${lead.budget_range}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #676f7e; vertical-align: top;">Message</td>
              <td style="padding: 10px 0;">${lead.message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <a href="https://opslogica.com/dashboard/leads"
               style="display: inline-block; padding: 12px 24px; background: #14181f; color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; font-family: 'IBM Plex Mono', monospace;">
              VIEW IN DASHBOARD
            </a>
          </div>
          <div style="border-top: 1px solid #e2e4e9; margin-top: 32px; padding-top: 20px;">
            <p style="font-size: 13px; color: #676f7e; margin: 0;">
              Opslogica Admin Notification
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[email] Lead notification error:", error);
    }
  } catch (err) {
    console.error("[email] Lead notification failed:", err);
  }
}
