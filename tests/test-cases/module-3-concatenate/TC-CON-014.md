# TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / UI & State / State Transition Testing

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Chọn Build: Prototype
- Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)

## Test data
| Build | Prototype |
| Operation ban đầu | Add |
| Operation chuyển đổi | Concatenate |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build "Prototype"
3. Quan sát giao diện: Checkbox integerSelect và nhãn intSelectionLabel ("Integers only") đang hiển thị bình thường
4. Tích chọn vào checkbox "Integers only"
5. Tại dropdown selectOperationDropdown, đổi lựa chọn sang "Concatenate"
6. Quan sát phản ứng của giao diện ngay khi vừa chọn "Concatenate"

## Expected result
Ngay khi chọn "Concatenate", checkbox integerSelect và nhãn "Integers only" không còn hiển thị. Tùy chọn "Integers only" không thể tương tác hoặc ảnh hưởng đến phép ghép chuỗi.

## Status / Related bugs
Not Run / None
