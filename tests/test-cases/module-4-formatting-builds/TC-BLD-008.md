# TC-BLD-008: Kiểm tra đúng thứ tự hai toán hạng

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 9 | 4 | Subtract | 5 |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu, chọn Subtract và nhấn Calculate.
2. Chờ Answer hiện và ghi kết quả.

## Expected result
- Answer là 5 theo thứ tự First number trừ Second number.
- Ghi nhận Fail nếu kết quả là -5 hoặc thứ tự toán hạng bị đảo.

## Status / Related bugs
Not Run / None
