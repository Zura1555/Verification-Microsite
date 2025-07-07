
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PageV3 } from '@/components/page-v3';

export default function V3Page() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <SiteHeader />
      <PageV3 />
      <SiteFooter />
    </div>
  );
}
