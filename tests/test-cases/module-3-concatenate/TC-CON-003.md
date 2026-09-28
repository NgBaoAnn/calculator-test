# TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | hello |
| Second number | world |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype" từ dropdown
3. Nhập "hello" vào trường First number
4. Nhập "world" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị kết quả nối chuỗi chính xác là helloworld. Khu vực errorMsgField không hiển thị bất kỳ thông báo lỗi nào. Checkbox Integers only bị ẩn và vô hiệu hóa.

## Status / Related bugs
Not Run / None
