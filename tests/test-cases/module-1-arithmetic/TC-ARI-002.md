# TC-ARI-002: Kiểm tra biên độ dài tối đa 10 chữ số cho trường nhập liệu

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Module 1 - Arithmetic / Boundary Value / Boundary Value Analysis (BVA)

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype

## Test data
| Build | Prototype |
| First number | 9999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Nhập số có đúng 10 chữ số "9999999999" vào ô First number
4. Thử gõ thêm ký tự thứ 11 vào ô First number
5. Nhập "1" vào ô Second number
6. Chọn Operation là "Add" và bấm nút "Calculate"

## Expected result
Ô First number chỉ cho phép nhập tối đa 10 ký tự (không thể nhập ký tự thứ 11 do maxlength=10). Sau khi bấm Calculate, trường Answer hiển thị kết quả là "10000000000".

## Status / Related bugs
Not Run / None
