# Quản lý nhạc Famstyle

Phần quản lý nằm trên GitHub, không xuất hiện trên website. Chỉ tài khoản có quyền ghi vào repository mới có thể thay đổi cấu hình công khai. Đăng nhập mô phỏng trên website không cấp quyền quản lý.

1. Đăng nhập GitHub của bạn, mở file `music.json` và chọn chỉnh sửa.
2. Thêm đường dẫn trực tiếp đến file âm thanh HTTPS hoặc file đã tải vào repository (ví dụ `music/bai-1.mp3`). Link trang YouTube/Spotify không phải đường dẫn file âm thanh.
3. Đặt `enabled` thành `true` để bật, hoặc `false` để tắt nhạc toàn website. Lưu bằng Commit changes.

Ví dụ cấu hình sau khi đã tải file âm thanh tương ứng:

```json
{
  "enabled": true,
  "tracks": [
    {"title": "Nhạc cửa hàng", "url": "music/bai-1.mp3"}
  ]
}
```

Cấu hình hiện tại để tắt và danh sách trống vì chưa có bài nhạc được cung cấp. Chỉ thêm nhạc bạn được phép sử dụng. File âm thanh và danh sách bài hát là công khai; không đưa mật khẩu hoặc token vào đây.

Sau khi GitHub Pages triển khai bản mới, trang đang mở kiểm tra cấu hình mỗi 60 giây khi đang hiển thị, hoặc khi khách quay lại tab. Khi tắt toàn website, trình phát dừng và ẩn sau lần kiểm tra tiếp theo. Bài nhạc không tự phát: khách bấm biểu tượng ♪ ở góc trái dưới và chọn Phát nhạc. Khách có thể tạm dừng, chỉnh âm lượng và chuyển bài cho thiết bị của họ; các thao tác này không đổi cấu hình của cửa hàng.
