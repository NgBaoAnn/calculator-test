# TC-DIV-005: Chia số 0 cho số khác 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 0 |
| Second number | 7 |
| Operation | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập "0" vào trường First number và "7" vào trường Second number.
3. Chọn "Divide" rồi bấm "Calculate".

## Expected result
Answer hiển thị "0". Không xuất hiện thông báo `Divide by zero error!` hay lỗi khác.

## Status / Related bugs
Not Run / None
