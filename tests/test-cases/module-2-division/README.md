# Module 2: Phép chia và xử lý ngoại lệ toán học

Template dùng chung cho test case: [TEST-CASE-TEMPLATE.md](../TEST-CASE-TEMPLATE.md)

## Requirement

`FR-CALC-02` — Hệ thống phải thực hiện phép chia theo thứ tự **First number / Second number**, hỗ trợ số nguyên và số thực, đồng thời chặn mọi trường hợp mẫu số bằng `0` bằng thông báo `Divide by zero error!`.

## Phạm vi và kỹ thuật kiểm thử

| Nhóm điều kiện | Test case | Kỹ thuật |
| :--- | :--- | :--- |
| Chia hết, kết quả nguyên | `TC-DIV-001` | Equivalence Partitioning |
| Mẫu số bằng 0, tử số khác 0 | `TC-DIV-002` | Error Guessing / Negative Testing |
| Kết quả thập phân hữu hạn | `TC-DIV-003` | Equivalence Partitioning |
| Kết quả thập phân tuần hoàn | `TC-DIV-004` | Equivalence Partitioning |
| Tử số bằng 0, mẫu số khác 0 | `TC-DIV-005` | Equivalence Partitioning |
| Toán hạng âm | `TC-DIV-006` | Equivalence Partitioning |
| Thứ tự toán hạng | `TC-DIV-007` | Error Guessing |
| `0 / 0` | `TC-DIV-008` | Negative Testing |
| Tính toán hợp lệ sau lỗi | `TC-DIV-009` | State Transition Testing |
| Hai toán hạng thập phân | `TC-DIV-010` | Equivalence Partitioning |
| Mẫu số âm 0 | `TC-DIV-011` | Error Guessing / Negative Testing |
| Thương nhỏ hơn 1 | `TC-DIV-012` | Equivalence Partitioning |
| Dữ liệu biên 10 ký tự | `TC-DIV-013` | Boundary Value Analysis |

## Bảng quyết định xử lý ngoại lệ

| Điều kiện | Mẫu số = 0 | Hai đầu vào là số | Hành động mong đợi |
| :--- | :---: | :---: | :--- |
| C1 | Không | Có | Hiển thị thương `First number / Second number`; không có lỗi |
| C2 | Có | Có | Không hiển thị `Infinity` hoặc `NaN`; hiện `Divide by zero error!` màu đỏ |
| C3 | Có (`0 / 0`) | Có | Áp dụng cùng xử lý C2 |

> Validation với dữ liệu không phải số thuộc Module 3. Bộ ca này giả định cả hai đầu vào đều là số hợp lệ.

## Tiêu chí hoàn thành

- Chạy toàn bộ 9 test case trên Build `Prototype`.
- So sánh chuỗi trong Answer theo giá trị số; với số tuần hoàn, chấp nhận độ chính xác hiển thị của JavaScript (sai số tối đa `1e-12`).
- Ghi kết quả thực thi vào test run, bao gồm ảnh chụp khi phát hiện lỗi.
