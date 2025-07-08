import { Globe, Facebook, Instagram, MessageCircle, Youtube, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.75-1.91-1.44-1.15-2.5-2.77-2.7-4.51-.01-1.11.24-2.21.72-3.21.81-1.5 2.1-2.5 3.57-2.82.01-.15.02-.3.02-.45v-5.4c-.71.19-1.42.38-2.12.57-.03.02-.07.03-.1.04-.23.08-.47.14-.7.21-1.33.4-2.62.95-3.83 1.71v-4.04c1.39-1.11 3.01-1.92 4.77-2.32.9-.21 1.81-.34 2.71-.41.11.01.21.01.32.02z" />
  </svg>
);

const officialChannelsList = [
  { name: 'Website', Icon: Globe, href: 'https://www.maisononline.vn/collections/mlb' },
  { name: 'Facebook', Icon: Facebook, href: 'https://www.facebook.com/mlb.kr.vn' },
  { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/mlb.kr.vn/' },
  { name: 'Zalo', Icon: MessageCircle, href: 'https://zalo.me/1922591942732168937' },
  { name: 'TikTok', Icon: TiktokIcon, href: '#' },
  { name: 'Youtube', Icon: Youtube, href: '#' },
  { name: 'Shopee', Icon: ShoppingCart, href: '#' },
  { name: 'Lazada', Icon: ShoppingCart, href: '#' },
];

export function OfficialChannels({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-3", className)}>
      {officialChannelsList.map(({ name, Icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          className="group flex h-14 w-14 items-center justify-center rounded-lg border bg-card text-foreground shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-primary/5"
        >
          <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary" />
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  );
}
