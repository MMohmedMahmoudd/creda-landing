// Where the sign-in / registration app lives. Override per environment.
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL ?? "#";

const withRole = (role: "buyer" | "supplier") =>
  AUTH_URL === "#"
    ? "#"
    : `${AUTH_URL}${AUTH_URL.includes("?") ? "&" : "?"}role=${role}`;

export const links = {
  login: AUTH_URL,
  buyer: withRole("buyer"),
  supplier: withRole("supplier"),
};
