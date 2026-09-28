# TC-CON-012: Bắt lỗi khi First number chứa ký tự đặc biệt trên phép toán số học

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Validation / Negative Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | !@#$% |
| Second number | 50 |
| Operation | Subtract |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "!@#$%" vào trường First number
4. Nhập "50" vào trường Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Hệ thống chặn việc thực hiện phép trừ. Hiển thị thông báo lỗi màu đỏ tại errorMsgField: "Number 1 is not a number".

## Status / Related bugs
Not Run / None
