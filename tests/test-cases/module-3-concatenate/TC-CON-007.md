# TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Edge Case Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | *(để trống)* |
| Second number | *(để trống)* |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Để trống cả hai trường First number và Second number
4. Chọn Operation là "Concatenate"
5. Bấm nút "Calculate"

## Expected result
Giá trị của trường Answer (numberAnswerField) là chuỗi rỗng; ô không hiển thị ký tự nào. Trang web không bị crash hoặc sinh lỗi JavaScript. Khu vực errorMsgField không báo lỗi.

## Status / Related bugs
Not Run / None
