"use client";

import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      {/* Hero Banner */}
      <div className="relative w-full">
         <Image
            src="https://images.unsplash.com/photo-1485518882345-15568b007407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxGYXNoaW9ufGVufDB8fHx8MTc1MTk0NzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion model posing"
            fill
            className="object-cover"
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
                <div className="max-w-2xl text-xs sm:text-base text-white/90 space-y-4">
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

      {/* Main Content */}
      <div className="flex flex-1 w-full flex-col items-center justify-start bg-background px-4 py-8 sm:px-6 md:py-12">
        <main className="w-full max-w-4xl space-y-8">
          <Authenticator />
          <Faq />
        </main>
      </div>
      
      <SiteFooter />
    </div>
  );
}
