# TC-ARI-014: Thực hiện phép nhân với phần tử đơn vị 1 và -1

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Functional / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 45 |
| Second number | 1 |
| Operation | Multiply |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype" từ dropdown
3. Nhập "45" vào trường First number
4. Nhập "1" vào trường Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả chính xác là "45" (giá trị không đổi khi nhân với phần tử đơn vị 1). Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
