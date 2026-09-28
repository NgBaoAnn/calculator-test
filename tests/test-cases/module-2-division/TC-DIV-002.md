# TC-DIV-002: Bắt lỗi ngoại lệ chia cho số 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Negative / Error Guessing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 50 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập "50" vào trường First number
4. Nhập "0" vào trường Second number
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
Hệ thống không crash, không tính toán ra Infinity/NaN. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung chính xác: "Divide by zero error!".

## Status / Related bugs
Not Run / None
