# TC-ARI-009: Thực hiện phép trừ cho số 0

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Functional / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 25 |
| Second number | 0 |
| Operation | Subtract |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype" từ dropdown
3. Nhập "25" vào trường First number
4. Nhập "0" vào trường Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả chính xác là "25". Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
