# TC-BLD-008: Build 8 giữ đúng thứ tự hai toán hạng

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Builds / Regression / Equivalence Partitioning

## Preconditions
- Mở trang; chạy độc lập trên Prototype và Build 8, tải lại trang trước mỗi lượt.

## Test data
| First number | Second number | Operation | Answer chuẩn |
| --- | --- | --- | --- |
| 9 | 4 | Subtract | 5 |

## Test steps
1. Chọn build, nhập dữ liệu, chọn Subtract rồi nhấn Calculate.
2. Chờ Answer hiện; ghi kết quả và lặp lại trên build còn lại.

## Expected result
- Answer là `5` trên cả hai build.
- Ghi nhận lỗi nếu Build 8 cho `-5`, dấu hiệu hai toán hạng bị đảo.

## Status / Related bugs
Not Run / None
