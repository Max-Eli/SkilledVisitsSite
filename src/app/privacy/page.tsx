import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Skilled Visits collects, uses, shares, and protects your personal and health information.",
};

const EFFECTIVE = "May 8, 2026";
const LAST_UPDATED = "May 8, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        accent="how we protect your information."
        description={`Effective ${EFFECTIVE} · Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-5 pb-28 md:px-8">
        <Reveal>
          <div className="prose-sv">
            <p>
              Skilled Visits LLC (&ldquo;<strong>Skilled Visits</strong>,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit{" "}
              <a href="https://skilledvisits.com">skilledvisits.com</a>{" "}
              (the &ldquo;Site&rdquo;), book a visit, or otherwise interact
              with our services. Please read this policy carefully. By using
              the Site or our services, you agree to the practices described
              here.
            </p>

            <h2 id="information-we-collect">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, information
              collected automatically, and information from third parties.
            </p>

            <h3>Information you provide</h3>
            <ul>
              <li>
                <strong>Contact details:</strong> name, phone number, email
                address, and physical address when you book a visit, complete
                a contact form, or sign up for communications.
              </li>
              <li>
                <strong>Health information:</strong> medical history, current
                medications, allergies, treatment preferences, and other
                health-related information you provide during intake or
                consultations.
              </li>
              <li>
                <strong>Payment information:</strong> billing details processed
                through our PCI-compliant payment processor. We do not store
                full payment-card numbers on our servers.
              </li>
              <li>
                <strong>Communications:</strong> records of phone calls, text
                messages, emails, and chat messages you exchange with our team.
              </li>
            </ul>

            <h3>Information collected automatically</h3>
            <ul>
              <li>
                <strong>Device and usage data:</strong> IP address, browser
                type, device identifiers, pages viewed, referring URLs, and
                interaction events.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> small data
                files used to keep the Site functional and to understand how
                it&apos;s used. See &ldquo;Cookies and Tracking&rdquo; below.
              </li>
            </ul>

            <h2 id="use">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Schedule, deliver, and follow up on the services you request.</li>
              <li>Communicate with you about appointments, results, and care.</li>
              <li>Process payments and maintain billing records.</li>
              <li>
                Comply with legal, regulatory, and professional licensing
                obligations applicable to healthcare providers in Florida and
                New York.
              </li>
              <li>
                Improve the Site, our services, and the safety of our
                operations.
              </li>
              <li>
                Send marketing communications you&apos;ve opted into, with the
                ability to opt out at any time.
              </li>
            </ul>

            <h2 id="sharing">3. How We Share Information</h2>
            <p>
              We share information only with parties who have a legitimate
              need to receive it, including:
            </p>
            <ul>
              <li>
                <strong>Clinicians and care providers</strong> directly
                involved in your treatment.
              </li>
              <li>
                <strong>Service providers</strong> who help us run our
                business — for example, scheduling tools, payment processors,
                accredited diagnostic labs, secure communications platforms,
                and hosting providers — bound by contracts that limit their
                use of your information.
              </li>
              <li>
                <strong>Legal and regulatory authorities</strong> when
                required by law, subpoena, or other legal process, or to
                protect the rights, property, or safety of Skilled Visits,
                our clients, or others.
              </li>
              <li>
                <strong>Successors</strong> in connection with a merger,
                acquisition, financing, or sale of assets, with notice to you.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information, and
              we do <strong>not</strong> share your personal information with
              third parties for their own marketing purposes.
            </p>

            <h2 id="sms">
              4. SMS / Text Messaging Communications
            </h2>
            <p>
              When you provide your mobile number — for example, while booking
              a visit, contacting us through the Site, or opting in via a
              keyword — you consent to receive transactional and, where you
              additionally opt in, promotional text messages from Skilled
              Visits.
            </p>
            <ul>
              <li>
                <strong>Types of messages:</strong> appointment confirmations
                and reminders, follow-up care, customer-service replies,
                account notifications, and (only with your additional consent)
                occasional promotional offers.
              </li>
              <li>
                <strong>Message frequency:</strong> varies based on your
                interactions with us. Frequency may increase around scheduled
                appointments.
              </li>
              <li>
                <strong>Costs:</strong> message and data rates may apply,
                depending on your carrier plan.
              </li>
              <li>
                <strong>Opt out:</strong> reply <code>STOP</code> to any
                message to opt out of further texts. You will receive a
                confirmation that you&apos;ve been unsubscribed.
              </li>
              <li>
                <strong>Help:</strong> reply <code>HELP</code> for support, or
                contact us at{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or{" "}
                <a href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}>
                  {BRAND.phoneFL}
                </a>
                .
              </li>
              <li>
                <strong>Carrier disclaimer:</strong> mobile carriers are not
                liable for delayed or undelivered messages.
              </li>
            </ul>
            <p>
              <strong>
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes.
              </strong>{" "}
              Information sharing with subcontractors that support our
              services — such as customer service platforms, secure messaging
              providers, and message delivery vendors — is permitted strictly
              for the purpose of providing the messaging service and is not
              used for their own marketing. All other use categories exclude
              text-messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>

            <h2 id="cookies">5. Cookies and Tracking</h2>
            <p>
              We use cookies, pixels, and similar technologies to keep the
              Site working, remember your preferences, and measure how the
              Site is used. You can control cookies through your browser
              settings. Note that disabling certain cookies may affect Site
              functionality.
            </p>

            <h2 id="security">6. Data Security</h2>
            <p>
              We use administrative, technical, and physical safeguards
              designed to protect your information, including encryption in
              transit, access controls, and vendor due diligence. No system
              is perfectly secure; we cannot guarantee absolute security and
              encourage you to use strong, unique passwords and to keep your
              devices updated.
            </p>

            <h2 id="hipaa">7. Health Information &amp; HIPAA</h2>
            <p>
              Some health information we collect may be protected by the
              Health Insurance Portability and Accountability Act
              (&ldquo;HIPAA&rdquo;). When HIPAA applies, that information is
              treated as &ldquo;Protected Health Information&rdquo; and is
              handled in accordance with our separate Notice of Privacy
              Practices, which is provided at intake and is available on
              request. To the extent of any conflict, our HIPAA Notice of
              Privacy Practices controls with respect to Protected Health
              Information.
            </p>

            <h2 id="rights">8. Your Rights</h2>
            <p>
              Depending on where you live, you may have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion.</li>
              <li>Restrict or object to certain processing.</li>
              <li>Withdraw consent at any time, where we rely on consent.</li>
              <li>
                Opt out of marketing communications by following unsubscribe
                instructions or contacting us directly.
              </li>
            </ul>
            <p>
              California residents have additional rights under the CCPA/CPRA.
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. We will
              respond within the timeframes required by applicable law.
            </p>

            <h2 id="children">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13, and we do
              not knowingly collect personal information from children under
              13. If we learn we have collected such information, we will
              delete it promptly. Care for minors is provided only with
              parent or legal-guardian consent and is governed by our intake
              process, not this Site.
            </p>

            <h2 id="changes">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we
              do, we will revise the &ldquo;Last updated&rdquo; date at the
              top of this page and, when changes are material, we will notify
              you through the Site or by other reasonable means.
            </p>

            <h2 id="contact">11. Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Reach us at:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                Phone (FL):{" "}
                <a href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}>
                  {BRAND.phoneFL}
                </a>
              </li>
              <li>
                Phone (NY):{" "}
                <a href={`tel:${BRAND.phoneNY.replace(/\D/g, "")}`}>
                  {BRAND.phoneNY}
                </a>
              </li>
            </ul>

            <hr />
            <p style={{ fontSize: "0.875rem" }}>
              See also our{" "}
              <Link href="/terms">Terms of Service</Link> for the rules
              governing your use of the Site and our services.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
