import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Cancellation & Rescheduling Policy",
  description:
    "Skilled Visits cancellation, rescheduling, deposit, and no-show policy for concierge mobile IV therapy and wellness appointments.",
  alternates: {
    canonical: "https://skilledvisits.com/cancellation",
  },
};

const EFFECTIVE = "June 6, 2026";
const LAST_UPDATED = "June 6, 2026";

export default function CancellationPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        title="Cancellation & Rescheduling Policy"
        accent="fair to you, fair to our nurses."
        description={`Effective ${EFFECTIVE} · Last updated ${LAST_UPDATED}.`}
      />

      <section className="mx-auto max-w-3xl px-5 pb-28 md:px-8">
        <Reveal>
          <div className="prose-sv">
            <h2 id="deposit">Appointment Deposit</h2>
            <p>
              A <strong>$50 booking deposit</strong> is required to reserve all
              appointments. The deposit is applied toward the total cost of your
              service.
            </p>

            <h2 id="cancellations">Cancellations</h2>

            <h3>More than 12 hours before appointment</h3>
            <ul>
              <li>
                Deposit may be refunded upon request or applied as a credit
                toward a future appointment.
              </li>
            </ul>

            <h3>Within 12 hours of appointment</h3>
            <ul>
              <li>Deposit is non-refundable.</li>
              <li>
                Deposit may be applied as a one-time credit toward a future
                appointment if rescheduled within 30 days.
              </li>
            </ul>

            <h3>After nurse dispatch / nurse en route</h3>
            <ul>
              <li>Deposit is forfeited.</li>
              <li>
                Additional travel fee may apply if the nurse has already
                traveled a significant distance.
              </li>
            </ul>

            <h2 id="no-show">No-Show Appointments</h2>
            <ul>
              <li>Deposit is forfeited.</li>
              <li>Future bookings may require full prepayment.</li>
            </ul>

            <h2 id="rescheduling">Rescheduling</h2>

            <h3>More than 12 hours notice</h3>
            <ul>
              <li>No fee.</li>
              <li>Deposit transfers to the new appointment date.</li>
            </ul>

            <h3>Less than 12 hours notice</h3>
            <ul>
              <li>
                One courtesy reschedule may be granted at Skilled Visits&apos;
                discretion.
              </li>
              <li>Deposit transfers to the new appointment.</li>
              <li>
                Additional last-minute reschedules may require a new deposit.
              </li>
            </ul>

            <h2 id="arrival-delays">Arrival Delays</h2>
            <p>Please be available at the confirmed appointment location.</p>
            <ul>
              <li>
                <strong>0–15 minutes late:</strong> No issue.
              </li>
              <li>
                <strong>15–30 minutes late:</strong> Appointment may be delayed
                based on nurse availability.
              </li>
              <li>
                <strong>More than 30 minutes late:</strong> Appointment may be
                considered a cancellation and deposit forfeited.
              </li>
            </ul>

            <h2 id="events-and-groups">Special Events & Group Bookings</h2>
            <p>
              For corporate events, weddings, yacht charters, and groups of 3 or
              more:
            </p>
            <ul>
              <li>
                <strong>50% deposit required.</strong>
              </li>
              <li>
                Deposit is non-refundable within 72 hours of the event.
              </li>
            </ul>

            <h2 id="commitment">Skilled Visits Commitment</h2>
            <p>
              We understand that plans change. Our goal is to be fair while
              respecting the time of our nurses and maintaining our ability to
              provide rapid, concierge-level healthcare services throughout
              South Florida.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
