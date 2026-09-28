# TC-CON-006: Ghép chuỗi khi trường Second number để trống

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | hello |
| Second number | *(để trống - empty)* |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Nhập "hello" vào trường First number
4. Để trống trường Second number (không nhập gì)
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị kết quả là hello. Không có lỗi hiển thị ở errorMsgField.

## Status / Related bugs
Not Run / None
