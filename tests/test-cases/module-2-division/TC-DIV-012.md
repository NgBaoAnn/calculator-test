# TC-DIV-012: Kiểm tra thương nhỏ hơn 1

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
| 1 | 8 | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "1" vào First number và "8" vào Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Answer hiển thị "0.125", không bị ép thành "0" và không có thông báo lỗi.

## Status / Related bugs
Not Run / None
