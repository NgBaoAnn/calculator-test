# TC-BLD-003: Build 3 không kiểm tra kiểu số khi Concatenate

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Equivalence Partitioning

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 3, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| abc | xyz | Concatenate | abcxyz |

## Test steps
1. Chọn build, nhập dữ liệu, chọn Concatenate và nhấn Calculate.
2. Chờ Answer hiện; kiểm tra Answer, thông báo lỗi và trạng thái Integers only.
3. Lặp lại với build còn lại.

## Expected result
- Answer là `abcxyz`, không có lỗi kiểu số; Integers only ẩn và bị vô hiệu hóa.
- Ghi nhận lỗi nếu Build 3 báo `is not a number`.

## Status / Related bugs
Not Run / None
