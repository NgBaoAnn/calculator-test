# TC-DIV-009: Xóa thông báo lỗi khi tính hợp lệ sau chia cho 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / State Transition / State Transition Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Giai đoạn | First number | Second number | Operation |
| :--- | ---: | ---: | :--- |
| Tạo lỗi | 50 | 0 | Divide |
| Phục hồi | 50 | 5 | Divide |

## Test steps
1. Chọn Build "Prototype", nhập dữ liệu ở giai đoạn "Tạo lỗi" và bấm "Calculate".
2. Xác nhận errorMsgField hiển thị "Divide by zero error!".
3. Thay Second number bằng "5" và bấm "Calculate" lần nữa.

## Expected result
Sau bước 1, thông báo lỗi chia cho 0 xuất hiện. Sau bước 3, Answer hiển thị "10" và errorMsgField được xóa/ẩn; thông báo lỗi cũ không còn hiển thị.

## Status / Related bugs
Not Run / None
