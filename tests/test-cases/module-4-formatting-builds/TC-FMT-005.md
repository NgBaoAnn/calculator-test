# TC-FMT-005: Clear xóa thông báo lỗi sau đầu vào không hợp lệ

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| --- | --- | --- |
| abc | 10 | Add |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Nhập dữ liệu và nhấn Calculate.
3. Xác nhận thông báo `Number 1 is not a number` xuất hiện.
4. Nhấn Clear rồi quan sát thông báo, Answer và hai ô nhập.

## Expected result
- Thông báo lỗi và Answer đều rỗng sau Clear.
- Hai đầu vào vẫn là `abc` và `10`; Calculate có thể sử dụng lại sau khi sửa đầu vào.

## Status / Related bugs
Not Run / None
