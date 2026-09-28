# TC-BLD-003: Kiểm tra Concatenate không yêu cầu dữ liệu số

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
| abc | xyz | Concatenate | abcxyz |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu, chọn Concatenate và nhấn Calculate.
2. Quan sát Answer, thông báo lỗi và trạng thái Integers only.

## Expected result
- Answer là abcxyz; không có lỗi kiểu số; Integers only ẩn và không thể tương tác.
- Ghi nhận Fail nếu phép Concatenate báo lỗi "is not a number".

## Status / Related bugs
Not Run / None
