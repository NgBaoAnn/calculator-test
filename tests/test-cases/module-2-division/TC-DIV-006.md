# TC-DIV-006: Chia với toán hạng âm

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| Lần chạy | First number | Second number | Expected Answer |
| :---: | ---: | ---: | ---: |
| 1 | -12 | 3 | -4 |
| 2 | -12 | -3 | 4 |
| 3 | 12 | -3 | -4 |

Operation cho cả ba lần chạy: `Divide`.

## Test steps
1. Chọn Build đang kiểm thử và Operation "Divide".
2. Lần lượt nhập từng cặp dữ liệu trong bảng và bấm "Calculate".
3. Đối chiếu Answer với cột Expected Answer sau mỗi lần chạy.

## Expected result
Mỗi lần chạy trả về đúng dấu và giá trị theo bảng; không có thông báo lỗi.

## Status / Related bugs
Not Run / None
