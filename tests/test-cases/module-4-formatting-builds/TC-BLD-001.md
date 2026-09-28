# TC-BLD-001: Kiểm tra từ chối đầu vào không phải số

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
| abc | 2 | Add |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu và nhấn Calculate.
2. Quan sát thông báo lỗi và Answer sau khi xử lý.

## Expected result
- Hiển thị "Number 1 is not a number" và không tạo kết quả mới.
- Ghi nhận Fail nếu bỏ qua kiểm tra hoặc đưa NaN vào Answer.

## Status / Related bugs
Not Run / None
