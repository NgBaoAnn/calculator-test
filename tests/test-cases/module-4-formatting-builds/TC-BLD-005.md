# TC-BLD-005: Kiểm tra Clear hoạt động trước lần Calculate đầu tiên

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 2 | Divide |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu, chọn Divide và tích Integers only.
2. Kiểm tra trạng thái Clear và nhấn Clear trước bất kỳ lần Calculate nào.
3. Quan sát checkbox và Answer.

## Expected result
- Clear hoạt động trước Calculate; checkbox bỏ chọn và Answer rỗng.
- Ghi nhận Fail nếu Clear bị vô hiệu hóa.

## Status / Related bugs
Not Run / None
