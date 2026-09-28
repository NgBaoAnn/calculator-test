# TC-FMT-002: Clear đặt lại Answer và tùy chọn định dạng

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation | Integers only |
| --- | --- | --- | --- |
| 5 | 2 | Divide | Checked |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Nhập dữ liệu, chọn Divide, tích Integers only và nhấn Calculate.
3. Chờ Answer hiện `2`, sau đó nhấn Clear.
4. Quan sát Answer, checkbox, hai ô nhập và Operation.

## Expected result
- Answer rỗng; Integers only bỏ chọn; thông báo lỗi rỗng.
- First number vẫn là `5`, Second number vẫn là `2`, Operation vẫn là Divide.

## Status / Related bugs
Not Run / None
