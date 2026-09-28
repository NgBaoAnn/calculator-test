# TC-CON-005: Ghép chuỗi khi trường First number để trống

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | *(để trống - empty)* |
| Second number | world |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Để trống trường First number (không nhập gì)
4. Nhập "world" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer (numberAnswerField) hiển thị kết quả là world. Không có lỗi hiển thị ở errorMsgField.

## Status / Related bugs
Not Run / None
