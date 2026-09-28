# Test run — Basic Calculator

## Phạm vi và phương pháp

Có 69 test case trên mỗi Build 1–9, tổng cộng 621 cặp Test Case ID × Build. Ba bảng sprint giữ biểu mẫu sáu cột **Test Case ID, Module, Tester, Result, Related Bug, Note** như mẫu báo cáo.

Các giá trị `Result` hiện là **suy luận từ mã nguồn, chưa chạy test thực tế**. Chúng được điền sau khi đối chiếu JavaScript nhúng trong [trang Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) với Test steps và Expected result của từng case. Bản HTML đối chiếu ngày 2026-09-28 có SHA-256 `475f650ab2607d77620ac20269f95b845d7c210209542ecd492bd4cdc551d099`. Không có log, ảnh, trace, thời điểm chạy hay Bug Issue xác minh. Các bảng tổng hợp trong sprint chỉ đếm nhãn suy luận, không phải số ca đã thực thi.

| Sprint | Build | Số case | File kết quả |
| :--- | :--- | ---: | :--- |
| 1 | 1–3 | 207 | [sprint-1-test-run.md](sprint-1-test-run.md) |
| 2 | 4–6 | 207 | [sprint-2-regression.md](sprint-2-regression.md) |
| 3 | 7–9 | 207 | [sprint-3-regression.md](sprint-3-regression.md) |

## Phân công

Mỗi Build có đúng một người phụ trách. Tên ở cột `Tester` là **người được phân công**.

| Người phụ trách | Build | Số Build |
| :--- | :--- | ---: |
| Thành viên 1 | 1, 6 | 2 |
| Thành viên 2 | 2, 7 | 2 |
| Thành viên 3 | 3, 8 | 2 |
| Thành viên 4 | 4, 9 | 2 |
| Thành viên 5 | 5 | 1 |

## Quy ước ghi kết quả

`Pass` nghĩa là mã nguồn có vẻ đáp ứng Expected result; `Fail` nghĩa là có ít nhất một bước hoặc kết quả dự kiến sai; `Blocked` nghĩa là không thể hoàn tất ca do điều khiển hoặc trạng thái bị khóa. `Related Bug` liên kết đến [mã lỗi tham chiếu từ mã nguồn](source-findings.md); các mã này chưa phải GitHub Issue hoặc bug được xác minh bằng chạy test. `Note` ghi hành vi liên quan đến từng kết quả.

