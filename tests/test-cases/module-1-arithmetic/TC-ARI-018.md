# TC-ARI-018: Kiểm tra hiển thị kết quả phép tính nhân vượt quá 10 chữ số

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
| Second number | 2 |
| Operation | Multiply |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype" từ dropdown
3. Nhập số cực đại 10 chữ số "9999999999" vào ô First number
4. Nhập "2" vào ô Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị đầy đủ và chính xác kết quả tính toán là "19999999998", không bị cắt ngắn chuỗi hay tràn ô hiển thị. Không có thông báo lỗi hiển thị.

## Status / Related bugs
Not Run / None
