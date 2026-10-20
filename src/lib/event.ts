/**
 * The event currently running at /scan.
 *
 * The /scan page itself never changes — guests scan the same QR code at every
 * event. To switch events, edit the values below: the name, the date, the
 * venue, and above all `intakeUrl`, which is the CRM link where guests enter
 * their details and sign their consent forms. Each event gets its own link.
 */

export type EventVenue = {
  name: string;
  address: string;
  /** Second address line — city, state, zip. Leave blank if not published. */
  locality?: string;
  mapUrl: string;
};

export type EventHost = {
  name: string;
  handle: string;
  instagram: string;
};

export type CurrentEvent = {
  name: string;
  /**
   * The name broken into display lines, mirroring how the flyer stacks it.
   * Omit to print the name on one line.
   */
  titleLines?: string[];
  /** Short line under the title, e.g. "A Halloween girls night". */
  tagline: string;
  /** Optional aside printed next to the tagline. */
  note?: string;
  /** Short paragraph describing the night. */
  description: string;
  host: EventHost;
  /** Display date, e.g. "Friday, October 23". */
  date: string;
  /** Display time range, e.g. "6:00 - 9:00 PM". */
  time: string;
  venue: EventVenue;
  /** CRM intake + consent link. Changes with every event. */
  intakeUrl: string;
  /**
   * Poster palette, taken from the event's own flyer so the page reads as
   * part of the invite rather than a generic landing page.
   */
  theme: {
    /** Poster background. */
    ink: string;
    /** Type and rules printed on it. */
    paper: string;
    /** Decorative motif drawn in the poster corners. */
    motif: "halloween" | "none";
  };
};

export const CURRENT_EVENT: CurrentEvent = {
  name: "Ghouls Night Out",
  titleLines: ["Ghouls", "Night Out"],
  tagline: "A Halloween girls night",
  note: "Boyfriends welcome",
  description:
    "A rooftop Halloween night hosted by Sky Socials Studio. Our licensed nurses are on site for the evening, so you can top up on hydration and vitamins between drinks, photos, and costumes.",
  host: {
    name: "Sky Socials Studio",
    handle: "@skysocialstudioo",
    instagram: "https://instagram.com/skysocialstudioo",
  },
  date: "Friday, October 23",
  time: "6:00 – 9:00 PM",
  venue: {
    name: "Twisted Tonic Rooftop",
    address: "723 N Lincoln Ln",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Twisted+Tonic+Rooftop+723+N+Lincoln+Ln",
  },
  intakeUrl:
    "https://skilledvisits.xn--lumcrm-5ua.com/event/LAmWX3BU7dqK3D2DBYh0bJNosXtz0BI6ur9ZWS_A220",
  theme: {
    ink: "#6b1120",
    paper: "#f7f1e6",
    motif: "halloween",
  },
};
