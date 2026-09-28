# TC-BLD-009: Kiểm tra các phần tử chính hiển thị và sử dụng được

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / UI State

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 2 | 3 | Add | 5 |

## Test steps
1. Chọn Build đang kiểm thử; kiểm tra First number, Second number, Operation và Calculate có hiển thị và sử dụng được.
2. Nhập dữ liệu, nhấn Calculate và chờ Answer hiện.

## Expected result
- Hai ô nhập và nút Calculate đều hiển thị, sử dụng được; Answer là 5.
- Ghi nhận Fail nếu thiếu hoặc không thể dùng phần tử chính.

## Status / Related bugs
Not Run / None
