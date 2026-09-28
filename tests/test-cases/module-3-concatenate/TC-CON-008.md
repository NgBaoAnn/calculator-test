# TC-CON-008: Kiểm tra giới hạn 10 ký tự mỗi trường khi ghép chuỗi

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 1234567890 (10 ký tự) |
| Second number | abcdefghij (10 ký tự) |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "1234567890" vào trường First number, sau đó thử nhập thêm ký tự "1"
4. Nhập "abcdefghij" vào trường Second number, sau đó thử nhập thêm ký tự "k"
5. Kiểm tra giá trị đang có trong hai trường nhập
6. Chọn Operation là "Concatenate" và bấm nút "Calculate"

## Expected result
Mỗi trường chỉ giữ 10 ký tự đầu; ký tự thứ 11 không được nhập vào. Giá trị trường Answer (numberAnswerField) là chuỗi 20 ký tự 1234567890abcdefghij, không bị cắt ngắn.

## Status / Related bugs
Not Run / None
