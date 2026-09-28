# TC-DIV-008: Bắt lỗi ngoại lệ 0 chia 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Negative / Decision Table Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 0 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "0" vào cả First number và Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Trang không crash; Answer không hiển thị `NaN`. errorMsgField hiển thị chữ đỏ chính xác: "Divide by zero error!".

## Status / Related bugs
Not Run / None
