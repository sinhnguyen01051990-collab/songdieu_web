import type { ImageMetadata } from 'astro';
import gelV1 from '../assets/images/video/gel_video_01.jpg';
import gelV2 from '../assets/images/video/gel_video_06.jpg';
import xnnV1 from '../assets/images/video/xnn_video_04.jpg';
import xnnV2 from '../assets/images/video/xnn_video_07.jpg';
import traV1 from '../assets/images/video/tra_video_00.jpg';
import traV2 from '../assets/images/video/tra_video_02.jpg';
import butV1 from '../assets/images/video/but_video_01.jpg';
import butV2 from '../assets/images/video/but_video_05.jpg';
import xnnFb1 from '../assets/images/feedback/xnn-fb-1.jpg';
import gelFb1 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-1.jpg';
import gelFbN1 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-1.jpg';
import gelFb2 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-2.jpg';
import gelFbN2 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-2.jpg';
import gelFb3 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-3.jpg';
import gelFbN3 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-3.jpg';
import gelFb4 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-4.jpg';
import gelFbN4 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-4.jpg';
import gelFb5 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-5.jpg';
import gelFbN5 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-5.jpg';
import gelFb6 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-6.jpg';
import gelFbN6 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-6.jpg';
import gelFb7 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-7.jpg';
import gelFbN7 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-7.jpg';
import gelFb8 from '../assets/images/feedback/gel-sdbody/gel-sdbody-fb-8.jpg';
import gelFbN8 from '../assets/images/feedback/gel-sdbody/nho/gel-sdbody-fb-8.jpg';
import traFb1 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-1.jpg';
import traFbN1 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-1.jpg';
import traFb2 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-2.jpg';
import traFbN2 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-2.jpg';
import traFb3 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-3.jpg';
import traFbN3 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-3.jpg';
import traFb4 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-4.jpg';
import traFbN4 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-4.jpg';
import traFb5 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-5.jpg';
import traFbN5 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-5.jpg';
import traFb6 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-6.jpg';
import traFbN6 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-6.jpg';
import traFb7 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-7.jpg';
import traFbN7 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-7.jpg';
import traFb8 from '../assets/images/feedback/tra-tao-meo/tra-tao-meo-fb-8.jpg';
import traFbN8 from '../assets/images/feedback/tra-tao-meo/nho/tra-tao-meo-fb-8.jpg';
import xnnFbs1 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-1.jpg';
import xnnFbsN1 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-1.jpg';
import xnnFbs2 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-2.jpg';
import xnnFbsN2 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-2.jpg';
import xnnFbs3 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-3.jpg';
import xnnFbsN3 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-3.jpg';
import xnnFbs4 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-4.jpg';
import xnnFbsN4 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-4.jpg';
import xnnFbs5 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-5.jpg';
import xnnFbsN5 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-5.jpg';
import xnnFbs6 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-6.jpg';
import xnnFbsN6 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-6.jpg';
import xnnFbs7 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-7.jpg';
import xnnFbsN7 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-7.jpg';
import xnnFbs8 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-8.jpg';
import xnnFbsN8 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-8.jpg';
import xnnFbs9 from '../assets/images/feedback/xuan-nu-nhan/xuan-nu-nhan-fb-9.jpg';
import xnnFbsN9 from '../assets/images/feedback/xuan-nu-nhan/nho/xuan-nu-nhan-fb-9.jpg';
import butFb1 from '../assets/images/feedback/but-gel/but-gel-fb-1.jpg';
import butFbN1 from '../assets/images/feedback/but-gel/nho/but-gel-fb-1.jpg';
import butFb2 from '../assets/images/feedback/but-gel/but-gel-fb-2.jpg';
import butFbN2 from '../assets/images/feedback/but-gel/nho/but-gel-fb-2.jpg';
import butFb3 from '../assets/images/feedback/but-gel/but-gel-fb-3.jpg';
import butFbN3 from '../assets/images/feedback/but-gel/nho/but-gel-fb-3.jpg';
import butFb4 from '../assets/images/feedback/but-gel/but-gel-fb-4.jpg';
import butFbN4 from '../assets/images/feedback/but-gel/nho/but-gel-fb-4.jpg';
import butFb5 from '../assets/images/feedback/but-gel/but-gel-fb-5.jpg';
import butFbN5 from '../assets/images/feedback/but-gel/nho/but-gel-fb-5.jpg';
import butFb6 from '../assets/images/feedback/but-gel/but-gel-fb-6.jpg';
import butFbN6 from '../assets/images/feedback/but-gel/nho/but-gel-fb-6.jpg';
import butFb7 from '../assets/images/feedback/but-gel/but-gel-fb-7.jpg';
import butFbN7 from '../assets/images/feedback/but-gel/nho/but-gel-fb-7.jpg';

