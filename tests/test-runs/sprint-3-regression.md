# Test Run Sprint 3 — Builds 7–9

## Thông tin đợt kiểm thử

| Mục | Giá trị |
| :--- | :--- |
| Test Run ID | `TR-SPRINT-03` |
| Build | Build 7, Build 8, Build 9 |
| Ứng dụng | [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) |
| Kết quả chạy thực tế | [Playwright run 2026-09-28](automated/2026-09-28T12-26-44-978Z/summary.md) |

## Phân công Build

| Build | Người phụ trách |
| :--- | :--- |
| Build 7 | Thành viên 2 |
| Build 8 | Thành viên 3 |
| Build 9 | Thành viên 4 |

## Tổng hợp kết quả chạy Playwright

`Result` lấy từ Playwright: Pass = đạt, Fail = assertion/thao tác thất bại, Blocked = test bị skip. `Tester` là người phụ trách Build; lượt chạy do Playwright thực hiện. `Related Bug` là mã tham chiếu từ khảo sát mã nguồn, chưa phải GitHub Issue.

| Build | Tổng | Pass | Fail | Blocked |
| :--- | ---: | ---: | ---: | ---: |
| Build 7 | 69 | 13 | 56 | 0 |
| Build 8 | 69 | 24 | 45 | 0 |
| Build 9 | 69 | 0 | 1 | 68 |
| **Tổng sprint** | **207** | **37** | **102** | **68** |

## Kết quả chi tiết

### Build 7 — Thành viên 2

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "40", nhận "15". |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "10000000000", nhận "1". |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "20", nhận "30". |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "-50", nhận "-35". |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "42", nhận "0". |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "6", nhận "2.86". |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "30", nhận "-20". |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "-25", nhận "-40". |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "25", nhận "0". |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "30", nhận "10". |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "6.3", nhận "-4.2". |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "56", nhận "0". |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "45", nhận "0". |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "-30", nhận "0". |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "10.5", nhận "0". |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "-999999998", nhận "1". |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "19999999998", nhận "0". |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "25", nhận "0". |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2.5", nhận "0". |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "3.3333333333333335", nhận "0". |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "-4", nhận "0". |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "0.25", nhận "0". |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculateButton mong đợi enabled, nhận disabled. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "3", nhận "0". |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "0.125", nhận "0". |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "9999999999", nhận "0". |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "1234", nhận "34". |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "HelloWorld", nhận "World". |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "@#$%", nhận "$%". |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Hello", nhận "". |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "1234567890abcdefghij", nhận "abcdefghij". |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Hello World", nhận "World". |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "123456", nhận "456". |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "SoftwareTesting", nhận "Testing". |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "46", nhận "34". |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "abcxyz", nhận "xyz". |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2.5", nhận "0". |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 2 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "12", nhận "2". |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "5", nhận "-4". |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "5", nhận "3". |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2", nhận "0". |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2", nhận "0". |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2.5", nhận "0". |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "50", nhận "30". |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-11](source-findings.md#bug-src-11) | Playwright: #calculatingForm mong đợi hidden, nhận visible. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 2 | Fail | [BUG-SRC-07](source-findings.md#bug-src-07) | Playwright: mong đợi "2.5", nhận "0". |

