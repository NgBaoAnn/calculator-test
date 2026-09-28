# TC-DIV-010: Chia hai toán hạng thập phân

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
- Checkbox Integers only không được chọn

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| ---: | ---: | :--- |
| 7.5 | 2.5 | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "7.5" vào First number và "2.5" vào Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Answer hiển thị "3"; không xuất hiện lỗi và không tự động làm tròn ngoài yêu cầu.

## Status / Related bugs
Not Run / None
