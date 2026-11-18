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
 * Ảnh bút gel do anh Nhân duyệt, giữ nguyên nội dung ảnh gốc (Drive 1pF8wr8RyDz_bunxVBIQBIZ635ZH0BDbB).
 */
export const FEEDBACK_SP: Record<string, Feedback[]> = {
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
