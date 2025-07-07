import { Authenticator } from '@/components/authenticator';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import { Faq } from '@/components/faq';

export default function V3Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <SiteHeader />
      <main className="w-full max-w-5xl mx-auto flex-1 px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        <div className="relative w-full overflow-hidden rounded-lg border bg-card/80 p-8 shadow-lg backdrop-blur-sm">
          {/* Background Logo */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2023/04/MicrosoftTeams-image.png?fit=2560%2C1062&ssl=1"
              alt="Maison Logo Background"
              width={600}
              height={600}
              className="opacity-5 object-contain"
            />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 items-center md:grid-cols-5 md:gap-12">
            {/* Left Column: Info */}
            <div className="flex-col justify-center space-y-6 pb-8 text-left md:col-span-2 md:pb-0">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Xác minh kênh mua hàng chính hãng
              </h2>
              <p className="leading-relaxed text-foreground/80">
                Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng.
              </p>
              <p className="leading-relaxed text-foreground/80">
                MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
              </p>
            </div>

            {/* Right Column: Authenticator */}
            <div className="md:col-span-3">
              <Authenticator />
            </div>
          </div>
        </div>
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
