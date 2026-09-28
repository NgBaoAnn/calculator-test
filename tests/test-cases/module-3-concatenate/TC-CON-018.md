# TC-CON-018: Kiểm tra ghép chuỗi chữ trên Build 3

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: 3

## Test data
| Build | 3 |
| First number | hello |
| Second number | world |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "3" từ dropdown selectBuild
3. Nhập "hello" vào trường First number
4. Nhập "world" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị helloworld; không hiển thị lỗi validation dữ liệu số.

## Status / Related bugs
Not Run / None
