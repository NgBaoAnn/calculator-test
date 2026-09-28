# TC-DIV-004: Chia cho kết quả thập phân tuần hoàn

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 10 |
| Second number | 3 |
| Operation | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập "10" vào trường First number và "3" vào trường Second number.
3. Chọn Operation là "Divide" và bấm "Calculate".

## Expected result
Answer hiển thị giá trị xấp xỉ `3.3333333333333335` (sai số cho phép tối đa `1e-12` so với `10 / 3`). Kết quả không bị làm tròn thành số nguyên khi checkbox Integers only không được chọn và không có lỗi.

## Status / Related bugs
Not Run / None
