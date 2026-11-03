"use client";

import { useState } from "react";
import Select, { type SelectOption } from "@/shared/components/Select";
import { submitContact } from "../actions";
import type { ContactContent } from "../content";

type Role = "buyer" | "supplier" | "other";
type Fields = {
  role: Role;
  name: string;
  company: string;
  phone: string;
  email: string;
  topic: string;
  msg: string;
};
type ErrorKey = keyof ContactContent["form"]["errors"];
type Errors = Partial<
  Record<"name" | "company" | "phone" | "email" | "topic" | "msg", ErrorKey>
>;

// Same rules as the buyer app's register form (auth.validator.ts): Saudi mobile only,
// entered without the +966 prefix, 9 digits starting with 5.
const SAUDI_MOBILE_REGEX = /^5\d{8}$/;
// Same pattern zod's `.email()` uses in the buyer app.
const EMAIL_REGEX =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

const empty = (role: Role): Fields => ({
  role,
  name: "",
  company: "",
  phone: "",
  email: "",
  topic: "",
  msg: "",
});

function validate(f: Fields): Errors {
  const e: Errors = {};
  const phone = f.phone.trim();
  const email = f.email.trim();
  if (!f.name.trim()) e.name = "name";
  if (!f.company.trim()) e.company = "company";
  if (phone.length !== 9) e.phone = "phoneExact9";
  else if (!SAUDI_MOBILE_REGEX.test(phone)) e.phone = "phoneStart5";
  if (!email) e.email = "emailRequired";
  else if (!EMAIL_REGEX.test(email)) e.email = "email";
  if (!f.topic) e.topic = "topic";
  if (!f.msg.trim()) e.msg = "msg";
  return e;
}

const labelCls = "mb-2 block text-[14.5px] font-bold text-ink";
const inputCls =
  "box-border h-12 w-full rounded-[9px] border border-line-strong bg-white px-3.5 font-[inherit] text-[15.5px] text-ink outline-none focus:border-azure focus:shadow-[0_0_0_4px_#d3e8fd]";
const errCls = "mt-1.5 text-[13px] font-semibold text-error";

