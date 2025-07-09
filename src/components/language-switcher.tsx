"use client";

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  const currentLang = language.toUpperCase();
  const otherLang = (language === 'vn' ? 'en' : 'vn').toUpperCase();

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className={cn("px-2 font-semibold", className)}
    >
      <span>{currentLang}</span>
      <span className="mx-1 font-normal text-muted-foreground">/</span>
      <span className="text-muted-foreground">{otherLang}</span>
    </Button>
  );
}
