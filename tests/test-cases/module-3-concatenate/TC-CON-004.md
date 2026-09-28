# TC-CON-004: Ghép chuỗi chứa các ký tự đặc biệt

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | @#$% |
| Second number | &*!? |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Nhập "@#$%" vào trường First number
4. Nhập "&*!?" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị kết quả nối chuỗi là @#$%&*!?. Không có lỗi hiển thị ở errorMsgField.

## Status / Related bugs
Not Run / None
