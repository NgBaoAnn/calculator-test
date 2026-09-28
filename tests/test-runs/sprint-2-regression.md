# 🔄 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN KIỂM THỬ HỒI QUY: SPRINT 2 (REGRESSION RUN)

---

## 📌 THÔNG TIN ĐỢT KIỂM THỬ (REGRESSION METADATA)

| Mục | Thông tin chi tiết |
| :--- | :--- |
| **Mã Test Run** | `TR-SPRINT-02-REG` |
| **Tên đợt kiểm thử** | Sprint 2 - Regression Testing & Bug Verification |
| **Môi trường thử nghiệm** | Staging (`https://staging.example.com`) |
| **Phiên bản ứng dụng (Build)** | `v1.1.0-rc.2` |
| **Hệ điều hành / Trình duyệt** | Chrome, Firefox, Edge, Safari (Latest versions) |
| **Thời gian thực hiện** | 2026-10-05 đến 2026-10-09 |
| **Mục tiêu kiểm thử** | 1. Xác minh các lỗi phát hiện tại Sprint 1 đã được sửa triệt để.<br>2. Đảm bảo mã nguồn mới không làm ảnh hưởng đến các chức năng cũ đang hoạt động tốt. |

---

## 🎯 CHIẾN LƯỢC KIỂM THỬ HỒI QUY (REGRESSION STRATEGY)
1. **Defect Verification**: Kiểm thử lại toàn bộ các bug đã được đội phát triển đánh dấu `Resolved/Fixed` trong Sprint 1 (`BUG-001`, `BUG-002`, `BUG-003`).
2. **Core Smoke & Sanity**: Chạy lại các luồng cốt lõi (Authentication, Cart & Checkout).
3. **Boundary & Edge Cases**: Kiểm tra lại các trường hợp biên và xử lý lỗi hệ thống.

---

## 📊 TỔNG KẾT KẾT QUẢ (EXECUTIVE SUMMARY)

| Chỉ số | Số lượng | Tỷ lệ (%) |
| :--- | :---: | :---: |
| **Tổng số Test Cases Hồi quy** | 15 | 100% |
| 🟢 **Đạt (Passed)** | 15 | 100% |
| 🔴 **Thất bại (Failed)** | 0 | 0% |
| 🟡 **Bị chặn (Blocked)** | 0 | 0% |
| **Bugs đã Verify & Đóng (Closed)** | **3 / 3** | **100%** |

---

## 🔍 CHI TIẾT TÁI KIỂM THỬ LỖI (DEFECT RE-TEST RESULTS)

| Mã Bug | Test Case liên quan | Kết quả Re-test | Trạng thái mới | Ghi chú từ Tester |
| :---: | :---: | :---: | :---: | :--- |
| `BUG-001` | `TC-LOGIN-005` | `PASSED` | `Closed` | Tài khoản bị tạm khóa 15 phút sau 5 lần nhập sai. |
| `BUG-002` | `TC-REG-003` | `PASSED` | `Closed` | Hệ thống bắt buộc mật khẩu tối thiểu 8 ký tự, có chữ hoa, số và ký tự đặc biệt. |
| `BUG-003` | `TC-CHK-002` | `PASSED` | `Closed` | Trả về thông báo lỗi thẻ hết hạn sau 1.2s, không còn tình trạng gateway timeout. |

---

## 📝 BẢNG THỰC THI KIỂM THỬ HỒI QUY (REGRESSION SUITE EXECUTION)

| STT | Mã Test Case | Phân loại | Tên Test Case | Kết quả | Tester | Ghi chú |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- |
| 1 | `TC-LOGIN-001` | Sanity | Đăng nhập với tài khoản hợp lệ | `PASS` | Tester A | Hoạt động bình thường |
| 2 | `TC-LOGIN-002` | Sanity | Đăng nhập với mật khẩu không đúng | `PASS` | Tester A | Hiển thị cảnh báo đúng |
| 3 | `TC-LOGIN-005` | Bug Fix | Khóa tài khoản sau 5 lần nhập sai | `PASS` | Tester A | Fix verified |
| 4 | `TC-REG-001` | Smoke | Đăng ký tài khoản mới thành công | `PASS` | Tester B | Hoạt động bình thường |
| 5 | `TC-REG-003` | Bug Fix | Validation độ phức tạp của mật khẩu | `PASS` | Tester B | Fix verified |
| 6 | `TC-CHK-001` | Core E2E | Luồng thanh toán đơn hàng thành công | `PASS` | Tester C | Hoạt động bình thường |
| 7 | `TC-CHK-002` | Bug Fix | Xử lý lỗi thẻ thanh toán hết hạn | `PASS` | Tester C | Fix verified |

---

## 🚀 KẾT LUẬN & QUYẾT ĐỊNH PHÁT HÀNH (RELEASE SIGN-OFF)
- **Tình trạng chất lượng**: Bản build `v1.1.0-rc.2` đạt toàn bộ các tiêu chí chấp nhận (Acceptance Criteria).
- **Quyết định**: **GO TO PRODUCTION** ✅.
