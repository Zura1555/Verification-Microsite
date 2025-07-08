"use client";

import { useState, useEffect } from "react";
import ReactConfetti from 'react-confetti';
import { Input } from "@/components/ui/input";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Search, AlertTriangle, ExternalLink, ShieldAlert, X, CheckCircle2, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogoPlaceholder } from "./brand-logo-placeholder";
import { OfficialChannels } from "./official-channels";

type VerificationStatus = "idle" | "loading" | "official" | "unofficial" | "invalid" | "suspicious" | "brand-info";

const exampleLinks = [
  { url: 'www.maisononline.vn', status: 'official' as const },
  { url: 'a-reseller-marketplace.com', status: 'suspicious' as const },
  { url: 'maison-outlet.store', status: 'unofficial' as const },
];

const ExampleTag = ({ url, status, onClick }: { url: string; status: 'official' | 'suspicious' | 'unofficial'; onClick: () => void }) => {
  const statusConfig = {
    official: {
      Icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    suspicious: {
      Icon: AlertTriangle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    unofficial: {
      Icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
  };

  const { Icon, color, bgColor, borderColor } = statusConfig[status];

  return (
    <button
      onClick={onClick}
      className={cn(
        "group text-left p-2 flex items-center gap-2.5 rounded-md border shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-in-out",
        bgColor,
        borderColor
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0", color)} />
      <span className="text-sm text-foreground truncate">{url}</span>
    </button>
  );
};


export function Authenticator({
  containerClassName,
  inputClassName,
  buttonVariant = 'default',
  hideSearchIcon = false,
}: {
  containerClassName?: string;
  inputClassName?: string;
  buttonVariant?: ButtonProps["variant"];
  hideSearchIcon?: boolean;
}) {
  const [input, setInput] = useState("");
  const [verifiedUrl, setVerifiedUrl] = useState("");
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);


  const handleVerify = (urlToVerify: string) => {
    const value = urlToVerify.trim();
    if (!value) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    setInput(value);
    setVerifiedUrl(value);

    setTimeout(() => {
        const officialDomains = ["maisononline.vn"];
        const officialHandles = ["mlb.kr.vn"];
        const brandHandles = ["mlb"];

        let cleanInput = value.toLowerCase().trim();
        
        cleanInput = cleanInput.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '').replace(/^@/, '');
        
        if (brandHandles.includes(cleanInput)) {
          setStatus("brand-info");
          return;
        }

        const domainOrHandle = cleanInput.split('/')[0];

        if (officialDomains.includes(domainOrHandle) || officialHandles.includes(cleanInput)) {
            setStatus("official");
            setShowConfetti(true);
            return;
        }

        if (domainOrHandle === 'a-reseller-marketplace.com' || (domainOrHandle.includes('maisononline.vn') && !officialDomains.includes(domainOrHandle)) || cleanInput.includes('mlbvietnamofficial')) {
            setStatus("suspicious");
            return;
        }
        
        if (domainOrHandle === 'maison-outlet.store') {
            setStatus("unofficial");
            return;
        }

        setStatus("unofficial");
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleVerify(input);
  };
  
  const handleExampleClick = (url: string) => {
    setInput(url);
    handleVerify(url);
  }

  const renderResult = () => {
    switch (status) {
      case "official":
        return (
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Chính hãng</AlertTitle>
            <AlertDescription>
              <p className="mb-2">Trang web này thuộc hệ thống phân phối chính thức của MAISON.</p>
              <p className="mb-4">Bạn có thể yên tâm mua sắm và trải nghiệm dịch vụ chính hãng.</p>
              <Button size="sm">
                Visit Official Store
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </AlertDescription>
          </Alert>
        );
      case "brand-info":
        return (
          <Alert>
            <AlertTitle className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Kênh chính thức của MLB
            </AlertTitle>
            <AlertDescription className="pt-4 text-center space-y-4">
              <BrandLogoPlaceholder />
              <OfficialChannels />
            </AlertDescription>
          </Alert>
        );
      case "suspicious":
        return (
          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Không thuộc hệ thống MAISON</AlertTitle>
            <AlertDescription>
              <p className="mb-4">Chúng tôi không tìm thấy kênh này trong danh sách các cửa hàng chính hãng thuộc hệ thống phân phối của MAISON.</p>
               <Button variant="outline" size="sm">
                  Báo cáo kênh nghi ngờ
                  <ShieldAlert className="ml-2 h-4 w-4" />
                </Button>
            </AlertDescription>
          </Alert>
        );
      case "unofficial":
        return (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Có thể giả mạo</AlertTitle>
            <AlertDescription>
                <p className="mb-2">Trang web này không nằm trong hệ thống phân phối chính thức của MAISON.</p>
                <p>Vui lòng không cung cấp thông tin cá nhân và tránh mua hàng để đảm bảo an toàn.</p>
            </AlertDescription>
          </Alert>
        );
      case "invalid":
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Đầu vào không hợp lệ</AlertTitle>
            <AlertDescription>
              Vui lòng nhập một địa chỉ website hoặc trang mạng xã hội để kiểm tra.
            </AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("w-full space-y-6 rounded-lg border bg-card p-6 shadow-sm", containerClassName)}>
      {isMounted && showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} onConfettiComplete={() => setShowConfetti(false)} className="!fixed z-50" />}

      <div className="space-y-3">
        <p className="text-center text-sm text-muted-foreground">Hoặc thử với ví dụ:</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {exampleLinks.map(ex => (
            <ExampleTag key={ex.url} url={ex.url} status={ex.status} onClick={() => handleExampleClick(ex.url)} />
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <div className="relative flex-grow">
          {!hideSearchIcon && <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />}
          <Input
            type="text"
            placeholder="nhập website, facebook, tiktok, instagram..."
            className={cn(
              "h-12 text-base focus-visible:ring-[1.5px] focus-visible:ring-offset-2 focus-visible:ring-ring",
              !hideSearchIcon && "pl-10",
              input.length > 0 && "pr-10",
              inputClassName
            )}
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                if(status !== 'idle' && status !== 'loading') setStatus('idle');
            }}
            disabled={status === 'loading'}
            aria-label="URL to verify"
          />
          {input.length > 0 && (
             <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-muted-foreground hover:bg-accent"
              onClick={() => setInput('')}
              aria-label="Clear input"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button
          type="submit"
          className="h-12 text-base font-semibold shrink-0 shadow-[5px_5px_0px_rgba(0,0,0,0.2)]"
          disabled={status === 'loading'}
          variant={buttonVariant}
        >
          {status === 'loading' ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : null}
          Kiểm tra
        </Button>
      </form>
      
      <div className="pt-2">
        {renderResult()}
      </div>
    </div>
  )
}
