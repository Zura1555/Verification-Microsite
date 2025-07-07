
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Authenticator } from '@/components/authenticator';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/utils';

const backgroundImages = [
  { src: 'https://placehold.co/1920x1080.png', hint: 'fashion model' },
  { src: 'https://placehold.co/1920x1081.png', hint: 'clothing rack' },
  { src: 'https://placehold.co/1920x1082.png', hint: 'designer runway' },
];

export default function V4Page() {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // This part runs only on the client, after hydration
    setBgImage(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);
  }, []);

  if (!isClient) {
    // Render nothing or a placeholder on the server to avoid mismatch
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col text-white">
      <Image
        src={bgImage.src}
        alt="Background"
        fill
        className="object-cover -z-10"
        data-ai-hint={bgImage.hint}
      />
       <div className="absolute inset-0 bg-black/30 -z-10" />
      <SiteHeader className="bg-transparent border-b border-white/20 [&_span]:text-white" />
      <main className="flex flex-1 items-center justify-center p-4">
        <div
          className={cn(
            'w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-lg',
            'space-y-8'
          )}
        >
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Xác minh kênh mua hàng chính hãng
            </h2>
            <p className="max-w-2xl mx-auto text-white/80">
              Tránh rủi ro mua nhầm hàng giả và an tâm mua sắm. MAISON cam kết mang đến trải nghiệm an toàn và minh bạch bằng cách giúp bạn kiểm tra tính chính hãng của cửa hàng trước khi đặt hàng.
            </p>
          </div>
          <Authenticator />
        </div>
      </main>
      <SiteFooter className="bg-transparent border-t border-white/20" />
    </div>
  );
}
