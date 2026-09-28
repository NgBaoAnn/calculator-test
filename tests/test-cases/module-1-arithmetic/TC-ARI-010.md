# TC-ARI-010: Thực hiện phép trừ cho một số âm

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Functional / Equivalence Partitioning

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | 20 |
| Second number | -10 |
| Operation | Subtract |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử từ dropdown
3. Nhập "20" vào trường First number
4. Nhập "-10" vào trường Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả chính xác là "30" (phép trừ cho số âm tương đương phép cộng). Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
