import type { ImageMetadata } from 'astro';
// ảnh sản phẩm mới – anh gửi Drive 17/11/2026
import gelMoi1 from '../assets/images/sp/gel-sdbody-moi-1.jpg';
import gelMoi2 from '../assets/images/sp/gel-sdbody-moi-2.jpg';
import gelMoi3 from '../assets/images/sp/gel-sdbody-moi-3.jpg';
import gelMoi4 from '../assets/images/sp/gel-sdbody-moi-4.jpg';
import gelMoi5 from '../assets/images/sp/gel-sdbody-moi-5.jpg';
import gelMoi6 from '../assets/images/sp/gel-sdbody-moi-6.jpg';
import xnnMoi1 from '../assets/images/sp/xuan-nu-nhan-moi-1.jpg';
import xnnMoi2 from '../assets/images/sp/xuan-nu-nhan-moi-2.jpg';
import xnnMoi3 from '../assets/images/sp/xuan-nu-nhan-moi-3.jpg';
import xnnMoi4 from '../assets/images/sp/xuan-nu-nhan-moi-4.jpg';
import xnnMoi5 from '../assets/images/sp/xuan-nu-nhan-moi-5.jpg';
import xnnMoi6 from '../assets/images/sp/xuan-nu-nhan-moi-6.jpg';
import taoMeoMoi1 from '../assets/images/sp/tra-tao-meo-moi-1.jpg';
import taoMeoMoi2 from '../assets/images/sp/tra-tao-meo-moi-2.jpg';
import taoMeoMoi3 from '../assets/images/sp/tra-tao-meo-moi-3.jpg';
import taoMeoMoi4 from '../assets/images/sp/tra-tao-meo-moi-4.jpg';
import taoMeoMoi5 from '../assets/images/sp/tra-tao-meo-moi-5.jpg';
import taoMeoMoi6 from '../assets/images/sp/tra-tao-meo-moi-6.jpg';
import butMoi1 from '../assets/images/sp/but-gel-hcbpk-moi-1.jpg';
import butMoi2 from '../assets/images/sp/but-gel-hcbpk-moi-2.jpg';
import butMoi3 from '../assets/images/sp/but-gel-hcbpk-moi-3.jpg';
import butMoi4 from '../assets/images/sp/but-gel-hcbpk-moi-4.jpg';
import butMoi5 from '../assets/images/sp/but-gel-hcbpk-moi-5.jpg';
import butMoi6 from '../assets/images/sp/but-gel-hcbpk-moi-6.jpg';
import mamXoiMoi1 from '../assets/images/sp/tra-mam-xoi-moi-1.jpg';
import mamXoiMoi2 from '../assets/images/sp/tra-mam-xoi-moi-2.jpg';
import mamXoiMoi3 from '../assets/images/sp/tra-mam-xoi-moi-3.jpg';
import mamXoiMoi4 from '../assets/images/sp/tra-mam-xoi-moi-4.jpg';
import mamXoiMoi5 from '../assets/images/sp/tra-mam-xoi-moi-5.jpg';
import mamXoiMoi6 from '../assets/images/sp/tra-mam-xoi-moi-6.jpg';
import tanmo from '../assets/images/tanmo.jpeg';
import congthuc from '../assets/images/congthuc.jpeg';
import gung1 from '../assets/images/gung1.jpeg';
import xnnBanner from '../assets/images/background-1.png';

