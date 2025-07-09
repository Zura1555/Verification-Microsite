"use client";

import { useState, useEffect } from "react";
import ReactConfetti from 'react-confetti';
import { Input } from "@/components/ui/input";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Search, AlertTriangle, ExternalLink, ShieldAlert, X, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { OfficialChannels } from "./official-channels";
import { useLanguage } from "@/context/language-context";

type VerificationStatus = "idle" | "loading" | "official" | "unofficial" | "invalid" | "suspicious" | "brand-info";

const exampleLinks = [
  { url: 'www.maisononline.vn', status: 'official' as const },
  { url: 'a-reseller-marketplace.com', status: 'suspicious' as const },
  { url: 'maison-outlet.store', status: 'unofficial' as const },
];

const ExampleTag = ({ url, status, onClick, className }: { url: string; status: 'official' | 'suspicious' | 'unofficial'; onClick: () => void; className?: string; }) => {
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
        borderColor,
        className
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
  const { t } = useLanguage();

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
          <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{t('result_official_title')}</AlertTitle>
            <AlertDescription className="mt-2 space-y-4">
              <div className="space-y-1">
                <p>{t('result_official_desc')}</p>
              </div>
              <Button size="sm">
                {t('result_official_button')}
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
              {t('result_brand_info_title')}
            </AlertTitle>
            <AlertDescription className="pt-4 text-center space-y-4">
              <OfficialChannels />
            </AlertDescription>
          </Alert>
        );
      case "suspicious":
        return (
          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{t('result_suspicious_title')}</AlertTitle>
            <AlertDescription className="mt-2 space-y-4">
              <div className="space-y-1">
                <p>{t('result_suspicious_desc')}</p>
              </div>
               <Button variant="outline" size="sm" className="border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100 hover:text-amber-900">
                  {t('result_suspicious_button')}
                  <ShieldAlert className="ml-2 h-4 w-4 text-red-600" />
                </Button>
            </AlertDescription>
          </Alert>
        );
      case "unofficial":
        return (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>{t('result_unofficial_title')}</AlertTitle>
            <AlertDescription className="mt-2 space-y-1">
                <p>{t('result_unofficial_desc')}</p>
            </AlertDescription>
          </Alert>
        );
      case "invalid":
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{t('result_invalid_title')}</AlertTitle>
            <AlertDescription>
              {t('result_invalid_desc')}
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
        <p className="text-center text-sm text-muted-foreground">{t('auth_helper')}</p>
        <div className="grid grid-cols-2 justify-center gap-2 sm:flex sm:flex-wrap sm:items-center">
          {exampleLinks.slice(0, 2).map(ex => (
            <ExampleTag key={ex.url} url={ex.url} status={ex.status} onClick={() => handleExampleClick(ex.url)} />
          ))}
          <div className="col-span-2 flex justify-center">
            <ExampleTag 
              key={exampleLinks[2].url} 
              url={exampleLinks[2].url} 
              status={exampleLinks[2].status} 
              onClick={() => handleExampleClick(exampleLinks[2].url)}
            />
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-grow w-full">
          {!hideSearchIcon && <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />}
          <Input
            type="text"
            placeholder={t('auth_placeholder')}
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
          className="h-12 text-base font-semibold w-full sm:w-auto shrink-0 shadow-[5px_5px_0px_rgba(0,0,0,0.2)]"
          disabled={status === 'loading'}
          variant={buttonVariant}
        >
          {status === 'loading' ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : null}
          {t('auth_button')}
        </Button>
      </form>
      
      <div className="pt-2">
        {renderResult()}
      </div>
    </div>
  )
}
