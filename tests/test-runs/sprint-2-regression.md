# Test Run Sprint 2 — Builds 4–6

## Thông tin đợt kiểm thử

| Mục | Giá trị |
| :--- | :--- |
| Test Run ID | `TR-SPRINT-02` |
| Build | Build 4, Build 5, Build 6 |
| Ứng dụng | [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) |
| Kết quả chạy thực tế | [Playwright run 2026-09-28](automated/2026-09-28T12-26-44-978Z/summary.md) |

## Phân công Build

| Build | Người phụ trách |
| :--- | :--- |
| Build 4 | Thành viên 4 |
| Build 5 | Thành viên 5 |
| Build 6 | Thành viên 1 |

## Tổng hợp kết quả chạy Playwright

`Result` lấy từ Playwright: Pass = đạt, Fail = assertion/thao tác thất bại, Blocked = test bị skip. `Tester` là người phụ trách Build; lượt chạy do Playwright thực hiện. `Related Bug` là mã tham chiếu từ khảo sát mã nguồn, chưa phải GitHub Issue.

| Build | Tổng | Pass | Fail | Blocked |
| :--- | ---: | ---: | ---: | ---: |
| Build 4 | 69 | 53 | 16 | 0 |
| Build 5 | 69 | 63 | 6 | 0 |
| Build 6 | 69 | 60 | 9 | 0 |
| **Tổng sprint** | **207** | **176** | **31** | **0** |

## Kết quả chi tiết

### Build 4 — Thành viên 4

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "6.3", nhận "6". |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "10.5", nhận "10". |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "2.5", nhận "2". |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "3.3333333333333335", nhận "3". |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "0.25", nhận "0". |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 4 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculateButton mong đợi enabled, nhận disabled. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "0.125", nhận "0". |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: #integerSelect mong đợi enabled, nhận disabled. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: #integerSelect mong đợi enabled, nhận disabled. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 4 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 4 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 4 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: #integerSelect mong đợi enabled, nhận disabled. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: mong đợi "2.5", nhận "2". |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 4 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 4 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculatingForm mong đợi hidden, nhận visible. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 4 | Fail | [BUG-SRC-04](source-findings.md#bug-src-04) | Playwright: #integerSelect mong đợi enabled, nhận disabled. |

### Build 5 — Thành viên 5

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 5 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculateButton mong đợi enabled, nhận disabled. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 5 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 5 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 5 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 5 | Fail | [BUG-SRC-05](source-findings.md#bug-src-05) | Playwright: #clearButton mong đợi enabled, nhận disabled. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 5 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculatingForm mong đợi hidden, nhận visible. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 5 | Pass | — | Playwright: các kiểm tra đều đạt. |

### Build 6 — Thành viên 1

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 1 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 1 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 1 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 1 | Fail | [BUG-SRC-06](source-findings.md#bug-src-06) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 1 | Pass | — | Playwright: các kiểm tra đều đạt. |

