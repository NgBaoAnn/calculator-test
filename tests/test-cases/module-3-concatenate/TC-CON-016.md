# TC-CON-016: Kiểm tra validation dữ liệu số trên Build 1

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: 1

## Test data
| Build | 1 |
| First number | abc |
| Second number | 10 |
| Operation | Add |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "1" từ dropdown selectBuild
3. Nhập "abc" vào trường First number
4. Nhập "10" vào trường Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hệ thống không thực hiện phép cộng, trường Answer không hiển thị kết quả tính. Hiển thị lỗi "Number 1 is not a number" như yêu cầu validation của phép toán số học.

## Status / Related bugs
Not Run / None