/**
 * Video từ kho "Video Ads" Google Drive (file phải để chế độ "Bất kỳ ai có đường liên kết").
 * Chỉ chọn video chủ thương hiệu giới thiệu sản phẩm – KHÔNG dùng video có chữ cam kết số đo,
 * gọi video với khách (lộ mặt khách) hoặc tên cũ "Bút Thần Phụ Khoa".
 */
export interface Video { driveId: string; poster: ImageMetadata; title: string }
export const VIDEOS: Record<string, Video[]> = {
  'gel-gung-que-sdbody': [
    { driveId: '1gV__3YULphWLlWB5t8GJkI0WNPaUsx6I', poster: gelV1, title: 'Chia sẻ về Gel gừng quế SDBODY' },
    { driveId: '1xykY44DHrHWlvhAXyyaztUy--n6oGSCg', poster: gelV2, title: 'Gel SDBODY & Trà Táo Mèo – chăm ngoài, uống trong' },
  ],
  'vien-uong-noi-tiet-xuan-nu-nhan': [
    { driveId: '1jsotBuXM7PWPfZmD7wA0r7h_B_-zyuwI', poster: xnnV1, title: 'Giới thiệu viên uống Xuân Nữ Nhan' },
    { driveId: '1hAnjVqYRvYVTeitHACwaGHOqFp7smIUA', poster: xnnV2, title: 'Xuân Nữ Nhan – cách dùng đúng' },
  ],
  'tra-tao-meo': [
    { driveId: '1x_ws-8dTfonBJzhRz9Qe0no_Z59AVLDO', poster: traV1, title: 'Chia sẻ về Trà Táo Mèo' },
    { driveId: '1XJ_lGN8qaxs4pajKwrXqWkwxxDoBRYq-', poster: traV2, title: 'Trà Táo Mèo và những điều cần biết' },
  ],
  'but-gel-hoang-cung-bao-phu-khang': [
    { driveId: '1bTm7OE2mm_wpgyJZkOh9nhOXZahxwEBR', poster: butV1, title: 'Giới thiệu Bút gel Hoàng Cung Bảo Phụ Khang' },
    { driveId: '1KJFskwRyEFxZGY6sUSFPsqcKri-loEhS', poster: butV2, title: 'Kết cấu gel – cách dùng Bút gel' },
  ],
};

/**
 * Ảnh feedback khách hàng – CHỈ thêm ảnh đã được chủ shop duyệt và đã làm mờ tên, ảnh đại diện, SĐT.
 * Danh sách ảnh chờ duyệt: docs/feedback-cho-duyet.md
 */
export interface Feedback {
  src: ImageMetadata; alt: string; caption: string;
  /** ảnh nhỏ chỉ phần tin nhắn (thẻ), nhãn nổi bật và dòng ngày – dùng ở khối Phản Hồi trang sản phẩm */
  thumb?: ImageMetadata; tag?: string; note?: string;
}
export const FEEDBACK: Record<string, Feedback[]> = {
  'vien-uong-noi-tiet-xuan-nu-nhan': [
    { src: xnnFb1, alt: 'Tin nhắn phản hồi của khách hàng dùng Xuân Nữ Nhan', caption: 'Khách hàng nhắn lại sau 1 tuần sử dụng và đặt thêm 4 hộp (đã ẩn thông tin cá nhân).' },
  ],
};

