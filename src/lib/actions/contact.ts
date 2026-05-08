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
import type { ContactFormState } from "@/lib/contact-types";

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
  console.log("[contact] action invoked");
  try {
    const honey = (formData.get("company") ?? "").toString().trim();
    if (honey) {
      console.log("[contact] honeypot triggered, silently returning ok");
      return { status: "ok" };
    }

    const data: Submission = {
      name: ((formData.get("name") ?? "") as string).trim(),
      email: ((formData.get("email") ?? "") as string).trim(),
      phone: ((formData.get("phone") ?? "") as string).trim(),
      region: ((formData.get("region") ?? "") as string).trim(),
      service: ((formData.get("service") ?? "") as string).trim(),
      message: ((formData.get("message") ?? "") as string).trim(),
    };
    console.log("[contact] form parsed", {
      name: data.name,
      email: data.email,
      phone: data.phone ? "(present)" : "(empty)",
      region: data.region,
      service: data.service,
      messageLength: data.message.length,
    });

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
    const to = process.env.CONTACT_TO_EMAIL ?? BRAND.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      "Skilled Visits Site <onboarding@resend.dev>";

    console.log("[contact] env check", {
      RESEND_API_KEY: apiKey
        ? `set (${apiKey.slice(0, 5)}…${apiKey.slice(-4)})`
        : "MISSING",
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL ?? "(default)",
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "(default → BRAND.email)",
      effectiveFrom: from,
      effectiveTo: to,
    });

    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set");
      return {
        status: "error",
        message:
          "The form is offline right now. Please call or email us directly.",
      };
    }

    let resend: Resend;
    try {
      resend = new Resend(apiKey);
    } catch (err) {
      console.error("[contact] Resend constructor threw:", err);
      return {
        status: "error",
        message: "Email service is misconfigured. Please call us directly.",
      };
    }

    const subject = `New inquiry — ${data.service || "general"} — ${data.name}`;
    console.log("[contact] sending via Resend…", { from, to, subject });

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html: renderEmailHtml(data),
      text: renderEmailText(data),
    });

    console.log("[contact] Resend result", {
      hasError: !!result.error,
      hasData: !!result.data,
      data: result.data,
      error: result.error,
    });

    if (result.error) {
      console.error("[contact] Resend returned error:", result.error);
      return {
        status: "error",
        message:
          "We couldn't deliver your message right now. Please call us or try again in a moment.",
      };
    }

    console.log("[contact] lead email sent", { id: result.data?.id });

    // Auto-reply to the customer. Best-effort — if it fails we still count
    // the form submission as successful since the lead reached the business.
    try {
      const replyResult = await resend.emails.send({
        from,
        to: [data.email],
        replyTo: to,
        subject: "We got your message — Skilled Visits",
        html: renderCustomerHtml(data),
        text: renderCustomerText(data),
      });
      if (replyResult.error) {
        console.error("[contact] Auto-reply Resend error:", replyResult.error);
      } else {
        console.log("[contact] auto-reply sent", { id: replyResult.data?.id });
      }
    } catch (err) {
      console.error("[contact] Auto-reply threw:", err);
    }

    return { status: "ok" };
  } catch (err) {
    console.error("[contact] Action threw unexpectedly:", err);
    if (err instanceof Error) {
      console.error("[contact] error name:", err.name);
      console.error("[contact] error message:", err.message);
      console.error("[contact] error stack:", err.stack);
    }
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

function firstName(full: string): string {
  return full.split(/\s+/)[0] || full;
}

function renderCustomerHtml(d: Submission): string {
  const greeting = `Hi ${escapeHtml(firstName(d.name))},`;
  const echoed = d.message
    ? `<div style="margin-top:24px;padding:18px;background:#fbfafd;border:1px solid #ebe6f0;border-radius:12px;">
         <div style="color:#6b6480;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:8px;">Your message</div>
         <div style="color:#14111c;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(d.message)}</div>
       </div>`
    : "";

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>We got your message — Skilled Visits</title>
</head>
<body style="margin:0;padding:0;background:#f5ecfc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5ecfc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #ebe6f0;">
          <tr>
            <td style="background:linear-gradient(135deg,#7029b3 0%,#9e50e5 100%);padding:36px 36px 30px;color:#ffffff;text-align:center;">
              <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.85;">Skilled Visits</div>
              <div style="font-family:Georgia,serif;font-size:30px;letter-spacing:-0.02em;margin-top:8px;line-height:1.1;">We got your message.</div>
              <div style="margin-top:8px;font-size:14px;opacity:0.9;font-style:italic;">A clinician will be in touch shortly.</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 36px 8px;color:#14111c;font-size:16px;line-height:1.6;">
              <p style="margin:0 0 14px;">${greeting}</p>
              <p style="margin:0 0 14px;">Thanks for reaching out to Skilled Visits. We've received your inquiry and a member of our clinical team will personally follow up — typically within a few hours, and always within 24.</p>
              <p style="margin:0;">If something is time-sensitive, please call us directly. We answer 24/7.</p>
              ${echoed}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 36px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="background:#f5ecfc;border-radius:12px;padding:18px 22px;">
                    <div style="color:#7029b3;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:10px;">Reach us anytime</div>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding:4px 0;color:#14111c;font-size:14px;">
                          <strong style="color:#7029b3;">Florida</strong> &nbsp;
                          <a href="tel:${BRAND.phoneFL.replace(/\D/g, "")}" style="color:#14111c;text-decoration:none;">${BRAND.phoneFL}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#14111c;font-size:14px;">
                          <strong style="color:#7029b3;">New York</strong> &nbsp;
                          <a href="tel:${BRAND.phoneNY.replace(/\D/g, "")}" style="color:#14111c;text-decoration:none;">${BRAND.phoneNY}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#14111c;font-size:14px;">
                          <strong style="color:#7029b3;">Email</strong> &nbsp;
                          <a href="mailto:${BRAND.email}" style="color:#14111c;text-decoration:none;">${BRAND.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 36px;background:#fbfafd;border-top:1px solid #ebe6f0;color:#6b6480;font-size:12px;line-height:1.6;text-align:center;">
              Skilled Visits · Concierge mobile wellness · Florida &amp; New York<br />
              You're receiving this because you contacted us at skilledvisits.com.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderCustomerText(d: Submission): string {
  const echo = d.message
    ? `\n\nYour message:\n${d.message}\n`
    : "";
  return `Hi ${firstName(d.name)},

Thanks for reaching out to Skilled Visits. We've received your inquiry and a member of our clinical team will personally follow up — typically within a few hours, and always within 24.

If something is time-sensitive, please call us directly. We answer 24/7.

  Florida:  ${BRAND.phoneFL}
  New York: ${BRAND.phoneNY}
  Email:    ${BRAND.email}
${echo}
— Skilled Visits
Concierge mobile wellness · Florida & New York`;
}
