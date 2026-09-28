# Mã lỗi tham chiếu từ phân tích mã nguồn

Các mã `BUG-SRC-*` bắt nguồn từ bước đọc mã và được dùng ở cột `Related Bug` của ba bảng sprint. [Bug reports chính](bug-reports.md) bổ sung bằng chứng từ lượt chạy Playwright thực tế; các mã này chưa phải GitHub Issue ID. Nguồn đối chiếu mã: [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html), HTML SHA-256 `475f650ab2607d77620ac20269f95b845d7c210209542ecd492bd4cdc551d099` (đọc ngày 2026-09-28).

## BUG-SRC-01

Build 1 bỏ qua kiểm tra `isNaN` trong `calculate()`; đầu vào không phải số có thể trả `NaN` thay vì thông báo validation.

## BUG-SRC-02

Build 2 hoán đổi nhánh Add và Concatenate trong `calculate()`; kết quả hoặc validation khác Expected result.

## BUG-SRC-03

Build 3 luôn đặt `isNumber = true`; phép Concatenate bị xử lý như phép toán số về validation và trạng thái checkbox.

## BUG-SRC-04

Build 4 ép `Integers only` được chọn và khóa checkbox khi làm phép toán số; các bước cần bật/tắt hoặc kết quả thập phân bị ảnh hưởng.

## BUG-SRC-05

Build 5 vô hiệu hóa Clear ngay khi đổi Build; kiểm tra khả dụng của Clear trước khi Calculate không đạt. Nhánh hoàn tất Calculate có thể bật lại Clear.

## BUG-SRC-06

Build 6 bỏ kiểm tra chia cho 0; kết quả có thể là `Infinity` hoặc `NaN` thay vì thông báo lỗi.

## BUG-SRC-07

Build 7 dùng `answer` cũ thay cho First number trong `calculate()`; kết quả hoặc validation phụ thuộc trạng thái trước đó.

## BUG-SRC-08

Build 8 hoán đổi First number và Second number; phép toán không giao hoán hoặc tên trường validation có thể sai.

## BUG-SRC-09

Mã nguồn Build 9 ẩn và vô hiệu hóa Second number cùng Calculate. Trong lượt chạy Playwright, `TC-BLD-009` Fail do Second number bị ẩn; 68 ca khác được script skip và ghi Blocked.

## BUG-SRC-10

`isNaN('')` và `isNaN('   ')` đều trả `false`; các case yêu cầu lỗi cho ô rỗng hoặc toàn dấu cách nhận phép tính với giá trị 0 thay vì lỗi.

## BUG-SRC-11

Nhánh chia cho 0 gọi `setStatusError()` rồi `return` trước `unlockCalculate()`; nút Calculate và Clear tiếp tục bị khóa nên các bước phục hồi không thực hiện được.
