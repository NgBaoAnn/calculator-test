# TC-CON-011: Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự không hợp lệ

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Validation / Priority & Negative Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | abc |
| Second number | xyz |
| Operation | Multiply |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "abc" vào trường First number
4. Nhập "xyz" vào trường Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Hệ thống ưu tiên bắt lỗi từ trường đầu tiên (num1). Hiển thị thông báo lỗi màu đỏ tại errorMsgField: "Number 1 is not a number". Không thực hiện phép tính nhân.

## Status / Related bugs
Not Run / None
