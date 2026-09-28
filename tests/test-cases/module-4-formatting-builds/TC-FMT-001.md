# TC-FMT-001: Integers only cắt phần thập phân khi được chọn trước Calculate

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / Functional / Equivalence Partitioning

## Preconditions
- Mở https://testsheepnz.github.io/BasicCalculator.html và chọn Prototype.
- Nhấn Clear để Answer rỗng và Integers only bỏ chọn.

## Test data
| First number | Second number | Operation | Integers only | Kết quả mong đợi |
| --- | --- | --- | --- | --- |
| 5 | 2 | Divide | Checked | 2 |
| -5 | 2 | Divide | Checked | -2 |

## Test steps
1. Với từng dòng dữ liệu, nhập hai số, chọn Divide và tích Integers only.
2. Nhấn Calculate; chờ `Calculating ...` biến mất và Answer hiện lại.
3. Đọc Answer; nhấn Clear trước khi thử dòng tiếp theo.

## Expected result
- Answer khớp cột kết quả mong đợi, không có thông báo lỗi.
- Phần thập phân bị cắt về 0; đây không phải làm tròn tới số nguyên gần nhất.

## Status / Related bugs
Not Run / None
