# TC-ARI-005: Thực hiện phép cộng một số nguyên với số 0

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Functional / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 42 |
| Second number | 0 |
| Operation | Add |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử từ dropdown
3. Nhập "42" vào trường First number
4. Nhập "0" vào trường Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả chính xác là "42". Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
