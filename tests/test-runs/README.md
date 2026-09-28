# Test run — Basic Calculator

## Phạm vi và phương pháp

Có 69 test case trên mỗi Build 1–9, tổng cộng 621 cặp Test Case ID × Build. Ba bảng sprint giữ biểu mẫu sáu cột **Test Case ID, Module, Tester, Result, Related Bug, Note** như mẫu báo cáo.

`Result` trong ba bảng sprint lấy từ [lượt chạy Playwright thực tế ngày 28/09/2026](automated/2026-09-28T12-26-44-978Z/summary.md): **358 Pass, 195 Fail, 68 Blocked**. Có JSON theo từng Test Case ID và Build. Lượt chạy không giữ screenshot/video/trace; các phát hiện khi đọc mã nằm riêng ở [source-findings.md](source-findings.md).

[Bug reports chính](bug-reports.md) nhóm 195 Fail thành 11 báo cáo có bước tái hiện và bằng chứng. Các mã `BUG-SRC-*` là mã nội bộ, chưa phải GitHub Issue ID.

| Sprint | Build | Số case | File kết quả |
| :--- | :--- | ---: | :--- |
| 1 | 1–3 | 207 | [sprint-1-test-run.md](sprint-1-test-run.md) |
| 2 | 4–6 | 207 | [sprint-2-regression.md](sprint-2-regression.md) |
| 3 | 7–9 | 207 | [sprint-3-regression.md](sprint-3-regression.md) |

## Phân công

Mỗi Build có đúng một người phụ trách. Tên ở cột `Tester` là **người được phân công**; việc thực thi lượt chạy trên do Playwright thực hiện.

| Người phụ trách | Build | Số Build |
| :--- | :--- | ---: |
| Thành viên 1 | 1, 6 | 2 |
| Thành viên 2 | 2, 7 | 2 |
| Thành viên 3 | 3, 8 | 2 |
| Thành viên 4 | 4, 9 | 2 |
| Thành viên 5 | 5 | 1 |

## Quy ước ghi kết quả

`Pass` nghĩa là Playwright chạy và các assertion đạt; `Fail` nghĩa là có assertion hoặc thao tác thất bại; `Blocked` nghĩa là test script đã skip, chưa có kết quả thực thi cho ca đó. `Related Bug` liên kết đến [mã tham chiếu nội bộ](source-findings.md); các mã này chưa phải GitHub Issue. `Note` ghi Expected/Received khi Fail hoặc lý do skip khi Blocked.
