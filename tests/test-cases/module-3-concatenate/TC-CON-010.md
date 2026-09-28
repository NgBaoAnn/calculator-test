# TC-CON-010: Bắt lỗi khi trường Second number chứa chữ cái trên phép toán số học

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Validation / Negative Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 25 |
| Second number | xyz |
| Operation | Add |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Nhập "25" vào trường First number
4. Nhập "xyz" vào trường Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hệ thống không thực hiện phép tính cộng. Trường Answer (numberAnswerField) không hiển thị kết quả tính. Hiển thị thông báo lỗi màu đỏ tại errorMsgField: "Number 2 is not a number".

## Status / Related bugs
Not Run / None
