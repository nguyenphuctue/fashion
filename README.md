# Hương Vintage - Landing page thời trang nữ

Website quảng bá thương hiệu thời trang nữ **Hương** theo phong cách **vintage**, xây dựng bằng **React + Tailwind CSS** (qua CDN), phù hợp triển khai nhanh trên GitHub Pages.

## Chạy local

```bash
python3 -m http.server 4173
```

Mở `http://localhost:4173` để xem website.

## Triển khai GitHub Pages

1. Push code lên nhánh `main`.
2. Vào **Settings → Pages** và chọn **Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` sẽ tự deploy website.

## Gợi ý tùy chỉnh

- Cập nhật logo/brand trong `src/app.jsx`.
- Thay ảnh sản phẩm trong mảng `collections`.
- Thêm liên kết Facebook/TikTok trong phần liên hệ.
