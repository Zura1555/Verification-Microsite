import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex flex-1 w-full flex-col items-center justify-start bg-background px-4 py-8 sm:px-6 md:py-12">
        <main className="w-full max-w-4xl space-y-8">
          <div className="relative w-full h-80 rounded-lg overflow-hidden border shadow-lg">
             <Image
                src="https://placehold.co/1200x400.png"
                alt="Header background"
                fill
                className="object-cover"
                data-ai-hint="store interior"
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
                  <header className="flex flex-col items-center space-y-6">
                    <div className="relative h-12 w-48">
                      <Image
                        src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2022/07/logo.png?fit=1201%2C629&ssl=1"
                        alt="Maison Logo"
                        fill
                        className="object-contain"
                        data-ai-hint="logo white"
                      />
                    </div>
                    <h2 className="font-headline text-3xl font-semibold tracking-tight sm:text-4xl">
                      Xác minh kênh mua hàng chính hãng
                    </h2>
                    <p className="max-w-2xl text-lg text-white/90">
                      Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng. MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
                    </p>
                  </header>
              </div>
          </div>

          <Authenticator />

          <Faq />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