### Build 8 — Thành viên 3

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "30", nhận "-30". |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "-25", nhận "25". |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "25", nhận "-25". |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "30", nhận "-30". |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "6.3", nhận "-6.3". |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "25", nhận "0.04". |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2.5", nhận "0.4". |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "3.3333333333333335", nhận "0.3". |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "0", nhận "". |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "-4", nhận "-0.25". |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "0.25", nhận "4". |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "3", nhận "0.3333333333333333". |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "0.125", nhận "8". |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "9999999999", nhận "1.0000000001e-10". |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "1234", nhận "3412". |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "HelloWorld", nhận "WorldHello". |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "@#$%", nhận "$%@#". |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "1234567890abcdefghij", nhận "abcdefghij1234567890". |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Hello World", nhận "WorldHello ". |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 2 is not a number", nhận "Number 1 is not a number". |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 2 is not a number", nhận "Number 1 is not a number". |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "123456", nhận "456123". |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "SoftwareTesting", nhận "TestingSoftware". |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 1 is not a number", nhận "". |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-10](source-findings.md#bug-src-10) | Playwright: mong đợi "Number 2 is not a number", nhận "". |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "1234", nhận "3412". |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "abcxyz", nhận "xyzabc". |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2.5", nhận "0.4". |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "5", nhận "-5". |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2", nhận "0". |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2", nhận "0". |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2.5", nhận "0.4". |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 3 | Pass | — | Playwright: các kiểm tra đều đạt. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Number 1 is not a number", nhận "Number 2 is not a number". |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "Divide by zero error!", nhận "". |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 3 | Fail | [BUG-SRC-08](source-findings.md#bug-src-08) | Playwright: mong đợi "2.5", nhận "0.4". |

### Build 9 — Thành viên 4

| Test Case ID | Module | Tester | Result | Related Bug | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-011](../test-cases/module-2-division/TC-DIV-011.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-012](../test-cases/module-2-division/TC-DIV-012.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-DIV-013](../test-cases/module-2-division/TC-DIV-013.md) | M2 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-001](../test-cases/module-3-concatenate/TC-CON-001.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-002](../test-cases/module-3-concatenate/TC-CON-002.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-003](../test-cases/module-3-concatenate/TC-CON-003.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-004](../test-cases/module-3-concatenate/TC-CON-004.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-005](../test-cases/module-3-concatenate/TC-CON-005.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-006](../test-cases/module-3-concatenate/TC-CON-006.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-007](../test-cases/module-3-concatenate/TC-CON-007.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-008](../test-cases/module-3-concatenate/TC-CON-008.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-009](../test-cases/module-3-concatenate/TC-CON-009.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-010](../test-cases/module-3-concatenate/TC-CON-010.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-011](../test-cases/module-3-concatenate/TC-CON-011.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-012](../test-cases/module-3-concatenate/TC-CON-012.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-013](../test-cases/module-3-concatenate/TC-CON-013.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-014](../test-cases/module-3-concatenate/TC-CON-014.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-015](../test-cases/module-3-concatenate/TC-CON-015.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-016](../test-cases/module-3-concatenate/TC-CON-016.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-017](../test-cases/module-3-concatenate/TC-CON-017.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-018](../test-cases/module-3-concatenate/TC-CON-018.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-019](../test-cases/module-3-concatenate/TC-CON-019.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-020](../test-cases/module-3-concatenate/TC-CON-020.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-021](../test-cases/module-3-concatenate/TC-CON-021.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-CON-022](../test-cases/module-3-concatenate/TC-CON-022.md) | M3 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-001](../test-cases/module-4-formatting-builds/TC-BLD-001.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-002](../test-cases/module-4-formatting-builds/TC-BLD-002.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-003](../test-cases/module-4-formatting-builds/TC-BLD-003.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-004](../test-cases/module-4-formatting-builds/TC-BLD-004.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-005](../test-cases/module-4-formatting-builds/TC-BLD-005.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-006](../test-cases/module-4-formatting-builds/TC-BLD-006.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-007](../test-cases/module-4-formatting-builds/TC-BLD-007.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-008](../test-cases/module-4-formatting-builds/TC-BLD-008.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-BLD-009](../test-cases/module-4-formatting-builds/TC-BLD-009.md) | M4 | Thành viên 4 | Fail | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: #number2Field mong đợi visible, nhận hidden. |
| [TC-FMT-001](../test-cases/module-4-formatting-builds/TC-FMT-001.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-002](../test-cases/module-4-formatting-builds/TC-FMT-002.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-003](../test-cases/module-4-formatting-builds/TC-FMT-003.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |
| [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 4 | Blocked | [BUG-SRC-09](source-findings.md#bug-src-09) | Playwright: test script bỏ qua ca này trên Build 9; chưa có kết quả thực thi. |

## Retest
