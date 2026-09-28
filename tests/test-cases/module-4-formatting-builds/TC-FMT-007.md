# TC-FMT-007: Chuyển giữa phép số và Concatenate cập nhật Integers only

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Mở trang, chọn Prototype và nhấn Clear.

## Test data
| First number | Second number | Operation đầu | Operation sau |
| --- | --- | --- | --- |
| 5 | 2 | Divide | Concatenate |

## Test steps
1. Chọn Divide, nhập dữ liệu và tích Integers only.
2. Chuyển sang Concatenate; quan sát nhãn và checkbox.
3. Chuyển lại Divide; quan sát nhãn và checkbox.
4. Nhấn Calculate và chờ Answer hiện.

## Expected result
- Khi chọn Concatenate, nhãn và checkbox ẩn; checkbox bị vô hiệu hóa và bỏ chọn.
- Khi trở lại Divide, nhãn và checkbox hiện, được bật lại nhưng vẫn bỏ chọn.
- Answer sau Calculate là `2.5`; không tự giữ trạng thái Integers only từ trước Concatenate.

## Status / Related bugs
Not Run / None
