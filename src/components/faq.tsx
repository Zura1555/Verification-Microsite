import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqItems = [
    {
      question: "Làm thế nào để nhận biết một kênh bán hàng là chính hãng?",
      answer: "Bạn có thể sử dụng công cụ này để kiểm tra URL của trang web hoặc trang mạng xã hội. Các kênh chính hãng sẽ được xác nhận là 'Kênh chính hãng'. Chúng tôi liên tục cập nhật danh sách các đối tác được ủy quyền.",
    },
    {
      question: "Công cụ này có kiểm tra được tất cả các trang web và mạng xã hội không?",
      answer: "Công cụ này được thiết kế để kiểm tra các tên miền website và các trang mạng xã hội phổ biến như Facebook, Instagram, TikTok. Đối với các nền tảng khác, kết quả có thể không chính xác.",
    },
    {
      question: "Tôi nên làm gì nếu phát hiện một trang web giả mạo thương hiệu MAISON?",
      answer: "Nếu bạn nghi ngờ một trang web là giả mạo, vui lòng không thực hiện bất kỳ giao dịch nào và báo cáo cho chúng tôi qua email support@maisononline.vn để chúng tôi có thể xử lý. Cảm ơn sự hợp tác của bạn.",
    },
    {
      question: "Kết quả 'Không phải kênh chính hãng' có chắc chắn là giả mạo không?",
      answer: "Kết quả này cho thấy URL không có trong danh sách các kênh bán hàng chính thức của chúng tôi. Có thể đó là một đối tác mới chưa được cập nhật. Để chắc chắn, bạn nên mua sắm tại các kênh được xác nhận hoặc liên hệ trực tiếp với chúng tôi.",
    }
  ];

  return (
    <section className="w-full pt-8">
      <h3 className="font-headline text-xl font-bold mb-4 text-center">Các câu hỏi thường gặp</h3>
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
