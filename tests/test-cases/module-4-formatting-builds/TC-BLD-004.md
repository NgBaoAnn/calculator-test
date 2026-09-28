# TC-BLD-004: Kiểm tra có thể bỏ chọn Integers only

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 5 | 2 | Divide | 2.5 |

## Test steps
1. Chọn Build đang kiểm thử và phép Divide; kiểm tra checkbox Integers only có thể bỏ chọn.
2. Bỏ chọn checkbox, nhập dữ liệu và nhấn Calculate.
3. Quan sát Answer sau khi xử lý.

## Expected result
- Checkbox có thể bật/tắt; khi bỏ chọn, Answer là 2.5.
- Ghi nhận Fail nếu checkbox bị khóa hoặc Answer bị ép thành 2.

## Status / Related bugs
Not Run / None
