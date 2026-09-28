# TC-BLD-007: Build 7 dùng First number được nhập thay vì Answer cũ

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / State Transition

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 7, tải lại trang trước mỗi lượt.

## Test data
| Lượt | First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- | --- |
| 1 | 10 | 2 | Add | 12 |
| 2 | 20 | 3 | Add | 23 |

## Test steps
1. Chọn build, thực hiện lượt 1 và chờ Answer hiện.
2. Không nhấn Clear; thay hai đầu vào bằng dữ liệu lượt 2, nhấn Calculate và chờ Answer hiện.
3. Ghi cả hai kết quả, rồi lặp lại từ trang mới trên build còn lại.

## Expected result
- Lượt 1 cho `12`, lượt 2 cho `23` trên cả hai build.
- Ghi nhận lỗi nếu Build 7 dùng Answer của lượt trước hoặc Answer rỗng làm toán hạng thứ nhất.

## Status / Related bugs
Not Run / None
