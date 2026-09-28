# TC-DIV-008: Bắt lỗi ngoại lệ 0 chia 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Negative / Decision Table Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 0 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập "0" vào cả First number và Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Trang không crash; Answer không hiển thị `NaN`. errorMsgField hiển thị chữ đỏ chính xác: "Divide by zero error!".

## Status / Related bugs
Not Run / None
