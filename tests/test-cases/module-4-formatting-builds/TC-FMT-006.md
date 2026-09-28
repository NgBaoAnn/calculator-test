# TC-FMT-006: Trạng thái chờ kết thúc khi phép chia cho 0 báo lỗi

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / Negative / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 0 | Divide |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Nhập dữ liệu và nhấn Calculate.
3. Chờ thông báo `Divide by zero error!` rồi quan sát trạng thái chờ, Answer, Calculate và Clear.
4. Thử nhấn Clear để phục hồi giao diện.

## Expected result
- Thông báo chia cho 0 xuất hiện, không hiển thị kết quả số.
- Trạng thái chờ kết thúc; Answer hiện lại; Calculate và Clear có thể dùng tiếp; Clear xóa thông báo lỗi.

## Status / Related bugs
Not Run / None
