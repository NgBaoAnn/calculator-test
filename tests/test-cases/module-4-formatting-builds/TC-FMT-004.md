# TC-FMT-004: Calculate hiển thị trạng thái xử lý và khóa nút trong lúc tính

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Answer |
| --- | --- | --- | --- |
| 20 | 30 | Add | 50 |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Nhập dữ liệu và nhấn Calculate một lần.
3. Quan sát ngay trạng thái `Calculating ...`, ảnh chờ, Answer, Calculate và Clear.
4. Trong lúc đang xử lý, thử nhấn Calculate lần nữa.
5. Chờ trạng thái xử lý kết thúc rồi kiểm tra các nút và Answer.

## Expected result
- Trong lúc xử lý, `Calculating ...` và ảnh chờ hiện; Answer ẩn; Calculate và Clear bị vô hiệu hóa nên không thể khởi tạo lần tính thứ hai.
- Khi hoàn tất, trạng thái chờ ẩn, Answer hiện `50`, Calculate và Clear hoạt động lại.
- Không áp đặt thời gian chờ cố định vì trang dùng độ trễ ngẫu nhiên dưới 1 giây.

## Status / Related bugs
Not Run / None
