import { Authenticator } from '@/components/authenticator';
import { Faq } from '@/components/faq';
import { MaisonLogo } from '@/components/maison-logo';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarInset } from '@/components/ui/sidebar';

export default function V3Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar collapsible="none" className="border-r hidden md:flex">
          <SidebarHeader>
            <div className="flex flex-col items-center p-4 space-y-4 text-center">
                <MaisonLogo className="h-20 w-20" />
                <h1 className="font-headline text-xl font-bold tracking-tighter text-primary">
                    MAISON RETAIL
                </h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <div className="space-y-4 text-sm text-center">
                <p className="font-semibold text-foreground">Xác minh kênh mua hàng chính hãng</p>
                <p className="text-muted-foreground">
                    Tránh rủi ro mua nhầm hàng giả, hãy kiểm tra tính chính hãng của cửa hàng hoặc kênh mua sắm trước khi đặt hàng.
                </p>
                <p className="text-muted-foreground">
                    MAISON cam kết mang đến trải nghiệm mua sắm an toàn và minh bạch cho người tiêu dùng.
                </p>
            </div>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Mobile header */}
              <header className="md:hidden flex flex-col items-center space-y-4 text-center mb-8">
                <MaisonLogo className="h-16 w-16" />
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                    MAISON RETAIL
                </h1>
              </header>
              <div className="w-full max-w-2xl space-y-8">
                <Authenticator />
                <Faq />
              </div>
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
