# TC-FMT-003: Bật và tắt Integers only sau khi đã có kết quả

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
| 5 | 2 | Divide |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Nhập dữ liệu và nhấn Calculate khi Integers only chưa chọn.
3. Chờ Answer hiện `2.5`; tích Integers only mà không nhấn Calculate lần nữa.
4. Quan sát Answer; bỏ tích Integers only và quan sát lại.

## Expected result
- Ban đầu Answer là `2.5`.
- Tích checkbox đổi Answer ngay thành `2`; bỏ tích đổi ngay lại thành `2.5`.
- Hai đầu vào và phép toán không đổi; không xuất hiện thông báo lỗi.

## Status / Related bugs
Not Run / None
