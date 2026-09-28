# TC-DIV-013: Chia dữ liệu ở giới hạn 10 ký tự

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Module 2 - Division / Boundary / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation |
| ---: | ---: | :--- |
| 9999999999 | 1 | Divide |

## Test steps
1. Chọn Build đang kiểm thử.
2. Nhập đúng 10 ký tự "9999999999" vào First number.
3. Nhập "1" vào Second number, chọn "Divide" và bấm "Calculate".
4. Thử nhập thêm ký tự thứ 11 vào First number.

## Expected result
Answer hiển thị "9999999999". Trường First number không nhận ký tự thứ 11 do giới hạn `maxlength=10`; không có lỗi chia.

## Status / Related bugs
Not Run / None
