# TC-BLD-002: Kiểm tra Add và Concatenate giữ đúng ý nghĩa

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Decision Table

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 12 | 34 | Add | 46 |
| 12 | 34 | Concatenate | 1234 |

## Test steps
1. Chọn Build đang kiểm thử; chạy lần lượt hai dòng dữ liệu và nhấn Clear giữa các dòng.
2. Ghi Answer của mỗi phép toán và đối chiếu với cột Answer chuẩn.

## Expected result
- Add trả về 46; Concatenate trả về 1234.
- Ghi nhận Fail nếu hai phép toán bị đảo hoặc cho kết quả khác cột Answer chuẩn.

## Status / Related bugs
Not Run / None
