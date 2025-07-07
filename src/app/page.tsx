import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { MaisonLogo } from '@/components/maison-logo';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background px-4 py-8 sm:px-6 md:justify-center md:py-12">
      <main className="w-full max-w-2xl space-y-8">
        <header className="flex flex-col items-center space-y-4 text-center">
          <MaisonLogo className="h-16 w-16" />
          <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
            MAISON RETAIL
          </h1>
          <h2 className="font-headline text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Xác minh kênh mua hàng chính hãng
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng. MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
          </p>
        </header>

        <Authenticator />

        <Faq />
      </main>
    </div>
  );
}
