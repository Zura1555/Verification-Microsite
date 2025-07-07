
import { Authenticator } from '@/components/authenticator';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MaisonLogo } from '@/components/maison-logo';
import { Separator } from '@/components/ui/separator';

export default function V4Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#F9F9F9]">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-lg space-y-8 text-center">
          <header className="flex flex-col items-center space-y-4">
            <MaisonLogo className="h-16 w-16" />
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
              MAISON RETAIL
            </h1>
            <h2 className="font-headline text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Xác minh kênh mua hàng chính hãng
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Tránh rủi ro mua nhầm hàng giả và an tâm mua sắm. MAISON cam kết mang đến trải nghiệm an toàn và minh bạch bằng cách giúp bạn kiểm tra tính chính hãng của cửa hàng trước khi đặt hàng.
            </p>
          </header>

          <Separator className="bg-border/40" />

          <Authenticator
            containerClassName="bg-transparent border-none shadow-none p-0"
            inputClassName="border-x-0 border-t-0 !rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            buttonVariant="outline"
            hideSearchIcon
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
