import { ButtonLink } from "./ui";

export function SignupCta({
  title,
  text,
  href,
  label,
  tagline,
  balance,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  tagline: string;
  balance?: boolean;
}) {
  return (
    <section id="signup" className="scroll-mt-20 bg-soft">
      <div className="mx-auto box-content flex max-w-[820px] flex-col items-center gap-[18px] px-6 py-[104px] text-center">
        <h2
          className={`m-0 text-[clamp(30px,4vw,46px)] leading-[1.4] font-extrabold text-ink ${
            balance ? "text-balance" : ""
          }`}
        >
          {title}
        </h2>
        <p className="m-0 text-[18.5px] leading-[1.9] text-body">{text}</p>
        <ButtonLink href={href} className="mt-2.5 h-14 px-9 text-[17.5px]">
          {label}
        </ButtonLink>
        <div className="mt-1.5 text-[14.5px] font-semibold text-muted">
          {tagline}
        </div>
      </div>
    </section>
  );
}
