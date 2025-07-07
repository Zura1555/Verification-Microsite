
"use client";

import { useState, useEffect } from "react";
import ReactConfetti from 'react-confetti';
import { Input } from "@/components/ui/input";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Search, AlertTriangle, ExternalLink, ShieldAlert, X, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type VerificationStatus = "idle" | "loading" | "official" | "unofficial" | "invalid" | "suspicious";

const exampleLinks = {
  official: [
    { url: 'www.maisononline.vn/collections/pedro', status: 'official' as const },
    { url: '@mlb.kr.vn', status: 'official' as const },
  ],
  unofficial: [
    { url: 'maisonline.vn.co', status: 'suspicious' as const },
    { url: '@mlbvietnamofficial', status: 'suspicious' as const },
    { url: 'fakecharleskeith.vn', status: 'unofficial' as const },
    { url: 'mlb-vietnam.shop', status: 'unofficial' as const },
  ],
};

const ExampleTag = ({ url, status, onClick }: { url: string; status: 'official' | 'suspicious' | 'unofficial'; onClick: () => void }) => {
  const statusConfig = {
    official: {
      Icon: CheckCircle2,
      color: 'text-green-600',
    },
    suspicious: {
      Icon: AlertCircle,
      color: 'text-[#BFA181]',
    },
    unofficial: {
      Icon: XCircle,
      color: 'text-red-600',
    },
  };

  const { Icon, color } = statusConfig[status];

  return (
    <button
      onClick={onClick}
      className="group w-full text-left p-2 flex items-center gap-2.5 bg-background rounded-md border shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-in-out"
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

  useEffect(() => {
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

        let cleanInput = value.toLowerCase().trim();
        
        cleanInput = cleanInput.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '').replace(/^@/, '');
        
        const domainOrHandle = cleanInput.split('/')[0];

        if (officialDomains.includes(domainOrHandle) || officialHandles.includes(cleanInput)) {
            setStatus("official");
            setShowConfetti(true);
            return;
        }

        if (domainOrHandle.includes('maisononline.vn') || cleanInput.includes('mlbvietnamofficial')) {
            setStatus("suspicious");
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
            <AlertTitle>✅ Chính hãng</AlertTitle>
            <AlertDescription>
              <p>Trang web này thuộc hệ thống phân phối chính thức của MAISON.</p>
              <p className="mb-4">Bạn có thể yên tâm mua sắm và trải nghiệm dịch vụ chính hãng.</p>
              <Button size="sm">
                Visit Official Store
                <ExternalLink className="ml-2" />
              </Button>
            </AlertDescription>
          </Alert>
        );
      case "suspicious":
        return (
          <Alert variant="destructive">
            <AlertTitle>⚠️ Không thuộc hệ thống MAISON</AlertTitle>
            <AlertDescription>
              <p className="mb-4">Chúng tôi không tìm thấy kênh này trong danh sách các cửa hàng chính hãng thuộc hệ thống phân phối của MAISON.</p>
               <Button variant="outline" size="sm">
                  Report This Site
                  <ShieldAlert className="ml-2" />
                </Button>
            </AlertDescription>
          </Alert>
        );
      case "unofficial":
        return (
          <Alert variant="destructive">
            <AlertTitle>🛑 Có thể giả mạo</AlertTitle>
            <AlertDescription>
                <p>Trang web này không nằm trong hệ thống phân phối chính thức của MAISON.</p>
                <p className="mb-4">Vui lòng không cung cấp thông tin cá nhân và tránh mua hàng để đảm bảo an toàn.</p>
                 <Button variant="outline" size="sm">
                    Report This Site
                    <ShieldAlert className="ml-2" />
                </Button>
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
      {showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} onConfettiComplete={() => setShowConfetti(false)} className="!fixed z-50" />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          {!hideSearchIcon && <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />}
          <Input
            type="text"
            placeholder="nhập website, facebook, tiktok, instagram..."
            className={cn(
              "h-12 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BFA181]",
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
          className="w-full h-12 text-base font-semibold"
          disabled={status === 'loading'}
          variant={buttonVariant}
        >
          {status === 'loading' ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : null}
          Kiểm tra
        </Button>
      </form>

      <div className="space-y-4 pt-2">
        <div>
          <h4 className="mb-2 text-sm font-medium text-muted-foreground">Ví dụ kênh chính hãng</h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {exampleLinks.official.map(ex => (
              <ExampleTag key={ex.url} url={ex.url} status={ex.status} onClick={() => handleExampleClick(ex.url)} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-medium text-muted-foreground">Ví dụ kênh không chính hãng</h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {exampleLinks.unofficial.map(ex => (
              <ExampleTag key={ex.url} url={ex.url} status={ex.status} onClick={() => handleExampleClick(ex.url)} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="min-h-[148px] pt-2">
        {renderResult()}
      </div>
    </div>
  )
}
