# TC-FMT-002: Clear đặt lại Answer và tùy chọn định dạng

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Module 4 - Formatting & Controls / UI & Event / State Transition

## Preconditions
- Mở trang và chọn Prototype.

## Test data
| First number | Second number | Operation | Integers only |
| --- | --- | --- | --- |
| 5 | 2 | Divide | Checked |

## Test steps
1. Nhập dữ liệu, chọn Divide, tích Integers only và nhấn Calculate.
2. Chờ Answer hiện `2`, sau đó nhấn Clear.
3. Quan sát Answer, checkbox, hai ô nhập và Operation.

## Expected result
- Answer rỗng; Integers only bỏ chọn; thông báo lỗi rỗng.
- First number vẫn là `5`, Second number vẫn là `2`, Operation vẫn là Divide.

## Status / Related bugs
Not Run / None
