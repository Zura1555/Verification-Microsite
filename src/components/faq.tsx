import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Faq({ align = 'center' }: { align?: 'center' | 'left' | 'right' }) {
  const faqItems = [
    {
      question: "Tại sao cần xác minh kênh mua hàng?",
      answer: "Việc xác minh giúp bạn an tâm khi mua đúng sản phẩm chính hãng, tránh rủi ro từ hàng giả, hàng kém chất lượng và bảo vệ thông tin cá nhân khỏi các website không đáng tin cậy.",
    },
    {
      question: "Làm sao để nhận biết kênh không chính hãng?",
      answer: "Các dấu hiệu thường gặp của kênh không chính hãng bao gồm: tên miền sai chính tả, mức giá bất thường, thiếu thông tin liên hệ rõ ràng, không có chính sách đổi trả và hình ảnh không đồng nhất với thương hiệu.",
    },
    {
      question: "Tôi có thể báo cáo kênh giả mạo ở đâu?",
      answer: "Sử dụng nút “Báo cáo kênh nghi ngờ” hoặc liên hệ trực tiếp bộ phận chăm sóc khách hàng của MAISON để được hỗ trợ xác minh.",
    }
  ];

  return (
    <section className="w-full pt-8">
      <h3 className={cn(
        "font-headline text-xl font-bold mb-4",
        {
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right'
        }
      )}>Các câu hỏi thường gặp</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
