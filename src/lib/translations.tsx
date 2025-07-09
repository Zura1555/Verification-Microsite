import React from 'react';

export const translations = {
  vn: {
    hero_title: 'Xác minh kênh mua hàng chính hãng',
    hero_desc1: <>Tránh rủi ro mua nhầm hàng giả – hãy kiểm tra tính chính hãng<br />của cửa hàng hoặc kênh mua sắm trước khi đặt hàng.</>,
    hero_desc2: <>MAISON cam kết mang đến trải nghiệm mua sắm an toàn và<br />minh bạch cho người tiêu dùng.</>,
    auth_helper: 'Hoặc thử với ví dụ:',
    auth_placeholder: 'Nhập website, facebook, tiktok, instagram...',
    auth_button: 'Kiểm tra',
    result_official_title: 'Chính hãng',
    result_official_desc: 'Trang web này thuộc hệ thống phân phối chính thức của MAISON. Bạn có thể yên tâm mua sắm và trải nghiệm dịch vụ chính hãng.',
    result_official_button: 'Visit Official Store',
    result_brand_info_title: 'Kênh chính thức của MLB',
    result_suspicious_title: 'Không thuộc hệ thống MAISON',
    result_suspicious_desc: 'Chúng tôi không tìm thấy kênh này trong danh sách các cửa hàng chính hãng thuộc hệ thống phân phối của MAISON.',
    result_suspicious_button: 'Báo cáo kênh nghi ngờ',
    result_unofficial_title: 'Có thể giả mạo',
    result_unofficial_desc: 'Trang web này không nằm trong hệ thống phân phối chính thức của MAISON. Vui lòng không cung cấp thông tin cá nhân và tránh mua hàng để đảm bảo an toàn.',
    result_invalid_title: 'Đầu vào không hợp lệ',
    result_invalid_desc: 'Vui lòng nhập một địa chỉ website hoặc trang mạng xã hội để kiểm tra.',
    faq_title: 'Các câu hỏi thường gặp',
    faq_q1: 'Tại sao cần xác minh kênh mua hàng?',
    faq_a1: 'Việc xác minh giúp bạn an tâm khi mua đúng sản phẩm chính hãng, tránh rủi ro từ hàng giả, hàng kém chất lượng và bảo vệ thông tin cá nhân khỏi các website không đáng tin cậy.',
    faq_q2: (
      <>
        <p className="mb-2">Các dấu hiệu thường gặp của kênh không chính hãng bao gồm:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tên miền sai chính tả</li>
          <li>Mức giá bất thường</li>
          <li>Thiếu thông tin liên hệ rõ ràng</li>
          <li>Không có chính sách đổi trả</li>
          <li>Hình ảnh không đồng nhất với thương hiệu</li>
        </ul>
      </>
    ),
    faq_q3: 'Tôi có thể báo cáo kênh giả mạo ở đâu?',
    faq_a3: 'Sử dụng nút “Báo cáo kênh nghi ngờ” hoặc liên hệ trực tiếp bộ phận chăm sóc khách hàng của MAISON để được hỗ trợ xác minh.',
    cta_title: 'An Tâm Tuyệt Đối',
    cta_desc: 'Khi mọi thắc mắc đã được giải đáp, hãy tự tin khám phá bộ sưu tập chính hãng từ Maison.',
    cta_button: 'Bắt Đầu Mua Sắm',
  },
  en: {
    hero_title: 'Maison Official Channel Verification',
    hero_desc1: 'To avoid counterfeit or unauthorized purchases, please verify the authenticity of the store or sales channel before placing your order.',
    hero_desc2: 'MAISON is committed to providing a safe and transparent shopping experience for all customers.',
    auth_helper: 'Or try with an example:',
    auth_placeholder: 'Enter website, Facebook, TikTok, Instagram...',
    auth_button: 'Check',
    result_official_title: 'Official',
    result_official_desc: "This website is part of MAISON's official distribution network. You can shop with confidence and experience genuine service.",
    result_official_button: 'Visit Official Store',
    result_brand_info_title: 'Official Channels for MLB',
    result_suspicious_title: 'Not in the MAISON Network',
    result_suspicious_desc: 'We could not find this channel in the list of official stores within the MAISON distribution network.',
    result_suspicious_button: 'Report Suspicious Channel',
    result_unofficial_title: 'Potential Counterfeit',
    result_unofficial_desc: "This website is not part of MAISON's official distribution network. Please do not provide personal information and avoid making purchases to ensure your safety.",
    result_invalid_title: 'Invalid Input',
    result_invalid_desc: 'Please enter a website or social media address to check.',
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'Why is it necessary to verify a sales channel?',
    faq_a1: 'Verification gives you peace of mind that you are buying authentic products, avoiding the risks of fake or low-quality goods, and protecting your personal information from untrustworthy websites.',
    faq_q2: (
      <>
        <p className="mb-2">Common signs of an unofficial channel include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Misspelled domain names</li>
          <li>Unusually low prices</li>
          <li>Lack of clear contact information</li>
          <li>No return policy</li>
          <li>Images that are inconsistent with the brand</li>
        </ul>
      </>
    ),
    faq_q3: 'Where can I report a counterfeit channel?',
    faq_a3: "Use the 'Report Suspicious Channel' button or contact MAISON's customer service directly for verification assistance.",
    cta_title: 'Clarity, Guaranteed.',
    cta_desc: 'With authenticity assured, you can now explore the official collection with complete confidence.',
    cta_button: 'Start Shopping',
  },
};

export type TranslationKey = keyof typeof translations.vn;
