# TC-DIV-013: Chia dữ liệu ở giới hạn 10 ký tự

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Boundary / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | First number | Second number | Operation |
| :--- | ---: | ---: | :--- |
| Prototype | 9999999999 | 1 | Divide |

## Test steps
1. Chọn Build "Prototype".
2. Nhập đúng 10 ký tự "9999999999" vào First number.
3. Nhập "1" vào Second number, chọn "Divide" và bấm "Calculate".
4. Thử nhập thêm ký tự thứ 11 vào First number.

## Expected result
Answer hiển thị "9999999999". Trường First number không nhận ký tự thứ 11 do giới hạn `maxlength=10`; không có lỗi chia.

## Status / Related bugs
Not Run / None
