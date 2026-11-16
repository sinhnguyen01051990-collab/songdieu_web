export const SITE = {
  name: 'SONG DIỆU',
  legalName: 'Công ty TNHH SINHAN PHARMA BEAUTY',
  tagline: 'Vẻ Đẹp Đến Từ Sự An Nhiên',
  description:
    'SONG DIỆU Pharma Beauty – mỹ phẩm & thực phẩm bổ sung thảo dược cho phụ nữ Việt: Gel SDBODY, Xuân Nữ Nhan, Trà Táo Mèo. Freeship, kiểm hàng COD.',
  url: 'https://songdieu.vn',
  phone: '0989688703',
  phoneDisplay: '0989 688 703',
  email: 'info@songdieu.vn',
  address: {
    street: '2A Happy Home, ngõ 347/116 Cổ Nhuế',
    ward: 'Đông Ngạc',
    city: 'Hà Nội',
    full: '2A, ngõ 347/116 Cổ Nhuế, Đông Ngạc, Hà Nội',
  },
  zalo: 'https://zalo.me/0989688703',
  // Điền link fanpage khi có, ví dụ 'https://m.me/songdieu'
  messenger: '',
  // Mạng xã hội – điền link để hiện ở footer + schema sameAs
  social: {
    facebook: '',
    tiktok: '',
    youtube: '',
    shopee: '',
  },
  /**
   * Mã đo lường – điền là tự bật (để trống = tắt):
   * ga4: 'G-XXXXXXXXXX' · metaPixel: '1234567890' · tiktokPixel: 'CXXXXXXXXXXXX'
   */
  analytics: {
    ga4: '',
    metaPixel: '',
    tiktokPixel: '',
  },
  // Giờ làm việc cho schema, VD 'Mo-Su 08:00-21:00' (để trống nếu chưa chốt)
  openingHours: '',
};

export const NAV = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu/', label: 'Giới thiệu' },
  { href: '/san-pham/', label: 'Sản phẩm' },
  { href: '/tin-tuc/', label: 'Tin tức' },
  { href: '/lien-he/', label: 'Liên hệ' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Mình dùng Gel SDBODY được hơn 3 tuần thấy giảm 5cm cảm nhận rõ vùng bụng săn chắc hơn và da mịn hơn hẳn. Chất gel thấm nhanh, không bị nhờn rít nên rất dễ chịu khi sử dụng.',
    name: 'Thủy Tạ',
    place: 'Yên Nghĩa – Hà Nội',
    product: 'Gel gừng quế SDBODY',
  },
  {
    quote:
      'Chị uống được 10 ngày rồi mà thấy thay đổi rõ rệt luôn em à. Từ ngày chị uống, chồng chị thích lắm, ông mê chị hơn nhiều luôn. Đêm chị ngủ ngon sâu giấc hơn, da dẻ cũng sáng mịn và tươi tắn hơn trước hẳn em ạ!',
    name: 'Thu Hương',
    place: 'Bắc Ninh',
    product: 'Viên uống nội tiết Xuân Nữ Nhan',
  },
];

export const COMMITMENTS = [
  { title: 'Hàng chính hãng', text: 'Đầy đủ phiếu công bố, kiểm nghiệm theo quy định của Bộ Y tế.' },
  { title: 'Miễn phí giao hàng', text: 'Freeship toàn quốc cho các combo, giao 2–3 ngày.' },
  { title: 'Kiểm hàng – COD', text: 'Được mở kiểm tra hàng trước, nhận hàng rồi mới thanh toán.' },
  { title: 'Tư vấn tận tâm', text: 'Đồng hành chăm sóc trước – trong – sau khi dùng sản phẩm.' },
];