/**
 * Khối "Phản Hồi Của Khách Hàng" ở trang chi tiết sản phẩm (18/11/2026).
 * Ảnh do anh Nhân duyệt, giữ nguyên nội dung ảnh gốc (Drive 1a3PykE-4d0OKLoRq7uaqs7Y869Fz7ASW, mỗi sản phẩm một thư mục).
 * Ảnh nhỏ (nho/) cắt sẵn phần tin nhắn; Gel/Trà/Xuân Nữ Nhan tỉ lệ 4:5, Bút gel 3:2.
 */
export const FEEDBACK_SP: Record<string, Feedback[]> = {
  'gel-gung-que-sdbody': [
    { src: gelFb1, thumb: gelFbN1, tag: 'Dùng thích lắm luôn', note: 'Kết hợp Gel SDBODY và Thất Bảo Trà', caption: 'Dùng thích lắm luôn – Kết hợp Gel SDBODY và Thất Bảo Trà',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: dùng thích lắm luôn, kết hợp Gel SDBODY và Thất Bảo Trà' },
    { src: gelFb2, thumb: gelFbN2, tag: 'Khách tự báo kết quả', note: 'Thấy vòng bụng xuống nhiều', caption: 'Khách tự báo kết quả – Thấy vòng bụng xuống nhiều',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: khách tự báo kết quả, thấy vòng bụng xuống nhiều' },
    { src: gelFb3, thumb: gelFbN3, tag: 'Dễ chịu, không nóng rát', note: 'Bôi xong không cần lau lại', caption: 'Dễ chịu, không nóng rát – Bôi xong không cần lau lại',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: dễ chịu, không nóng rát, bôi xong không cần lau lại' },
    { src: gelFb4, thumb: gelFbN4, tag: 'Mới xài 4 ngày đã mê', note: 'Khách tự quay video chia sẻ', caption: 'Mới xài 4 ngày đã mê – Khách tự quay video chia sẻ',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: mới xài 4 ngày đã mê, khách tự quay video chia sẻ' },
    { src: gelFb5, thumb: gelFbN5, tag: 'Dùng gần hết 2 tuýp', note: 'Thấy thay đổi rõ', caption: 'Dùng gần hết 2 tuýp – Thấy thay đổi rõ',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: dùng gần hết 2 tuýp, thấy thay đổi rõ' },
    { src: gelFb6, thumb: gelFbN6, tag: 'Bụng gọn hơn sau sinh', note: 'Kết hợp bôi gel và nịt bụng', caption: 'Bụng gọn hơn sau sinh – Kết hợp bôi gel và nịt bụng',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: bụng gọn hơn sau sinh, kết hợp bôi gel và nịt bụng' },
    { src: gelFb7, thumb: gelFbN7, tag: 'Dùng rất ok', note: 'Hết 1 tuýp, dùng tiếp', caption: 'Dùng rất ok – Hết 1 tuýp, dùng tiếp',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: dùng rất ok, hết 1 tuýp, dùng tiếp' },
    { src: gelFb8, thumb: gelFbN8, tag: 'Dùng chưa đều vẫn thấy khác', note: 'Khách tự đo và báo lại', caption: 'Dùng chưa đều vẫn thấy khác – Khách tự đo và báo lại',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Gel gừng quế SDBODY: dùng chưa đều vẫn thấy khác, khách tự đo và báo lại' },
  ],
  'tra-tao-meo': [
    { src: traFb1, thumb: traFbN1, tag: 'Nhẹ người, bụng hết căng', note: 'Uống đều sáng 1 gói, chiều 1 gói', caption: 'Nhẹ người, bụng hết căng – Uống đều sáng 1 gói, chiều 1 gói',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: nhẹ người, bụng hết căng, uống đều sáng 1 gói, chiều 1 gói' },
    { src: traFb2, thumb: traFbN2, tag: 'Đặt thêm 10 hộp', note: 'Dáng nhẹ hẳn, bụng nhỏ lại', caption: 'Đặt thêm 10 hộp – Dáng nhẹ hẳn, bụng nhỏ lại',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: đặt thêm 10 hộp, dáng nhẹ hẳn, bụng nhỏ lại' },
    { src: traFb3, thumb: traFbN3, tag: 'Đặt thêm 10 hộp', note: 'Bụng gọn hơn, đi làm đỡ mệt', caption: 'Đặt thêm 10 hộp – Bụng gọn hơn, đi làm đỡ mệt',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: đặt thêm 10 hộp, bụng gọn hơn, đi làm đỡ mệt' },
    { src: traFb4, thumb: traFbN4, tag: 'Uống trà kết hợp bôi gel', note: 'Trà dễ uống, ngọt ngọt', caption: 'Uống trà kết hợp bôi gel – Trà dễ uống, ngọt ngọt',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: uống trà kết hợp bôi gel, trà dễ uống, ngọt ngọt' },
    { src: traFb5, thumb: traFbN5, tag: 'Ngon và dễ ngủ', note: 'Hết 1 hộp, sẽ mua combo', caption: 'Ngon và dễ ngủ – Hết 1 hộp, sẽ mua combo',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: ngon và dễ ngủ, hết 1 hộp, sẽ mua combo' },
    { src: traFb6, thumb: traFbN6, tag: 'Uống hết sạch, “nghiện” luôn', note: 'Khách quay lại lấy hàng', caption: 'Uống hết sạch, “nghiện” luôn – Khách quay lại lấy hàng',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: uống hết sạch, “nghiện” luôn, khách quay lại lấy hàng' },
    { src: traFb7, thumb: traFbN7, tag: 'Đặt thêm 3 hộp', note: 'Dễ uống mà thơm', caption: 'Đặt thêm 3 hộp – Dễ uống mà thơm',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: đặt thêm 3 hộp, dễ uống mà thơm' },
    { src: traFb8, thumb: traFbN8, tag: 'Uống không mệt', note: 'Muốn giới thiệu cho người quen', caption: 'Uống không mệt – Muốn giới thiệu cho người quen',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Trà Táo Mèo: uống không mệt, muốn giới thiệu cho người quen' },
  ],
  'vien-uong-noi-tiet-xuan-nu-nhan': [
    { src: xnnFbs1, thumb: xnnFbsN1, tag: 'Đặt thêm 4 hộp', note: 'Sau 1 tuần, chồng khen', caption: 'Đặt thêm 4 hộp – Sau 1 tuần, chồng khen',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: đặt thêm 4 hộp, sau 1 tuần, chồng khen' },
    { src: xnnFbs2, thumb: xnnFbsN2, tag: 'Hết liệu trình, đặt tiếp', note: 'Ai cũng khen, chị tin tưởng', caption: 'Hết liệu trình, đặt tiếp – Ai cũng khen, chị tin tưởng',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: hết liệu trình, đặt tiếp, ai cũng khen, chị tin tưởng' },
    { src: xnnFbs3, thumb: xnnFbsN3, tag: 'Quay lại lấy liệu trình 7 hộp', note: 'Sau khi dùng 2 hộp', caption: 'Quay lại lấy liệu trình 7 hộp – Sau khi dùng 2 hộp',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: quay lại lấy liệu trình 7 hộp, sau khi dùng 2 hộp' },
    { src: xnnFbs4, thumb: xnnFbsN4, tag: 'Mua lần thứ 3', note: '5 hộp Xuân Nữ Nhan + 4 hộp Bút gel', caption: 'Mua lần thứ 3 – 5 hộp Xuân Nữ Nhan + 4 hộp Bút gel',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: mua lần thứ 3, 5 hộp Xuân Nữ Nhan + 4 hộp Bút gel' },
    { src: xnnFbs5, thumb: xnnFbsN5, tag: 'Mua lần thứ 2', note: 'Mua thêm Bút gel phụ khoa', caption: 'Mua lần thứ 2 – Mua thêm Bút gel phụ khoa',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: mua lần thứ 2, mua thêm Bút gel phụ khoa' },
    { src: xnnFbs6, thumb: xnnFbsN6, tag: 'Thấy khác chỉ sau vài ngày', note: 'Khách tự nhắn chia sẻ', caption: 'Thấy khác chỉ sau vài ngày – Khách tự nhắn chia sẻ',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: thấy khác chỉ sau vài ngày, khách tự nhắn chia sẻ' },
    { src: xnnFbs7, thumb: xnnFbsN7, tag: 'Ngủ ngon hơn, bớt nóng trong', note: 'Sau gần 10 ngày dùng', caption: 'Ngủ ngon hơn, bớt nóng trong – Sau gần 10 ngày dùng',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: ngủ ngon hơn, bớt nóng trong, sau gần 10 ngày dùng' },
    { src: xnnFbs8, thumb: xnnFbsN8, tag: 'Dùng hết 2 hộp, lấy thêm', note: 'Tình cảm vợ chồng đi lên', caption: 'Dùng hết 2 hộp, lấy thêm – Tình cảm vợ chồng đi lên',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: dùng hết 2 hộp, lấy thêm, tình cảm vợ chồng đi lên' },
    { src: xnnFbs9, thumb: xnnFbsN9, tag: 'Lấy thêm 1 liệu trình', note: 'Da dẻ đẹp hơn trước', caption: 'Lấy thêm 1 liệu trình – Da dẻ đẹp hơn trước',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Viên uống nội tiết Xuân Nữ Nhan: lấy thêm 1 liệu trình, da dẻ đẹp hơn trước' },
  ],
  'but-gel-hoang-cung-bao-phu-khang': [
    { src: butFb1, thumb: butFbN1, tag: 'Đặt thêm 4 hộp', note: 'Đặt lần đầu 28/7 · quay lại 10/8', caption: 'Đặt thêm 4 hộp – Đặt lần đầu 28/7 · quay lại 10/8',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: đặt thêm 4 hộp, đặt lần đầu 28/7 · quay lại 10/8' },
    { src: butFb2, thumb: butFbN2, tag: 'Quay lại đặt thêm', note: 'Đặt lần đầu 22/7', caption: 'Quay lại đặt thêm – Đặt lần đầu 22/7',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: quay lại đặt thêm, đặt lần đầu 22/7' },
    { src: butFb3, thumb: butFbN3, tag: 'Đặt thêm 2 hộp', note: 'Sau khi dùng hết 6 bút', caption: 'Đặt thêm 2 hộp – Sau khi dùng hết 6 bút',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: đặt thêm 2 hộp, sau khi dùng hết 6 bút' },
    { src: butFb4, thumb: butFbN4, tag: 'Mua thêm cho người nhà', note: 'Đặt lần đầu 28/7 · quay lại 10/8', caption: 'Mua thêm cho người nhà – Đặt lần đầu 28/7 · quay lại 10/8',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: mua thêm cho người nhà, đặt lần đầu 28/7 · quay lại 10/8' },
    { src: butFb5, thumb: butFbN5, tag: 'Đặt thêm 1 hộp', note: 'Đặt lần đầu 31/7 · quay lại 3/8', caption: 'Đặt thêm 1 hộp – Đặt lần đầu 31/7 · quay lại 3/8',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: đặt thêm 1 hộp, đặt lần đầu 31/7 · quay lại 3/8' },
    { src: butFb6, thumb: butFbN6, tag: 'Đặt thêm 1 hộp', note: 'Khách cũ quay lại mua', caption: 'Đặt thêm 1 hộp – Khách cũ quay lại mua',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: đặt thêm 1 hộp, khách cũ quay lại mua' },
    { src: butFb7, thumb: butFbN7, tag: 'Đặt thêm 2 hộp', note: 'Đặt lần đầu 2/8 · quay lại 6/8', caption: 'Đặt thêm 2 hộp – Đặt lần đầu 2/8 · quay lại 6/8',
      alt: 'Tin nhắn phản hồi của khách hàng dùng Bút gel Hoàng Cung Bảo Phụ Khang: đặt thêm 2 hộp, đặt lần đầu 2/8 · quay lại 6/8' },
  ],
};
