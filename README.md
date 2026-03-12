# anh-duong-birthday-invitation

Web app thiệp mời thôi nôi cho `Bé Ánh Dương`, xây bằng Next.js App Router, TypeScript và Tailwind CSS, sẵn sàng deploy lên Vercel.

## Công nghệ

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `html-to-image` để xuất thiệp PNG
- `sonner` để hiển thị toast

## Tính năng

- Nhập tên khách mời và cập nhật nội dung thiệp theo thời gian thực
- Hỗ trợ query string dạng `/?guest=Nguyen%20Van%20A`
- Sao chép link mời cá nhân hóa
- Xuất thiệp dưới dạng PNG rõ nét
- Giao diện pastel mềm mại, responsive tốt trên mobile và desktop
- Nội dung thiệp được tách riêng trong file config để dễ chỉnh sửa

## File cấu hình nội dung

Chỉnh toàn bộ nội dung thiệp tại:

- `src/data/invitation.ts`

Bạn có thể sửa nhanh các trường:

- `babyName`
- `eventDate`
- `eventTime`
- `venueLabel`
- `venueAddress`
- `rsvpPhone`
- `primaryMessage`
- `secondaryMessage`
- `note`
- `closing`

## Cài dependencies

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

Mở `http://localhost:3000`

## Build production

```bash
npm run build
```

## Chạy production local

```bash
npm run start
```

## Deploy Vercel

### Cách 1: Import GitHub repo trên Vercel

1. Push project lên GitHub.
2. Vào Vercel, chọn `Add New Project`.
3. Chọn repo `Thiep-moi-tiec-thoi-noi` hoặc repo bạn muốn dùng.
4. Framework sẽ tự nhận là Next.js.
5. Giữ cấu hình mặc định và bấm `Deploy`.

### Cách 2: Dùng Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Push lên GitHub

```bash
git init
git add .
git commit -m "Create invitation web app"
git branch -M main
git remote add origin https://github.com/ThuKudo/Thiep-moi-tiec-thoi-noi.git
git push -u origin main
```

Nếu repo đã tồn tại và đã có remote, chỉ cần:

```bash
git add .
git commit -m "Create invitation web app"
git push
```
