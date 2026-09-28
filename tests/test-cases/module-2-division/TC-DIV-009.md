# TC-DIV-009: Xóa thông báo lỗi khi tính hợp lệ sau chia cho 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / State Transition / State Transition Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| Giai đoạn | First number | Second number | Operation |
| :--- | ---: | ---: | :--- |
| Tạo lỗi | 50 | 0 | Divide |
| Phục hồi | 50 | 5 | Divide |

## Test steps
1. Chọn Build đang kiểm thử, nhập dữ liệu ở giai đoạn "Tạo lỗi" và bấm "Calculate".
2. Xác nhận errorMsgField hiển thị "Divide by zero error!".
3. Thay Second number bằng "5" và bấm "Calculate" lần nữa.

## Expected result
Sau bước 1, thông báo lỗi chia cho 0 xuất hiện. Sau bước 3, Answer hiển thị "10" và errorMsgField được xóa/ẩn; thông báo lỗi cũ không còn hiển thị.

## Status / Related bugs
Not Run / None
