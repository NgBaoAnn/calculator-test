# TC-FMT-001: Làm tròn kết quả số nguyên khi chọn Integers only

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / Functional / State Transition

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 5 |
| Second number | 2 |
| Operation | Divide |
| Integers only | Checked |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "5" vào trường First number
4. Nhập "2" vào trường Second number
5. Chọn Operation là "Divide"
6. Tích chọn checkbox "Integers only"
7. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả làm tròn thành số nguyên là "2" (thay vì 2.5).

## Status / Related bugs
Not Run / None
