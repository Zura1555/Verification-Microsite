"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bannerImages = [
  {
    src: "https://ik.imagekit.io/zmblm08qi/image%20(1).jfif?updatedAt=1752113674787",
    alt: "Fashion model posing",
    hint: "fashion model",
    position: "object-center"
  },
  {
    src: "https://ik.imagekit.io/zmblm08qi/image%20(2).jfif?updatedAt=1752113746003",
    alt: "Fashion retail store interior",
    hint: "fashion retail",
    position: "object-top"
  },
  {
    src: "https://ik.imagekit.io/zmblm08qi/Image%20(1).jfif?updatedAt=1752113883435",
    alt: "Woman in a colorful dress",
    hint: "fashion colorful",
    position: "object-top"
  },
  {
    src: "https://ik.imagekit.io/zmblm08qi/Image%20(3).jfif?updatedAt=1752113883397",
    alt: "Man in stylish streetwear",
    hint: "fashion streetwear",
    position: "object-center"
  }
];

export function HeroBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {bannerImages.map((image, index) => (
            <CarouselItem key={index} className="relative w-full aspect-[16/7]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${image.position}`}
                data-ai-hint={image.hint}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Static text overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 py-20 sm:py-24 pointer-events-none">
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30" />
      </Carousel>
    </div>
  );
}
