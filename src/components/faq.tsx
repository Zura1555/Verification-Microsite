"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function Faq({ layout = 'horizontal' }: { layout?: 'horizontal' | 'vertical' }) {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t('faq_q1'),
      answer: t('faq_a1'),
    },
    {
      question: t('faq_q2'),
      answer: t('faq_a2'),
    },
    {
      question: t('faq_q3'),
      answer: t('faq_a3'),
    }
  ];

  return (
    <section className="w-full pt-8">
      <div className={cn(
        "grid grid-cols-1 gap-8 items-start",
        layout === 'horizontal' && 'md:grid-cols-2'
      )}>
        {/* Left Column: FAQs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-left">
            {t('faq_title')}
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Column: Call to Action */}
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg">
            <ShoppingBag className="h-16 w-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              {t('cta_title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('cta_desc')}
            </p>
          <Button size="lg" className="w-full">{t('cta_button')}</Button>
        </div>
      </div>
    </section>
  );
}
