# TC-CON-021: Bắt lỗi khi Second number chỉ chứa khoảng trắng trong phép toán số học

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Validation / Negative Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 10 |
| Second number | "   " (ba dấu cách) |
| Operation | Multiply |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Nhập "10" vào trường First number
4. Nhập đúng ba dấu cách vào trường Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Hệ thống không thực hiện phép nhân; trường Answer không hiển thị kết quả tính. Hiển thị thông báo "Number 2 is not a number" tại khu vực lỗi.

## Status / Related bugs
Not Run / None
