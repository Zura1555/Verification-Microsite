"use client";

import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroBanner } from '@/components/hero-banner';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <HeroBanner />

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
