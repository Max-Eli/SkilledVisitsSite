export type ContactFormState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

export const initialContactState: ContactFormState = { status: "idle" };
