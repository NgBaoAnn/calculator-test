# TC-BLD-006: Kiểm tra chặn phép chia cho 0

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Error Guessing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 0 | Divide |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu, chọn Divide và nhấn Calculate.
2. Quan sát thông báo lỗi và Answer.

## Expected result
- Hiển thị "Divide by zero error!" và không đưa Infinity hoặc NaN vào Answer.
- Ghi nhận Fail nếu phép chia cho 0 tạo kết quả số không hợp lệ.

## Status / Related bugs
Not Run / None
