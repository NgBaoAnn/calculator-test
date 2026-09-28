# TC-ARI-017: Kiểm tra biên độ dài với số nguyên âm có 10 ký tự

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Boundary Value / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | -999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử từ dropdown
3. Nhập số nguyên âm có đúng 10 ký tự gồm dấu trừ "-999999999" vào ô First number
4. Thử gõ thêm một chữ số nữa vào ô First number để kiểm tra giới hạn 10 ký tự
5. Nhập "1" vào ô Second number
6. Chọn Operation là "Add" và bấm nút "Calculate"

## Expected result
Ô First number chỉ cho phép nhập tối đa 10 ký tự (bao gồm cả dấu trừ "-"). Sau khi bấm Calculate, trường Answer hiển thị kết quả chính xác là "-999999998". Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
