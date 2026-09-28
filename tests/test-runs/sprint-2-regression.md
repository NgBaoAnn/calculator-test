# 🔄 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN KIỂM THỬ: SPRINT 2 (BUG HUNTING BUILDS 1-9)

---

## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)

| Mục | Thông tin chi tiết |
| :--- | :--- |
| **Mã Test Run** | `TR-SPRINT-02-BUILDS` |
| **Tên đợt kiểm thử** | Sprint 2 - Bug Hunting Across Builds 1 to 9 & Regression |
| **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
| **Các phiên bản kiểm thử** | `Build 1` đến `Build 9` |
| **Thời gian thực hiện** | 2026-10-05 đến 2026-10-09 |
| **Người thực hiện** | Nhóm 4 thành viên |

---

## 🎯 CHIẾN LƯỢC KIỂM THỬ (TEST STRATEGY)
1. Chạy lại bộ kịch bản kiểm thử cốt lõi (Regression Suite) trên từng bản Build từ 1 đến 9.
2. Đối chiếu kết quả thực tế trên từng Build với kết quả chuẩn trên bản Prototype.
3. Ghi nhận lỗi đặc thù của từng bản Build vào bảng ma trận phát hiện lỗi.

---

## 🐛 MA TRẬN BẮT LỖI TRÊN CÁC BẢN BUILD (BUG HUNTING MATRIX)

| Mã Build | Module ảnh hưởng | Mã Test Case | Hiện tượng lỗi thực tế phát hiện | Đánh giá lỗi |
| :---: | :--- | :---: | :--- | :---: |
| **Build 1** | Module 1 (Arithmetic) | `TC-ARI-001` | Phép trừ bị tính sai kết quả hoặc phép cộng cộng chuỗi | Có lỗi |
| **Build 2** | Module 2 (Division) | `TC-DIV-002` | Chia cho 0 không báo lỗi mà trả về giá trị bất thường | Có lỗi |
| **Build 3** | Module 3 (Concatenate) | `TC-CON-001` | Ghép chuỗi bị chèn ký tự lạ hoặc lỗi hiển thị | Có lỗi |
| **Build 4** | Module 4 (Formatting) | `TC-FMT-001` | Checkbox "Integers only" không làm tròn số | Có lỗi |

---

## 🚀 KẾT LUẬN
- Ma trận bắt lỗi giúp sinh viên đối sánh chính xác hành vi sai lệch giữa phiên bản lỗi và phiên bản chuẩn Prototype theo đúng mục tiêu môn học Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM).
