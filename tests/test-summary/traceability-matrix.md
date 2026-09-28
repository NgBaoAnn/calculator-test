# 📊 MA TRẬN TRUY XUẤT NGUỒN GỐC YÊU CẦU (REQUIREMENTS TRACEABILITY MATRIX - RTM)

---

## 📌 1. TỔNG QUAN & MỤC TIÊU
Ma trận Truy xuất Nguồn gốc Yêu cầu (RTM) đối với ứng dụng **Basic Calculator** nhằm đảm bảo toàn bộ 4 Module chức năng của hệ thống được bao phủ đầy đủ bởi các kịch bản kiểm thử (Test Cases), phục vụ kiểm thử đối sánh giữa bản **Prototype** và **Builds 1 - 9**.

---

## 📈 2. THỐNG KÊ TESTCASE THEO 4 MODULE

| Module | Tên Module | Người phụ trách | Số Test Cases | Trạng thái thực thi |
| :---: | :--- | :--- | :---: | :---: |
| **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 18 | Chưa đối chiếu báo cáo với testcase |
| **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 13 | Chưa đối chiếu báo cáo với testcase |
| **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 22 | Chưa đối chiếu báo cáo với testcase |
| **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 16 | Testcase mới: Not Run |

---

## 🗺️ 3. BẢNG MA TRẬN TRUY XUẤT (TRACEABILITY MATRIX)

| Mã Yêu cầu (Req ID) | Module | Mô tả Yêu cầu Chức năng | Mã Test Case | Loại kiểm thử | Kỹ thuật áp dụng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-CALC-01** | Module 1 (Arithmetic) | Thực hiện chính xác các phép toán Cộng, Trừ, Nhân và ràng buộc biên độ dài tối đa 10 ký tự. | `TC-ARI-001` → `TC-ARI-018` | Functional<br>Boundary | Phân vùng tương đương (EP)<br>Phân tích giá trị biên (BVA) |
| **FR-CALC-02** | Module 2 (Division) | Thực hiện phép chia theo thứ tự Number 1 / Number 2 với số nguyên, số thực và số âm; xử lý mọi trường hợp mẫu số bằng 0 bằng thông báo "Divide by zero error!"; xóa lỗi sau một phép tính hợp lệ. | `TC-DIV-001` đến `TC-DIV-013` | Functional<br>Negative<br>Boundary<br>State Transition | Phân vùng tương đương (EP)<br>Đoán lỗi (Error Guessing)<br>Phân tích giá trị biên (BVA)<br>Bảng quyết định<br>State Transition |
| **FR-CALC-03** | Module 3 (Concatenate) | Ghép chuỗi văn bản và số; kiểm tra validation bắt lỗi nhập ký tự không phải số ("is not a number"). | `TC-CON-001`–`TC-CON-022` | Functional<br>Validation | Phân vùng tương đương (EP)<br>Negative Testing |
| **FR-CALC-04** | Module 4 (Formatting & Builds) | Integers only, Clear, trạng thái Calculate và đối sánh Prototype với Build 1–9. | `TC-FMT-001`–`TC-FMT-007`<br>`TC-BLD-001`–`TC-BLD-009` | Functional<br>UI / State<br>Regression | State Transition<br>Bug Hunting Matrix |

Các testcase Module 4 mới chỉ được thiết kế (`Not Run`); tỷ lệ bao phủ thực thi chỉ được cập nhật sau khi chạy và ghi bằng chứng. Báo cáo test run cũ chưa được sửa hoặc dùng làm kết quả thực thi cho các case mới.
