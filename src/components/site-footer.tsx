import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const footerData = {
  info: {
    title: 'THÔNG TIN',
    links: [
      { text: 'Giới thiệu Maison', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Thông tin thương hiệu', href: '#' },
      { text: 'Hệ thống cửa hàng', href: '#' },
      { text: 'Tuyển dụng', href: '#' },
      { text: 'Thông tin liên hệ', href: '#' },
    ],
  },
  help: {
    title: 'TRỢ GIÚP',
    links: [
      { text: 'Phương thức thanh toán', href: '#' },
      { text: 'Chính sách khách hàng thân thiết', href: '#' },
      { text: 'Hướng dẫn chi tiết sử dụng Loyalty Program', href: '#' },
      { text: 'Chính sách giao hàng', href: '#' },
      { text: 'Chính sách mua hàng', href: '#' },
      { text: 'Chính sách đổi trả', href: '#' },
      { text: 'Chính sách bảo hành', href: '#' },
      { text: 'Chính sách bảo mật', href: '#' },
    ],
  },
  payment: {
    title: 'THANH TOÁN',
    links: [
      { text: 'Visa / Mastercard / JCB', href: '#' },
      { text: 'ATM / Internet Banking', href: '#' },
      { text: 'Quét mã QR', href: '#' },
      { text: 'Ví điện tử', href: '#' },
      { text: 'Mua trước trả sau', href: '#' },
      { text: 'Thanh toán khi nhận hàng (COD)', href: '#' },
    ],
  },
  shipping: {
    title: 'GIAO HÀNG',
    links: [
      { text: 'Maison NOW', href: '#' },
      { text: 'Giao hàng tiêu chuẩn', href: '#' },
    ],
  },
};

const FooterColumn = ({ title, links }: { title: string; links: { text: string; href:string }[] }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
    <ul className="mt-4 space-y-3">
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
        <footer className={cn("w-full bg-gray-900 text-white", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
                    <FooterColumn title={footerData.info.title} links={footerData.info.links} />
                    <FooterColumn title={footerData.help.title} links={footerData.help.links} />
                    <FooterColumn title={footerData.payment.title} links={footerData.payment.links} />
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">{footerData.shipping.title}</h3>
                        <ul className="mt-4 space-y-3">
                            {footerData.shipping.links.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                           <Link href="http://online.gov.vn/Home/WebDetails/98159" target="_blank" rel="noopener noreferrer">
                             <Image 
                                src="http://online.gov.vn/Content/EndUser/LogoSaleNoti/logoSaleNoti.png" 
                                alt="Đã thông báo Bộ Công Thương" 
                                width={150} 
                                height={57}
                             />
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
             <div className="border-t border-gray-700">
                <div className="mx-auto max-w-7xl py-6 px-4 text-center text-sm text-gray-400 md:px-6">
                    <p>&copy; {new Date().getFullYear()} MAISON RETAIL. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}