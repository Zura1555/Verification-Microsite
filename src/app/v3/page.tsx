import { Authenticator } from '@/components/authenticator';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';

export default function V3Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border bg-card/80 p-8 shadow-lg backdrop-blur-sm">
          {/* Background Logo */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src="https://mdm.maisonrmi.com/assets/858c71b3-5aff-4c3f-b485-a07a9953097c?key=system-small-cover"
              alt="Maison Logo Background"
              width={600}
              height={600}
              className="opacity-5 object-contain"
            />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 items-center md:grid-cols-5 md:gap-12">
            {/* Left Column: Info */}
            <div className="flex-col justify-center space-y-4 pb-8 text-left md:col-span-2 md:pb-0">
              <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Xác minh kênh mua hàng chính hãng
              </h2>
              <p className="text-muted-foreground">
                Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng. MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
              </p>
            </div>

            {/* Right Column: Authenticator */}
            <div className="md:col-span-3">
              <Authenticator />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
