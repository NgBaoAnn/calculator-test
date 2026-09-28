# TC-FMT-006: Trạng thái chờ kết thúc khi phép chia cho 0 báo lỗi

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / Negative / State Transition

## Preconditions
- Mở trang, chọn Prototype và nhấn Clear.

## Test data
| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 0 | Divide |

## Test steps
1. Nhập dữ liệu và nhấn Calculate.
2. Chờ thông báo `Divide by zero error!` rồi quan sát trạng thái chờ, Answer, Calculate và Clear.
3. Thử nhấn Clear để phục hồi giao diện.

## Expected result
- Thông báo chia cho 0 xuất hiện, không hiển thị kết quả số.
- Trạng thái chờ kết thúc; Answer hiện lại; Calculate và Clear có thể dùng tiếp; Clear xóa thông báo lỗi.

## Status / Related bugs
Not Run / None; mã trang có đường `return` trước khi mở khóa, cần xác minh lỗi khi chạy.
