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
export interface Feedback { src: ImageMetadata; alt: string; caption: string }
export const FEEDBACK: Record<string, Feedback[]> = {
  'vien-uong-noi-tiet-xuan-nu-nhan': [
    { src: xnnFb1, alt: 'Tin nhắn phản hồi của khách hàng dùng Xuân Nữ Nhan', caption: 'Khách hàng nhắn lại sau 1 tuần sử dụng và đặt thêm 4 hộp (đã ẩn thông tin cá nhân).' },
  ],
};
