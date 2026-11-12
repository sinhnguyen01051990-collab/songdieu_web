# Website SONG DIỆU (songdieu.vn) – Astro 7 + Tailwind CSS 4

Website tĩnh (static), tải cực nhanh, chuẩn SEO. Không cần database hay WordPress.

## Chạy local
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # xuất ra thư mục dist/
npm run preview    # xem bản build
```

## Sửa nội dung ở đâu
| Muốn sửa | File |
|---|---|
| Hotline, email, địa chỉ, Zalo, Messenger, webhook form | `src/data/site.ts` |
| Sản phẩm: giá, combo, thành phần, cách dùng, FAQ, ảnh | `src/data/products.ts` |
| Đánh giá khách hàng, cam kết | `src/data/site.ts` |
| Viết bài tin tức | thêm file `.md` vào `src/content/tin-tuc/` |
| Ảnh | `src/assets/images/` (Astro tự nén WebP, đa kích thước) |
| Màu sắc, font | `src/styles/global.css` (`@theme`) |

## Nhận đơn hàng (đã chạy)
Form gửi về `https://songdieu.vn/api/lead` (Worker trong `worker/index.ts`):
1. Lưu vào Cloudflare D1 `songdieu-leads` (không bao giờ mất đơn).
2. Chuyển tiếp sang n8n: `N8N_WEBHOOK_URL` trong `wrangler.jsonc`.
   → Import `docs/n8n-WEB-01-lead-website.json` vào n8n, chọn credential Telegram + điền chat ID nhóm Sale, bật workflow.

Xem đơn: Cloudflare → Storage & databases → D1 → songdieu-leads → Console:
`select * from leads order by id desc limit 50;`
Đơn chưa chuyển được sang n8n: `select * from leads where forwarded = 0;`

## Đo lường
Điền mã trong `src/data/site.ts` → `analytics` (GA4, Meta Pixel, TikTok) rồi deploy. Sự kiện tự gửi:
`purchase_lead` (Lead), `generate_lead`, `form_start`, `click_call`, `click_zalo`, `video_play`.

## Landing page quảng cáo
`/lp/gel-gung-que-sdbody/`, `/lp/vien-uong-noi-tiet-xuan-nu-nhan/`, `/lp/tra-tao-meo/`, `/lp/but-gel-hoang-cung-bao-phu-khang/`
(noindex). Gắn UTM: `?utm_source=facebook&utm_campaign=...` – UTM được lưu kèm đơn.

## Form đặt hàng / liên hệ (cũ)
Điền `formEndpoint` trong `src/data/site.ts` (ví dụ webhook n8n). Form gửi JSON:
`{ product, offer, name, phone, address|email, message, type: "order"|"contact", page, at }`.
Chưa điền → form mở email soạn sẵn tới info@songdieu.vn.

## SEO đã có
- Giữ nguyên URL cũ: `/san-pham/gel-gung-que-sdbody/`, `/san-pham/vien-uong-noi-tiet-xuan-nu-nhan/`, `/gioi-thieu/`, `/lien-he/`, `/tin-tuc/`
- Title/description riêng từng trang, canonical, Open Graph, Twitter card
- Schema JSON-LD: Organization + LocalBusiness, WebSite, BreadcrumbList, Product (giá, freeship, giao 2–3 ngày), FAQPage, BlogPosting
- sitemap tự sinh (`/sitemap-index.xml`), robots.txt, trang 404
- Ảnh WebP responsive, lazy-load, font có subset tiếng Việt

## Deploy
```bash
npm run build && npx wrangler deploy
```

## Đưa lên tên miền (đã làm 11/11/2026)
Khuyên dùng **Cloudflare Pages** (miễn phí, CDN tại VN nhanh) hoặc Vercel/Netlify:
- Build command: `npm run build` — Output: `dist`
- Trỏ DNS songdieu.vn về Cloudflare, gắn custom domain.
- Sau khi lên: khai báo sitemap trong Google Search Console.
