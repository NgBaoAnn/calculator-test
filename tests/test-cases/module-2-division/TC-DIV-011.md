# TC-DIV-011: Chặn mẫu số âm 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Negative / Error Guessing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| ---: | ---: | :--- |
| 50 | -0 | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "50" vào First number và "-0" vào Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Hệ thống coi `-0` là mẫu số bằng 0: không hiển thị `Infinity` hoặc `-Infinity`, đồng thời errorMsgField hiển thị chính xác "Divide by zero error!".

## Status / Related bugs
Not Run / None