export interface Offer { label: string; price: number; note?: string; best?: boolean }
// icon: tên biểu tượng ở trang chi tiết (17/11/2026)
export interface Ingredient { name: string; amount?: string; desc: string; icon?: string }
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
  ingredientsIntro?: string; // câu mở đầu khối Thành Phần Chính
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
    tagline: 'Ấm nóng dịu nhẹ – hỗ trợ giảm mỡ, săn chắc vòng eo, mịn màng làn da',
    description:
      'Gel gừng quế SDBODY 100ml: gừng, quế, VBE, vitamin E. Ấm nhẹ khi massage, hỗ trợ săn chắc vùng bụng, eo, đùi. Freeship, kiểm hàng COD.',
    image: gelMoi1,
    gallery: [
      { src: gelMoi1, alt: 'Tuýp và hộp Gel gừng quế SDBODY 100ml' },
      { src: gelMoi2, alt: 'Combo 2 tuýp Gel gừng quế SDBODY tặng 1 hộp Thất Bảo Trà' },
      { src: gelMoi3, alt: 'Combo 3 tuýp Gel gừng quế SDBODY tặng 2 hộp Thất Bảo Trà' },
      { src: gelMoi4, alt: 'Khách hàng cầm hộp Gel SDBODY' },
      { src: gelMoi5, alt: 'Kiểm tra Gel SDBODY tại nhà máy' },
      { src: gelMoi6, alt: 'Khách hàng cầm tuýp và hộp Gel SDBODY' },
    ],
    size: 'Tuýp 100ml',
    offers: [
      { label: 'Combo 2 tuýp', price: 499000, note: 'Tặng 1 hộp Trà Táo Mèo + Freeship' },
      { label: 'Combo 3 tuýp', price: 749000, note: 'Tặng 2 hộp Trà Táo Mèo + Freeship', best: true },
    ],
    benefits: [
      'Tạo cảm giác ấm nóng dịu nhẹ khi massage – không nóng rát, bỏng da',
      'Hỗ trợ tuần hoàn máu tại vùng thoa, hỗ trợ săn chắc vùng bụng, eo, đùi, bắp tay',
      'Hỗ trợ giảm tình trạng da sần “vỏ cam”, giúp da mềm mịn hơn',
      'Dưỡng ẩm, bảo vệ hàng rào da nhờ Glycerin và Vitamin E',
      'Thẩm thấu nhanh khoảng 30 giây, không nhờn rít – phù hợp mẹ bỉm sau sinh',
    ],
    ingredientsIntro: '5 thành phần chọn lọc – ấm dịu, không nóng rát, dưỡng da mềm mịn.',
    ingredients: [
      { name: 'Chiết xuất Gừng', icon: 'flame', desc: 'Chứa Gingerol và Shogaol tạo nhiệt tự nhiên, hỗ trợ tuần hoàn máu, giúp vùng da săn chắc hơn khi kết hợp massage.' },
      { name: 'Vỏ Quế', icon: 'bark', desc: 'Giàu cinnamaldehyde với tính ấm tự nhiên, hỗ trợ tạo nhiệt tại chỗ và thúc đẩy trao đổi chất ở vùng da được massage.' },
      { name: 'Vanillyl Butyl Ether (VBE)', icon: 'flower', desc: 'Chiết xuất từ hoa Tulip, hương vani nhẹ. Tạo cảm giác ấm kéo dài nhưng dịu nhẹ hơn chiết xuất tiêu/ớt, ít châm chích, ổn định trong nền gel.' },
      { name: 'Glycerin', icon: 'drop', desc: '“Hoạt chất vàng” giữ ẩm: dẫn truyền hoạt chất, làm mềm da, hỗ trợ độ đàn hồi và bảo vệ hàng rào da.' },
      { name: 'Vitamin E (Tocopheryl Acetate)', icon: 'shield', desc: 'Dưỡng ẩm sâu, chống oxy hóa, hỗ trợ ngăn ngừa rạn da, giúp làn da mịn màng và săn chắc hơn.' },
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
      'Lần đầu nên thử một lượng nhỏ trên vùng da nhỏ. Thoa lớp gel mỏng và đều mỗi ngày để có hiệu quả tốt.',
      'Mỗi đơn hàng đều kèm thước dây đo vòng bụng và thẻ bảo hành.',
    ],
    legal: 'Phiếu công bố mỹ phẩm số 59/26/CBMP-BN – Sở Y tế Bắc Ninh.',
    faq: [
      { q: 'Gel SDBODY có nóng rát không?', a: 'Không nóng rát, nóng bỏng – chỉ ấm nhẹ, rất êm khi massage. Mức độ ấm có thể khác nhau tùy làn da.' },
      { q: 'Mẹ đang cho con bú có dùng được không?', a: 'Mẹ đang cho con bú dùng bình thường ạ. Gel dùng ngoài da, thẩm thấu nhanh, không nhờn rít; mẹ chỉ cần rửa tay sau khi thoa và tránh thoa vùng ngực khi cho bé ti.' },
      { q: 'Sinh mổ bao lâu thì dùng được?', a: 'Sinh thường mình có thể dùng ngay. Sinh mổ sau khoảng 5 tuần là mình có thể sử dụng.' },
      { q: 'Một tuýp dùng được bao lâu?', a: 'Khoảng 25–30 ngày nếu thoa mỏng 3–5 lần/ngày. Vòng bụng trên 80cm nên dùng combo 3 tuýp, dưới 80cm dùng combo 2 tuýp.' },
      { q: 'Có cần đeo đai khi dùng không?', a: 'Không bắt buộc phải đeo đai. Đeo đai hoặc quấn nilon giúp định hình dáng nhanh hơn, không dùng vẫn giảm vòng eo bình thường.' },
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
    image: xnnMoi1,
    gallery: [
      { src: xnnMoi1, alt: 'Hũ và hộp viên uống nội tiết Xuân Nữ Nhan' },
      { src: xnnMoi2, alt: 'Thảo dược quý trong Xuân Nữ Nhan: sâm tố nữ, đông trùng hạ thảo, collagen, thiên môn chùm' },
      { src: xnnMoi3, alt: 'Khách hàng cầm hộp và hũ Xuân Nữ Nhan' },
      { src: xnnMoi4, alt: 'Công dụng viên uống nội tiết Xuân Nữ Nhan' },
      { src: xnnMoi5, alt: 'Thành phần cho 1 viên Xuân Nữ Nhan' },
      { src: xnnMoi6, alt: 'Khách hàng cầm combo Xuân Nữ Nhan' },
    ],
    size: 'Hộp 1 lọ 30 viên nang (600mg/viên)',
    offers: [
      { label: '1 hộp', price: 500000, note: 'Freeship' },
      { label: '2 hộp', price: 640000, note: 'Freeship' },
      { label: '4 hộp', price: 1200000, note: 'Freeship' },
      { label: '6 hộp tặng 1 hộp', price: 1800000, note: 'Nhận 7 hộp · dùng 3,5–4 tháng · Freeship', best: true },
    ],
    benefits: [
      'Cân bằng nội tiết tố nữ',
      'Cải thiện tình trạng khô hạn, tăng cảm xúc ham muốn khi gần gũi',
      'Cải thiện rõ rệt tình trạng khô hạn (hiệu quả sau 7–10 ngày)',
      'Cải thiện làn da khô, sạm, nám',
      'Giảm bốc hỏa, cáu gắt, giúp ngủ ngon hơn',
      'Chấm dứt các triệu chứng khó chịu tuổi tiền mãn kinh – mãn kinh',
      'Bổ huyết & điều hòa chu kỳ kinh nguyệt',
      'Chống oxy hóa, làm đẹp da & khắc phục rụng tóc',
      'An toàn cho người có u xơ, u nang',
    ],
    ingredientsIntro: '10 thảo dược quý trong mỗi viên – hỗ trợ cân bằng nội tiết, nuôi dưỡng từ bên trong.',
    ingredients: [
      { name: 'Sâm tố nữ (Pueraria mirifica)', icon: 'root', amount: '200mg/viên', desc: 'Hỗ trợ cân bằng nội tiết tố, điều hòa kinh nguyệt, trẻ hóa, tiết nước tự nhiên.' },
      { name: 'Đương quy', icon: 'leaf', amount: '60mg/viên', desc: 'Bổ huyết, hoạt huyết, điều kinh, tăng tuần hoàn máu, nâng cao miễn dịch.' },
      { name: 'Thiên môn chùm', icon: 'moon', amount: '50mg/viên', desc: 'Hỗ trợ cân bằng nội tiết, làm dịu cáu gắt, bốc hỏa, mất ngủ; làm ẩm các mô khô.' },
      { name: 'Hạt cỏ cà ri', icon: 'seed', amount: '30mg/viên', desc: 'Chứa saponin, trigonelline; hỗ trợ triệu chứng mãn kinh và chuyển hóa.' },
      { name: 'Rễ Bạch thược', icon: 'flower', amount: '30mg/viên', desc: 'Dưỡng huyết, điều kinh, hỗ trợ giảm các chứng đau liên quan kinh nguyệt.' },
      { name: 'Lá Cỏ ba lá đỏ', icon: 'clover', amount: '30mg/viên', desc: 'Chứa isoflavone (formononetin, biochanin A), hỗ trợ cải thiện bốc hỏa.' },
      { name: 'Đông trùng hạ thảo', icon: 'sparkle', amount: '30mg/viên', desc: 'Chống oxy hóa, hỗ trợ cải thiện giấc ngủ, tăng cường sinh lý nữ.' },
      { name: 'Nghệ', icon: 'sun', amount: '30mg/viên', desc: 'Chống oxy hóa, hỗ trợ làn da tươi sáng.' },
      { name: 'Củ Maca', icon: 'heart', amount: '20mg/viên', desc: 'Hỗ trợ tăng cường ham muốn, cải thiện tâm trạng cảm xúc.' },
      { name: 'Collagen peptide', icon: 'drop', amount: '10mg/viên', desc: 'Bổ sung collagen cho cơ thể.' },
    ],
    usage: [
      'Uống mỗi ngày 2 viên sau ăn sáng khoảng 30 phút.',
      'Liệu trình khuyên dùng 3 tháng. Những ngày có kinh ngừng uống, hết kì kinh sử dụng bình thường.',
      'Sau liệu trình có thể nghỉ một thời gian hoặc dùng đều viên/ngày.',
    ],
    notes: [
      'Không dùng cho phụ nữ đang mang thai và cho con bú, người mẫn cảm với bất kỳ thành phần nào của sản phẩm.',
      'Không chứa mầm đậu nành.',
      'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp; để xa tầm tay trẻ em. Hạn dùng 36 tháng.',
    ],
    legal: 'Bản tự công bố số 46/VITATH/2026 – sản xuất tại nhà máy Công ty CP Dược phẩm VITATH (KCN Tiên Sơn, Bắc Ninh), đạt ISO 22000.',
    faq: [
      { q: 'Chưa mãn kinh, dưới 40 tuổi có dùng được không?', a: 'Xuân Nữ Nhan dành cho phụ nữ trưởng thành, mãn kinh, tiền mãn kinh thiếu hụt nội tiết tố quan tâm chăm sóc nội tiết, làn da, chu kỳ, cảm xúc và giấc ngủ.' },
      { q: 'Xuân Nữ Nhan có chứa mầm đậu nành không?', a: 'Không chứa mầm đậu nành. Thành phần gồm các thảo dược như sâm tố nữ, đương quy, thiên môn chùm, cỏ cà ri, đông trùng hạ thảo, maca…' },
      { q: 'Nên dùng trong bao lâu?', a: 'Nên dùng đều đặn theo liệu trình khuyến nghị khoảng 3 tháng (2 viên/ngày). Nếu có điều kiện có thể sử dụng duy trì đều đặn hàng ngày.' },
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
    tagline: 'Thanh lọc cơ thể, hỗ trợ đào thải mỡ xấu và kiểm soát cân nặng an toàn ngay tại nhà',
    description:
      'Thất Bảo Trà – Trà Táo Mèo SONG DIỆU, hộp 30 gói: trà thảo mộc hỗ trợ chuyển hoá, thanh lọc, đồng hành chăm sóc vóc dáng. Freeship.',
    image: taoMeoMoi1,
    gallery: [
      { src: taoMeoMoi1, alt: 'Hộp Thất Bảo Trà – Trà Táo Mèo bên quả táo mèo' },
      { src: taoMeoMoi2, alt: 'Khách hàng thưởng thức Trà Táo Mèo' },
      { src: taoMeoMoi3, alt: 'Công dụng và hướng dẫn dùng Trà Táo Mèo' },
      { src: taoMeoMoi4, alt: 'Khách hàng cầm hộp Trà Táo Mèo' },
      { src: taoMeoMoi5, alt: 'Chủ thương hiệu SONG DIỆU dùng Trà Táo Mèo tại văn phòng' },
      { src: taoMeoMoi6, alt: 'Hộp Trà Táo Mèo và tách trà thảo mộc' },
    ],
    size: 'Hộp 30 gói x 3g',
    offers: [
      { label: 'Combo 3 hộp', price: 450000, note: 'Freeship' },
      { label: 'Mua 6 tặng 4 (10 hộp)', price: 999000, note: 'Freeship', best: true },
    ],
    benefits: [
      'Thảo dược lành tính, không gây nóng trong',
      'Hỗ trợ quá trình giảm cân, kiểm soát vóc dáng khi kết hợp ăn uống hợp lý',
      'Hỗ trợ hạn chế hấp thu dầu mỡ từ bữa ăn nhiều dầu mỡ',
      'Hỗ trợ cảm giác no, hạn chế ăn vặt',
      'Vị thanh mát, dễ uống – thay nước lọc mỗi ngày, dễ duy trì',
      'Có thành phần chè vằng – mẹ sau sinh dùng được, hỗ trợ lợi sữa',
    ],
    ingredientsIntro: '4 thảo mộc trong mỗi túi 3g – vị thanh mát, dễ uống, thay nước lọc mỗi ngày.',
    ingredients: [
      { name: 'Táo mèo', icon: 'berry', amount: '40%', desc: 'Thành phần chính của trà, vị chua thanh, hỗ trợ hạn chế hấp thu dầu mỡ từ bữa ăn.' },
      { name: 'Lá sen', icon: 'flower', amount: '30%', desc: 'Hương thơm dịu, thanh mát, đồng hành cùng hành trình kiểm soát vóc dáng.' },
      { name: 'Chè vằng', icon: 'leaf', amount: '20%', desc: 'Thảo mộc quen thuộc của mẹ sau sinh, hỗ trợ lợi sữa.' },
      { name: 'Cỏ ngọt', icon: 'sparkle', amount: '10%', desc: 'Tạo vị ngọt nhẹ tự nhiên, không đường.' },
    ],
    usage: [
      'Mỗi ngày pha 2–3 gói với 1,5–2 lít nước sôi, uống trong ngày thay nước lọc.',
      'Uống nóng hoặc để nguội, uống lạnh đều được; hạn chế uống khi quá đói.',
      '1 hộp 30 gói dùng khoảng 10–15 ngày: combo 3 hộp khoảng 1–1,5 tháng, 10 hộp khoảng 3,5–5 tháng.',
    ],
    notes: [
      'Không dùng cho phụ nữ đang mang thai.',
      'Đang dùng thuốc nên uống trà cách giờ uống thuốc khoảng 1–2 tiếng.',
      'Bảo quản nơi khô ráo, tránh nắng; không dùng khi hết hạn hoặc có mùi vị lạ. Hạn dùng 36 tháng.',
    ],
    legal: 'Tự công bố số 02/TVX/2026 – Công ty CP Dược Mỹ phẩm Tân Vạn Xuân; kiểm nghiệm IRDOP đạt (vi sinh, kim loại nặng, aflatoxin, thuốc BVTV).',
    faq: [
      { q: 'Trà có chứa caffeine, chất kích thích không?', a: 'Trà chỉ gồm 4 loại thảo mộc: táo mèo, lá sen, chè vằng, cỏ ngọt – là trà thảo mộc uống thay nước lọc, không phải viên uống giảm cân.' },
      { q: 'Uống trà có bị nóng trong không?', a: 'Trà hoàn toàn từ thảo mộc lành tính nên không nóng trong. Uống đúng hướng dẫn 2–3 gói/ngày thay nước lọc, hạn chế uống khi quá đói, đa số mọi người dùng hằng ngày được.' },
      { q: 'Có cần nhịn ăn khi uống trà không?', a: 'Không cần nhịn ăn. Chỉ cần uống trà thay nước lọc mỗi ngày, kết hợp ăn uống hợp lý – thói quen nhỏ, dễ duy trì.' },
      { q: 'Mẹ sau sinh, đang cho con bú có uống được không?', a: 'Mẹ sau sinh dùng được. Trà có chè vằng – thảo mộc quen thuộc hỗ trợ lợi sữa cho mẹ bỉm.' },
      { q: 'Đang uống thuốc huyết áp, tiểu đường có uống được không?', a: 'Trà thảo dược, uống thay nước lọc hằng ngày được; nên uống cách giờ uống thuốc khoảng 1–2 tiếng cho yên tâm.' },
      { q: 'Nên chọn combo 3 hộp hay 10 hộp?', a: 'Combo 3 hộp dùng khoảng 1–1,5 tháng để bắt đầu uống đều; muốn duy trì lâu dài thì combo 10 hộp (mua 6 tặng 4) dùng khoảng 3,5–5 tháng.' },
    ],
  },
  {
    slug: 'but-gel-hoang-cung-bao-phu-khang',
    sku: 'HCBPK',
    name: 'Bút Gel Hoàng Cung Bảo Phụ Khang',
    shortName: 'Bút gel HCBPK',
    category: 'Chăm sóc vùng kín',
    tagline: 'Hỗ trợ giảm tình trạng viêm nhiễm, viêm lộ tuyến, khí hư tái tạo và phục hồi niêm mạc vùng kín',
    description:
      'Bút gel Hoàng Cung Bảo Phụ Khang – gel thảo dược làm sạch dịu nhẹ vùng kín bên ngoài, khử mùi, hộp 8 bút. Mỹ phẩm đã công bố, freeship.',
    image: butMoi1,
    gallery: [
      { src: butMoi1, alt: 'Hộp và bút gel Hoàng Cung Bảo Phụ Khang' },
      { src: butMoi2, alt: 'Chủ thương hiệu SONG DIỆU với Trà Mâm Xôi và Bút Gel Hoàng Cung' },
      { src: butMoi3, alt: 'Khách hàng cầm Trà Mâm Xôi và Bút Gel Hoàng Cung' },
      { src: butMoi4, alt: 'Công dụng Bút Gel Hoàng Cung Bảo Phụ Khang' },
      { src: butMoi5, alt: 'Bút gel Hoàng Cung Bảo Phụ Khang – bí quyết vẻ đẹp an nhiên' },
      { src: butMoi6, alt: 'Thành phần hoạt động Bút Gel Hoàng Cung Bảo Phụ Khang' },
    ],
    size: 'Hộp 8 bút',
    offers: [
      { label: '1 hộp', price: 390000, note: 'Freeship' },
      { label: '2 hộp', price: 750000, note: 'Tặng 1 hộp Trà Mâm Xôi + Freeship', best: true },
      { label: 'Mua 4 tặng 1 hộp', price: 1500000, note: 'Freeship' },
    ],
    benefits: [
      'Detox, thải độc & làm sạch sâu vùng kín',
      'Hỗ trợ đào thải ổ viêm, chân nấm, vi khuẩn, tạp khuẩn',
      'Hỗ trợ làm sạch vùng kín nhẹ nhàng, khử mùi hôi',
      'Tái tạo, trẻ hóa & khôi phục độ đàn hồi "cô bé"',
      'Hỗ trợ dưỡng ẩm, làm mềm, tăng độ đàn hồi',
      'Hỗ trợ tái tạo và phục hồi niêm mạc vùng kín',
      'Bổ sung lợi khuẩn & bảo vệ hàng rào sinh lý tự nhiên',
      'Hỗ trợ phòng ngừa các bệnh phụ khoa',
    ],
    ingredientsIntro: '7 chiết xuất thảo dược cùng thành phần giữ ẩm, tạo mát – không chứa kháng sinh.',
    ingredients: [
      { name: 'Lá bàng', icon: 'leaf', desc: 'Thảo dược dân gian quen thuộc, giúp làm sạch dịu nhẹ.' },
      { name: 'Trinh nữ hoàng cung', icon: 'flower', desc: 'Thảo dược gắn với tên sản phẩm, chăm sóc vùng nhạy cảm.' },
      { name: 'Trầu không', icon: 'clover', desc: 'Lá trầu quen thuộc, giúp làm sạch và khử mùi.' },
      { name: 'Phục linh', icon: 'root', desc: 'Thảo dược dịu nhẹ, cho cảm giác dễ chịu.' },
      { name: 'Cỏ mực', icon: 'seed', desc: 'Thảo dược dân gian, hỗ trợ chăm sóc vùng da nhạy cảm.' },
      { name: 'Trà xanh', icon: 'leaf', desc: 'Giúp làm sạch, mang lại cảm giác thơm mát.' },
      { name: 'Hoa gạo', icon: 'flower', desc: 'Thảo dược dịu nhẹ, cho cảm giác mềm mại.' },
      { name: 'Glycerin', icon: 'drop', desc: 'Giữ ẩm, giúp giảm cảm giác khô.' },
      { name: 'Bạc keo', amount: 'Colloidal silver', icon: 'shield', desc: 'Giúp vùng kín thoáng sạch.' },
      { name: 'Menthol', icon: 'sparkle', desc: 'Tạo cảm giác mát dịu, thơm mát.' },
    ],
    usage: [
      'Mỗi hộp gồm 8 bút gel.',
      'Dùng mỗi ngày 1 bút, liên tục 14 ngày; giai đoạn duy trì dùng 2 bút mỗi tuần.',
    ],
    notes: [
      'Khi đến ngày hành kinh thì tạm ngưng sử dụng; sau khi sạch kinh hoàn toàn thì tiếp tục dùng tiếp liệu trình còn lại để hỗ trợ làm sạch cặn bẩn tồn đọng sau kỳ kinh.',
      'Khi dùng để dưỡng ẩm, bôi trơn tự nhiên: Nếu muốn hỗ trợ giảm khô rát và tăng cảm xúc trước khi gần gũi, nên bơm gel trước khi quan hệ khoảng 15 phút để tinh chất thẩm thấu và làm mềm niêm mạc tự nhiên.',
      'Không dùng cho phụ nữ đang mang thai. Phụ nữ đang mang thai tạm thời chưa sử dụng sản phẩm.',
    ],
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
    image: mamXoiMoi1,
    gallery: [
      { src: mamXoiMoi1, alt: 'Hộp Trà Mâm Xôi Tứ Vị và tách trà' },
      { src: mamXoiMoi2, alt: 'Khách hàng cầm Trà Mâm Xôi và Bút Gel Hoàng Cung' },
      { src: mamXoiMoi3, alt: 'Khách hàng cầm combo Trà Mâm Xôi và Bút Gel' },
      { src: mamXoiMoi4, alt: 'Công dụng Trà Mâm Xôi Tứ Vị' },
      { src: mamXoiMoi5, alt: 'Trà Mâm Xôi Tứ Vị và Bút Gel Hoàng Cung bên thảo dược' },
      { src: mamXoiMoi6, alt: 'Khách hàng cầm Trà Mâm Xôi và Bút Gel Hoàng Cung' },
    ],
    size: 'Hộp 20 gói x 4g',
    offers: [],
    benefits: [
      'Hỗ trợ cân bằng nội tiết tố nữ',
      'Bổ máu, dưỡng huyết, làm ấm tử cung',
      'Hỗ trợ điều hòa kinh nguyệt, giảm đau bụng kinh',
      'Hỗ trợ giảm bốc hỏa, khó ngủ',
    ],
    ingredientsIntro: '4 thảo dược truyền thống chăm sóc sức khỏe phụ nữ, vị ngọt tự nhiên không đường.',
    ingredients: [
      { name: 'Mâm xôi rừng', icon: 'berry', desc: 'Thảo dược truyền thống chăm sóc sức khỏe phụ nữ.' },
      { name: 'Sâm tố nữ', icon: 'root', desc: 'Hỗ trợ cân bằng nội tiết tố.' },
      { name: 'Cỏ ngọt', icon: 'leaf', desc: 'Tạo vị ngọt tự nhiên, không đường.' },
      { name: 'Cỏ máu', icon: 'heart', desc: 'Hỗ trợ bổ huyết, dưỡng huyết.' },
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
