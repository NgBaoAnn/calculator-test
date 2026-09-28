# TC-BLD-005: Build 5 cho phép Clear trước khi Calculate

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 5, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation |
| --- | --- | --- |
| 5 | 2 | Divide |

## Test steps
1. Chọn build, nhập dữ liệu, chọn Divide và tích Integers only.
2. Kiểm tra trạng thái Clear và nhấn Clear trước bất kỳ lần Calculate nào.
3. Quan sát checkbox và Answer; lặp lại trên build còn lại.

## Expected result
- Clear hoạt động ngay sau khi chọn build; checkbox bỏ chọn và Answer rỗng.
- Ghi nhận lỗi nếu Build 5 vô hiệu hóa Clear. Thử trước Calculate để tránh việc nút được bật lại sau xử lý.

## Status / Related bugs
Not Run / None
