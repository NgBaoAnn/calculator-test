# 📋 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN TEST RUN: SPRINT 1 (PROTOTYPE)

---

## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)

| Mục | Thông tin chi tiết |
| :--- | :--- |
| **Mã Test Run** | `TR-SPRINT-01` |
| **Tên đợt kiểm thử** | Sprint 1 Test Execution - Basic Calculator Prototype & Baseline Testing |
| **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
| **Phiên bản ứng dụng (Build)** | `Build 0 (Prototype)` |
| **Trình duyệt / Hệ điều hành** | Chrome 122, Edge, Firefox trên macOS / Windows 11 |
| **Thời gian thực hiện** | 2026-09-28 đến 2026-10-02 |
| **Trưởng nhóm QA** | QA Lead |
| **Người thực hiện** | Nhóm 4 thành viên (Thành viên 1, 2, 3, 4) |

---

## 📊 TỔNG KẾT KẾT QUẢ (EXECUTIVE SUMMARY)

| Chỉ số | Số lượng | Tỷ lệ (%) |
| :--- | :---: | :---: |
| **Tổng số Test Cases** | 8 | 100% |
| 🟢 **Đạt (Passed)** | 8 | 100% |
| 🔴 **Thất bại (Failed)** | 0 | 0% |
| 🟡 **Bị chặn (Blocked)** | 0 | 0% |
| ⚪ **Chưa chạy (Untested)** | 0 | 0% |
| **Tỷ lệ Pass / Executed** | **8 / 8** | **100%** |

---

## 📝 BẢNG CHI TIẾT THỰC THI TEST CASES (EXECUTION DETAILS)

| STT | Mã Test Case | Module | Tên Test Case | Kết quả | Người test | Ngày test | Ghi chú |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| 1 | `TC-ARI-001` | Module 1 | Phép cộng hai số nguyên dương | `PASS` | Thành viên 1 | 2026-09-28 | Kết quả chính xác |
| 2 | `TC-ARI-002` | Module 1 | Kiểm tra biên độ dài 10 chữ số | `PASS` | Thành viên 1 | 2026-09-28 | maxlength=10 hoạt động |
| 3 | `TC-DIV-001` | Module 2 | Phép chia hết hai số nguyên | `PASS` | Thành viên 2 | 2026-09-28 | Kết quả chính xác |
| 4 | `TC-DIV-002` | Module 2 | Bắt lỗi ngoại lệ chia cho 0 | `PASS` | Thành viên 2 | 2026-09-28 | Bắt đúng "Divide by zero error!" |
| 5 | `TC-CON-001` | Module 3 | Phép ghép chuỗi hai số hợp lệ | `PASS` | Thành viên 3 | 2026-09-28 | Nối chuỗi đúng |
| 6 | `TC-CON-002` | Module 3 | Bắt lỗi nhập chữ vào phép toán | `PASS` | Thành viên 3 | 2026-09-28 | Bắt đúng "is not a number" |
| 7 | `TC-FMT-001` | Module 4 | Làm tròn số nguyên Integers only | `PASS` | Thành viên 4 | 2026-09-28 | Làm tròn đúng |
| 8 | `TC-FMT-002` | Module 4 | Nút Clear xóa kết quả | `PASS` | Thành viên 4 | 2026-09-28 | Reset thành công |

---

## 🎯 ĐÁNH GIÁ & KẾT LUẬN (CONCLUSION)
- **Đánh giá chung**: Trên phiên bản chuẩn **Prototype**, toàn bộ 4 Module đều hoạt động chính xác theo đặc tả toán học và yêu cầu giao diện.
- **Kế hoạch tiếp theo**: Tiến hành Sprint 2 kiểm thử đối sánh (Bug Hunting Matrix) trên các bản build lỗi từ **Build 1 đến Build 9** để bắt các lỗi có chủ đích.
