# Ảnh feedback & video – quy trình duyệt trước khi đăng web

Ảnh feedback là ảnh chụp tin nhắn khách thật → **chỉ đăng khi**:
1. Chủ shop đã duyệt (khách đồng ý chia sẻ).
2. Đã làm mờ: tên khách, ảnh đại diện, SĐT, tên nhân viên, tên Facebook/Zalo.
3. Nội dung không cam kết số đo/cân nặng, không nói "chữa/khỏi/điều trị".

Kho Drive (đã có, chưa đăng):
| Sản phẩm | Kho feedback | Số ảnh |
|---|---|---|
| Gel SDBODY | https://drive.google.com/drive/folders/1tZkQdLPBo_X3IOAKetzJ5hoPfGe6jca1 | 50 |
| Xuân Nữ Nhan | https://drive.google.com/drive/folders/1d3SkIpCl1t9oxumOx6oWJl4tMSDJ7rbB | 23 |
| Trà Táo Mèo | https://drive.google.com/drive/folders/1pca1UvnCDfmI8jlfeuWkklghSQoODW4K | 25 |
| Bút gel HCBPK | https://drive.google.com/drive/folders/1ZDb7tNC_8TE_-e_-KdADBWBZjtoCmm4V | 33 |

Đã đăng: 1 ảnh Xuân Nữ Nhan (bot đã được duyệt dùng, đã làm mờ thêm tên khách + tên nhân viên).

Cách thêm: chép ảnh đã làm mờ vào `src/assets/images/feedback/`, khai báo trong `src/data/media.ts` (FEEDBACK), build + deploy.

Video: 8 video đang đăng (2/sản phẩm) – khai báo trong `src/data/media.ts` (VIDEOS). Đã loại video có chữ cam kết số đo, gọi video lộ mặt khách, tên cũ "Bút Thần Phụ Khoa". Nội dung lời nói trong video chưa được rà – anh xem lại, video nào không ưng thì xoá dòng tương ứng.
