# TC-DIV-007: Kiểm tra thứ tự toán hạng First number / Second number

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Error Guessing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 2 |
| Second number | 8 |
| Operation | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "2" vào First number và "8" vào Second number.
3. Chọn "Divide" rồi bấm "Calculate".

## Expected result
Answer hiển thị "0.25", chứng minh hệ thống tính `2 / 8`. Kết quả không được là "4" (biểu hiện đảo thứ tự toán hạng).

## Status / Related bugs
Not Run / None
