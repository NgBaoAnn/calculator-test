# TC-FMT-002: Kiểm tra chức năng nút Clear xóa kết quả và đặt lại trạng thái

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Reset

## Preconditions
- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
- Đã thực hiện một phép tính trước đó và trường Answer đang hiển thị kết quả

## Test data
| Build | Prototype |
| First number | 20 |
| Second number | 30 |
| Operation | Add |

## Test steps
1. Nhập First number = 20, Second number = 30, Operation = Add và bấm Calculate
2. Kiểm tra ô Answer đang hiển thị "50"
3. Bấm nút "Clear"

## Expected result
Trường Answer bị xóa rỗng. Các thông báo lỗi (nếu có) bị xóa bỏ.

## Status / Related bugs
Not Run / None
