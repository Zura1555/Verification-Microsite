"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export function HeroBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkisqc0hPb_SjRhX6_0bo0OZaAb8azJ2yLjqti3-GQkAjW-Fa1jNtBYfx&s"
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
