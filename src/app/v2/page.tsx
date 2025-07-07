import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { MaisonLogo } from '@/components/maison-logo';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';

export default function V2Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <SiteHeader />
      <div className="flex flex-1 w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <main className="w-full max-w-2xl space-y-8">
            <header className="flex flex-col items-center space-y-4 text-center">
              <MaisonLogo className="h-12 w-40" />
              <h2 className="font-headline text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Xác minh kênh mua hàng chính hãng
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng.
              </p>
              <p className="max-w-xl text-muted-foreground">
                MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
              </p>
            </header>

            <Authenticator />
            <Faq />
          </main>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="https://placehold.co/1000x1200.png"
            alt="Fashion models"
            fill
            className="object-cover"
            data-ai-hint="fashion models"
          />
           <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
