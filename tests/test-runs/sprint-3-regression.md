# Test Run Sprint 3 — Builds 7–9

## Thông tin đợt kiểm thử

| Mục | Giá trị |
| :--- | :--- |
| Test Run ID | `TR-SPRINT-03` |
| Build | Build 7, Build 8, Build 9 |
| Ứng dụng | [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) |
| Mã nguồn đối chiếu | HTML SHA-256 `475f650ab2607d77620ac20269f95b845d7c210209542ecd492bd4cdc551d099` |

## Phân công Build

| Build | Người phụ trách |
| :--- | :--- |
| Build 7 | Thành viên 2 |
| Build 8 | Thành viên 3 |
| Build 9 | Thành viên 4 |

## Tổng hợp kết quả suy luận từ mã nguồn

| Build | Tổng | Pass | Fail | Blocked |
| :--- | ---: | ---: | ---: | ---: |
| Build 7 | 69 | 13 | 56 | 0 |
| Build 8 | 69 | 24 | 45 | 0 |
| Build 9 | 69 | 2 | 0 | 67 |
| **Tổng sprint** | **207** | **39** | **101** | **67** |

## Kết quả chi tiết

### Build 7 — Thành viên 2

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Nhánh chia cho 0 return trước unlockCalculate; Calculate vẫn bị khóa nên không thể tính lượt phục hồi. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 2 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Nhánh chia cho 0 return trước unlockCalculate; màn hình chờ và nút bị khóa, Clear không phục hồi được. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Build 7 dùng Answer cũ làm toán hạng thứ nhất; trên lượt mới Answer rỗng nên kết quả/validation lệch Expected result. |

### Build 8 — Thành viên 3

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo toán hạng: 50 / 0 thành 0 / 50; bước tạo lỗi không xảy ra. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | isNaN với ô rỗng hoặc chuỗi chỉ có dấu cách trả false; dữ liệu được tính như 0, không báo lỗi mong đợi. |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 3 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo toán hạng: 5 / 0 thành 0 / 5, không có thông báo lỗi. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Build 8 đảo First number và Second number; kết quả hoặc tên trường báo lỗi lệch Expected result. |

### Build 9 — Thành viên 4

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 4 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 4 | Pass | — | Mã xử lý và trạng thái giao diện phù hợp Expected result của ca. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Second number và Calculate bị ẩn, vô hiệu hóa; theo quy ước Build 9, ca không đạt được ghi Blocked. |

## Retest
