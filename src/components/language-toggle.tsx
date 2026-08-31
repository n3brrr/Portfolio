"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useI18n();

  // Show the *other* language code on hover? For clarity we show current locale
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "size-full rounded-full cursor-pointer flex items-center justify-center gap-0 p-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
        className
      )}
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      title={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <span className="flex items-center justify-center font-bold tracking-widest text-[11px] leading-none select-none">
        {locale.toUpperCase()}
      </span>
    </Button>
  );
}

// Alternative compact variant that only shows EN/ES text - used if needed
export function LanguageToggleCompact({ className }: { className?: string }) {
  const { locale, toggleLocale } = useI18n();
  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "size-full flex items-center justify-center text-xs font-bold tracking-widest cursor-pointer select-none",
        className
      )}
      aria-label={locale === "en" ? "ES" : "EN"}
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
