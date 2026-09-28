# TC-DIV-005: Chia số 0 cho số khác 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 0 |
| Second number | 7 |
| Operation | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập "0" vào trường First number và "7" vào trường Second number.
3. Chọn "Divide" rồi bấm "Calculate".

## Expected result
Answer hiển thị "0". Không xuất hiện thông báo `Divide by zero error!` hay lỗi khác.

## Status / Related bugs
Not Run / None
