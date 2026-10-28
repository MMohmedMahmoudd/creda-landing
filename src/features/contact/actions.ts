"use server";

import { postContact, type ContactPayload } from "./api";

export async function submitContact(
  payload: ContactPayload,
): Promise<{ ok: boolean }> {
  return { ok: await postContact(payload) };
}
