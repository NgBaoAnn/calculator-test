# 📋 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN TEST RUN: SPRINT 1

---

## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)

| Mục | Thông tin chi tiết |
| :--- | :--- |
| **Mã Test Run** | `TR-SPRINT-01` |
| **Tên đợt kiểm thử** | Sprint 1 Test Execution - Authentication & Core Features |
| **Môi trường thử nghiệm** | Staging (`https://staging.example.com`) |
| **Phiên bản ứng dụng (Build)** | `v1.0.0-rc.1` |
| **Hệ điều hành / Trình duyệt** | Windows 11 (Chrome 122), macOS Sonoma (Safari 17) |
| **Thời gian thực hiện** | 2026-09-28 đến 2026-10-02 |
| **Trưởng nhóm QA** | QA Lead |
| **Người thực hiện** | QA Team (4 Thành viên) |

---

## 📊 TỔNG KẾT KẾT QUẢ (EXECUTIVE SUMMARY)

| Chỉ số | Số lượng | Tỷ lệ (%) |
| :--- | :---: | :---: |
| **Tổng số Test Cases** | 20 | 100% |
| 🟢 **Đạt (Passed)** | 16 | 80% |
| 🔴 **Thất bại (Failed)** | 3 | 15% |
| 🟡 **Bị chặn (Blocked)** | 1 | 5% |
| ⚪ **Chưa chạy (Untested)** | 0 | 0% |
| **Tỷ lệ Pass / Executed** | **16 / 20** | **80%** |

```
Trạng thái thực thi:
[████████████████░░░░] 80% Passed | 15% Failed | 5% Blocked
```

---

## 📝 BẢNG CHI TIẾT THỰC THI TEST CASES (EXECUTION DETAILS)

| STT | Mã Test Case | Module | Tên Test Case | Kết quả | Người test | Ngày test | Mã Bug (nếu có) |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | `TC-LOGIN-001` | Login | Đăng nhập hợp lệ | `PASS` | Tester A | 2026-09-28 | - |
| 2 | `TC-LOGIN-002` | Login | Đăng nhập sai mật khẩu | `PASS` | Tester A | 2026-09-28 | - |
| 3 | `TC-LOGIN-003` | Login | Đăng nhập với email chưa đăng ký | `PASS` | Tester A | 2026-09-28 | - |
| 4 | `TC-LOGIN-004` | Login | Đăng nhập để trống trường thông tin | `PASS` | Tester A | 2026-09-28 | - |
| 5 | `TC-LOGIN-005` | Login | Khóa tài khoản sau 5 lần nhập sai | `FAIL` | Tester A | 2026-09-28 | [BUG-001](#danh-sách-lỗi-phát-hiện-defects-log) |
| 6 | `TC-REG-001` | Register | Đăng ký tài khoản hợp lệ | `PASS` | Tester B | 2026-09-29 | - |
| 7 | `TC-REG-002` | Register | Đăng ký với email trùng lặp | `PASS` | Tester B | 2026-09-29 | - |
| 8 | `TC-REG-003` | Register | Mật khẩu không thỏa độ phức tạp | `FAIL` | Tester B | 2026-09-29 | [BUG-002](#danh-sách-lỗi-phát-hiện-defects-log) |
| 9 | `TC-CHK-001` | Checkout | Thanh toán thẻ tín dụng hợp lệ | `PASS` | Tester C | 2026-09-30 | - |
| 10 | `TC-CHK-002` | Checkout | Thanh toán với thẻ hết hạn | `BLOCK` | Tester C | 2026-09-30 | [BUG-003](#danh-sách-lỗi-phát-hiện-defects-log) |

---

## 🐛 DANH SÁCH LỖI PHÁT HIỆN (DEFECTS LOG)

| Mã Bug | Test Case | Tiêu đề lỗi | Mức độ nghiêm trọng | Trạng thái | Gán cho |
| :---: | :---: | :--- | :---: | :---: | :---: |
| `BUG-001` | `TC-LOGIN-005` | Hệ thống không khóa tài khoản sau 5 lần nhập sai mật khẩu | `High` | `Open` | Dev Team |
| `BUG-002` | `TC-REG-003` | Cho phép đăng ký mật khẩu chỉ có 4 ký tự | `Medium` | `In Progress` | Dev Team |
| `BUG-003` | `TC-CHK-002` | Payment Gateway timeout khi kiểm tra thẻ hết hạn | `Critical` | `Open` | Dev Team |

---

## 🎯 ĐÁNH GIÁ & KẾT LUẬN (CONCLUSION)
- **Đánh giá chung**: Các tính năng luồng chính (Happy Path) của Authentication và Checkout cơ bản hoạt động ổn định.
- **Rủi ro**: Lỗi bảo mật liên quan đến giới hạn số lần thử mật khẩu và độ mạnh mật khẩu cần được khắc phục trước khi triển khai production.
- **Khuyến nghị**: Tiếp tục sửa lỗi `BUG-001`, `BUG-002`, `BUG-003` và tiến hành Regression Test ở Sprint 2.
