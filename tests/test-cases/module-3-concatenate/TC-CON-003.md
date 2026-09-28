# TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | hello |
| Second number | world |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử từ dropdown
3. Nhập "hello" vào trường First number
4. Nhập "world" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị kết quả nối chuỗi chính xác là helloworld. Khu vực errorMsgField không hiển thị bất kỳ thông báo lỗi nào. Checkbox Integers only bị ẩn và vô hiệu hóa.

## Status / Related bugs
Not Run / None
