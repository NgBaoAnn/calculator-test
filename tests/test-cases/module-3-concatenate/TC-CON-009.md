# TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | "Hello " (có một dấu cách cuối) |
| Second number | " World" (có một dấu cách đầu) |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "Hello " vào trường First number
4. Nhập " World" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị đúng "Hello  World" với hai dấu cách ở giữa. Hệ thống không tự ý cắt bỏ các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.

## Status / Related bugs
Not Run / None
