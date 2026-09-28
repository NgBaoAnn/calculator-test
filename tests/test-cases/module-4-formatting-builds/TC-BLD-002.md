# TC-BLD-002: Build 2 giữ đúng ý nghĩa Add và Concatenate

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Decision Table

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 2, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 12 | 34 | Add | 46 |
| 12 | 34 | Concatenate | 1234 |

## Test steps
1. Trên từng build, thử cả hai dòng dữ liệu; nhấn Clear giữa các dòng.
2. Chờ Answer hiện và ghi kết quả cho từng phép toán.
3. Đối chiếu với Prototype và cột Answer chuẩn.

## Expected result
- Cả hai build phải cho Add = `46`, Concatenate = `1234`.
- Ghi nhận lỗi nếu Build 2 đảo kết quả hai phép toán.

## Status / Related bugs
Not Run / None
