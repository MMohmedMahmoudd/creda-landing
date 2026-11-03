import "server-only";

export type ContactSubject = { id: number; title: { ar: string; en: string } };

export type ContactPayload = {
  type: "buyer" | "supplier" | "other";
  name: string;
  entity_name: string;
  mobile: string;
  email: string;
  contact_subject_id: string;
  message: string;
};

function apiUrl(path: string): string {
  const base = process.env.CREDA_API_URL;
  if (!base)
    throw new Error("Missing environment variable CREDA_API_URL. Add it to .env");
  return `${base.replace(/\/$/, "")}${path}`;
}

export async function getContactSubjects(): Promise<ContactSubject[]> {
  try {
    const res = await fetch(apiUrl("/contact-subjects"), {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? (json.data as ContactSubject[]) : [];
  } catch {
    return [];
  }
}

export async function postContact(payload: ContactPayload): Promise<boolean> {
  try {
    const body = new FormData();
    for (const [k, v] of Object.entries(payload)) body.append(k, v);
    const res = await fetch(apiUrl("/contact-us"), {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });
    const json = await res.json();
    return res.ok && json.success === true;
  } catch {
    return false;
  }
}
