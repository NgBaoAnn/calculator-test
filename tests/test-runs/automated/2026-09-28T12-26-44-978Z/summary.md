# Kết quả chạy Playwright thực tế

Thời điểm bắt đầu: 2026-09-28T12:26:44.978Z
Phạm vi: Build 1, Build 2, Build 3, Build 4, Build 5, Build 6, Build 7, Build 8, Build 9
Lệnh điều phối: `npm run test:all-pairs`; với từng build, runner đặt `TARGET_BUILD` rồi gọi `npm run test -- ...`.
Mỗi file JSON chứa kết quả theo Test Case ID và lỗi Playwright nếu có. Đây là kết quả thực thi, không phải bảng suy luận từ mã nguồn.

| Build | Pass | Fail | Blocked | File |
| --- | ---: | ---: | ---: | --- |
| 1 | 55 | 14 | 0 | [build-1.json](build-1.json) |
| 2 | 36 | 33 | 0 | [build-2.json](build-2.json) |
| 3 | 54 | 15 | 0 | [build-3.json](build-3.json) |
| 4 | 53 | 16 | 0 | [build-4.json](build-4.json) |
| 5 | 63 | 6 | 0 | [build-5.json](build-5.json) |
| 6 | 60 | 9 | 0 | [build-6.json](build-6.json) |
| 7 | 13 | 56 | 0 | [build-7.json](build-7.json) |
| 8 | 24 | 45 | 0 | [build-8.json](build-8.json) |
| 9 | 0 | 1 | 68 | [build-9.json](build-9.json) |

Fail phản ánh sai khác với Expected result trong testcase; cần phân tích trước khi tạo bug report.
