# TC-CON-017: Kiểm tra phép Concatenate trên Build 2

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: 2

## Test data
| Build | 2 |
| First number | 12 |
| Second number | 34 |
| Operation | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "2" từ dropdown selectBuild
3. Nhập "12" vào trường First number
4. Nhập "34" vào trường Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Trường Answer hiển thị kết quả ghép chuỗi 1234, không phải kết quả phép cộng số học.

## Status / Related bugs
Not Run / None
