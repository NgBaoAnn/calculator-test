# TC-BLD-007: Kiểm tra phép tính mới dùng First number được nhập

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| Lượt | First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- | --- |
| 1 | 10 | 2 | Add | 12 |
| 2 | 20 | 3 | Add | 23 |

## Test steps
1. Chọn Build đang kiểm thử, thực hiện lượt 1 và chờ Answer hiện.
2. Không nhấn Clear; thay hai đầu vào bằng dữ liệu lượt 2, nhấn Calculate và chờ Answer hiện.
3. Ghi kết quả của cả hai lượt.

## Expected result
- Lượt 1 cho 12, lượt 2 cho 23.
- Ghi nhận Fail nếu lượt 2 dùng Answer cũ thay cho First number mới nhập.

## Status / Related bugs
Not Run / None
