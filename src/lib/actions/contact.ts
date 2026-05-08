"use server";

// Contact form submission via Resend.
//
// Required env vars:
//   RESEND_API_KEY      — get one at https://resend.com (free tier: 3K emails/mo)
//
// Strongly recommended in production:
//   CONTACT_FROM_EMAIL  — sender, e.g. "Skilled Visits <hello@skilledvisits.com>"
//                         Must be on a verified domain in your Resend dashboard,
//                         OR Resend will reject the send.
//
// Optional:
//   CONTACT_TO_EMAIL    — recipient (defaults to BRAND.email).
//
// All env vars must be present at build/runtime on the hosting provider.
// Vercel only injects env vars into NEW deploys after they're added — if you
// just added a var, trigger a redeploy.

import { Resend } from "resend";
import { BRAND } from "@/lib/content";

export type ContactFormState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

export const initialContactState: ContactFormState = { status: "idle" };

type Submission = {
  name: string;
  email: string;
  phone: string;
  region: string;
  service: string;
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Wrap EVERYTHING so the form never throws and useActionState always
  // receives a structured response.
  try {
    // Honeypot — bots typically fill every field
    const honey = (formData.get("company") ?? "").toString().trim();
    if (honey) return { status: "ok" };

    const data: Submission = {
      name: ((formData.get("name") ?? "") as string).trim(),
      email: ((formData.get("email") ?? "") as string).trim(),
      phone: ((formData.get("phone") ?? "") as string).trim(),
      region: ((formData.get("region") ?? "") as string).trim(),
      service: ((formData.get("service") ?? "") as string).trim(),
      message: ((formData.get("message") ?? "") as string).trim(),
    };

    if (!data.name || !data.email) {
      return { status: "error", message: "Name and email are required." };
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      return {
        status: "error",
        message: "Please enter a valid email address.",
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set");
      return {
        status: "error",
        message:
          "The form is offline right now. Please call or email us directly.",
      };
    }

    const to = process.env.CONTACT_TO_EMAIL ?? BRAND.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      "Skilled Visits Site <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const subject = `New inquiry — ${data.service || "general"} — ${data.name}`;

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html: renderEmailHtml(data),
      text: renderEmailText(data),
    });

    if (result.error) {
      console.error("[contact] Resend returned error:", result.error);
      return {
        status: "error",
        message:
          "We couldn't deliver your message right now. Please call us or try again in a moment.",
      };
    }

    return { status: "ok" };
  } catch (err) {
    // Catch-all so the form never 500s.
    console.error("[contact] Action threw unexpectedly:", err);
    return {
      status: "error",
      message:
        "Something went wrong on our end. Please call us — we answer 24/7.",
    };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailHtml(d: Submission): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:10px 0;color:#6b6480;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;width:120px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#14111c;font-size:15px;line-height:1.5;">${
        value ? escapeHtml(value) : '<span style="color:#a8a0c4;">—</span>'
      }</td>
    </tr>`;

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New inquiry — Skilled Visits</title>
</head>
<body style="margin:0;padding:0;background:#f5ecfc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5ecfc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #ebe6f0;">
          <tr>
            <td style="background:linear-gradient(135deg,#7029b3 0%,#9e50e5 100%);padding:32px 36px;color:#ffffff;">
              <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.85;">Skilled Visits</div>
              <div style="font-family:Georgia,serif;font-size:28px;letter-spacing:-0.02em;margin-top:4px;">New inquiry from the website</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row("Name", d.name)}
                ${row("Email", d.email)}
                ${row("Phone", d.phone)}
                ${row("Region", d.region)}
                ${row("Service", d.service)}
              </table>
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #ebe6f0;">
                <div style="color:#6b6480;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:10px;">Message</div>
                <div style="color:#14111c;font-size:15px;line-height:1.6;white-space:pre-wrap;">${
                  d.message
                    ? escapeHtml(d.message)
                    : '<span style="color:#a8a0c4;">No message provided.</span>'
                }</div>
              </div>
              <div style="margin-top:28px;padding:18px;background:#f5ecfc;border-radius:12px;">
                <div style="color:#7029b3;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:6px;">Reply directly</div>
                <a href="mailto:${escapeHtml(d.email)}" style="color:#7029b3;text-decoration:none;font-size:15px;font-weight:600;">${escapeHtml(d.email)}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 36px;background:#fbfafd;border-top:1px solid #ebe6f0;color:#6b6480;font-size:12px;line-height:1.5;">
              Sent from skilledvisits.com · Reply to this email and your reply will go directly to the client.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderEmailText(d: Submission): string {
  return `New inquiry from skilledvisits.com

Name:    ${d.name}
Email:   ${d.email}
Phone:   ${d.phone || "—"}
Region:  ${d.region || "—"}
Service: ${d.service || "—"}

Message:
${d.message || "—"}

—
Reply to this email to respond directly to the client.`;
}
