# Bug reports — kết quả chạy Playwright

## Phạm vi và bằng chứng

- Lượt chạy: [Playwright Build 1–9 ngày 28/09/2026](automated/2026-09-28T12-26-44-978Z/summary.md), bắt đầu lúc `2026-09-28T12:26:44.978Z` (`19:26:44` giờ Việt Nam).
- Tổng cộng 621 cặp Test Case × Build: **358 Pass, 195 Fail, 68 Blocked**. Có 69 testcase trên mỗi Build 1–9; không đưa Prototype vào phạm vi báo cáo này.
- Đây là **bản bug report chính của repository**: 11 báo cáo gom 195 Fail theo nhóm lỗi chính. Các mã `BUG-SRC-*` là định danh nội bộ có từ bước khảo sát mã nguồn; chưa phải GitHub Issue ID. Cùng một lỗi có thể ảnh hưởng nhiều testcase. 68 Blocked trên Build 9 là trạng thái test script skip, không phải 68 lỗi đã được xác nhận riêng.
- Bằng chứng lưu trong JSON theo từng build và Test Case ID. Runner không giữ screenshot/video/trace; các mô tả nguyên nhân từ `source-findings.md` được ghi là giả thuyết khi JSON chưa chứng minh.
- Môi trường lần chạy: Basic Calculator tại `https://testsheepnz.github.io/BasicCalculator.html`; Playwright 1.63.0, Chromium headless (Chrome for Testing 153.0.8010.12), Ubuntu 26.04.1 LTS x86_64. Mã commit của website không có trong báo cáo. Tần suất mới được quan sát qua một lượt chạy tự động trên mỗi build.

| Mã báo cáo | Build | Số Fail xếp vào nhóm |
| :--- | :--- | ---: |
| BUG-SRC-01 | Build 1 | 9 |
| BUG-SRC-02 | Build 2 | 28 |
| BUG-SRC-03 | Build 3 | 10 |
| BUG-SRC-04 | Build 4 | 11 |
| BUG-SRC-05 | Build 5 | 1 |
| BUG-SRC-06 | Build 6 | 6 |
| BUG-SRC-07 | Build 7 | 51 |
| BUG-SRC-08 | Build 8 | 42 |
| BUG-SRC-09 | Build 9 | 1 |
| BUG-SRC-10 | Build 1–8 | 24 |
| BUG-SRC-11 | Build 1–5, 7 | 12 |

---

## BUG-SRC-01 — [BUG][M3/M4] Build 1 không báo lỗi đầu vào không phải số

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-01` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-001; TC-CON-002, TC-CON-010–013, TC-CON-016, TC-CON-022, TC-FMT-005 |
| Requirement liên quan | FR-CALC-03, FR-CALC-04 |
| Module / chức năng | M3/M4 — validation phép toán số |
| Build / commit | Build 1 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 9 |

### Mô tả lỗi

Phép toán số chấp nhận dữ liệu chữ mà không hiện thông báo validation theo testcase.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang, chọn Build 1 và tải lại trạng thái nếu đã thử ca khác.
2. Nhập `abc` vào First number và `2` vào Second number.
3. Chọn Add rồi nhấn Calculate.

### Actual result

Trường thông báo lỗi rỗng; Playwright nhận `""` thay vì thông báo validation.

### Expected result

Hiển thị `Number 1 is not a number` và không tạo kết quả mới.

### Evidence

- [Build 1 — TC-BLD-001](automated/2026-09-28T12-26-44-978Z/build-1.json): Expected `"Number 1 is not a number"`; Received `""`.
- [Build 1 — TC-CON-002](automated/2026-09-28T12-26-44-978Z/build-1.json): Expected `"Number 1 is not a number"`; Received `""`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Phát hiện từ mã nguồn gợi ý nhánh kiểm tra số bị bỏ qua; JSON chạy test xác nhận thiếu thông báo, chưa chứng minh giá trị Answer là `NaN`. Tham chiếu mã nguồn: [BUG-SRC-01](source-findings.md#bug-src-01).

---

## BUG-SRC-02 — [BUG][M1/M3/M4] Build 2 đảo kết quả Add và Concatenate

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-02` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-002; TC-ARI-001; TC-CON-001 |
| Requirement liên quan | FR-CALC-01, FR-CALC-03, FR-CALC-04 |
| Module / chức năng | M1/M3/M4 — Add, Concatenate |
| Build / commit | Build 2 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 28 |

