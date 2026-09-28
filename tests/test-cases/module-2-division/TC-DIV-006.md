# TC-DIV-006: Chia với toán hạng âm

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Lần chạy | First number | Second number | Expected Answer |
| :---: | ---: | ---: | ---: |
| 1 | -12 | 3 | -4 |
| 2 | -12 | -3 | 4 |
| 3 | 12 | -3 | -4 |

Operation cho cả ba lần chạy: `Divide`.

## Test steps
1. Chọn Build "Prototype" và Operation "Divide".
2. Lần lượt nhập từng cặp dữ liệu trong bảng và bấm "Calculate".
3. Đối chiếu Answer với cột Expected Answer sau mỗi lần chạy.

## Expected result
Mỗi lần chạy trả về đúng dấu và giá trị theo bảng; không có thông báo lỗi.

## Status / Related bugs
Not Run / None
