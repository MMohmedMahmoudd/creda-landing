/**
 * External app URLs, set in `.env` (override locally in `.env.local`).
 * NEXT_PUBLIC_* values are inlined at build time, so each one is read by its full name.
 */
function required(name: string, value: string | undefined): string {
  if (!value)
    throw new Error(`Missing environment variable ${name}. Add it to .env`);
  return value;
}

const BUYER_URL = required(
  "NEXT_PUBLIC_BUYER_URL",
  process.env.NEXT_PUBLIC_BUYER_URL,
);
const SUPPLIER_REGISTER_URL = required(
  "NEXT_PUBLIC_SUPPLIER_REGISTER_URL",
  process.env.NEXT_PUBLIC_SUPPLIER_REGISTER_URL,
);

export const links = {
  /** Header "Log in" and the contact page sign-in link. */
  login: BUYER_URL,
  /** Every "Start buying" button. */
  buyer: BUYER_URL,
  /** Every "Register as a supplier" button. */
  supplier: SUPPLIER_REGISTER_URL,
};

/** Spread onto anchors that point at the external apps so they open in a new tab. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
