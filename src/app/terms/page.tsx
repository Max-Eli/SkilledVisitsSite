import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Skilled Visits website and services.",
};

const EFFECTIVE = "May 8, 2026";
const LAST_UPDATED = "May 8, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        accent="the rules that keep things fair."
        description={`Effective ${EFFECTIVE} · Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-5 pb-28 md:px-8">
        <Reveal>
          <div className="prose-sv">
            <p>
              These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;)
              govern your access to and use of{" "}
              <a href="https://skilledvisits.com">skilledvisits.com</a> (the
              &ldquo;Site&rdquo;) and any services offered by Skilled Visits
              LLC (&ldquo;<strong>Skilled Visits</strong>,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
              using the Site or our services, you agree to these Terms. If
              you do not agree, please do not use the Site or our services.
            </p>

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              By accessing the Site, booking a visit, or using any of our
              services, you acknowledge that you have read and understood
              these Terms and our{" "}
              <Link href="/privacy">Privacy Policy</Link>, and you agree to
              be bound by them.
            </p>

            <h2 id="eligibility">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age, or the legal parent or
              guardian of the person receiving care, to use our services.
              Care for minors is provided only with parent or legal-guardian
              consent.
            </p>

            <h2 id="services">3. Description of Services</h2>
            <p>
              Skilled Visits is a concierge mobile health practice offering
              IV therapy, wellness shots, mobile phlebotomy and lab testing,
              rapid diagnostics, and primary care visits in select areas of
              Florida and New York. Services are delivered in your home,
              office, hotel, or our luxury mobile suite, and are performed
              by licensed clinicians (MDs, NPs, and RNs).
            </p>

            <h2 id="medical-disclaimer">4. Medical Disclaimer</h2>
            <p>
              Information provided on the Site is for general educational
              purposes only and is not a substitute for professional medical
              advice, diagnosis, or treatment. Always seek the advice of a
              qualified healthcare provider with any questions you may have
              regarding a medical condition. Specific protocols, dosing, and
              treatment plans are determined only after a clinician
              consultation and intake review.
            </p>
            <p>
              Statements regarding wellness benefits have not been evaluated
              by the U.S. Food and Drug Administration. Our services are not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>

            <h2 id="booking">5. Booking, Cancellation, and No-Show Policy</h2>
            <ul>
              <li>
                <strong>Booking:</strong> visits may be requested through the
                Site, by phone, or by text. Bookings are confirmed only after
                a clinician reviews your intake and confirms availability.
              </li>
              <li>
                <strong>Cancellation:</strong> please cancel at least 24
                hours before your scheduled visit when possible. Late
                cancellations may incur a fee, communicated at the time of
                booking.
              </li>
              <li>
                <strong>No-shows:</strong> failure to be present at a
                confirmed visit may result in a no-show fee and may affect
                future booking.
              </li>
              <li>
                <strong>Clinical right to refuse:</strong> our clinicians may
                decline or modify a treatment if, in their professional
                judgment, it is not appropriate or safe.
              </li>
            </ul>

            <h2 id="payment">6. Payment and Pricing</h2>
            <p>
              Pricing for services is published on the Site and in our
              menu. Pricing is subject to change. Payment is due at the time
              of service unless otherwise agreed. We accept major credit
              cards and select insurance plans. Acceptance of insurance does
              not guarantee coverage for any particular service; you remain
              responsible for any amount not covered by your insurance.
            </p>

            <h2 id="sms">7. SMS / Text Messaging Program</h2>
            <p>
              By providing your mobile number to Skilled Visits — including
              when you book a visit, complete a contact form, or opt in via
              keyword — you consent to receive text messages from us in
              connection with our services.
            </p>
            <ul>
              <li>
                <strong>Program description:</strong> Skilled Visits sends
                appointment reminders, follow-up care, customer-service
                replies, account notifications, and (with separate consent)
                occasional promotional offers.
              </li>
              <li>
                <strong>Message frequency:</strong> varies. You may receive
                up to several messages per week depending on your activity
                with us.
              </li>
              <li>
                <strong>Message and data rates:</strong> standard message
                and data rates may apply per your wireless carrier plan.
              </li>
              <li>
                <strong>Opt out:</strong> reply <code>STOP</code> to any
                message at any time to opt out. You will receive a final
                confirmation message and no further texts will be sent
                unless you re-enroll.
              </li>
              <li>
                <strong>Help:</strong> reply <code>HELP</code> for help, or
                contact{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> /{" "}
                <a href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}>
                  {BRAND.phoneFL}
                </a>
                .
              </li>
              <li>
                <strong>Supported carriers:</strong> AT&amp;T, T-Mobile,
                Verizon, Sprint, U.S. Cellular, and most other U.S. carriers.
                Carriers are not liable for delayed or undelivered messages.
              </li>
              <li>
                <strong>Privacy:</strong> mobile information is governed by
                our <Link href="/privacy">Privacy Policy</Link>. We do not
                share your mobile information with third parties or
                affiliates for marketing or promotional purposes.
              </li>
            </ul>

            <h2 id="user-responsibilities">8. Your Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>
                Provide accurate and complete information at booking and
                during clinical intake.
              </li>
              <li>
                Disclose all relevant medical history, medications, and
                allergies.
              </li>
              <li>
                Use the Site and services only for lawful purposes and in
                accordance with these Terms.
              </li>
              <li>
                Not attempt to disrupt the Site, reverse-engineer it, or
                interfere with other users&apos; access.
              </li>
            </ul>

            <h2 id="ip">9. Intellectual Property</h2>
            <p>
              All content on the Site — including the Skilled Visits name,
              logos, photography, design, copy, and code — is owned by or
              licensed to Skilled Visits and is protected by U.S. and
              international intellectual-property laws. You may not copy,
              reproduce, modify, or distribute any part of the Site without
              our prior written permission, except as expressly permitted by
              applicable law.
            </p>

            <h2 id="warranties">10. Disclaimers and Limitation of Liability</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; without warranties of any kind,
              express or implied. To the fullest extent permitted by law, we
              disclaim all warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
            <p>
              To the fullest extent permitted by law, in no event will
              Skilled Visits be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, arising from your use of the Site or services.
              Nothing in these Terms limits liability for fraud, gross
              negligence, willful misconduct, or any other liability that
              cannot lawfully be limited.
            </p>

            <h2 id="indemnification">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold Skilled Visits, its officers,
              directors, employees, and clinicians harmless from any claims,
              losses, or expenses (including reasonable attorneys&apos; fees)
              arising from your breach of these Terms or your misuse of the
              Site or services.
            </p>

            <h2 id="law">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Florida,
              without regard to its conflict-of-laws principles. You and
              Skilled Visits agree to first attempt to resolve any dispute
              informally by contacting us. If that fails, any unresolved
              dispute will be brought exclusively in the state or federal
              courts located in Miami-Dade County, Florida, and you consent
              to personal jurisdiction in those courts.
            </p>

            <h2 id="changes">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We&apos;ll update
              the &ldquo;Last updated&rdquo; date above and, when changes
              are material, notify you through the Site or another
              reasonable channel. Your continued use of the Site or
              services after changes take effect constitutes acceptance of
              the updated Terms.
            </p>

            <h2 id="contact">14. Contact</h2>
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
              See our <Link href="/privacy">Privacy Policy</Link> for how we
              handle your information.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
