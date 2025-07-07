
"use client";

import { useState, useEffect } from "react";
import ReactConfetti from 'react-confetti';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, AlertTriangle, ExternalLink, ShieldAlert } from "lucide-react";

type VerificationStatus = "idle" | "loading" | "official" | "unofficial" | "invalid" | "suspicious";

export function Authenticator() {
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

        // Official Check
        if (officialDomains.includes(domainOrHandle) || officialHandles.includes(cleanInput)) {
            setStatus("official");
            setShowConfetti(true);
            return;
        }

        // Suspicious Check
        if (domainOrHandle.includes('maisononline.vn') || cleanInput.includes('mlbvietnamofficial')) {
            setStatus("suspicious");
            return;
        }

        // Unofficial Check for everything else
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
    const reportHref = `mailto:support@maison.vn?subject=Báo cáo trang web giả mạo&body=Tôi muốn báo cáo trang web sau đây là đáng ngờ: ${encodeURIComponent(verifiedUrl)}`;
    
    let officialLink = verifiedUrl;
    if (verifiedUrl) {
      if (verifiedUrl.startsWith('@')) {
        officialLink = `https://www.facebook.com/${verifiedUrl.substring(1)}`;
      } else if (!verifiedUrl.match(/^https?:\/\//)) {
        officialLink = `https://${verifiedUrl}`;
      }
    }

    switch (status) {
      case "official":
        return (
          <Alert>
            <AlertTitle>✅ Chính hãng</AlertTitle>
            <AlertDescription>
              <p>Trang web này thuộc hệ thống phân phối chính thức của MAISON.</p>
              <p className="mb-4">Bạn có thể yên tâm mua sắm và trải nghiệm dịch vụ chính hãng.</p>
              <Button asChild size="sm">
                <a href={officialLink} target="_blank" rel="noopener noreferrer">
                  Visit Official Store
                  <ExternalLink className="ml-2" />
                </a>
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
               <Button asChild variant="outline" size="sm">
                <a href={reportHref}>
                  Report This Site
                  <ShieldAlert className="ml-2" />
                </a>
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
                 <Button asChild variant="outline" size="sm">
                    <a href={reportHref}>
                      Report This Site
                      <ShieldAlert className="ml-2" />
                    </a>
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
    <div className="w-full space-y-6 rounded-lg border bg-card p-6 shadow-sm">
      {showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} onConfettiComplete={() => setShowConfetti(false)} className="!fixed z-50" />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="nhập website, facebook, tiktok, instagram..."
            className="pl-10 h-12 text-base"
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                if(status !== 'idle' && status !== 'loading') setStatus('idle');
            }}
            disabled={status === 'loading'}
            aria-label="URL to verify"
          />
        </div>
        <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : null}
          Kiểm tra
        </Button>
      </form>

      <div className="space-y-3">
        <p className="text-sm text-center text-muted-foreground">Hoặc thử với ví dụ:</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('www.maisononline.vn/collections/pedro')}>
                ✅ www.maisononline.vn/collections/pedro
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('@mlb.kr.vn')}>
                ✅ @mlb.kr.vn
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('maisonline.vn.co')}>
                ⚠️ maisonline.vn.co
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('@mlbvietnamofficial')}>
                ⚠️ @mlbvietnamofficial
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('fakecharleskeith.vn')}>
                🛑 fakecharleskeith.vn
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('mlb-vietnam.shop')}>
                🛑 mlb-vietnam.shop
            </Badge>
        </div>
      </div>
      
      <div className="min-h-[148px] pt-2">
        {renderResult()}
      </div>
    </div>
  )
}
