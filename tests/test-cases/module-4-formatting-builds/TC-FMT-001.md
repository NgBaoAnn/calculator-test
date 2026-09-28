# TC-FMT-001: Integers only cắt phần thập phân khi được chọn trước Calculate

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
- Nhấn Clear để Answer rỗng và Integers only bỏ chọn.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Integers only | Kết quả mong đợi |
| --- | --- | --- | --- | --- |
| 5 | 2 | Divide | Checked | 2 |
| -5 | 2 | Divide | Checked | -2 |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Với từng dòng dữ liệu, nhập hai số, chọn Divide và tích Integers only.
3. Nhấn Calculate; chờ `Calculating ...` biến mất và Answer hiện lại.
4. Đọc Answer; nhấn Clear trước khi thử dòng tiếp theo.

## Expected result
- Answer khớp cột kết quả mong đợi, không có thông báo lỗi.
- Phần thập phân bị cắt về 0; đây không phải làm tròn tới số nguyên gần nhất.

## Status / Related bugs
Not Run / None
