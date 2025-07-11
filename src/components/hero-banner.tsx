"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export function HeroBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[4/3] sm:aspect-[32/11]">
        <Image
          src="https://ik.imagekit.io/zmblm08qi/Image%20(3).jfif?updatedAt=1752113883397"
          alt="Man in stylish streetwear"
          fill
          className="object-cover object-center"
          data-ai-hint="fashion streetwear"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      
      {/* Static text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 pt-8 pb-12 sm:pb-24 pointer-events-none">
        <header className="flex flex-col items-center">
          <div className="relative h-20 w-48 sm:h-36 sm:w-[576px]">
            <Image
              src="https://ik.imagekit.io/zmblm08qi/MAISON%20RMI_Logo_W%20(1).png?updatedAt=1752115521710"
              alt="Maison Logo"
              fill
              className="object-contain"
              data-ai-hint="logo white"
              sizes="(max-width: 640px) 256px, 576px"
              quality={90}
            />
          </div>
          <h2 className="font-headline text-lg font-semibold tracking-tight sm:text-3xl mt-1 sm:mt-2">
            {t('hero_title')}
          </h2>
          <div className="max-w-xs sm:max-w-md text-[11px] leading-snug sm:text-base text-white/90 space-y-2 sm:space-y-4 mt-4 sm:mt-6">
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
