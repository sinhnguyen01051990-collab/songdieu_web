import type { ImageMetadata } from 'astro';
import tanmo from '../assets/images/tanmo.jpeg';
import congthuc from '../assets/images/congthuc.jpeg';
import gung1 from '../assets/images/gung1.jpeg';
import xnnBanner from '../assets/images/background-1.png';
import xnnThanhPhan from '../assets/images/thanhphan.jpg';
import gel1 from '../assets/images/sp/gel-sdbody-1.jpg';
import gel2 from '../assets/images/sp/gel-sdbody-2.jpg';
import gel3 from '../assets/images/sp/gel-sdbody-3.jpg';
import gel4 from '../assets/images/sp/gel-sdbody-4.jpg';
import gel5 from '../assets/images/sp/gel-sdbody-5.jpg';
import gel6 from '../assets/images/sp/gel-sdbody-6.jpg';
import gelThanhPhan from '../assets/images/sp/gel-sdbody-thanh-phan.jpg';
import gelBeauty1 from '../assets/images/sp/gel-sdbody-beauty-1.jpg';
import gelBeauty2 from '../assets/images/sp/gel-sdbody-beauty-2.jpg';
import gelBeauty3 from '../assets/images/sp/gel-sdbody-beauty-3.jpg';
import traTaoMeo1 from '../assets/images/sp/tra-tao-meo-1.jpg';
import traTaoMeo2 from '../assets/images/sp/tra-tao-meo-2.jpg';
import traTaoMeo3 from '../assets/images/sp/tra-tao-meo-3.jpg';
import traTaoMeo4 from '../assets/images/sp/tra-tao-meo-4.jpg';
import traTaoMeo5 from '../assets/images/sp/tra-tao-meo-5.jpg';
import traTaoMeoCongDung from '../assets/images/sp/tra-tao-meo-cong-dung.jpg';
import traTaoMeoThanhPhan from '../assets/images/sp/tra-tao-meo-thanh-phan.jpg';
import traTaoMeoBeauty1 from '../assets/images/sp/tra-tao-meo-beauty-1.jpg';
import traTaoMeoBeauty2 from '../assets/images/sp/tra-tao-meo-beauty-2.jpg';
import traTaoMeoBeauty3 from '../assets/images/sp/tra-tao-meo-beauty-3.jpg';
import xuanNuNhan1 from '../assets/images/sp/xuan-nu-nhan-1.jpg';
import xuanNuNhan2 from '../assets/images/sp/xuan-nu-nhan-2.jpg';
import xuanNuNhan3 from '../assets/images/sp/xuan-nu-nhan-3.jpg';
import xuanNuNhan4 from '../assets/images/sp/xuan-nu-nhan-4.jpg';
import xuanNuNhanBeauty1 from '../assets/images/sp/xuan-nu-nhan-beauty-1.jpg';
import xuanNuNhanBeauty2 from '../assets/images/sp/xuan-nu-nhan-beauty-2.jpg';
import xuanNuNhanBeauty3 from '../assets/images/sp/xuan-nu-nhan-beauty-3.jpg';
import butGel1 from '../assets/images/sp/but-gel-hcbpk-1.jpg';
import butGel2 from '../assets/images/sp/but-gel-hcbpk-2.jpg';
import butGel4 from '../assets/images/sp/but-gel-hcbpk-4.jpg';
import butGel5 from '../assets/images/sp/but-gel-hcbpk-5.jpg';
import butGelBeauty1 from '../assets/images/sp/but-gel-hcbpk-beauty-1.jpg';
import butGelBeauty2 from '../assets/images/sp/but-gel-hcbpk-beauty-2.jpg';
import butGelBeauty3 from '../assets/images/sp/but-gel-hcbpk-beauty-3.jpg';
import traMamXoi1 from '../assets/images/sp/tra-mam-xoi-1.jpg';
import traMamXoi2 from '../assets/images/sp/tra-mam-xoi-2.jpg';
import traMamXoi3 from '../assets/images/sp/tra-mam-xoi-3.jpg';
import traMamXoi4 from '../assets/images/sp/tra-mam-xoi-4.jpg';
import traMamXoiCongDung from '../assets/images/sp/tra-mam-xoi-cong-dung.jpg';
import comboButGelMamXoi from '../assets/images/sp/combo-but-gel-mam-xoi.jpg';

