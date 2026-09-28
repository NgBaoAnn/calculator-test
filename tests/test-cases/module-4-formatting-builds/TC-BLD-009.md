# TC-BLD-009: Build 9 hiển thị và cho sử dụng đủ các phần tử chính

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / UI State

## Preconditions
- Mở trang; quan sát trên Prototype và Build 9, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 2 | 3 | Add | 5 |

## Test steps
1. Chọn build và kiểm tra First number, Second number, Operation, Calculate có hiện và dùng được.
2. Nhập dữ liệu, nhấn Calculate và chờ Answer hiện.
3. Đối chiếu trạng thái giao diện và kết quả giữa hai build.

## Expected result
- Cả hai ô nhập và nút Calculate đều hiện, hoạt động; Answer là `5`.
- Ghi nhận lỗi nếu Build 9 ẩn/vô hiệu hóa Second number hoặc Calculate.

## Status / Related bugs
Not Run / None
