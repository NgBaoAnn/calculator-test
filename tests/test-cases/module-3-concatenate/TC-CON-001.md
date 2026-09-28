# TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 12 |
| Second number | 34 |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Nhập "12" vào trường First number
4. Nhập "34" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả nối chuỗi chính xác là "1234". Checkbox "Integers only" tự động ẩn đi khi chọn Concatenate.

## Status / Related bugs
Not Run / None
