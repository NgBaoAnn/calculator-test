# TC-CON-015: Kiểm tra trạng thái tự động hiển thị và kích hoạt lại của checkbox Integers only khi chuyển về phép toán số học

## Requirement ID
FR-CALC-03

## Module / Test type / Technique
Module 3 - Concatenate & Validation / UI & State / State Transition Testing

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
- Phép toán đang chọn là Concatenate (checkbox Integers only đang bị ẩn)

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| Operation ban đầu | Concatenate |
| Operation chuyển đổi | Subtract (hoặc Add / Multiply / Divide) |

## Test steps
1. Truy cập trang web Basic Calculator
2. Chọn Build đang kiểm thử
3. Chọn Operation là "Concatenate" (xác nhận checkbox "Integers only" đã bị ẩn)
4. Tại dropdown selectOperationDropdown, đổi sang "Subtract"
5. Quan sát phản ứng của giao diện

## Expected result
Ngay khi chuyển về phép toán số học "Subtract", checkbox integerSelect và nhãn "Integers only" hiển thị trở lại. Người dùng có thể tương tác với checkbox "Integers only".

## Status / Related bugs
Not Run / None
