"use client";

import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  type Locale,
} from "@/shared/i18n";

/**
 * Stores the chosen language in a cookie and reloads. The URL never changes; the proxy
 * picks the locale from the cookie. A full reload also drops any router-cache entries
 * that were prefetched in the previous language.
 */
export default function LanguageSwitcher({
  target,
  label,
  ariaLabel,
  onSwitch,
}: {
  target: Locale;
  label: string;
  ariaLabel: string;
  onSwitch?: () => void;
}) {
  const switchLanguage = () => {
    onSwitch?.();
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      lang={target}
      aria-label={ariaLabel}
      className="flex h-11 cursor-pointer items-center gap-2 rounded-[10px] border border-line-strong bg-white px-3.5 font-[inherit] text-[15px] font-bold whitespace-nowrap text-ink hover:text-azure"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </svg>
      {label}
    </button>
  );
}
