"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, CheckCircle2, ShieldX, AlertTriangle, ShieldCheck } from "lucide-react";

type VerificationStatus = "idle" | "loading" | "official" | "unofficial" | "invalid" | "suspicious";

export function Authenticator() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<VerificationStatus>("idle");

  const handleVerify = (urlToVerify: string) => {
    const value = urlToVerify.trim();
    if (!value) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    setInput(value);

    setTimeout(() => {
        const officialDomains = ["maisononline.vn"];
        const officialHandles = ["mlb.kr.vn"];

        let cleanInput = value.toLowerCase().trim();
        const isSocialInput = cleanInput.startsWith('@');
        
        cleanInput = cleanInput.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '').replace(/^@/, '');
        
        const inputParts = cleanInput.split('/');
        const inputDomain = inputParts[0];

        // Official Check
        if (officialDomains.includes(inputDomain)) {
            setStatus("official");
            return;
        }
        if (officialHandles.some(h => cleanInput.endsWith(h))) {
             setStatus("official");
             return;
        }

        // Suspicious Check
        if (inputDomain.includes('maisononline.vn')) {
            setStatus("suspicious");
            return;
        }

        if (isSocialInput && cleanInput.includes('mlb') && cleanInput.includes('vietnam')) {
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
    handleVerify(url);
  }

  const renderResult = () => {
    switch (status) {
      case "official":
        return (
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Kênh chính hãng!</AlertTitle>
            <AlertDescription>
              Đây là một kênh bán hàng chính thức của MAISON. Bạn có thể yên tâm mua sắm.
            </AlertDescription>
          </Alert>
        );
      case "suspicious":
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Kênh có dấu hiệu đáng ngờ</AlertTitle>
            <AlertDescription>
              Kênh này không nằm trong danh sách chính thức và có dấu hiệu đáng ngờ. Vui lòng cẩn trọng.
            </AlertDescription>
          </Alert>
        );
      case "unofficial":
        return (
          <Alert variant="destructive">
            <ShieldX className="h-4 w-4" />
            <AlertTitle>Không phải kênh chính hãng</AlertTitle>
            <AlertDescription>
              Kênh này không nằm trong danh sách chính thức của MAISON. Vui lòng cẩn trọng.
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
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('www.maisononline.vn')}>
                <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                www.maisononline.vn
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('maisonline.vn.co')}>
                <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
                maisonline.vn.co
            </Badge>
            <Badge variant="secondary" className="cursor-pointer py-1.5 px-3 hover:bg-accent" onClick={() => handleExampleClick('fakecharleskeith.vn')}>
                <ShieldX className="mr-1.5 h-3.5 w-3.5" />
                fakecharleskeith.vn
            </Badge>
        </div>
      </div>
      
      <div className="min-h-[76px] pt-2">
        {renderResult()}
      </div>
    </div>
  )
}
