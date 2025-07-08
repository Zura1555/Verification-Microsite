"use client";

import { useState } from "react";
import {
  Globe,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  ShoppingCart,
  LocateIcon,
  Users,
  Headset,
  ChevronLeft,
} from "lucide-react";
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

const channelData = {
  Website: {
    name: 'Website',
    Icon: Globe,
    channels: [
      { name: 'MLB Việt Nam', Icon: Globe, href: 'https://www.maisononline.vn/collections/mlb' },
      { name: 'Maison Online', Icon: Globe, href: 'https://www.maisononline.vn/' },
      { name: 'Maison RMI', Icon: Globe, href: 'https://maisonrmi.com/' },
      { name: 'Store Locator', Icon: LocateIcon, href: '#' },
    ]
  },
  Ecommerce: {
    name: 'Ecommerce',
    Icon: ShoppingCart,
    channels: [
      { name: 'Shopee', Icon: ShoppingCart, href: '#' },
      { name: 'Tiktok Shop', Icon: TiktokIcon, href: '#' },
      { name: 'Lazada', Icon: ShoppingCart, href: '#' },
    ]
  },
  'Social Media': {
    name: 'Social Media',
    Icon: Users,
    channels: [
      { name: 'Facebook', Icon: Facebook, href: 'https://www.facebook.com/mlb.kr.vn' },
      { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/mlb.kr.vn/' },
      { name: 'TikTok', Icon: TiktokIcon, href: '#' },
      { name: 'Youtube', Icon: Youtube, href: '#' },
    ]
  },
  Support: {
    name: 'Support',
    Icon: Headset,
    channels: [
      { name: 'Zalo OA', Icon: MessageCircle, href: 'https://zalo.me/1922591942732168937' },
    ]
  }
};

const ChannelLink = ({ name, Icon, href }: { name: string; Icon: React.ElementType; href: string; }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-3 rounded-md border bg-card p-3 text-sm text-foreground shadow-sm transition-colors hover:bg-primary/5 hover:text-primary"
  >
    <Icon className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
    <span className="flex-1 truncate">{name}</span>
  </a>
);

const CategoryBlock = ({ Icon, name, onClick }: { Icon: React.ElementType; name: string; onClick: () => void; }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-4 text-center text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5"
  >
    <Icon className="h-7 w-7 text-primary" />
    <span className="truncate">{name}</span>
  </button>
);

const BackButton = ({ onClick }: { onClick: () => void; }) => (
  <button
    onClick={onClick}
    className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
  >
    <ChevronLeft className="h-4 w-4 mr-1" />
    Back to Categories
  </button>
);

export function OfficialChannels({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  const handleCategorySelect = (categoryName: string) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(categoryName);
      setIsFading(false);
    }, 200);
  };

  const handleBack = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(null);
      setIsFading(false);
    }, 200);
  };

  const selectedData = activeCategory ? channelData[activeCategory as keyof typeof channelData] : null;

  return (
    <div className={cn("w-full relative min-h-[180px]", className)}>
      <div
        className={cn(
          "transition-opacity duration-200 ease-in-out",
          activeCategory && !isFading ? "opacity-0 invisible h-0" : "opacity-100",
          isFading && "opacity-0"
        )}
      >
        <div className="grid grid-cols-2 gap-3">
          {Object.values(channelData).map((category) => (
            <CategoryBlock
              key={category.name}
              Icon={category.Icon}
              name={category.name}
              onClick={() => handleCategorySelect(category.name)}
            />
          ))}
        </div>
      </div>

      <div
        className={cn(
          "transition-opacity duration-200 ease-in-out absolute inset-0",
          !activeCategory || isFading ? "opacity-0 invisible" : "opacity-100"
        )}
      >
        {selectedData && (
          <div>
            <BackButton onClick={handleBack} />
            <div className="grid grid-cols-1 gap-2 mt-2">
              {selectedData.channels.map((channel) => (
                <ChannelLink key={channel.name} {...channel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