### Mô tả lỗi

Add trả về chuỗi ghép, còn Concatenate trả về tổng số với cùng hai toán hạng số.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 2.
2. Nhập First number `12`, Second number `34`; chọn Add rồi Calculate.
3. Nhấn Clear, nhập lại `12` và `34`; chọn Concatenate rồi Calculate.

### Actual result

Add trả `1234`; Concatenate trả `46`.

### Expected result

Add trả `46`; Concatenate trả `1234`.

### Evidence

- [Build 2 — TC-BLD-002](automated/2026-09-28T12-26-44-978Z/build-2.json): Expected `"46"`; Received `"1234"`.
- [Build 2 — TC-CON-001](automated/2026-09-28T12-26-44-978Z/build-2.json): Expected `"1234"`; Received `"46"`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

`TC-BLD-002` dừng tại assertion Add đầu tiên; nhánh Concatenate được xác nhận độc lập bởi `TC-CON-001`. Tham chiếu mã nguồn: [BUG-SRC-02](source-findings.md#bug-src-02).

---

## BUG-SRC-03 — [BUG][M3/M4] Build 3 không ghép được chuỗi chữ

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-03` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-003; TC-CON-003–006, TC-CON-008–009, TC-CON-014, TC-CON-018, TC-FMT-007 |
| Requirement liên quan | FR-CALC-03, FR-CALC-04 |
| Module / chức năng | M3/M4 — Concatenate và Integers only |
| Build / commit | Build 3 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 10 |

### Mô tả lỗi

Concatenate với chữ không tạo Answer đúng; checkbox Integers only vẫn hiện trong một ca cần ẩn.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 3.
2. Nhập `abc` và `xyz`, chọn Concatenate rồi Calculate.
3. Quan sát Answer; trên trang mới, tích Integers only ở phép Add rồi chuyển sang Concatenate để kiểm tra checkbox và nhãn.

### Actual result

`TC-BLD-003` nhận Answer rỗng thay vì `abcxyz`; `TC-CON-014` thấy checkbox vẫn visible khi testcase yêu cầu hidden.

### Expected result

Answer `abcxyz`, không bị validation số chặn; Integers only ẩn và vô hiệu hóa trong Concatenate.

### Evidence

- [Build 3 — TC-BLD-003](automated/2026-09-28T12-26-44-978Z/build-3.json): Expected `"abcxyz"`; Received `""`.
- [Build 3 — TC-CON-014](automated/2026-09-28T12-26-44-978Z/build-3.json): Expected `hidden`; Received `visible`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Mã nguồn gợi ý Build 3 áp dụng quy tắc số cho Concatenate. JSON lưu Answer rỗng và trạng thái checkbox; chưa lưu nội dung thông báo validation của ca này. Tham chiếu mã nguồn: [BUG-SRC-03](source-findings.md#bug-src-03).

---

## BUG-SRC-04 — [BUG][M2/M3/M4] Build 4 khóa Integers only và cắt kết quả thập phân

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-04` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-004; TC-DIV-003, TC-CON-014–015, TC-FMT-003, TC-FMT-007 |
| Requirement liên quan | FR-CALC-02, FR-CALC-04 |
| Module / chức năng | M2/M3/M4 — định dạng kết quả |
| Build / commit | Build 4 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 11 |

### Mô tả lỗi

Checkbox Integers only bị disabled; người dùng không thể bỏ chọn để nhận kết quả thập phân.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 4.
2. Chọn Divide, nhập `5` và `2`; kiểm tra và thử bỏ chọn Integers only.
3. Nhấn Calculate và quan sát Answer.

### Actual result

`TC-BLD-004` nhận checkbox disabled thay vì enabled; `TC-DIV-003` nhận Answer `2` thay vì `2.5`.

### Expected result

Checkbox có thể bật/tắt; khi bỏ chọn, `5 / 2` trả `2.5`.

### Evidence

- [Build 4 — TC-BLD-004](automated/2026-09-28T12-26-44-978Z/build-4.json): Expected `enabled`; Received `disabled`.
- [Build 4 — TC-DIV-003](automated/2026-09-28T12-26-44-978Z/build-4.json): Expected `"2.5"`; Received `"2"`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Hai testcase cung cấp bằng chứng riêng cho trạng thái checkbox và kết quả bị cắt. Tham chiếu mã nguồn: [BUG-SRC-04](source-findings.md#bug-src-04).

---

## BUG-SRC-05 — [BUG][M4] Build 5 vô hiệu hóa Clear trước lần Calculate đầu tiên

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-05` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-005 |
| Requirement liên quan | FR-CALC-04 |
| Module / chức năng | M4 — Clear |
| Build / commit | Build 5 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Minor / P2 |
| Số Fail xếp vào nhóm | 1 |

### Mô tả lỗi

Nút Clear không khả dụng khi người dùng cần xóa trạng thái trước khi tính lần đầu.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 5.
2. Nhập `5` và `2`, chọn Divide, tích Integers only.
3. Trước khi Calculate, kiểm tra và thử bấm Clear.

### Actual result

`#clearButton` ở trạng thái disabled; Playwright đợi enabled 5 giây và thất bại.

### Expected result

Clear enabled; sau khi nhấn, Answer rỗng và Integers only được bỏ chọn.

### Evidence

- [Build 5 — TC-BLD-005](automated/2026-09-28T12-26-44-978Z/build-5.json): Expected `enabled`; Received `disabled`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Báo cáo này chỉ khẳng định lỗi trước Calculate; không suy rộng trạng thái Clear sau một phép tính hoàn tất. Tham chiếu mã nguồn: [BUG-SRC-05](source-findings.md#bug-src-05).

---

## BUG-SRC-06 — [BUG][M2/M4] Build 6 không hiển thị lỗi chia cho 0

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-06` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-006; TC-DIV-002, TC-DIV-008–009, TC-DIV-011, TC-FMT-006 |
| Requirement liên quan | FR-CALC-02, FR-CALC-04 |
| Module / chức năng | M2/M4 — Divide |
| Build / commit | Build 6 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 6 |

### Mô tả lỗi

Phép Divide với mẫu số bằng 0 không tạo thông báo lỗi bắt buộc.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 6.
2. Nhập First number `5`, Second number `0`, chọn Divide.
3. Nhấn Calculate và quan sát thông báo lỗi cùng Answer.

### Actual result

Trường thông báo lỗi rỗng; `TC-BLD-006` nhận `""` thay vì `Divide by zero error!`.

### Expected result

Hiển thị `Divide by zero error!`; Answer không chứa kết quả số không hợp lệ.

### Evidence

- [Build 6 — TC-BLD-006](automated/2026-09-28T12-26-44-978Z/build-6.json): Expected `"Divide by zero error!"`; Received `""`.
- [Build 6 — TC-DIV-002](automated/2026-09-28T12-26-44-978Z/build-6.json): Expected `"Divide by zero error!"`; Received `""`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Mã nguồn gợi ý có thể sinh `Infinity`/`NaN`; JSON của các ca này chỉ xác nhận thiếu thông báo lỗi. Tham chiếu mã nguồn: [BUG-SRC-06](source-findings.md#bug-src-06).

---

## BUG-SRC-07 — [BUG][M1/M2/M3/M4] Build 7 bỏ qua First number khi tính

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-07` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-007; TC-ARI-001; nhiều ca số học, chia và ghép chuỗi trong Build 7 |
| Requirement liên quan | FR-CALC-01, FR-CALC-02, FR-CALC-03, FR-CALC-04 |
| Module / chức năng | M1/M2/M3/M4 — toán hạng thứ nhất |
| Build / commit | Build 7 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 51 |

### Mô tả lỗi

Giá trị First number người dùng nhập không được dùng đúng; nhiều phép tính trả kết quả lệch.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang mới và chọn Build 7.
2. Nhập First number `10`, Second number `2`, chọn Add.
3. Nhấn Calculate một lần và đọc Answer.

### Actual result

`TC-BLD-007` mong đợi `12` nhưng nhận `2`; `TC-ARI-001` mong đợi `40` nhưng nhận `15`.

### Expected result

Phép Add dùng First number vừa nhập: `10 + 2 = 12`.

### Evidence

- [Build 7 — TC-BLD-007](automated/2026-09-28T12-26-44-978Z/build-7.json): Expected `"12"`; Received `"2"`.
- [Build 7 — TC-ARI-001](automated/2026-09-28T12-26-44-978Z/build-7.json): Expected `"40"`; Received `"15"`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Mã nguồn gợi ý dùng Answer cũ làm toán hạng thứ nhất; lần chạy lưu bằng chứng First number bị bỏ qua, chưa xác minh trọn chuỗi hai lượt của `TC-BLD-007` vì assertion lượt đầu đã Fail. Tham chiếu mã nguồn: [BUG-SRC-07](source-findings.md#bug-src-07).

---

## BUG-SRC-08 — [BUG][M1/M2/M3/M4] Build 8 đảo thứ tự hai toán hạng

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-08` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-008; TC-ARI-007; TC-DIV-003; nhiều ca khác trong Build 8 |
| Requirement liên quan | FR-CALC-01, FR-CALC-02, FR-CALC-03, FR-CALC-04 |
| Module / chức năng | M1/M2/M3/M4 — thứ tự toán hạng |
| Build / commit | Build 8 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 42 |

### Mô tả lỗi

Các phép toán không giao hoán dùng Second number trước First number; phép chia và trừ trả kết quả sai.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 8.
2. Nhập First number `9`, Second number `4`, chọn Subtract.
3. Nhấn Calculate và đọc Answer.

### Actual result

`TC-BLD-008` nhận `-5` thay vì `5`; `TC-DIV-003` với `5 / 2` nhận `0.4` thay vì `2.5`.

### Expected result

Dùng đúng thứ tự First number rồi Second number: `9 - 4 = 5`, `5 / 2 = 2.5`.

### Evidence

- [Build 8 — TC-BLD-008](automated/2026-09-28T12-26-44-978Z/build-8.json): Expected `"5"`; Received `"-5"`.
- [Build 8 — TC-DIV-003](automated/2026-09-28T12-26-44-978Z/build-8.json): Expected `"2.5"`; Received `"0.4"`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Kết quả của trừ và chia cùng hỗ trợ nhận định đảo toán hạng. Tham chiếu mã nguồn: [BUG-SRC-08](source-findings.md#bug-src-08).

---

## BUG-SRC-09 — [BUG][M4] Build 9 ẩn Second number, chặn phép tính

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-09` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-BLD-009 |
| Requirement liên quan | FR-CALC-04 |
| Module / chức năng | M4 — giao diện nhập liệu |
| Build / commit | Build 9 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Blocker / P1 |
| Số Fail xếp vào nhóm | 1 |

### Mô tả lỗi

Trường Second number bị ẩn khi chọn Build 9, khiến quy trình nhập hai toán hạng không thể hoàn tất.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 9.
2. Quan sát First number, Second number, Operation và Calculate.
3. Thử nhập `2` và `3`, chọn Add; ghi nhận nếu không thể nhập Second number hoặc nhấn Calculate.

### Actual result

`TC-BLD-009` thấy `#number2Field` hidden thay vì visible; assertion dừng tại đây. Runner đã skip 68 ca còn lại trên Build 9.

### Expected result

Cả hai trường số và nút Calculate hiển thị, sử dụng được; `2 + 3 = 5`.

### Evidence

- [Build 9 — TC-BLD-009](automated/2026-09-28T12-26-44-978Z/build-9.json): Expected `visible`; Received `hidden`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

JSON chỉ chứng minh Second number bị ẩn; trạng thái Calculate và 68 ca skip chưa được xác nhận độc lập bởi lượt chạy này. Tham chiếu mã nguồn: [BUG-SRC-09](source-findings.md#bug-src-09).

---

## BUG-SRC-10 — [BUG][M3] Ô rỗng hoặc toàn khoảng trắng không bị báo lỗi số

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-10` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-CON-019, TC-CON-020, TC-CON-021 trên Build 1–8 |
| Requirement liên quan | FR-CALC-03 |
| Module / chức năng | M3 — validation đầu vào |
| Build / commit | Build 1–8 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 24 |

### Mô tả lỗi

Đầu vào rỗng hoặc chỉ có khoảng trắng không phát sinh thông báo validation như Expected result.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 5 để tái hiện độc lập với các lỗi phép toán khác.
2. Chọn Add; để First number rỗng, nhập Second number `10`.
3. Nhấn Calculate; lặp lại với First number `10` và Second number rỗng hoặc toàn dấu cách.

### Actual result

Ba testcase trên Build 5 đều nhận thông báo lỗi rỗng; tương tự trên Build 1–8.

### Expected result

Ô dữ liệu không hợp lệ phải có thông báo `Number 1 is not a number` hoặc `Number 2 is not a number` tương ứng.

### Evidence

- [Build 5 — TC-CON-019](automated/2026-09-28T12-26-44-978Z/build-5.json): Expected `"Number 1 is not a number"`; Received `""`.
- [Build 5 — TC-CON-020](automated/2026-09-28T12-26-44-978Z/build-5.json): Expected `"Number 2 is not a number"`; Received `""`.
- [Build 5 — TC-CON-021](automated/2026-09-28T12-26-44-978Z/build-5.json): Expected `"Number 2 is not a number"`; Received `""`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Mã nguồn gợi ý `isNaN("")` và `isNaN("   ")` cho phép ép thành 0. Kết quả run chỉ xác nhận thiếu thông báo; Build 9 bị skip. Tham chiếu mã nguồn: [BUG-SRC-10](source-findings.md#bug-src-10).

---

## BUG-SRC-11 — [BUG][M2/M4] Giao diện không thoát trạng thái chờ sau lỗi chia cho 0

### Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-SRC-11` — mã nội bộ, chưa có GitHub Issue ID |
| Found by Test Case | TC-DIV-009, TC-FMT-006 trên Build 1–5 và 7 |
| Requirement liên quan | FR-CALC-02, FR-CALC-04 |
| Module / chức năng | M2/M4 — trạng thái Calculate |
| Build / commit | Build 1–5, 7 / commit website: chưa ghi nhận |
| Severity / Priority đề xuất | Major / P1 |
| Số Fail xếp vào nhóm | 12 |

### Mô tả lỗi

Sau khi báo lỗi chia cho 0, trạng thái chờ vẫn hiện và Calculate vẫn bị vô hiệu hóa.

### Môi trường

- URL: https://testsheepnz.github.io/BasicCalculator.html
- Browser: Chromium headless, Chrome for Testing 153.0.8010.12; Playwright 1.63.0.
- OS / device: Ubuntu 26.04.1 LTS x86_64.
- Tài khoản test: không cần đăng nhập.
- Tần suất: quan sát trong một lượt Playwright trên mỗi build liên quan; chưa chạy lặp để đo độ ổn định.

### Steps to reproduce

1. Mở trang và chọn Build 1.
2. Nhập `5` và `0`, chọn Divide rồi nhấn Calculate.
3. Chờ thông báo `Divide by zero error!`, quan sát `Calculating ...` và Calculate.
4. Thử đổi Second number thành `5` để tính lại.

### Actual result

`TC-FMT-006` thấy `#calculatingForm` vẫn visible; `TC-DIV-009` thấy `#calculateButton` vẫn disabled.

### Expected result

Trạng thái chờ kết thúc; Calculate và Clear hoạt động lại; phép tính hợp lệ tiếp theo được thực hiện.

### Evidence

- [Build 1 — TC-FMT-006](automated/2026-09-28T12-26-44-978Z/build-1.json): Expected `hidden`; Received `visible`.
- [Build 1 — TC-DIV-009](automated/2026-09-28T12-26-44-978Z/build-1.json): Expected `enabled`; Received `disabled`.
- Bảng testcase và các Fail liên quan: [tổng hợp lượt chạy](automated/2026-09-28T12-26-44-978Z/summary.md).

### Tiêu chí xác nhận lỗi

- [x] Testcase đại diện đã chạy trên đúng build.
- [x] Đã đối chiếu với Expected result trong testcase.
- [x] Có log JSON theo testcase làm bằng chứng; screenshot/video/trace không được lưu trong lượt chạy này.

### Ghi chú xử lý

Bug này không gộp với Build 6/8: trên hai build đó testcase dừng sớm vì không có thông báo chia cho 0. Tham chiếu mã nguồn: [BUG-SRC-11](source-findings.md#bug-src-11).

---
