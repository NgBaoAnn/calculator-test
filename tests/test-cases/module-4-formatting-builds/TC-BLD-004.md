# TC-BLD-004: Build 4 cho phép bỏ chọn Integers only

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 4, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 5 | 2 | Divide | 2.5 |

## Test steps
1. Chọn build và Divide; kiểm tra checkbox Integers only có thể bỏ chọn.
2. Để checkbox bỏ chọn, nhập dữ liệu rồi nhấn Calculate.
3. Chờ Answer hiện và đối chiếu kết quả giữa hai build.

## Expected result
- Checkbox được bật/tắt tự do; khi bỏ chọn, Answer là `2.5`.
- Ghi nhận lỗi nếu Build 4 khóa checkbox hoặc bắt buộc hiển thị `2`.

## Status / Related bugs
Not Run / None
