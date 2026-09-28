# TC-DIV-012: Kiểm tra thương nhỏ hơn 1

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype
- Checkbox Integers only không được chọn

## Test data
| Build | First number | Second number | Operation |
| :--- | ---: | ---: | :--- |
| Prototype | 1 | 8 | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập "1" vào First number và "8" vào Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Answer hiển thị "0.125", không bị ép thành "0" và không có thông báo lỗi.

## Status / Related bugs
Not Run / None