export interface Offer { label: string; price: number; note?: string; best?: boolean }
export interface Ingredient { name: string; amount?: string; desc: string }
export interface Faq { q: string; a: string }

export interface Product {
  slug: string;
  sku: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string; // meta description
  image?: ImageMetadata;
  banner?: ImageMetadata;
  gallery: { src: ImageMetadata; alt: string }[];
  size: string;
  offers: Offer[]; // để trống → "Liên hệ"
  benefits: string[];
  ingredients: Ingredient[];
  usage: string[];
  notes: string[];
  legal: string;
  faq: Faq[];
  disclaimer?: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'gel-gung-que-sdbody',
    sku: 'SDBODY',
    name: 'Gel Gừng Quế SDBODY',
    shortName: 'Gel SDBODY',
    category: 'Chăm sóc vóc dáng',
    tagline: 'Ấm nóng dịu nhẹ – hỗ trợ săn chắc vòng eo, mịn màng làn da',
    description:
      'Gel gừng quế SDBODY 100ml: gừng, quế, VBE, vitamin E. Ấm nhẹ khi massage, hỗ trợ săn chắc vùng bụng, eo, đùi. Freeship, kiểm hàng COD.',
    image: gel1,
    gallery: [
      { src: gel1, alt: 'Tuýp và hộp Gel gừng quế SDBODY 100ml' },
      { src: gel2, alt: 'Gel gừng quế SDBODY bên quế và gừng' },
      { src: gel3, alt: 'Gel SDBODY giữa hoa hồng' },
      { src: gel4, alt: 'Hộp và tuýp Gel SDBODY' },
      { src: gel5, alt: 'Gel SDBODY – Song Diệu Pharma Beauty' },
      { src: gel6, alt: 'Gel SDBODY ngoài trời' },
      { src: tanmo, alt: 'Tuýp Gel SDBODY trên bãi biển' },
      { src: gelThanhPhan, alt: 'Thành phần Gel gừng quế SDBODY' },
      { src: congthuc, alt: 'Công thức thành phần Gel SDBODY' },
      { src: gung1, alt: 'Chiết xuất gừng trong Gel SDBODY' },
      { src: gelBeauty1, alt: 'Khách hàng dùng Gel SDBODY chăm sóc vòng eo' },
      { src: gelBeauty2, alt: 'Gel SDBODY kết hợp đai latex' },
      { src: gelBeauty3, alt: 'Gel SDBODY tại văn phòng Song Diệu' },
    ],
    size: 'Tuýp 100ml',
    offers: [
      { label: 'Combo 2 tuýp', price: 499000, note: 'Tặng 1 hộp Trà Táo Mèo + Freeship' },
      { label: 'Combo 3 tuýp', price: 749000, note: 'Tặng 2 hộp Trà Táo Mèo + Freeship', best: true },
      { label: '2 tuýp + 1 Đai Latex', price: 799000, note: 'Giá gốc 949K · Tặng 1 trà + Freeship' },
      { label: '3 tuýp + 1 Đai Latex', price: 999000, note: 'Giá gốc 1.199K · Tặng 2 trà + Freeship' },
    ],
    benefits: [
      'Tạo cảm giác ấm nóng dịu nhẹ khi massage – không nóng rát, bỏng da',
      'Hỗ trợ tuần hoàn máu tại vùng thoa, hỗ trợ săn chắc vùng bụng, eo, đùi, bắp tay',
      'Hỗ trợ giảm tình trạng da sần “vỏ cam”, giúp da mềm mịn hơn',
      'Dưỡng ẩm, bảo vệ hàng rào da nhờ Glycerin và Vitamin E',
      'Thẩm thấu nhanh khoảng 30 giây, không nhờn rít – phù hợp mẹ bỉm sau sinh',
    ],
    ingredients: [
      { name: 'Chiết xuất Gừng', desc: 'Chứa Gingerol và Shogaol tạo nhiệt tự nhiên, hỗ trợ tuần hoàn máu, giúp vùng da săn chắc hơn khi kết hợp massage.' },
      { name: 'Vỏ Quế', desc: 'Giàu cinnamaldehyde với tính ấm tự nhiên, hỗ trợ tạo nhiệt tại chỗ và thúc đẩy trao đổi chất ở vùng da được massage.' },
      { name: 'Vanillyl Butyl Ether (VBE)', desc: 'Chiết xuất từ hoa Tulip, hương vani nhẹ. Tạo cảm giác ấm kéo dài nhưng dịu nhẹ hơn chiết xuất tiêu/ớt, ít châm chích, ổn định trong nền gel.' },
      { name: 'Glycerin', desc: '“Hoạt chất vàng” giữ ẩm: dẫn truyền hoạt chất, làm mềm da, hỗ trợ độ đàn hồi và bảo vệ hàng rào da.' },
      { name: 'Vitamin E (Tocopheryl Acetate)', desc: 'Dưỡng ẩm sâu, chống oxy hóa, hỗ trợ ngăn ngừa rạn da, giúp làn da mịn màng và săn chắc hơn.' },
    ],
    usage: [
      'Làm sạch và lau khô vùng da cần chăm sóc.',
      'Thoa một lớp thật mỏng, 3–5 lần mỗi ngày – hiệu quả nhất khi thoa lúc đói và trước khi đi ngủ.',
      'Massage nhẹ nhàng theo chiều kim đồng hồ đến khi gel thấm hết và có cảm giác ấm.',
      'Có thể thoa trước khi tập luyện 30–40 phút, kết hợp đai latex hoặc quấn nilon để định hình dáng nhanh hơn.',
      'Rửa sạch tay sau khi thoa. Mỗi tuýp dùng khoảng 25–30 ngày.',
    ],
    notes: [
      'Dùng cho vùng bụng, hông, eo, mông, đùi (theo phiếu công bố). Không thoa lên mặt, mắt, môi, niêm mạc.',
      'Không bôi lên vết thương hở, vùng da trầy xước. Mẹ sinh mổ dùng sau 5 tuần.',
      'Lần đầu nên thử một lượng nhỏ trên vùng da nhỏ. Nếu nóng rát kéo dài, rửa sạch bằng nước và ngưng dùng.',
      'Mỗi đơn hàng đều kèm thước dây đo vòng bụng và thẻ bảo hành.',
    ],
    legal: 'Phiếu công bố mỹ phẩm số 59/26/CBMP-BN – Sở Y tế Bắc Ninh.',
    faq: [
      { q: 'Gel SDBODY có nóng rát không?', a: 'Không nóng rát, nóng bỏng – chỉ ấm nhẹ, rất êm khi massage. Mức độ ấm có thể khác nhau tùy làn da.' },
      { q: 'Mẹ đang cho con bú có dùng được không?', a: 'Được. Gel dùng ngoài da, thẩm thấu nhanh, không nhờn rít; mẹ chỉ cần rửa tay sau khi thoa và tránh thoa vùng ngực khi cho bé ti.' },
      { q: 'Sinh mổ bao lâu thì dùng được?', a: 'Sinh thường có thể dùng ngay; sinh mổ sau khoảng 5 tuần là có thể sử dụng.' },
      { q: 'Một tuýp dùng được bao lâu?', a: 'Khoảng 25–30 ngày nếu thoa mỏng 3–5 lần/ngày. Vòng bụng trên 80cm nên dùng combo 3 tuýp, dưới 80cm dùng combo 2 tuýp.' },
      { q: 'Có cần đeo đai khi dùng không?', a: 'Không bắt buộc. Đeo đai hoặc quấn nilon giúp định hình dáng nhanh hơn, không dùng vẫn chăm sóc bình thường.' },
    ],
    featured: true,
  },
  {
    slug: 'vien-uong-noi-tiet-xuan-nu-nhan',
    sku: 'XNN',
    name: 'Viên Uống Nội Tiết Xuân Nữ Nhan',
    shortName: 'Xuân Nữ Nhan',
    category: 'Chăm sóc nội tiết nữ',
    tagline: 'Vẻ đẹp đến từ sự an nhiên – cân bằng từ bên trong',
    description:
      'Viên uống Xuân Nữ Nhan với sâm tố nữ, đương quy, thiên môn chùm, maca – hỗ trợ cân bằng nội tiết, làn da, giấc ngủ. Freeship toàn quốc.',
    banner: xnnBanner,
    image: xuanNuNhan1,
    gallery: [
      { src: xuanNuNhan1, alt: 'Hộp và lọ viên uống Xuân Nữ Nhan 30 viên' },
      { src: xuanNuNhan2, alt: 'Thành phần thảo dược quý của Xuân Nữ Nhan' },
      { src: xuanNuNhan3, alt: 'Công dụng viên uống Xuân Nữ Nhan' },
      { src: xuanNuNhan4, alt: 'Xuân Nữ Nhan – vẻ đẹp đến từ sự an nhiên' },
      { src: xnnThanhPhan, alt: 'Bảng thành phần Xuân Nữ Nhan' },
      { src: xnnBanner, alt: 'Xuân Nữ Nhan cân bằng nội tiết' },
      { src: xuanNuNhanBeauty1, alt: 'Nhà sáng lập Song Diệu cùng Xuân Nữ Nhan' },
      { src: xuanNuNhanBeauty2, alt: 'Xuân Nữ Nhan – chăm sóc từ bên trong' },
      { src: xuanNuNhanBeauty3, alt: 'Khách hàng cầm sản phẩm Xuân Nữ Nhan' },
    ],
    size: 'Hộp 1 lọ 30 viên nang (600mg/viên)',
    offers: [
      { label: '1 hộp', price: 500000, note: 'Freeship' },
      { label: '2 hộp', price: 640000, note: 'Freeship' },
      { label: '4 hộp', price: 1200000, note: 'Freeship' },
      { label: '6 hộp tặng 1 hộp', price: 1800000, note: 'Nhận 7 hộp · dùng 3,5–4 tháng · Freeship', best: true },
    ],
    benefits: [
      'Hỗ trợ cân bằng nội tiết tố nữ',
      'Hỗ trợ cải thiện tình trạng khô hạn, tăng sự thoải mái khi gần gũi',
      'Hỗ trợ cải thiện làn da khô, sạm, nám',
      'Hỗ trợ điều hòa chu kỳ, giảm khó chịu trong kỳ kinh',
      'Hỗ trợ giảm bốc hỏa, cáu gắt, giúp ngủ ngon hơn',
    ],
    ingredients: [
      { name: 'Sâm tố nữ (Pueraria mirifica)', amount: '200mg', desc: 'Hỗ trợ cân bằng nội tiết tố, điều hòa kinh nguyệt, trẻ hóa, tiết nước tự nhiên.' },
      { name: 'Đương quy', amount: '60mg', desc: 'Bổ huyết, hoạt huyết, điều kinh, tăng tuần hoàn máu, nâng cao miễn dịch.' },
      { name: 'Thiên môn chùm', amount: '50mg', desc: 'Hỗ trợ cân bằng nội tiết, làm dịu cáu gắt, bốc hỏa, mất ngủ; làm ẩm các mô khô.' },
      { name: 'Hạt cỏ cà ri', amount: '30mg', desc: 'Chứa saponin, trigonelline; hỗ trợ triệu chứng mãn kinh và chuyển hóa.' },
      { name: 'Rễ Bạch thược', amount: '30mg', desc: 'Dưỡng huyết, điều kinh, hỗ trợ giảm các chứng đau liên quan kinh nguyệt.' },
      { name: 'Lá Cỏ ba lá đỏ', amount: '30mg', desc: 'Chứa isoflavone (formononetin, biochanin A), hỗ trợ cải thiện bốc hỏa.' },
      { name: 'Đông trùng hạ thảo', amount: '30mg', desc: 'Chống oxy hóa, hỗ trợ cải thiện giấc ngủ, tăng cường sinh lý nữ.' },
      { name: 'Nghệ', amount: '30mg', desc: 'Chống oxy hóa, hỗ trợ làn da tươi sáng.' },
      { name: 'Củ Maca', amount: '20mg', desc: 'Hỗ trợ tăng cường ham muốn, cải thiện tâm trạng cảm xúc.' },
      { name: 'Collagen peptide', amount: '10mg', desc: 'Bổ sung collagen cho cơ thể.' },
    ],
    usage: [
      'Uống 2 viên/ngày, uống cùng lúc vào buổi sáng, sau bữa ăn sáng khoảng 30 phút.',
      '1 hộp 30 viên dùng được 15 ngày – 1 tháng dùng 2 hộp.',
      'Liệu trình khuyên dùng 3 tháng. Những ngày có kinh vẫn uống bình thường.',
      'Sau liệu trình có thể nghỉ một thời gian hoặc dùng liều duy trì 1 viên/ngày.',
    ],
    notes: [
      'Không dùng cho phụ nữ đang mang thai và người mẫn cảm với bất kỳ thành phần nào của sản phẩm.',
      'Không chứa mầm đậu nành.',
      'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp; để xa tầm tay trẻ em. Hạn dùng 36 tháng.',
    ],
    legal: 'Bản tự công bố số 46/VITATH/2026 – sản xuất tại nhà máy Công ty CP Dược phẩm VITATH (KCN Tiên Sơn, Bắc Ninh), đạt ISO 22000.',
    faq: [
      { q: 'Chưa mãn kinh, dưới 40 tuổi có dùng được không?', a: 'Được. Xuân Nữ Nhan dành cho phụ nữ trưởng thành quan tâm chăm sóc nội tiết, làn da, chu kỳ và giấc ngủ, không chỉ dành cho người tiền mãn kinh.' },
      { q: 'Xuân Nữ Nhan có chứa mầm đậu nành không?', a: 'Không. Thành phần gồm các thảo dược như sâm tố nữ, đương quy, thiên môn chùm, cỏ cà ri, đông trùng hạ thảo, maca… Nếu chị đang có bệnh lý hoặc đang điều trị, nên tham khảo ý kiến bác sĩ trước khi dùng.' },
      { q: 'Nên dùng trong bao lâu?', a: 'Nên dùng đều đặn theo liệu trình khuyến nghị khoảng 3 tháng (2 viên/ngày). Cảm nhận ở mỗi người có thể khác nhau tuỳ cơ địa và lối sống.' },
      { q: 'Có bán ở nhà thuốc không?', a: 'Xuân Nữ Nhan phân phối chính hãng qua kênh online của SONG DIỆU, giao tận nơi, kiểm hàng trước khi thanh toán.' },
    ],
    disclaimer: 'Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.',
    featured: true,
  },
  {
    slug: 'tra-tao-meo',
    sku: 'TTM',
    name: 'Thất Bảo Trà – Trà Táo Mèo',
    shortName: 'Trà Táo Mèo',
    category: 'Trà thảo mộc vóc dáng',
    tagline: 'Uống trong – chăm ngoài – vận động nhẹ',
    description:
      'Thất Bảo Trà – Trà Táo Mèo SONG DIỆU, hộp 30 gói: trà thảo mộc hỗ trợ chuyển hoá, thanh lọc, đồng hành chăm sóc vóc dáng. Freeship.',
    image: traTaoMeo1,
    gallery: [
      { src: traTaoMeo1, alt: 'Hộp Thất Bảo Trà – Trà Táo Mèo' },
      { src: traTaoMeo2, alt: 'Thất Bảo Trà bên tách trà táo mèo' },
      { src: traTaoMeo3, alt: 'Hộp Trà Táo Mèo 30 gói' },
      { src: traTaoMeo4, alt: 'Thất Bảo Trà – Song Diệu' },
      { src: traTaoMeo5, alt: 'Mặt sau hộp Thất Bảo Trà' },
      { src: traTaoMeoCongDung, alt: 'Công dụng Thất Bảo Trà' },
      { src: traTaoMeoThanhPhan, alt: 'Thành phần Thất Bảo Trà' },
      { src: traTaoMeoBeauty1, alt: 'Thưởng thức Trà Táo Mèo tại văn phòng' },
      { src: traTaoMeoBeauty2, alt: 'Khách hàng cầm hộp Trà Táo Mèo' },
      { src: traTaoMeoBeauty3, alt: 'Pha Trà Táo Mèo mỗi ngày' },
    ],
    size: 'Hộp 30 gói',
    offers: [
      { label: 'Combo 3 hộp', price: 450000, note: 'Freeship' },
      { label: 'Mua 6 tặng 4 (10 hộp)', price: 999000, note: 'Freeship', best: true },
    ],
    benefits: [
      'Thảo dược lành tính, không gây nóng trong',
      'Hỗ trợ chuyển hóa, thanh lọc cơ thể',
      'Hỗ trợ hạn chế tích mỡ, đồng hành cùng Gel SDBODY',
      'Có thành phần trà vằng – mẹ sau sinh dùng được, hỗ trợ lợi sữa',
    ],
    ingredients: [],
    usage: ['Mỗi ngày pha 2–3 gói với khoảng 1,5 lít nước sôi, uống trong ngày.', 'Dùng đều đặn liên tục để thấy hiệu quả.'],
    notes: ['Không dùng cho phụ nữ đang mang thai.'],
    legal: 'Tự công bố số 02/TVX/2026 – Công ty CP Dược Mỹ phẩm Tân Vạn Xuân; kiểm nghiệm IRDOP đạt (vi sinh, kim loại nặng, aflatoxin, thuốc BVTV).',
    faq: [],
  },
  {
    slug: 'but-gel-hoang-cung-bao-phu-khang',
    sku: 'HCBPK',
    name: 'Bút Gel Hoàng Cung Bảo Phụ Khang',
    shortName: 'Bút gel HCBPK',
    category: 'Chăm sóc vùng kín',
    tagline: 'Bút gel thảo dược làm sạch dịu nhẹ vùng kín bên ngoài',
    description:
      'Bút gel Hoàng Cung Bảo Phụ Khang – gel thảo dược làm sạch dịu nhẹ vùng kín bên ngoài, khử mùi, hộp 8 bút. Mỹ phẩm đã công bố, freeship.',
    image: butGel1,
    gallery: [
      { src: butGel1, alt: 'Hộp Bút gel Hoàng Cung Bảo Phụ Khang' },
      { src: butGel2, alt: 'Bút gel thảo dược Hoàng Cung Bảo Phụ Khang' },
      { src: butGel4, alt: 'Bút gel Hoàng Cung Bảo Phụ Khang – hộp 8 bút' },
      { src: butGel5, alt: 'Khách hàng cầm Bút gel Hoàng Cung Bảo Phụ Khang' },
      { src: butGelBeauty1, alt: 'Bút gel Hoàng Cung Bảo Phụ Khang – chăm sóc vùng kín' },
      { src: butGelBeauty2, alt: 'Bút gel Hoàng Cung Bảo Phụ Khang' },
      { src: butGelBeauty3, alt: 'Bút gel Hoàng Cung Bảo Phụ Khang – Song Diệu' },
      { src: comboButGelMamXoi, alt: 'Combo Bút gel và Trà Mâm Xôi Tứ Vị' },
    ],
    size: 'Hộp 8 bút',
    offers: [
      { label: '1 hộp', price: 390000, note: 'Freeship' },
      { label: '2 hộp', price: 750000, note: 'Tặng 1 hộp Trà Mâm Xôi + Freeship', best: true },
      { label: 'Mua 4 tặng 1 hộp', price: 1500000, note: 'Freeship' },
    ],
    benefits: [
      'Làm sạch dịu nhẹ vùng kín bên ngoài',
      'Hỗ trợ khử mùi, mang lại cảm giác thơm mát, khô thoáng',
      'Dạng bút tiện lợi, vệ sinh, dễ mang theo',
    ],
    ingredients: [],
    usage: ['Dùng theo hướng dẫn trên bao bì sản phẩm.'],
    notes: ['Không dùng cho phụ nữ đang mang thai. Ngưng dùng nếu có dấu hiệu kích ứng.'],
    legal: 'Phiếu công bố mỹ phẩm số 270/26/CBMP-PT – Sở Y tế Phú Thọ; sản xuất bởi Tân Vạn Xuân, kiểm nghiệm IRDOP.',
    faq: [],
  },
  {
    slug: 'tra-mam-xoi-tu-vi',
    sku: 'TMX',
    name: 'Trà Mâm Xôi Tứ Vị',
    shortName: 'Trà Mâm Xôi',
    category: 'Trà thảo mộc phụ nữ',
    tagline: 'Tứ bảo dưỡng nhan: Mâm xôi rừng, Sâm tố nữ, Cỏ ngọt, Cỏ máu',
    description:
      'Trà Mâm Xôi Tứ Vị: mâm xôi rừng, sâm tố nữ, cỏ ngọt, cỏ máu – trà thảo mộc hỗ trợ cân bằng nội tiết, dưỡng huyết cho phụ nữ.',
    image: traMamXoi1,
    gallery: [
      { src: traMamXoi1, alt: 'Hộp Trà Mâm Xôi Tứ Vị' },
      { src: traMamXoi2, alt: 'Trà Mâm Xôi Tứ Vị bên tách trà' },
      { src: traMamXoi3, alt: 'Trà Mâm Xôi Tứ Vị – Song Diệu' },
      { src: traMamXoi4, alt: 'Thưởng thức Trà Mâm Xôi Tứ Vị' },
      { src: traMamXoiCongDung, alt: 'Công dụng Trà Mâm Xôi Tứ Vị' },
      { src: comboButGelMamXoi, alt: 'Combo Bút gel tặng Trà Mâm Xôi' },
    ],
    size: 'Hộp 20 gói x 4g',
    offers: [],
    benefits: [
      'Hỗ trợ cân bằng nội tiết tố nữ',
      'Bổ máu, dưỡng huyết, làm ấm tử cung',
      'Hỗ trợ điều hòa kinh nguyệt, giảm đau bụng kinh',
      'Hỗ trợ giảm bốc hỏa, khó ngủ',
    ],
    ingredients: [
      { name: 'Mâm xôi rừng', desc: 'Thảo dược truyền thống chăm sóc sức khỏe phụ nữ.' },
      { name: 'Sâm tố nữ', desc: 'Hỗ trợ cân bằng nội tiết tố.' },
      { name: 'Cỏ ngọt', desc: 'Tạo vị ngọt tự nhiên, không đường.' },
      { name: 'Cỏ máu', desc: 'Hỗ trợ bổ huyết, dưỡng huyết.' },
    ],
    usage: ['Hãm 1 gói với nước sôi, uống trong ngày.'],
    notes: ['Không dùng cho phụ nữ đang mang thai.'],
    legal: 'Tự công bố số 31/MỘC TÂM/2026 – Công ty TNHH Sản xuất và Dịch vụ Mộc Tâm.',
    faq: [],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const formatVnd = (n: number) => n.toLocaleString('vi-VN') + 'đ';
export const minPrice = (p: Product) => (p.offers.length ? Math.min(...p.offers.map((o) => o.price)) : null);
