# TC-BLD-001: Build 1 phải từ chối đầu vào không phải số

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Error Guessing

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 1, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation |
| --- | --- | --- |
| abc | 2 | Add |

## Test steps
1. Chọn build của lượt thử, nhập dữ liệu và nhấn Calculate.
2. Quan sát thông báo lỗi và Answer sau khi xử lý.
3. Đối chiếu kết quả của hai build.

## Expected result
- Prototype: hiện `Number 1 is not a number`, không tạo kết quả mới.
- Build 1 phải có cùng hành vi. Ghi nhận lỗi nếu cho ra `NaN` hoặc bỏ qua kiểm tra.

## Status / Related bugs
Not Run / None
