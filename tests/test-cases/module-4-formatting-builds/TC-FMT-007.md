# TC-FMT-007: Chuyển giữa phép số và Concatenate cập nhật Integers only

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.

## Test data
Build áp dụng: Build 1–9; chạy riêng từng Build.

| First number | Second number | Operation đầu | Operation sau |
| --- | --- | --- | --- |
| 5 | 2 | Divide | Concatenate |

## Test steps
1. Chọn Build đang kiểm thử theo mục Test data.
2. Chọn Divide, nhập dữ liệu và tích Integers only.
3. Chuyển sang Concatenate; quan sát nhãn và checkbox.
4. Chuyển lại Divide; quan sát nhãn và checkbox.
5. Nhấn Calculate và chờ Answer hiện.

## Expected result
- Khi chọn Concatenate, nhãn và checkbox ẩn; checkbox bị vô hiệu hóa và bỏ chọn.
- Khi trở lại Divide, nhãn và checkbox hiện, được bật lại nhưng vẫn bỏ chọn.
- Answer sau Calculate là `2.5`; không tự giữ trạng thái Integers only từ trước Concatenate.

## Status / Related bugs
Not Run / None
