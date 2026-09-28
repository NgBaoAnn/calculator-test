# TC-DIV-011: Chặn mẫu số âm 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Negative / Error Guessing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | First number | Second number | Operation |
| :--- | ---: | ---: | :--- |
| Prototype | 50 | -0 | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập "50" vào First number và "-0" vào Second number.
3. Chọn "Divide" và bấm "Calculate".

## Expected result
Hệ thống coi `-0` là mẫu số bằng 0: không hiển thị `Infinity` hoặc `-Infinity`, đồng thời errorMsgField hiển thị chính xác "Divide by zero error!".

## Status / Related bugs
Not Run / None