export default function ContactForm({
  t,
  subjects,
}: {
  t: ContactContent;
  subjects: SelectOption[];
}) {
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [f, setF] = useState<Fields>(empty("buyer"));
  const [err, setErr] = useState<Errors>({});
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);
  const { form } = t;

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...f, [k]: v };
    setF(next);
    // Like the buyer register form (mode/reValidateMode "onBlur"): before the first submit,
    // errors only change when a field is left, not on every keystroke.
    setErr(tried ? validate(next) : err);
  };

  const validateOnBlur = (k: keyof Errors) => {
    const { [k]: fieldErr } = validate(f);
    setErr((prev) => {
      const next = { ...prev };
      if (fieldErr) next[k] = fieldErr;
      else delete next[k];
      return next;
    });
  };

  const submit = async () => {
    if (sending) return;
    const e = validate(f);
    if (Object.keys(e).length) {
      setErr(e);
      setTried(true);
      return;
    }
    setSending(true);
    setFailed(false);
    const { ok } = await submitContact({
      type: f.role,
      name: f.name.trim(),
      entity_name: f.company.trim(),
      mobile: f.phone.trim(),
      email: f.email.trim(),
      contact_subject_id: f.topic,
      message: f.msg.trim(),
    });
    setSending(false);
    if (!ok) return setFailed(true);
    setSent(true);
    window.scrollTo(0, 0);
  };

  const reset = () => {
    setSent(false);
    setFailed(false);
    setTried(false);
    setErr({});
    setF(empty(f.role));
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3.5 py-6">
        <div className="flex size-14 items-center justify-center rounded-full bg-[#ecfdf3]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#027A48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 className="m-0 text-[26px] font-extrabold text-ink">
          {t.sent.title}
        </h2>
        <p className="m-0 text-[16.5px] leading-[1.9] text-body">
          {t.sent.thanks.replace("{name}", f.name)}{" "}
          <bdi dir="ltr">{f.phone}</bdi>
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-1.5 h-[46px] cursor-pointer rounded-[10px] border border-line-strong bg-white px-[22px] font-[inherit] text-[15px] font-bold text-ink"
        >
          {t.sent.again}
        </button>
      </div>
    );
  }

  const roles: Role[] = ["buyer", "supplier", "other"];

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex flex-col gap-[22px]"
    >
      <div>
        <span className={labelCls}>{form.youAre}</span>
        <div className="flex gap-2.5">
          {roles.map((r) => {
            const on = f.role === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => set("role", r)}
                className={`h-11 flex-1 cursor-pointer rounded-[9px] border-[1.5px] font-[inherit] text-[15px] font-bold ${
                  on
                    ? "border-azure bg-tint text-brand"
                    : "border-line-strong bg-white text-body"
                }`}
              >
                {form.roles[r]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
        <label>
          <span className={labelCls}>{form.name}</span>
          <input
            className={inputCls}
            value={f.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={form.namePh}
          />
          {err.name && <div className={errCls}>{form.errors[err.name]}</div>}
        </label>
        <label>
          <span className={labelCls}>{form.company}</span>
          <input
            className={inputCls}
            value={f.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder={form.companyPh}
          />
          {err.company && (
            <div className={errCls}>{form.errors[err.company]}</div>
          )}
        </label>
        <label>
          <span className={labelCls}>{form.phone}</span>
          <div
            dir="ltr"
            className="flex h-12 items-center rounded-[9px] border border-line-strong bg-white px-3.5 focus-within:border-azure focus-within:shadow-[0_0_0_4px_#d3e8fd]"
          >
            <span className="mr-2 shrink-0 border-r border-line-strong pr-2.5 text-[15.5px] font-medium text-body">
              +966
            </span>
            <input
              className="h-full min-w-0 flex-1 border-0 bg-transparent font-[inherit] text-[15.5px] text-ink outline-none"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={9}
              value={f.phone}
              onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))}
              onBlur={() => validateOnBlur("phone")}
              placeholder={form.phonePh}
            />
          </div>
          {err.phone && <div className={errCls}>{form.errors[err.phone]}</div>}
        </label>
        <label>
          <span className={labelCls}>{form.email}</span>
          <input
            className={`${inputCls} text-start`}
            dir="ltr"
            type="text"
            inputMode="email"
            autoComplete="email"
            value={f.email}
            onKeyDown={(e) => e.key === " " && e.preventDefault()}
            onBlur={() => validateOnBlur("email")}
            onChange={(e) => set("email", e.target.value.replace(/\s/g, ""))}
            placeholder={form.emailPh}
          />
          {err.email && <div className={errCls}>{form.errors[err.email]}</div>}
        </label>
      </div>

      <label>
        <span className={labelCls}>{form.topic}</span>
        <Select
          className={inputCls}
          value={f.topic}
          options={subjects}
          placeholder={form.topicPh}
          onChange={(v) => set("topic", v)}
        />
        {err.topic && <div className={errCls}>{form.errors[err.topic]}</div>}
      </label>

      <label>
        <span className={labelCls}>{form.message}</span>
        <textarea
          className={`${inputCls} h-auto resize-y px-3.5 py-3 leading-[1.8]`}
          rows={5}
          value={f.msg}
          onChange={(e) => set("msg", e.target.value)}
          placeholder={form.messagePh}
        />
        {err.msg && <div className={errCls}>{form.errors[err.msg]}</div>}
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="h-[52px] cursor-pointer rounded-[10px] border-0 bg-brand px-[34px] font-[inherit] text-[16.5px] font-bold text-white transition-colors hover:bg-brand-hover disabled:cursor-wait disabled:opacity-60"
        >
          {form.submit}
        </button>
        {failed ? (
          <span className="text-sm font-semibold text-error">
            {form.submitError}
          </span>
        ) : (
          <span className="text-sm text-muted">{form.privacy}</span>
        )}
      </div>
    </form>
  );
}
