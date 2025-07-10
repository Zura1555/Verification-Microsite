"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export function HeroBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <Image
        src="data:image/jpeg;base64,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"
        alt="Fashion model posing"
        fill
        className="object-cover object-center"
        data-ai-hint="fashion"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 py-20 sm:py-24">
        <header className="flex flex-col items-center space-y-4">
          <div className="relative h-10 w-40 sm:h-12 sm:w-48">
            <Image
              src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2022/07/logo.png?fit=1201%2C629&ssl=1"
              alt="Maison Logo"
              fill
              className="object-contain"
              data-ai-hint="logo white"
            />
          </div>
          <h2 className="font-headline text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('hero_title')}
          </h2>
          <div className="max-w-[27.72rem] sm:max-w-[32.34rem] text-xs sm:text-base text-white/90 space-y-4">
            <p>
              {t('hero_desc1')}
            </p>
            <p>
              {t('hero_desc2')}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
