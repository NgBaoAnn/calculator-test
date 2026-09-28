# TC-BLD-006: Build 6 chặn phép chia cho 0

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Error Guessing

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 6, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 0 | Divide |

## Test steps
1. Chọn build, nhập dữ liệu, chọn Divide và nhấn Calculate.
2. Quan sát thông báo lỗi và Answer; lặp lại trên build còn lại.

## Expected result
- Hiển thị `Divide by zero error!` và không đưa `Infinity` hoặc `NaN` vào Answer.
- Ghi nhận lỗi nếu Build 6 trả về một giá trị số không hợp lệ.
- Trạng thái chờ của Prototype khi gặp lỗi được kiểm riêng ở `TC-FMT-006`.

## Status / Related bugs
Not Run / None
