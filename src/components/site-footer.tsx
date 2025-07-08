import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerNav = {
  siteMap: {
    title: 'SƠ ĐỒ TRANG',
    links: [
      { text: 'Trang Chủ', href: '/' },
      { text: 'Giới Thiệu', href: '#' },
      { text: 'Các Thương Hiệu', href: '#' },
      { text: 'Mua Sắm', href: '#' },
      { text: 'Tin Tức', href: '#' },
      { text: 'Quan Hệ Đối Tác', href: '#' },
    ],
  },
  help: {
    title: 'TRỢ GIÚP',
    links: [
      { text: 'Tuyển Dụng', href: '#' },
      { text: 'Liên Hệ', href: '#' },
      { text: 'Câu Hỏi Thường Gặp', href: '#' },
      { text: 'Pháp Lý', href: '#' },
      { text: 'Chính Sách Bảo Mật', href: '#' },
      { text: 'Hệ thống cửa hàng', href: '#' },
    ],
  },
};

const FooterLinkColumn = ({ title, links }: { title: string; links: { text: string; href: string }[] }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.text}>
          <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function SiteFooter({ className }: { className?: string }) {
    return (
        <footer className={cn("w-full bg-black text-white", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8">
                    <div className="lg:col-span-7">
                        <div className="relative h-12 w-48">
                             <Image
                                src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2022/07/logo.png?fit=1201%2C629&ssl=1"
                                alt="Maison Logo"
                                fill
                                className="object-contain"
                                data-ai-hint="logo white"
                            />
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <FooterLinkColumn title={footerNav.siteMap.title} links={footerNav.siteMap.links} />
                            <FooterLinkColumn title={footerNav.help.title} links={footerNav.help.links} />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">GIỮ KẾT NỐI</h3>
                        <p className="mt-6 text-sm text-gray-300">
                            Đăng kí email từ Maison để cập nhật những thông tin mới nhất từ chúng tôi.
                        </p>
                        <form className="mt-4 flex flex-col sm:flex-row items-center gap-2">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="flex-grow bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0"
                                placeholder="yourmail@gmail.com"
                            />
                            <Button
                                type="submit"
                                className="w-full sm:w-auto shrink-0 bg-white text-gray-900 hover:bg-gray-200"
                            >
                                Submit
                            </Button>
                        </form>
                        <p className="mt-4 text-xs text-gray-400">
                            Bạn đang đăng ký để nhận email từ MAISON. Bạn có thể hủy đăng ký bất cứ lúc nào.
                        </p>
                    </div>
                </div>
            </div>
             <div className="border-t border-gray-700">
                <div className="mx-auto max-w-7xl py-6 px-4 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MAISON RETAIL. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
