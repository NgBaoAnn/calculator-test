# Báo cáo kiểm toán sử dụng AI — MSSV 23120202

**MSSV:** 23120202  
**Công cụ:** OpenAI Codex  
**Múi giờ:** Asia/Ho_Chi_Minh (UTC+07:00)  
**Nguồn đối chiếu:** lịch sử phiên Codex dạng JSONL; ngày giờ lấy từ bản ghi, không ước lượng.

## Tuyên bố sử dụng AI

Tôi sử dụng các công cụ AI cho những tác vụ sau:

- Đọc tài liệu hướng dẫn và cấu trúc repository để xác định quy ước quản lý test case.
- Rà soát, bổ sung và chuẩn hóa thiết kế test case, nhất là Module 3 và phạm vi Build 1–9.
- Hỗ trợ thao tác Git theo yêu cầu và kiểm tra công cụ Playwright trên máy.
- Lập kế hoạch test run theo sprint, chỉnh biểu mẫu, phân công Build.

**Giới hạn:** Những kết quả test run được suy ra từ mã nguồn không phải bằng chứng đã chạy test. Các lượt bị ngắt được ghi đúng trạng thái, không coi là đã hoàn tất.

## Nhật ký từng lần tương tác

Mỗi mục ghi nguyên văn prompt và phản hồi cuối của AI nếu phiên có kết quả cuối. Với lượt bị ngắt, mục kết quả ghi phản hồi gần nhất đã có hoặc xác nhận không có phản hồi. Thời điểm phản hồi chỉ ghi khi lịch sử có kết quả cuối.

### Lượt 01 — 28/09/2026 14:12:04 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:12:04 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:12:40 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
'/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/03 - github_testcase_management.pptx' đọc để hiểu cấu trúc thư mục khi làm việc và cách thiết kế test case
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã đọc slide. Khi làm việc trong repository này, mình sẽ theo cấu trúc được đề xuất:

```text
src/
tests/
  test-cases/<module>/TC-<MODULE>-<NUMBER>.md
  test-runs/<đợt kiểm thử>.md
  test-summary/traceability-matrix.md
.github/ISSUE_TEMPLATE/
```

Mỗi test case cần có mã ổn định, requirement liên quan, loại và kỹ thuật kiểm thử, điều kiện tiên quyết, dữ liệu, các bước thực hiện và kết quả mong đợi. **Test case là bản thiết kế**; kết quả Pass/Fail/Blocked, người chạy và ngày chạy được ghi theo từng đợt trong `test-runs/`.

Khi test fail, bug được tạo thành GitHub Issue và ghi `Found by Test Case`. Test run liên kết ngược tới Issue; PR sửa lỗi và kết quả retest hoàn tất chuỗi truy vết. Slide cũng yêu cầu thay đổi test case qua branch và Pull Request để được review.

Repository hiện mới có README và file slide, chưa có các thư mục trên. Mình sẽ áp dụng quy ước này khi bạn giao phần triển khai test case.
~~~~

### Lượt 02 — 28/09/2026 14:29:50 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:29:50 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:30:22 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
cấu trúc thư mục vừa thay đổi hãy đọc lại để hiểu cách làm vậy
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã đọc lại cấu trúc hiện tại. Dự án đang chia việc theo **4 module** trong [kế hoạch phân công](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/docs/01_phan_chia_module.md):

| Thư mục test case | Phạm vi |
|---|---|
| `module-1-arithmetic` | Cộng, trừ, nhân và giá trị biên |
| `module-2-division` | Phép chia và ngoại lệ |
| `module-3-concatenate` | Ghép chuỗi và kiểm tra dữ liệu nhập |
| `module-4-formatting-builds` | Định dạng kết quả, điều khiển và các build lỗi |

Mỗi test case là một file Markdown mang mã `TC-ARI/DIV/CON/FMT-xxx`, theo mẫu: requirement, điều kiện tiên quyết, dữ liệu, các bước và kết quả mong đợi. Kết quả thực hiện nằm ở `tests/test-runs/`; quan hệ giữa yêu cầu và test case nằm ở `tests/test-summary/`; mẫu Issue nằm trong `.github/ISSUE_TEMPLATE/`. Mình sẽ theo **cấu trúc thực tế này** khi làm tiếp.

Có một điểm cần lưu ý: [README](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/README.md) vẫn mô tả cấu trúc `docs/02_thiet_ke_test_cases.md` chưa tồn tại, còn test run và ma trận truy vết mới liệt kê 8 test case mẫu. Các file Module 3 mới thêm chưa được phản ánh ở đó. Mình chưa sửa file nào.
~~~~

### Lượt 03 — 28/09/2026 14:30:38 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:30:38 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:30:47 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
tôi đang được chia làm module 3
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình hiểu: bạn phụ trách **Module 3 – Ghép chuỗi và kiểm tra dữ liệu nhập**. Từ đây, mình sẽ tập trung vào các test case `TC-CON-*` trong [thư mục Module 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate), gồm phép Concatenate, dữ liệu không hợp lệ ở các phép toán số học và trạng thái checkbox *Integers only*.
~~~~

### Lượt 04 — 28/09/2026 14:33:10 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:33:10 (UTC+07:00) (gửi prompt)
- **Câu lệnh (prompt) của bạn:**

~~~~text
kiểm tra các test case của module 3 đã đầy đủ và ổn chưa
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Lượt bị ngắt, chưa có câu trả lời cuối. Phản hồi gần nhất của AI:

Trang mẫu xác nhận rằng Concatenate xử lý đầu vào như chuỗi, còn các phép toán số học kiểm tra dữ liệu số. Mình đang kiểm tra thêm những expected result quá cụ thể trong test case vì chúng có thể khác hành vi thực tế của Prototype.
~~~~

### Lượt 05 — 28/09/2026 14:35:34 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:35:34 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:36:21 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
bạn hãy xem phần thiết kế test case thôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã rà **18 file `TC-CON-001` đến `TC-CON-018` chỉ ở mức thiết kế**. Bộ test đã bao phủ khá tốt việc ghép chuỗi số, chữ, ký tự đặc biệt, ô trống, dữ liệu sai ở hai ô và chuyển trạng thái *Integers only*. **Chưa nên xem là đầy đủ hoặc chốt bản thiết kế**, vì còn các điểm sau:

1. **Thiếu trường hợp validation theo phân công Module 3:** chưa có test riêng cho ô số để trống, đầu vào chỉ gồm khoảng trắng, hoặc emoji/ký tự Unicode trong phép toán số học. [Kế hoạch Module 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/docs/01_phan_chia_module.md:91) có nêu các nhóm dữ liệu này.
2. **`TC-CON-016` đến `018` ghi “Actual result” dù trạng thái vẫn là `Not Run`.** Đây đang là hành vi lỗi dự kiến để tìm trên các build, chưa phải kết quả quan sát. Nên chuyển phần đó thành *dấu hiệu lỗi cần kiểm tra*; kết quả thực tế ghi vào test run sau khi chạy. Xem [TC-CON-016](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-016.md:29).
3. **`TC-CON-014` quy định checkbox phải `checked = false` và `disabled = true`**, trong khi yêu cầu Module 3 chỉ nêu việc ẩn/vô hiệu hóa. Cần xác định rõ đây là tiêu chí được yêu cầu hay giả định thêm, để tránh đánh Fail sai. [TC-CON-014](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-014.md:29).
4. **Một số tiêu chí cần viết chính xác hơn:** [TC-CON-007](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-007.md:28) nên nói ô Answer có giá trị rỗng, tránh hiểu là hiển thị hai dấu ngoặc kép; [TC-CON-008](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-008.md:29) mới thử đúng 10 ký tự mỗi ô, chưa thử ký tự thứ 11.
5. **Định dạng chưa thống nhất:** bảng Test data của [TC-CON-001](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-001.md:13) và `002` thiếu hàng tiêu đề/dấu phân cách Markdown như các file còn lại.

Ưu tiên trước khi nộp: bổ sung các trường hợp còn thiếu, sửa cách ghi `Actual result` của ba case theo build, rồi chuẩn hóa expected result và bảng dữ liệu. Mình **chưa chạy ứng dụng và chưa sửa file**, nên nhận xét này chỉ đánh giá chất lượng thiết kế.
~~~~

### Lượt 06 — 28/09/2026 14:37:00 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:37:00 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:38:58 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
bạn hãy sửa giúp tôi chỉ thiết kế phần test case thôi các phần khác chưa làm
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã sửa **chỉ các file test case của Module 3**. Bộ thiết kế hiện có 22 ca `TC-CON-001` đến `TC-CON-022`.

Mình bổ sung ca cho ô số để trống, đầu vào chỉ có dấu cách và emoji; làm rõ kiểm thử ký tự thứ 11; chuẩn hóa bảng dữ liệu và expected result. Các ca Build 1–3 giờ ghi **mục tiêu đối sánh** thay vì ghi sẵn “Actual result” khi chưa chạy.

Mình đã kiểm tra mã test case liên tục, đủ các mục trong mẫu và không còn mục “Actual result” trong bộ thiết kế. Chưa chạy ứng dụng; expected result của các ca mới sẽ được xác nhận khi thực hiện test. Mình không sửa test run, bug report hay tài liệu tổng hợp.
~~~~

### Lượt 07 — 28/09/2026 14:39:31 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:39:31 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:41:23 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
bạn phải làm theo chuẩn ban đầu của tc-con-001 á
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã chỉnh lại **toàn bộ 22 test case Module 3 theo đúng mẫu ban đầu của `TC-CON-001`**. `TC-CON-001` và `TC-CON-002` đã trở về nguyên văn bản gốc; các file còn lại dùng cùng thứ tự mục, bảng dữ liệu hai cột đơn giản và phần Expected result dạng đoạn văn.

Mình giữ các ca đã bổ sung và kiểm tra rằng mã `TC-CON-001` đến `TC-CON-022` liên tục, mỗi file đủ các mục của mẫu. Chỉ các file test case Module 3 được sửa; chưa thực hiện test run.
~~~~

### Lượt 08 — 28/09/2026 14:42:22 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:42:22 (UTC+07:00) (gửi prompt)
- **Câu lệnh (prompt) của bạn:**

~~~~text
push các test case lên giúp tôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Lượt bị ngắt, chưa có câu trả lời cuối. Phản hồi gần nhất của AI:

Remote `main` vừa có thêm commit của Module 1. Mình sẽ dùng một worktree tạm từ trạng thái remote mới nhất để đẩy riêng các test case Module 3, tránh đưa các thay đổi khác trong thư mục làm việc của bạn vào commit.
~~~~

### Lượt 09 — 28/09/2026 14:44:07 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:44:07 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 14:46:15 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
bạn pull về trước đi xong push lên ko cần tạo worktree
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã pull `main` và tạo commit `67a2da5` chỉ gồm 20 test case mới của Module 3 (`TC-CON-003` đến `TC-CON-022`). Repository hiện sạch, nhánh local đang đi trước remote 1 commit.

**Push chưa thành công:** GitHub trả lỗi `403` vì tài khoản đang dùng (`vinh-code`) không có quyền ghi vào `NgBaoAnn/calculator-test`. Bạn cần cấp quyền ghi cho tài khoản này hoặc đăng nhập bằng tài khoản có quyền; sau đó mình có thể push commit đã tạo.
~~~~

### Lượt 10 — 28/09/2026 14:46:26 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:46:26 (UTC+07:00) (gửi prompt)
- **Câu lệnh (prompt) của bạn:**

~~~~text
tôi có quyền r á push dùm tui
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Lượt bị ngắt, chưa có câu trả lời cuối. Phản hồi gần nhất của AI:

Mình sẽ thử push lại commit `67a2da5` bằng quyền hiện tại và kiểm tra kết quả trên remote.
~~~~

### Lượt 11 — 28/09/2026 14:53:45 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:53:45 (UTC+07:00) (gửi prompt)
- **Câu lệnh (prompt) của bạn:**

~~~~text
hãy review lại tất cả tc giúp tôi xem đã theo đúng chuẩn form cùng form với nhau giúp tôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Lượt bị ngắt trước khi AI có phản hồi riêng.
~~~~

### Lượt 12 — 28/09/2026 14:56:29 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 14:56:29 (UTC+07:00) (gửi prompt)
- **Câu lệnh (prompt) của bạn:**

~~~~text
hãy sửa trong test case không để mặc định là prototype vì cho 9 build lận hãy thiết kế lại dùng cho tất cả các build
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Lượt bị ngắt, chưa có câu trả lời cuối. Phản hồi gần nhất của AI:

Lần rà cuối cho thấy cả 69 file đều có cùng 7 mục, đều ghi Build 1–9, không còn bước chọn cố định Prototype hay Build cụ thể. Remote vừa có thêm một commit không đụng đến các test case này; mình sẽ cập nhật nhánh rồi đẩy phần chỉnh sửa lên.
~~~~

### Lượt 13 — 28/09/2026 15:02:00 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 15:02:00 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 15:02:14 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
ok đẩy lên main giúp tôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Đã đẩy lên `main` thành công. Commit `6c29796` cập nhật cả 69 test case để chạy riêng trên từng Build 1–9; mình đã xác nhận `main` trên GitHub trỏ tới commit này.
~~~~

### Lượt 14 — 28/09/2026 15:06:12 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 15:06:12 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 15:07:58 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
bước sau là sẽ phải cần chạy playwright hãy kiểm tra xem máy tôi đủ công cụ dể chạy chưa
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Máy **đã sẵn sàng chạy Playwright qua CLI**. Node `v24.18.0` và npm `11.16.0` hoạt động; Playwright CLI `0.1.21` khởi động được trình duyệt, mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html), lấy snapshot và chọn được Build 1. Mình đã đóng phiên kiểm tra; repository không có file thay đổi.

Dự án hiện chưa có `@playwright/test` hoặc cấu hình để chạy một bộ test tự động bằng `npm test`. Nếu bước tiếp theo là thực thi các test case qua CLI, công cụ đã đủ.
~~~~

### Lượt 15 — 28/09/2026 15:18:05 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 15:18:05 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 15:19:09 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
hãy plan để thực hiện test run chia thành các sprint giúp tôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đề xuất **3 sprint chạy test**, mỗi sprint kiểm tra toàn bộ 69 test case trên 3 Build. Như vậy kế hoạch có **621 lượt theo cặp test case–Build**; các case có nhiều dòng dữ liệu sẽ cần nhiều lần thao tác hơn.

| Giai đoạn | Build | Khối lượng | Kết quả cần có |
|---|---|---:|---|
| Chuẩn bị | Prototype để đối chiếu các expected result chưa rõ | Chạy thử có chọn lọc | Chốt môi trường, Playwright và mẫu ghi kết quả |
| Sprint 1 | 1–3 | 207 lượt | Test run, bằng chứng, bug liên quan |
| Sprint 2 | 4–6 | 207 lượt | Test run, bằng chứng, bug liên quan |
| Sprint 3 | 7–9 | 207 lượt | Test run, bằng chứng, tổng hợp cuối đợt |

Mỗi thành viên chạy module mình phụ trách trên **từng Build**: Module 1 có 18 case, Module 2 có 13, Module 3 của bạn có 22, Module 4 có 16. Riêng Module 3 là **66 lượt mỗi sprint**. Nên chạy ca kiểm tra các điều khiển chính trước; nếu một Build thiếu điều khiển khiến ca khác không thể thực hiện, ghi rõ `Blocked` cùng ảnh và lý do, không đánh `Pass`.

Mỗi dòng test run cần ghi tối thiểu: **Sprint, Build, Test Case ID, người chạy, thời điểm, Pass/Fail/Blocked, actual result, đường dẫn bằng chứng Playwright và bug Issue**. Một lỗi ảnh hưởng nhiều case có thể dùng một Issue, nhưng phải liên kết đủ các case bị ảnh hưởng. Chỉ kết thúc sprint khi mọi cặp case–Build đã có kết quả hoặc lý do chưa chạy rõ ràng.

Hai file [Sprint 1](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-1-test-run.md) và [Sprint 2](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-2-regression.md) hiện mô tả kế hoạch cũ và có sẵn kết quả `PASS`; **không nên dùng các dòng đó làm bằng chứng cho đợt chạy mới**.
~~~~

### Lượt 16 — 28/09/2026 15:20:02 (UTC+07:00)

- **Tên công cụ AI:** OpenAI Codex
- **Ngày và giờ:** 28/09/2026 15:20:02 (UTC+07:00) (gửi prompt)
- **Thời điểm AI trả lời cuối:** 28/09/2026 15:23:22 (UTC+07:00)
- **Câu lệnh (prompt) của bạn:**

~~~~text
ok hãy sửa lại giúp tôi
~~~~

- **Kết quả do AI tạo ra:**

~~~~markdown
Mình đã sửa lại kế hoạch test run thành **3 sprint**: Build 1–3, 4–6 và 7–9. Mỗi sprint có 207 dòng kết quả cho 69 test case; tổng cộng **621 cặp test case–Build**.

Hai file [Sprint 1](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-1-test-run.md) và [Sprint 2](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-2-regression.md) đã được viết lại; mình thêm [Sprint 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-3-regression.md), [quy trình ghi kết quả](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/README.md) và cập nhật ma trận truy vết.

Tất cả dòng bắt đầu ở `Not Run`; các kết quả `PASS` cũ không được dùng làm bằng chứng cho đợt mới. Mình đã kiểm tra đủ 207 dòng mỗi sprint và mọi liên kết tới test case đều hợp lệ.
~~~~

## Phụ lục: Bản xuất hội thoại gốc

Phụ lục giữ nguyên bản xuất đang có trước khi đổi tên file. Bản xuất này kết thúc ở yêu cầu sửa kế hoạch test run; nhật ký trên bao gồm các lượt sau đó theo lịch sử phiên Codex.

<details>
<summary>Mở bản ghi hội thoại gốc</summary>

# Nhật ký trao đổi với Codex

- MSSV: **23120202**
- Múi giờ: **Asia/Ho_Chi_Minh (UTC+07:00)**
- Ngày giờ ở các mục User/Assistant được đối chiếu từ lịch sử phiên Codex; các mục Activity giữ nguyên nội dung.

## User — 2026-09-28 14:12:04 (UTC+07:00)

'/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/03 - github_testcase_management.pptx' đọc để hiểu cấu trúc thư mục khi làm việc và cách thiết kế test case

## Assistant — 2026-09-28 14:12:08 (UTC+07:00)

Mình sẽ đọc slide và đối chiếu với thư mục hiện tại, rồi tóm tắt quy ước tổ chức và cách thiết kế test case để dùng cho các bước tiếp theo.

## Activity

    $ rg -n -i 'test case|testcase|calculator|github' /home/pham-quang-vinh/.codex/memories/MEMORY.md
    ✗ (1) • 0ms

## Activity

    $ pwd; rg --files -g 'AGENTS.md' -g '*.pptx' -g '!**/node_modules/**' -g '!**/bin/**' -g '!**/obj/**' | head -80; find . -maxdepth 3 -type d | sort | head -100
    /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test
    03 - github_testcase_management.pptx
    .
    ./.agents
    ./.codex
    ./.git
    ./.git/branches
    ./.git/gk
    ./.git/hooks
    ./.git/info
    ./.git/logs
    ./.git/logs/refs
    ./.git/objects
    ./.git/objects/info
    ./.git/objects/pack
    ./.git/refs
    ./.git/refs/heads
    ./.git/refs/remotes
    ./.git/refs/tags
    ✓ • 0ms

## Activity

    $ ls -la; rg --files -g '!*.pptx' | head -100; git status --short; git ls-files | head -100
    total 2592
    drwxrwxr-x 5 pham-quang-vinh pham-quang-vinh    4096 Sep 28 14:12 .
    drwxrwxr-x 3 pham-quang-vinh pham-quang-vinh    4096 Sep 28 14:03 ..
    dr-xr-xr-x 2 pham-quang-vinh pham-quang-vinh      40 Sep 28 14:12 .agents
    dr-xr-xr-x 2 pham-quang-vinh pham-quang-vinh      40 Sep 28 14:12 .codex
    drwxrwxr-x 9 pham-quang-vinh pham-quang-vinh    4096 Sep 28 14:07 .git
    -rw-rw-r-- 1 pham-quang-vinh pham-quang-vinh 2637617 Sep 28 14:11 03 - github_testcase_management.pptx
    -rw-rw-r-- 1 pham-quang-vinh pham-quang-vinh      18 Sep 28 14:03 README.md
    README.md
    ?? "03 - github_testcase_management.pptx"
    README.md
    ✓ • 0ms

## Activity

    $ find .. -name AGENTS.md -print
    ✓ • 0ms

## Activity

    $ python3 -c 'import pptx; print(pptx.__version__)'
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
    ModuleNotFoundError: No module named 'pptx'
    ✗ (1) • 123ms

## Activity

    $ which libreoffice; which soffice; which pdftotext; which unzip; unzip -l '03 - github_testcase_management.pptx' | tail -12
    ✓ • 5ms

## Activity

    $ cat README.md; ls -la .agents .codex
    # calculator-test
    .agents:
    total 4
    dr-xr-xr-x 2 pham-quang-vinh pham-quang-vinh   40 Sep 28 14:12 .
    drwxrwxr-x 5 pham-quang-vinh pham-quang-vinh 4096 Sep 28 14:12 ..
    
    .codex:
    total 4
    dr-xr-xr-x 2 pham-quang-vinh pham-quang-vinh   40 Sep 28 14:12 .
    drwxrwxr-x 5 pham-quang-vinh pham-quang-vinh 4096 Sep 28 14:12 ..
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        import zipfile,re,xml.etree.ElementTree as ET
        p='03 - github_testcase_management.pptx'
        with zipfile.ZipFile(p) as z:
          names=z.namelist()
          for name in sorted((n for n in names if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)),key=lambda n:int(re.search(r'(\d+)\.xml',n).group(1))):
            root=ET.fromstring(z.read(name))
            texts=[x.text or '' for x in root.iter() if x.tag.endswith('}t')]
            print('\n###',name)
            print('\n'.join(texts))
          for name in sorted(n for n in names if re.fullmatch(r'ppt/notesSlides/notesSlide\d+\.xml',n)):
            root=ET.fromstring(z.read(name))
            texts=[x.text or '' for x in root.iter() if x.tag.endswith('}t')]
            print('\n### NOTES',name, '\n'.join(texts))
        PY
    
    ### ppt/slides/slide1.xml
    Quản lý Test Case
    trên GitHub
    Từ test case → test run → bug report → pull request → retest
    Software Testing
    REQUIREMENT → TEST CASE → BUG → FIX → RETEST
    01
    
    ### ppt/slides/slide2.xml
    Mục tiêu buổi học
    Sau buổi học, sinh viên có thể thiết lập một quy trình kiểm thử cơ bản trên GitHub
    GitHub Test Case Management · Software Testing
    02
    1
    Lưu trữ test case có cấu trúc
    Dùng Markdown trong repository hoặc Issue template
    2
    Execute test case có bằng chứng
    Ghi test run, result, tester, ngày chạy
    3
    Tạo bug từ test case fail
    Liên kết Found by Test Case + Related bug
    4
    Theo dõi sửa lỗi bằng GitHub Issues/Projects
    Labels, assignee, milestone, status board
    5
    Retest và traceability
    Requirement ↔ Test Case ↔ Bug ↔ Pull Request
    Kết quả cuối cùng
    Mỗi lỗi phát hiện đều truy vết được:
    Test case nào phát hiện?
    Bug issue nào mô tả?
    PR nào sửa?
    Tester nào retest?
    
    ### ppt/slides/slide3.xml
    Mô hình tư duy: Test Case khác Bug như thế nào?
    Test case là tài sản kiểm thử; bug là kết quả phát hiện khi execute test case
    GitHub Test Case Management · Software Testing
    03
    Requirement
    FR-LOGIN-01
    Test Case
    TC-LOGIN-003
    Test Run
    Sprint 1
    Bug Issue
    #18
    Pull Request
    PR #21
    Nguyên
    tắc
    :
    Một bug phải ghi rõ “Found by Test Case ID”.
    Một test case fail phải có “Related bug #...”.
    
    ### ppt/slides/slide4.xml
    Ba cách quản lý test case trên GitHub
    Tùy quy mô dự án, có thể chọn file Markdown, Issues hoặc mô hình Hybrid
    GitHub Test Case Management · Software Testing
    04
    1. File Markdown trong repo
    /tests/test-cases/*.md
    Khuyến nghị cho lớp học: có version history, review bằng Pull Request, dễ chấm điểm.
    2. Mỗi test case là một Issue
    label: type: test-case
    Dễ thao tác trên UI, dễ assign và lọc; nhưng dễ rối nếu có nhiều test case.
    3. Hybrid
    Test case = file; Bug = Issue
    Tốt nhất: test case là tài liệu kiểm thử, bug là luồng xử lý lỗi.
    
    ### ppt/slides/slide5.xml
    Cấu trúc thư mục đề xuất trong repository
    Tổ chức để giảng viên và nhóm dễ kiểm tra, review và thống kê
    GitHub Test Case Management · Software Testing
    05
    project-root/
    ├── src/
    ├── tests/
    │   ├── test-cases/
    │   │   ├── login/
    │   │   │   ├── TC-LOGIN-001.md
    │   │   │   └── TC-LOGIN-002.md
    │   │   ├── register/
    │   │   └── checkout/
    │   ├── test-runs/
    │   │   ├── sprint-1-test-run.md
    │   │   └── sprint-2-regression.md
    │   └── test-summary/
    │       └── traceability-matrix.md
    └── .github/ISSUE_TEMPLATE/
    Vai trò từng thư mục
    test-cases/: thiết kế test case chính thức
    
    test-runs/: kết quả thực thi theo sprint hoặc đợt regression
    
    test-summary/: báo cáo tổng hợp và traceability matrix
    
    .github/ISSUE_TEMPLATE/: mẫu Bug Report, Test Task, Test Run
    Quy tắc: Không sửa test case trực tiếp trên main.
    Tạo branch + Pull Request để review thay đổi test case.
    
    ### ppt/slides/slide6.xml
    Quy ước đặt mã test case
    Mã test case là khóa để liên kết requirement, test run và bug
    GitHub Test Case Management · Software Testing
    06
    Cấu trúc đề xuất
    TC-[MODULE]-[NUMBER]
    TC-LOGIN-001
    TC-REGISTER-005
    TC-CART-003
    TC-CHECKOUT-010
    Mã
    Ý nghĩa
    TC-LOGIN-001
    Test case số 1 của Login
    TC-REGISTER-005
    Test case số 5 của Register
    TC-CHECKOUT-010
    Test case số 10 của Checkout
    Không nên dùng
    test1
    check-login
    case-a
    login-success-test-v2-final
    Mã test case ổn định giúp traceability không bị đứt khi đổi tiêu đề test case.
    
    ### ppt/slides/slide7.xml
    Template file Test Case chuẩn
    Mỗi test case nên đủ thông tin để người khác execute lại được
    GitHub Test Case Management · Software Testing
    07
    # TC-LOGIN-001: Đăng nhập thành công
    ## Requirement ID
    FR-LOGIN-01
    ## Module / Test type / Technique
    Login / Functional / Equivalence Partitioning
    ## Preconditions
    - User đã có tài khoản hợp lệ
    - User đang ở trang Login
    ## Test data
    | Email | user01@gmail.com |
    | Password | Abc@123456 |
    ## Test steps
    1. Mở trang Login
    2. Nhập email và password hợp lệ
    3. Bấm Login
    ## Expected result
    Đăng nhập thành công và chuyển về Home.
    ## Status / Related bugs
    Not Run / None
    ✓
    Requirement ID
    Để đo coverage
    ✓
    Preconditions
    Tránh lỗi do môi trường/test data
    ✓
    Test data
    Rõ dữ liệu hợp lệ/không hợp lệ
    ✓
    Expected result
    Căn cứ xác định pass/fail
    ✓
    Related bugs
    Liên kết bug khi test fail
    Test case tốt không chỉ có steps, mà phải có điều kiện, dữ liệu và expected result rõ ràng.
    
    ### ppt/slides/slide8.xml
    Test Run: ghi nhận kết quả execute test case
    Test case là thiết kế; test run là bằng chứng đã chạy trong một sprint/release
    GitHub Test Case Management · Software Testing
    08
    Test Case ID
    Module
    Tester
    Result
    Related Bug
    Note
    TC-LOGIN-001
    Login
    An
    Pass
    TC-LOGIN-002
    Login
    Bình
    Fail
    #18
    Không validate password
    TC-REG-001
    Register
    Chi
    Blocked
    #19
    Không mở được form
    TC-CART-003
    Cart
    Dũng
    Pass
    Trạng thái test run
    Pass
    Fail
    Blocked
    Not Run
    Khi Result = Fail hoặc Blocked → phải có Related Bug hoặc lý do rõ ràng.
    
    ### ppt/slides/slide9.xml
    Labels cần có cho quản lý test case và bug
    Dùng tiền tố để tạo “nhóm label” dễ lọc và dễ thống kê
    GitHub Test Case Management · Software Testing
    09
    Type
    type: test-case
    type: test-run
    type: bug
    type: task
    Module
    module: login
    module: register
    module: cart
    module: checkout
    module: api
    Technique
    technique: EP
    technique: BVA
    technique: decision-table
    technique: state-transition
    Result/Status
    result: pass
    result: fail
    result: blocked
    status: ready for retest
    Priority/Severity
    severity: critical
    severity: major
    priority: P0
    priority: P1
    Filter mẫu: is:issue label:"type: bug" label:"status: ready for retest"
    
    ### ppt/slides/slide10.xml
    GitHub Project cho Test Execution
    Project board giúp nhìn toàn bộ tiến độ kiểm thử trong sprint
    GitHub Test Case Management · Software Testing
    10
    Not Run
    TC-LOGIN
    TC-CART
    TC-API
    Running
    TC-LOGIN
    TC-CART
    TC-API
    Passed
    TC-LOGIN
    TC-CART
    TC-API
    Failed
    TC-LOGIN
    TC-CART
    TC-API
    Blocked
    TC-LOGIN
    TC-CART
    TC-API
    Retest
    TC-LOGIN
    TC-CART
    TC-API
    Custom field
    Ví dụ
    Test Case ID
    TC-LOGIN-003
    Module
    Login / Register / Cart
    Result
    Pass / Fail / Blocked
    Related Bug
    #18
    Tester
    Nguyễn Văn A
    Execution Date
    08/06/2026
    
    ### ppt/slides/slide11.xml
    Cách kết hợp Test Case và Bug
    Một test fail phải sinh ra bug issue có liên kết hai chiều
    GitHub Test Case Management · Software Testing
    11
    Liên kết hai chiều
    Trong Bug Issue: ghi Found by Test Case: TC-LOGIN-003
    
    Trong file Test Run: ghi Result = Fail, Related Bug = #18
    
    Trong file Test Case: bổ sung Related bugs nếu bug nghiêm trọng hoặc tái diễn
    
    Trong Pull Request: ghi Fixes #18 hoặc Related to #18
    TC-LOGIN-003 fail
            ↓
    Create Bug Issue #18
            ↓
    PR #21 fixes #18
            ↓
    Retest TC-LOGIN-003
            ↓
    Close #18
    Không tạo bug chung chung. Bug phải truy ngược được test case nào đã phát hiện.
    
    ### ppt/slides/slide12.xml
    Template Bug Report khi Test Case fail
    Bug là Issue riêng; không chỉ ghi comment trong file test case
    GitHub Test Case Management · Software Testing
    12
    Title: [BUG][Login] Hệ thống cho phép đăng nhập với password sai
    ## Found by Test Case
    TC-LOGIN-003
    ## Requirement liên quan
    FR-LOGIN-02
    ## Severity / Priority
    Major / P1
    ## Environment
    Browser, OS, URL, build/commit
    ## Steps to reproduce
    1. Mở trang Login
    2. Nhập email hợp lệ
    3. Nhập password sai
    4. Bấm Login
    ## Expected result
    Không cho đăng nhập và hiển thị lỗi.
    ## Actual result
    Hệ thống vẫn đăng nhập thành công.
    ## Evidence
    Screenshot / video / console log
    Labels nên gắn
    type: bug
    module: login
    severity: major
    priority: P1
    status: new
    found-by: test-case
    Nếu thiếu Expected/Actual/Evidence, developer rất khó sửa và tester khó retest.
    
    ### ppt/slides/slide13.xml
    Workflow chuẩn từ thiết kế test case đến đóng bug
    Có checkpoint rõ ràng cho tester, developer và test lead
    GitHub Test Case Management · Software Testing
    13
    Design Test Case
    Review Test Case
    Execute Test Case
    Fail?
    Create Bug
    Assign Dev
    Fix in PR
    Ready for Retest
    Re-execute
    Close / Reopen
    Nếu Pass → ghi result pass và không tạo bug
    Checkpoint bắt buộc trước khi Close bug:
    1) PR đã merge
    2) Tester retest pass
    3) Comment retest result
    4) Không phát sinh regression nghiêm trọng
    
    ### ppt/slides/slide14.xml
    Traceability Matrix: truy vết Requirement - Test Case - Bug
    Bảng này giúp chứng minh coverage và không bỏ sót lỗi
    GitHub Test Case Management · Software Testing
    14
    Requirement
    Test Case
    Result
    Bug Issue
    Status
    FR-LOGIN-01
    TC-LOGIN-001
    Pass
    Done
    FR-LOGIN-02
    TC-LOGIN-003
    Fail
    #18
    Ready for Retest
    FR-REGISTER-01
    TC-REGISTER-001
    Pass
    Done
    FR-REGISTER-02
    TC-REGISTER-005
    Fail
    #24
    Open
    FR-CART-01
    TC-CART-001
    Blocked
    #27
    Blocked
    Coverage
    Requirement nào đã test?
    Defect traceability
    Bug nào thuộc requirement nào?
    Regression
    Test case nào cần chạy lại?
    
    ### ppt/slides/slide15.xml
    Kết hợp với Automated Test và GitHub Actions
    Khi có automation, test report có thể lưu dưới dạng artifact và liên kết về bug
    GitHub Test Case Management · Software Testing
    15
    name: Run Tests
    on: [push, pull_request]
    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - run: npm install
          - run: npm test
          - uses: actions/upload-artifact@v4
            with:
              name: test-report
              path: reports/
    Khi test tự động fail
    Kiểm tra log/test report trong GitHub Actions
    
    Xác định test case hoặc test script bị fail
    
    Tạo Bug Issue nếu lỗi do hệ thống, không phải lỗi test script
    
    Trong bug ghi: Found by: GitHub Actions + workflow run + test case/script
    
    Sau khi fix, workflow phải pass trước khi close bug
    Automation không thay thế test case; automation là cách execute một phần test case nhanh và lặp lại.
    
    ### ppt/slides/slide16.xml
    Checklist triển khai nhanh
    GitHub Test Case Management · Software Testing
    17
    ✓
    Có thư mục /tests/test-cases/
    ✓
    Mỗi test case có mã TC-[MODULE]-[NUMBER]
    ✓
    Có file test-run theo sprint hoặc đợt regression
    ✓
    Bug Issue có Found by Test Case
    ✓
    Test run ghi Related Bug khi fail/blocked
    ✓
    Có labels type/module/result/severity/priority/status
    ✓
    Có Project board theo trạng thái kiểm thử
    ✓
    Bug chỉ close sau khi retest pass
    ✓
    Có traceability matrix cuối sprint
    Thông điệp chính: GitHub
    giúp
    
    thấy
     được toàn bộ vòng đời kiểm thử, không chỉ viết test case rời rạc.
    
    ### NOTES ppt/notesSlides/notesSlide1.xml Mục tiêu slide mở đầu: sinh viên hiểu GitHub có thể dùng để quản lý vòng đời kiểm thử, không chỉ để lưu mã nguồn.
    1
    
    ### NOTES ppt/notesSlides/notesSlide10.xml Giới thiệu GitHub Projects: có thể tạo board và custom fields. Nên dùng một Project cho từng sprint hoặc một Project chung có field Sprint.
    10
    
    ### NOTES ppt/notesSlides/notesSlide11.xml Đây là slide trọng tâm. Nên yêu cầu sinh viên tạo một bug giả từ một test case fail để thực hành liên kết.
    11
    
    ### NOTES ppt/notesSlides/notesSlide12.xml Nên nhấn mạnh bug report là đơn vị giao việc cho developer; issue phải đủ thông tin tái hiện độc lập.
    12
    
    ### NOTES ppt/notesSlides/notesSlide13.xml Dùng slide này làm quy trình chính thức cho nhóm. Có thể giao vai trò: tester tạo bug, developer sửa, tester retest, test lead đóng.
    13
    
    ### NOTES ppt/notesSlides/notesSlide14.xml Traceability matrix là phần rất quan trọng trong báo cáo cuối kỳ. Nó giúp trả lời yêu cầu nào chưa được test và bug nào đang còn mở.
    14
    
    ### NOTES ppt/notesSlides/notesSlide15.xml Với lớp nâng cao, có thể yêu cầu sinh viên đưa test automation chạy qua GitHub Actions và upload artifact test report.
    15
    
    ### NOTES ppt/notesSlides/notesSlide16.xml Dùng checklist này để kiểm tra repository trước khi chấm.
    16
    
    ### NOTES ppt/notesSlides/notesSlide2.xml Nên dùng slide này để nêu tiêu chí đánh giá bài tập nhóm: test case đủ cấu trúc, có test run, có bug issue và có traceability.
    2
    
    ### NOTES ppt/notesSlides/notesSlide3.xml Giải thích sự khác biệt: test case là thiết kế trước khi test; bug chỉ sinh ra khi actual result khác expected result.
    3
    
    ### NOTES ppt/notesSlides/notesSlide4.xml Đề xuất chính là mô hình hybrid: test case dùng file Markdown để đảm bảo versioning; bug dùng GitHub Issues để theo dõi trạng thái xử lý.
    4
    
    ### NOTES ppt/notesSlides/notesSlide5.xml Slide này giúp sinh viên biết cần nộp những file nào. Với lớp học, thư mục tests là minh chứng chấm điểm rất rõ ràng.
    5
    
    ### NOTES ppt/notesSlides/notesSlide6.xml Gợi ý: yêu cầu sinh viên tạo một file index.md liệt kê tất cả Test Case ID theo module để tránh trùng mã.
    6
    
    ### NOTES ppt/notesSlides/notesSlide7.xml Có thể yêu cầu sinh viên điền template này cho từng chức năng: Register, Login, Cart, Checkout, Admin.
    7
    
    ### NOTES ppt/notesSlides/notesSlide8.xml Nhấn mạnh test run không thay thế test case. Mỗi đợt test có thể tạo một file test-run riêng để lưu lịch sử.
    8
    
    ### NOTES ppt/notesSlides/notesSlide9.xml Labels là nền tảng để lọc, tạo board và thống kê. Với dự án nhỏ, chỉ cần label là đủ; với Project có custom fields có thể giảm bớt label.
    9
    ✓ • 131ms

## Assistant — 2026-09-28 14:12:40 (UTC+07:00)

Mình đã đọc slide. Khi làm việc trong repository này, mình sẽ theo cấu trúc được đề xuất:

```text
src/
tests/
  test-cases/<module>/TC-<MODULE>-<NUMBER>.md
  test-runs/<đợt kiểm thử>.md
  test-summary/traceability-matrix.md
.github/ISSUE_TEMPLATE/
```

Mỗi test case cần có mã ổn định, requirement liên quan, loại và kỹ thuật kiểm thử, điều kiện tiên quyết, dữ liệu, các bước thực hiện và kết quả mong đợi. **Test case là bản thiết kế**; kết quả Pass/Fail/Blocked, người chạy và ngày chạy được ghi theo từng đợt trong `test-runs/`.

Khi test fail, bug được tạo thành GitHub Issue và ghi `Found by Test Case`. Test run liên kết ngược tới Issue; PR sửa lỗi và kết quả retest hoàn tất chuỗi truy vết. Slide cũng yêu cầu thay đổi test case qua branch và Pull Request để được review.

Repository hiện mới có README và file slide, chưa có các thư mục trên. Mình sẽ áp dụng quy ước này khi bạn giao phần triển khai test case.

## User — 2026-09-28 14:29:50 (UTC+07:00)

cấu trúc thư mục vừa thay đổi hãy đọc lại để hiểu cách làm vậy

## Assistant — 2026-09-28 14:29:53 (UTC+07:00)

Mình sẽ đọc lại cây thư mục và các tài liệu hướng dẫn hiện có, rồi cập nhật cách hiểu theo cấu trúc mới.

## Activity

    $ find .. -name AGENTS.md -print
    ✓ • 0ms

## Activity

    $ pwd; find . -maxdepth 5 -print | sort
    /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test
    .
    ./.agents
    ./.codex
    ./.git
    ./.git/FETCH_HEAD
    ./.git/HEAD
    ./.git/ORIG_HEAD
    ./.git/branches
    ./.git/config
    ./.git/description
    ./.git/gk
    ./.git/gk/config
    ./.git/hooks
    ./.git/hooks/applypatch-msg.sample
    ./.git/hooks/commit-msg.sample
    ./.git/hooks/fsmonitor-watchman.sample
    ./.git/hooks/post-update.sample
    ./.git/hooks/pre-applypatch.sample
    ./.git/hooks/pre-commit.sample
    ./.git/hooks/pre-merge-commit.sample
    ./.git/hooks/pre-push.sample
    ./.git/hooks/pre-rebase.sample
    ./.git/hooks/pre-receive.sample
    ./.git/hooks/prepare-commit-msg.sample
    ./.git/hooks/push-to-checkout.sample
    ./.git/hooks/sendemail-validate.sample
    ./.git/hooks/update.sample
    ./.git/index
    ./.git/info
    ./.git/info/exclude
    ./.git/logs
    ./.git/logs/HEAD
    ./.git/logs/refs
    ./.git/logs/refs/heads
    ./.git/logs/refs/heads/main
    ./.git/logs/refs/remotes
    ./.git/logs/refs/remotes/origin
    ./.git/objects
    ./.git/objects/00
    ./.git/objects/00/d40d8add40fef671743ef2b6cbd1d734e1705a
    ./.git/objects/0a
    ./.git/objects/0a/0e6dad7f2c8ae29d058ad408bcd041287ef99f
    ./.git/objects/0a/a10b10b61e9f573e2c9dd49b9bd6ca18894152
    ./.git/objects/0c
    ./.git/objects/0c/ca8fd16776e6b5080288e696cab8d296573cae
    ./.git/objects/0e
    ./.git/objects/0e/1ae759d880a8b7a7a99e6a0c9752a0278991dc
    ./.git/objects/11
    ./.git/objects/11/c0a9a393bf6eb0c7556477f21f0e5c408ffc63
    ./.git/objects/17
    ./.git/objects/17/3710d3c7c4727d6bdcd2a2d98c26d926e219ad
    ./.git/objects/1d
    ./.git/objects/1d/fe0e09fa40a3d11efffc4a959748a96a01c9f6
    ./.git/objects/1d/ffad6b461c2fe3393a3903af95f3bbdabefce3
    ./.git/objects/22
    ./.git/objects/22/aa8b9b6d8e2f85d83d46f604fdd3494fa2a827
    ./.git/objects/2b
    ./.git/objects/2b/32a763ec9a06cbc0c15eb3594e62462e65a405
    ./.git/objects/31
    ./.git/objects/31/e3b18bed5a108f0f644de72f73928fcbd5a3cd
    ./.git/objects/33
    ./.git/objects/33/e4574720015714c256cf65d0777835afc29b90
    ./.git/objects/34
    ./.git/objects/34/693163617692b04af36683452da828c61318ab
    ./.git/objects/36
    ./.git/objects/36/3c0034ec827fe21d16483c60f8e77dec7a8afa
    ./.git/objects/39
    ./.git/objects/39/9d3eecf22cab99c49b8f45aadf5e72bc573b87
    ./.git/objects/41
    ./.git/objects/41/8ecbe60adae9d1d5563ffcdebd30aaf85b451c
    ./.git/objects/44
    ./.git/objects/44/18ea42054b0d57a758711d108913eff150b581
    ./.git/objects/4b
    ./.git/objects/4b/1981db56cdb4b628fdd842eb2c17373202e669
    ./.git/objects/4c
    ./.git/objects/4c/4d52584a4421b3dee3ef8ceaecde33c23c792a
    ./.git/objects/4c/e7e70ff9adf33b348d2f086643efd35a1b14b6
    ./.git/objects/4e
    ./.git/objects/4e/4a89c461d714b37b646081f59867148e31a8ed
    ./.git/objects/5a
    ./.git/objects/5a/36d01b7af32128552e8d753f64938bcb106e5a
    ./.git/objects/5d
    ./.git/objects/5d/5b8c07c50932104050ea70eb2f016e0afe0d4a
    ./.git/objects/5d/c0b5a37eabf949bc3f706a705f8e14e7680641
    ./.git/objects/60
    ./.git/objects/60/88a4228f630befc02f74869682aa533384e29d
    ./.git/objects/69
    ./.git/objects/69/2322692b8d909d32f0f082c3b96df85af9872d
    ./.git/objects/6b
    ./.git/objects/6b/01b6f4ee58c5a07074e8624e3ebbc0c7c3a419
    ./.git/objects/7f
    ./.git/objects/7f/0b4b87f45613db699d3a99f44d46c3dffa856a
    ./.git/objects/88
    ./.git/objects/88/6d04bff5d7698e3150ed8b3648b343f12abcba
    ./.git/objects/89
    ./.git/objects/89/3c36aba37ad792fa319f0b5c0a986a139f7255
    ./.git/objects/8d
    ./.git/objects/8d/cf5ceca18d607576d7c5afad0a6243da1ec1f0
    ./.git/objects/94
    ./.git/objects/94/c0ce26349a7ceffd7555f2cb3695e2d68ccf68
    ./.git/objects/96
    ./.git/objects/96/ca8fa7f5b797a6b47ffc58cb557f8f83cc1ba4
    ./.git/objects/9e
    ./.git/objects/9e/a818144d28fdf7676aaed59d5b532304d2c774
    ./.git/objects/9e/dfab1388e7000cd8dbfc88e04826dfede9e87d
    ./.git/objects/a0
    ./.git/objects/a0/48491d972b063edbf6c3d0c328bef8549498b1
    ./.git/objects/a4
    ./.git/objects/a4/804ff05e42e8225161bed6ef0b064d49c222c1
    ./.git/objects/a9
    ./.git/objects/a9/6c3c34139a3a925fc77170f62e3e58411af403
    ./.git/objects/b6
    ./.git/objects/b6/58bfe3a2b6b10848fa14f6c4e552431c66274c
    ./.git/objects/bd
    ./.git/objects/bd/33ed8782b708241081eeaa0fc06b0728cbf7cb
    ./.git/objects/c9
    ./.git/objects/c9/4c287a983acdde4e3be92499398d584bfc8c2c
    ./.git/objects/d0
    ./.git/objects/d0/4a712969cb9fd1b588e23d70b9f78b35693c2e
    ./.git/objects/d8
    ./.git/objects/d8/9601555d4079af9d6ef145d8c4a28ad670a381
    ./.git/objects/e6
    ./.git/objects/e6/2929885c9dee5ff6a278f60cb83235fe6353ee
    ./.git/objects/ea
    ./.git/objects/ea/5cbd601b723d96524218eb23d773a83a551e15
    ./.git/objects/f2
    ./.git/objects/f2/96dabbc7812148ec7caf98562cc24f4839d6a3
    ./.git/objects/f6
    ./.git/objects/f6/91a17bc1b668a1e4a3479d0ce25b61a8ff983b
    ./.git/objects/f7
    ./.git/objects/f7/0983b98114e977836ea4529ad0ecee718bee86
    ./.git/objects/fa
    ./.git/objects/fa/3be9a69d78ca2dcdd38e08d39c9626470e042a
    ./.git/objects/fb
    ./.git/objects/fb/ba561b5d5763429918a1251d7624f58b0fff4e
    ./.git/objects/fe
    ./.git/objects/fe/40f35ce22a3af1c1fb46f15ecda5fbb419f6cb
    ./.git/objects/info
    ./.git/objects/info/commit-graphs
    ./.git/objects/info/commit-graphs/commit-graph-chain
    ./.git/objects/info/commit-graphs/graph-d58682f0b2b331d03223df74d88f2a063e69094e.graph
    ./.git/objects/pack
    ./.git/objects/pack/pack-f2fda36ec8226b5338324b883db2b54505d73415.idx
    ./.git/objects/pack/pack-f2fda36ec8226b5338324b883db2b54505d73415.pack
    ./.git/objects/pack/pack-f2fda36ec8226b5338324b883db2b54505d73415.rev
    ./.git/opencode
    ./.git/packed-refs
    ./.git/refs
    ./.git/refs/heads
    ./.git/refs/heads/main
    ./.git/refs/remotes
    ./.git/refs/remotes/origin
    ./.git/refs/remotes/origin/HEAD
    ./.git/refs/remotes/origin/main
    ./.git/refs/tags
    ./.github
    ./.github/ISSUE_TEMPLATE
    ./.github/ISSUE_TEMPLATE/bug_report.md
    ./.github/ISSUE_TEMPLATE/test_case_template.md
    ./README.md
    ./docs
    ./docs/01_phan_chia_module.md
    ./src
    ./src/.gitkeep
    ./tests
    ./tests/test-cases
    ./tests/test-cases/module-1-arithmetic
    ./tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    ./tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    ./tests/test-cases/module-2-division
    ./tests/test-cases/module-2-division/TC-DIV-001.md
    ./tests/test-cases/module-2-division/TC-DIV-002.md
    ./tests/test-cases/module-3-concatenate
    ./tests/test-cases/module-3-concatenate/TC-CON-001.md
    ./tests/test-cases/module-3-concatenate/TC-CON-002.md
    ./tests/test-cases/module-3-concatenate/TC-CON-003.md
    ./tests/test-cases/module-3-concatenate/TC-CON-004.md
    ./tests/test-cases/module-3-concatenate/TC-CON-005.md
    ./tests/test-cases/module-3-concatenate/TC-CON-006.md
    ./tests/test-cases/module-3-concatenate/TC-CON-007.md
    ./tests/test-cases/module-3-concatenate/TC-CON-008.md
    ./tests/test-cases/module-3-concatenate/TC-CON-009.md
    ./tests/test-cases/module-3-concatenate/TC-CON-010.md
    ./tests/test-cases/module-3-concatenate/TC-CON-011.md
    ./tests/test-cases/module-3-concatenate/TC-CON-012.md
    ./tests/test-cases/module-4-formatting-builds
    ./tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    ./tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    ./tests/test-runs
    ./tests/test-runs/sprint-1-test-run.md
    ./tests/test-runs/sprint-2-regression.md
    ./tests/test-summary
    ./tests/test-summary/traceability-matrix.md
    ✓ • 0ms

## Activity

    $ rg --files --hidden -g '!/.git/**' -g '!*.pptx' | sort; git status --short; git log -1 --format='%h %s'
    .github/ISSUE_TEMPLATE/bug_report.md
    .github/ISSUE_TEMPLATE/test_case_template.md
    README.md
    docs/01_phan_chia_module.md
    src/.gitkeep
    tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    tests/test-cases/module-2-division/TC-DIV-001.md
    tests/test-cases/module-2-division/TC-DIV-002.md
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    tests/test-runs/sprint-1-test-run.md
    tests/test-runs/sprint-2-regression.md
    tests/test-summary/traceability-matrix.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    0a0e6da refactor(tests): organize test cases into 4 calculator modules with standardized template
    ✓ • 28ms

## Activity

    $ cat README.md docs/01_phan_chia_module.md .github/ISSUE_TEMPLATE/test_case_template.md .github/ISSUE_TEMPLATE/bug_report.md
    # 🧮 ĐỒ ÁN KIỂM THỬ PHẦN MỀM: BASIC CALCULATOR (TESTSHEEPNZ)
    
    > **Môn học**: Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)
    > **Ứng dụng mục tiêu**: [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)
    > **Quy mô thực hiện**: Nhóm 4 thành viên
    
    ---
    
    ## 📖 GIỚI THIỆU DỰ ÁN
    
    Dự án này tập trung vào việc thiết kế, xây dựng kịch bản kiểm thử (Test Design) và thực hiện kiểm thử chức năng (Functional Testing), kiểm thử biên (Boundary Value Analysis), kiểm thử giao diện & sự kiện (UI/Event Testing) và kiểm thử đối sánh bắt lỗi (Bug Hunting Matrix) trên trang web **Basic Calculator**.
    
    Hệ thống cung cấp một bản **Prototype** (hoạt động chuẩn xác) và 9 phiên bản lỗi có chủ đích (**Builds 1 đến 9**), là môi trường lý tưởng để rèn luyện kỹ năng kiểm thử phần mềm chuyên nghiệp.
    
    ---
    
    ## 👥 PHÂN CHIA NHIỆM VỤ NHÓM 4 NGƯỜI
    
    | Thành viên | Module phụ trách | Trọng tâm kiểm thử | Tài liệu chi tiết |
    | :--- | :--- | :--- | :--- |
    | **Thành viên 1** | **Module 1**: Phép tính Số học Cơ bản & Kiểm thử Biên | - Phép toán Cộng (`Add`), Trừ (`Subtract`), Nhân (`Multiply`).<br>- Phân tích giá trị biên (độ dài 10 ký tự, số âm, số 0, số thập phân). | [Xem Module 1](docs/02_thiet_ke_test_cases.md#-module-1-phép-tính-số-học-cơ-bản--kiểm-thử-biên) |
    | **Thành viên 2** | **Module 2**: Phép Chia & Ngoại lệ Toán học | - Phép Chia (`Divide`) số nguyên, số thực, số tuần hoàn.<br>- Bắt lỗi chia cho 0 (`Divide by zero error!`).<br>- Thứ tự toán hạng. | [Xem Module 2](docs/02_thiet_ke_test_cases.md#-module-2-phép-chia--xử-lý-ngoại-lệ-toán-học) |
    | **Thành viên 3** | **Module 3**: Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | - Phép Ghép chuỗi (`Concatenate`) chuỗi chữ, chuỗi số, ký tự đặc biệt.<br>- Bắt lỗi nhập liệu không phải số (`is not a number`).<br>- Trạng thái ẩn/hiện của checkbox Integers only. | [Xem Module 3](docs/02_thiet_ke_test_cases.md#-module-3-ghép-chuỗi--kiểm-tra-hợp-lệ-dữ-liệu-đầu-vào) |
    | **Thành viên 4** | **Module 4**: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản | - Tính năng làm tròn số nguyên (*Integers only*).<br>- Nút `Calculate` (loading effect), nút `Clear` (reset dữ liệu).<br>- Ma trận bắt lỗi trên 9 bản build lỗi (`Build 1` đến `Build 9`). | [Xem Module 4](docs/02_thiet_ke_test_cases.md#-module-4-định-dạng-kết-quả-điều-khiển--kiểm-thử-đa-phiên-bản-builds) |
    
    ---
    
    ## 📂 CẤU TRÚC THƯ MỤC TÀI LIỆU
    
    ```text
    calculator-test/
    ├── README.md                          # Tổng quan dự án và phân công nhiệm vụ
    └── docs/
        ├── 01_phan_chia_module.md         # Phân tích chức năng và phân bổ công việc
        └── 02_thiet_ke_test_cases.md      # Đặc tả chi tiết 40+ Test Cases chuẩn IEEE 829
    ```
    
    ---
    
    ## 🚀 DANH MỤC TÀI LIỆU CHI TIẾT
    - 📑 [Tài liệu 01: Kế hoạch phân chia Module & Nhiệm vụ nhóm](docs/01_phan_chia_module.md)
    - 🧪 [Tài liệu 02: Thiết kế Test Cases chi tiết (IEEE 829)](docs/02_thiet_ke_test_cases.md)
    # KẾ HOẠCH PHÂN CHIA MODULE & PHÂN CÔNG NHIỆM VỤ
    
    > **Dự án**: Kiểm thử ứng dụng Web Basic Calculator
    > **Target URL**: [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)
    > **Môn học**: Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)
    > **Quy mô nhóm**: 4 thành viên
    
    ---
    
    ## 1. TỔNG QUAN HỆ THỐNG KIỂM THỬ
    
    Ứng dụng **Basic Calculator** của TestSheepNZ là một ứng dụng web phục vụ việc thực hành kiểm thử phần mềm thủ công (Manual Testing) và tự động (Automation Testing với Selenium/Playwright/Cypress).
    
    Hệ thống bao gồm các thành phần chính:
    - **Build Selector (`selectBuild`)**: Chọn phiên bản thử nghiệm gồm Build 0 (`Prototype` - chuẩn, không lỗi) và các Build có lỗi cố ý từ `1` đến `9`.
    - **Nhập dữ liệu (`number1Field`, `number2Field`)**: Cho phép nhập 2 giá trị với độ dài tối đa 10 ký tự.
    - **Phép toán (`selectOperationDropdown`)**:
      - 4 phép toán số học: *Add (Cộng)*, *Subtract (Trừ)*, *Multiply (Nhân)*, *Divide (Chia)*.
      - 1 phép toán chuỗi: *Concatenate (Ghép chuỗi)*.
    - **Tùy chọn định dạng (`integerSelect`)**: Checkbox *Integers only* cho phép làm tròn kết quả thành số nguyên. Tự động ẩn/vô hiệu hóa khi chọn *Concatenate*.
    - **Điều khiển & Trạng thái (`calculateButton`, `clearButton`, `calculatingForm`)**: Nút tính toán (có màn hình chờ `waiting.gif`) và nút xóa kết quả/trạng thái.
    - **Khu vực hiển thị lỗi (`errorMsgField`)**: Thông báo lỗi nhập liệu hoặc lỗi chia cho 0.
    
    ---
    
    ## 2. BẢNG PHÂN CHIA MODULE CHO 4 THÀNH VIÊN
    
    | Thành viên | Tên Module phụ trách | Phạm vi chức năng chính | Kỹ thuật kiểm thử áp dụng |
    | :--- | :--- | :--- | :--- |
    | **Thành viên 1** | **Module 1: Phép tính Số học Cơ bản & Kiểm thử Biên** | - Phép Cộng (`Add`), Trừ (`Subtract`), Nhân (`Multiply`).<br>- Kiểm thử biên độ dài (10 ký tự).<br>- Giá trị cực trị, số âm, số 0, số thập phân. | - Phân vùng tương đương (EP)<br>- Phân tích giá trị biên (BVA) |
    | **Thành viên 2** | **Module 2: Phép Chia & Xử lý Ngoại lệ Toán học** | - Phép Chia (`Divide`) số nguyên, số thập phân, tuần hoàn.<br>- Xử lý ngoại lệ Chia cho 0 (`Divide by zero error!`).<br>- Kiểm tra thứ tự toán hạng (Number 1 / Number 2). | - Đoán lỗi (Error Guessing)<br>- Bảng quyết định (Decision Table)<br>- Negative Testing |
    | **Thành viên 3** | **Module 3: Ghép Chuỗi & Kiểm thử Tính hợp lệ Dữ liệu (Validation)** | - Phép Ghép chuỗi (`Concatenate`) với số, chữ, ký tự đặc biệt, chuỗi rỗng.<br>- Bắt lỗi không phải số (`is not a number`) trên các phép toán số học.<br>- Trạng thái ẩn/hiện của checkbox *Integers only*. | - Phân vùng tương đương (Valid/Invalid)<br>- Kiểm thử trạng thái giao diện (UI State) |
    | **Thành viên 4** | **Module 4: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản (Builds)** | - Tùy chọn *Integers only* (làm tròn số nguyên, chuyển đổi tức thì).<br>- Nút `Calculate` (loading state), nút `Clear` (reset dữ liệu).<br>- Phát hiện bug trên 9 phiên bản lỗi (`Build 1` đến `Build 9`). | - State Transition Testing<br>- Mutation / Regression Testing<br>- Bug Hunting Matrix |
    
    ---
    
    ## 3. CHI TIẾT PHẠM VI TỪNG MODULE
    
    ### 👤 Module 1: Phép tính Số học Cơ bản (Add, Subtract, Multiply) & Kiểm thử Biên
    * **Mục tiêu**: Đảm bảo các phép toán cộng, trừ, nhân hoạt động chính xác theo chuẩn số học và không bị lỗi tràn số hoặc cắt chuỗi sai quy cách.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép toán **Cộng (Add)**:
         - Số nguyên dương + số nguyên dương.
         - Số âm + số dương, số âm + số âm.
         - Số nguyên + số 0.
         - Số thập phân + số thập phân (kiểm tra độ chính xác dấu phẩy động).
      2. Thiết kế test case cho phép toán **Trừ (Subtract)**:
         - Số lớn trừ số bé (ra dương).
         - Số bé trừ số lớn (ra âm).
         - Trừ đi 0, trừ 2 số bằng nhau (ra 0).
         - Trừ số âm (phép trừ biến thành phép cộng).
      3. Thiết kế test case cho phép toán **Nhân (Multiply)**:
         - Nhân với 0, nhân với 1, nhân với -1.
         - Nhân 2 số âm (kết quả dương).
         - Nhân số thập phân.
      4. **Kiểm thử biên (Boundary Value Analysis)**:
         - Nhập giá trị biên độ dài: chuỗi đúng 10 chữ số (giới hạn `maxlength=10`).
         - Thử nhập quá 10 ký tự để kiểm tra input field có ngăn chặn hay không.
         - Kết quả tính toán vượt quá giới hạn hiển thị của ô `Answer`.
    
    ---
    
    ### 👤 Module 2: Phép Chia (Divide) & Xử lý Ngoại lệ Toán học (Error Handling)
    * **Mục tiêu**: Kiểm tra tính chính xác của phép chia và năng lực bắt lỗi/xử lý ngoại lệ của hệ thống đối với các giá trị đặc biệt trong toán học.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép **Chia hợp lệ**:
         - Phép chia hết: kết quả là số nguyên dương.
         - Phép chia ra số thập phân hữu hạn (ví dụ: `5 / 2 = 2.5`).
         - Phép chia ra số thập phân vô hạn / tuần hoàn (ví dụ: `10 / 3 = 3.333333333...`).
         - Số 0 chia cho số khác (`0 / x = 0`).
         - Phép chia với số âm (kết quả âm hoặc dương).
      2. Thiết kế test case cho **Ngoại lệ Chia cho 0**:
         - Số khác 0 chia cho 0 (`x / 0`): Hệ thống phải dừng tính, không làm crash trang web, hiển thị thông báo lỗi màu đỏ `"Divide by zero error!"`.
         - Phép tính `0 / 0`: Kiểm tra xem có bắt lỗi chia cho 0 hay trả về NaN.
      3. Kiểm tra tính đúng đắn của **Thứ tự toán hạng**:
         - Đảm bảo phép chia luôn lấy `Number 1 / Number 2` chứ không bị đảo ngược.
      4. Kiểm tra trạng thái làm sạch thông báo lỗi khi người dùng thực hiện một phép tính hợp lệ ngay sau khi bị lỗi chia cho 0.
    
    ---
    
    ### 👤 Module 3: Ghép Chuỗi (Concatenate) & Kiểm thử Hợp lệ Dữ liệu Đầu vào (Validation)
    * **Mục tiêu**: Đảm bảo hệ thống xử lý đúng định dạng chuỗi và ngăn chặn triệt để dữ liệu không hợp lệ đối với các phép toán số học.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép **Ghép Chuỗi (Concatenate)**:
         - Ghép 2 chuỗi số (`"12"` + `"34"` $\rightarrow$ `"1234"`).
         - Ghép văn bản chữ thông thường (`"hello"` + `"world"` $\rightarrow$ `"helloworld"`).
         - Ghép với chuỗi ký tự đặc biệt (`"@#"` + `"!$"`).
         - Ghép với ô nhập để trống (empty string).
         - Ghép chuỗi dài vượt quá kích thước hiển thị.
      2. Thiết kế test case **Kiểm tra Ràng buộc Nhập liệu (Input Validation)**:
         - Nhập chữ cái (letters) vào `Number 1` hoặc `Number 2` đối với các phép toán số học.
         - Nhập ký tự đặc biệt, icon, khoảng trắng (whitespace) vào các trường số.
         - Bỏ trống trường `Number 1` hoặc `Number 2` và nhấn Calculate.
         - Xác minh thông báo lỗi hiển thị đúng nội dung:
           - `"Number 1 is not a number"`
           - `"Number 2 is not a number"`
      3. Kiểm tra **Hành vi Giao diện động (UI Behavior)**:
         - Khi chọn *Concatenate*: Checkbox *Integers only* và nhãn của nó phải tự động **ẩn (hidden) và vô hiệu hóa (disabled)**.
         - Khi chuyển từ *Concatenate* về lại phép toán số học: Checkbox và nhãn phải tự động hiển thị và kích hoạt lại.
    
    ---
    
    ### 👤 Module 4: Định dạng Kết quả, Điều khiển Giao diện & Kiểm thử Đa phiên bản (Builds 1–9)
    * **Mục tiêu**: Kiểm tra tính năng làm tròn số nguyên, các nút bấm điều khiển và lập ma trận kiểm thử đối chiếu để tìm lỗi trên 9 bản build của website.
    * **Nhiệm vụ cụ thể**:
      1. Kiểm thử chức năng **"Integers only"**:
         - Tích chọn *Integers only* trước khi tính toán số thập phân (ví dụ: `5.7` $\rightarrow$ `5`).
         - Tích chọn *Integers only* **sau khi** kết quả đã xuất hiện trong ô `Answer` (kiểm tra sự kiện tự động cập nhật lại kết quả tức thì).
         - Bỏ tích chọn *Integers only* để khôi phục lại giá trị thập phân ban đầu.
         - Kiểm tra với số âm (ví dụ: `-2.8` $\rightarrow$ `-2`).
      2. Kiểm thử **Điều khiển Giao diện (Buttons & UX)**:
         - Nút **Calculate**: Hiển thị trạng thái loading (`calculatingForm` với ảnh `waiting.gif`), vô hiệu hóa nút tính toán trong khi đang xử lý nhằm chống spam click.
         - Nút **Clear**: Xóa sạch ô `Answer`, hủy tích checkbox *Integers only*, xóa thông báo lỗi đỏ.
      3. Kiểm thử **Ma trận Phát hiện Lỗi trên các Build (Build 1 đến 9)**:
         - *Build 1*: Không kiểm tra tính hợp lệ của số.
         - *Build 2*: Bị đảo ngược giữa phép Cộng (`Add`) và Ghép chuỗi (`Concatenate`).
         - *Build 3*: Luôn ép kiểm tra kiểu số (kể cả khi chọn Concatenate).
         - *Build 4*: Bị khóa cứng ở chế độ Integers only.
         - *Build 5*: Nút Clear bị vô hiệu hóa (disabled).
         - *Build 6*: Không bắt lỗi chia cho 0 (`Divide by zero`).
         - *Build 7*: Sử dụng kết quả cũ của Answer làm Number 1 thay vì giá trị người dùng nhập.
         - *Build 8*: Bị hoán đổi vị trí giữa Number 1 và Number 2.
         - *Build 9*: Các phần tử giao diện bị biến mất (Number 2 và nút Calculate).
    ---
    name: 🧪 Test Case Template
    about: Mẫu tạo mới hoặc đề xuất một kịch bản kiểm thử (Test Case)
    title: "[TEST-CASE] <Mã TC>: <Tên Test Case>"
    labels: ["test-case", "qa-design"]
    assignees: ""
    ---
    
    # <Mã Test Case>: <Tên Test Case>
    
    ## Requirement ID
    <Mã Yêu cầu - ví dụ: FR-LOGIN-01>
    
    ## Module / Test type / Technique
    <Module> / <Test type: Functional, UI, Security, etc.> / <Technique: Equivalence Partitioning, Boundary Value Analysis, Error Guessing, etc.>
    
    ## Preconditions
    - <Điều kiện tiên quyết 1>
    - <Điều kiện tiên quyết 2>
    
    ## Test data
    | <Tên trường dữ liệu> | <Giá trị kiểm thử> |
    | <Tên trường dữ liệu> | <Giá trị kiểm thử> |
    
    ## Test steps
    1. <Bước 1>
    2. <Bước 2>
    3. <Bước 3>
    
    ## Expected result
    <Kết quả mong đợi chi tiết>
    
    ## Status / Related bugs
    Not Run / None
    ---
    name: 🐛 Bug Report
    about: Báo cáo lỗi phần mềm được phát hiện trong quá trình kiểm thử
    title: "[BUG] <Mô tả ngắn gọn về lỗi>"
    labels: ["bug", "qa"]
    assignees: ""
    ---
    
    ## 📌 THÔNG TIN LỖI (DEFECT INFORMATION)
    - **Mã Bug ID**: `BUG-XXX`
    - **Mã Test Case liên quan**: `TC-XXX-XXX`
    - **Module / Chức năng bị ảnh hưởng**: [ví dụ: Login / Checkout / Arithmetic]
    - **Môi trường (Environment)**: [ví dụ: Staging / Prototype / Build 1]
    - **Trình duyệt / Thiết bị (Browser / OS)**: [ví dụ: Chrome 122 trên macOS]
    - **Mức độ nghiêm trọng (Severity)**: [Trivial / Minor / Major / Critical / Blocker]
    - **Mức độ ưu tiên (Priority)**: [Low / Medium / High / Urgent]
    
    ---
    
    ## 📝 MÔ TẢ LỖI (DESCRIPTION)
    Mô tả rõ ràng và ngắn gọn về lỗi xảy ra.
    
    ---
    
    ## 👣 CÁC BƯỚC TÁI HIỆN LỖI (STEPS TO REPRODUCE)
    1. Truy cập vào trang `...`
    2. Nhập dữ liệu `...` vào trường `...`
    3. Nhấn vào nút `...`
    4. Quan sát kết quả hiển thị trên màn hình.
    
    ---
    
    ## 🎯 KẾT QUẢ MONG ĐỢI (EXPECTED BEHAVIOR)
    Hệ thống phải hoạt động như thế nào theo tài liệu đặc tả / test case.
    
    ---
    
    ## 💥 KẾT QUẢ THỰC TẾ (ACTUAL BEHAVIOR)
    Hệ thống thực tế phản hồi như thế nào (kèm thông báo lỗi hoặc hành vi sai lệch).
    
    ---
    
    ## 📸 HÌNH ẢNH / LOG MINH CHỨNG (SCREENSHOTS & LOGS)
    *Chèn ảnh chụp màn hình, ảnh GIF hoặc log console/network tại đây nếu có.*
    ✓ • 0ms

## Activity

    $ cat tests/test-runs/*.md tests/test-summary/*.md
    # 📋 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN TEST RUN: SPRINT 1 (PROTOTYPE)
    
    ---
    
    ## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)
    
    | Mục | Thông tin chi tiết |
    | :--- | :--- |
    | **Mã Test Run** | `TR-SPRINT-01` |
    | **Tên đợt kiểm thử** | Sprint 1 Test Execution - Basic Calculator Prototype & Baseline Testing |
    | **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
    | **Phiên bản ứng dụng (Build)** | `Build 0 (Prototype)` |
    | **Trình duyệt / Hệ điều hành** | Chrome 122, Edge, Firefox trên macOS / Windows 11 |
    | **Thời gian thực hiện** | 2026-09-28 đến 2026-10-02 |
    | **Trưởng nhóm QA** | QA Lead |
    | **Người thực hiện** | Nhóm 4 thành viên (Thành viên 1, 2, 3, 4) |
    
    ---
    
    ## 📊 TỔNG KẾT KẾT QUẢ (EXECUTIVE SUMMARY)
    
    | Chỉ số | Số lượng | Tỷ lệ (%) |
    | :--- | :---: | :---: |
    | **Tổng số Test Cases** | 8 | 100% |
    | 🟢 **Đạt (Passed)** | 8 | 100% |
    | 🔴 **Thất bại (Failed)** | 0 | 0% |
    | 🟡 **Bị chặn (Blocked)** | 0 | 0% |
    | ⚪ **Chưa chạy (Untested)** | 0 | 0% |
    | **Tỷ lệ Pass / Executed** | **8 / 8** | **100%** |
    
    ---
    
    ## 📝 BẢNG CHI TIẾT THỰC THI TEST CASES (EXECUTION DETAILS)
    
    | STT | Mã Test Case | Module | Tên Test Case | Kết quả | Người test | Ngày test | Ghi chú |
    | :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
    | 1 | `TC-ARI-001` | Module 1 | Phép cộng hai số nguyên dương | `PASS` | Thành viên 1 | 2026-09-28 | Kết quả chính xác |
    | 2 | `TC-ARI-002` | Module 1 | Kiểm tra biên độ dài 10 chữ số | `PASS` | Thành viên 1 | 2026-09-28 | maxlength=10 hoạt động |
    | 3 | `TC-DIV-001` | Module 2 | Phép chia hết hai số nguyên | `PASS` | Thành viên 2 | 2026-09-28 | Kết quả chính xác |
    | 4 | `TC-DIV-002` | Module 2 | Bắt lỗi ngoại lệ chia cho 0 | `PASS` | Thành viên 2 | 2026-09-28 | Bắt đúng "Divide by zero error!" |
    | 5 | `TC-CON-001` | Module 3 | Phép ghép chuỗi hai số hợp lệ | `PASS` | Thành viên 3 | 2026-09-28 | Nối chuỗi đúng |
    | 6 | `TC-CON-002` | Module 3 | Bắt lỗi nhập chữ vào phép toán | `PASS` | Thành viên 3 | 2026-09-28 | Bắt đúng "is not a number" |
    | 7 | `TC-FMT-001` | Module 4 | Làm tròn số nguyên Integers only | `PASS` | Thành viên 4 | 2026-09-28 | Làm tròn đúng |
    | 8 | `TC-FMT-002` | Module 4 | Nút Clear xóa kết quả | `PASS` | Thành viên 4 | 2026-09-28 | Reset thành công |
    
    ---
    
    ## 🎯 ĐÁNH GIÁ & KẾT LUẬN (CONCLUSION)
    - **Đánh giá chung**: Trên phiên bản chuẩn **Prototype**, toàn bộ 4 Module đều hoạt động chính xác theo đặc tả toán học và yêu cầu giao diện.
    - **Kế hoạch tiếp theo**: Tiến hành Sprint 2 kiểm thử đối sánh (Bug Hunting Matrix) trên các bản build lỗi từ **Build 1 đến Build 9** để bắt các lỗi có chủ đích.
    # 🔄 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN KIỂM THỬ: SPRINT 2 (BUG HUNTING BUILDS 1-9)
    
    ---
    
    ## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)
    
    | Mục | Thông tin chi tiết |
    | :--- | :--- |
    | **Mã Test Run** | `TR-SPRINT-02-BUILDS` |
    | **Tên đợt kiểm thử** | Sprint 2 - Bug Hunting Across Builds 1 to 9 & Regression |
    | **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
    | **Các phiên bản kiểm thử** | `Build 1` đến `Build 9` |
    | **Thời gian thực hiện** | 2026-10-05 đến 2026-10-09 |
    | **Người thực hiện** | Nhóm 4 thành viên |
    
    ---
    
    ## 🎯 CHIẾN LƯỢC KIỂM THỬ (TEST STRATEGY)
    1. Chạy lại bộ kịch bản kiểm thử cốt lõi (Regression Suite) trên từng bản Build từ 1 đến 9.
    2. Đối chiếu kết quả thực tế trên từng Build với kết quả chuẩn trên bản Prototype.
    3. Ghi nhận lỗi đặc thù của từng bản Build vào bảng ma trận phát hiện lỗi.
    
    ---
    
    ## 🐛 MA TRẬN BẮT LỖI TRÊN CÁC BẢN BUILD (BUG HUNTING MATRIX)
    
    | Mã Build | Module ảnh hưởng | Mã Test Case | Hiện tượng lỗi thực tế phát hiện | Đánh giá lỗi |
    | :---: | :--- | :---: | :--- | :---: |
    | **Build 1** | Module 1 (Arithmetic) | `TC-ARI-001` | Phép trừ bị tính sai kết quả hoặc phép cộng cộng chuỗi | Có lỗi |
    | **Build 2** | Module 2 (Division) | `TC-DIV-002` | Chia cho 0 không báo lỗi mà trả về giá trị bất thường | Có lỗi |
    | **Build 3** | Module 3 (Concatenate) | `TC-CON-001` | Ghép chuỗi bị chèn ký tự lạ hoặc lỗi hiển thị | Có lỗi |
    | **Build 4** | Module 4 (Formatting) | `TC-FMT-001` | Checkbox "Integers only" không làm tròn số | Có lỗi |
    
    ---
    
    ## 🚀 KẾT LUẬN
    - Ma trận bắt lỗi giúp sinh viên đối sánh chính xác hành vi sai lệch giữa phiên bản lỗi và phiên bản chuẩn Prototype theo đúng mục tiêu môn học Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM).
    # 📊 MA TRẬN TRUY XUẤT NGUỒN GỐC YÊU CẦU (REQUIREMENTS TRACEABILITY MATRIX - RTM)
    
    ---
    
    ## 📌 1. TỔNG QUAN & MỤC TIÊU
    Ma trận Truy xuất Nguồn gốc Yêu cầu (RTM) đối với ứng dụng **Basic Calculator** nhằm đảm bảo toàn bộ 4 Module chức năng của hệ thống được bao phủ đầy đủ bởi các kịch bản kiểm thử (Test Cases), phục vụ kiểm thử đối sánh giữa bản **Prototype** và **Builds 1 - 9**.
    
    ---
    
    ## 📈 2. THỐNG KÊ TỶ LỆ BAO PHỦ THEO 4 MODULE
    
    | Module | Tên Module | Người phụ trách | Số Test Cases mẫu | Tỷ lệ bao phủ |
    | :---: | :--- | :--- | :---: | :---: |
    | **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 2 | 100% |
    | **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 2 | 100% |
    | **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 2 | 100% |
    | **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 2 | 100% |
    
    ---
    
    ## 🗺️ 3. BẢNG MA TRẬN TRUY XUẤT (TRACEABILITY MATRIX)
    
    | Mã Yêu cầu (Req ID) | Module | Mô tả Yêu cầu Chức năng | Mã Test Case | Loại kiểm thử | Kỹ thuật áp dụng |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | **FR-CALC-01** | Module 1 (Arithmetic) | Thực hiện chính xác các phép toán Cộng, Trừ, Nhân và ràng buộc biên độ dài tối đa 10 ký tự. | `TC-ARI-001`<br>`TC-ARI-002` | Functional<br>Boundary | Phân vùng tương đương (EP)<br>Phân tích giá trị biên (BVA) |
    | **FR-CALC-02** | Module 2 (Division) | Thực hiện phép Chia số nguyên, số thực; xử lý ngoại lệ Chia cho 0 bằng thông báo "Divide by zero error!". | `TC-DIV-001`<br>`TC-DIV-002` | Functional<br>Negative | Phân vùng tương đương (EP)<br>Đoán lỗi (Error Guessing) |
    | **FR-CALC-03** | Module 3 (Concatenate) | Ghép chuỗi văn bản và số; kiểm tra validation bắt lỗi nhập ký tự không phải số ("is not a number"). | `TC-CON-001`<br>`TC-CON-002` | Functional<br>Validation | Phân vùng tương đương (EP)<br>Negative Testing |
    | **FR-CALC-04** | Module 4 (Formatting) | Tùy chọn làm tròn số nguyên "Integers only", chức năng nút Clear, Calculate và đối sánh 9 bản Builds. | `TC-FMT-001`<br>`TC-FMT-002` | Functional<br>UI / State | State Transition<br>Bug Hunting Matrix |
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-1-arithmetic/*.md tests/test-cases/module-2-division/*.md tests/test-cases/module-4-formatting-builds/*.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    # TC-ARI-001: Thực hiện phép cộng hai số nguyên dương hợp lệ
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 25 |
    | Second number | 15 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype" từ dropdown
    3. Nhập "25" vào trường First number
    4. Nhập "15" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả chính xác là "40". Không có thông báo lỗi hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    # TC-ARI-002: Kiểm tra biên độ dài tối đa 10 chữ số cho trường nhập liệu
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Boundary Value / Boundary Value Analysis (BVA)
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 9999999999 |
    | Second number | 1 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập số có đúng 10 chữ số "9999999999" vào ô First number
    4. Thử gõ thêm ký tự thứ 11 vào ô First number
    5. Nhập "1" vào ô Second number
    6. Chọn Operation là "Add" và bấm nút "Calculate"
    
    ## Expected result
    Ô First number chỉ cho phép nhập tối đa 10 ký tự (không thể nhập ký tự thứ 11 do maxlength=10). Sau khi bấm Calculate, trường Answer hiển thị kết quả là "10000000000".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-001.md
    # TC-DIV-001: Thực hiện phép chia hai số nguyên chia hết
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 100 |
    | Second number | 4 |
    | Operation | Divide |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "100" vào trường First number
    4. Nhập "4" vào trường Second number
    5. Chọn Operation là "Divide"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả chính xác là "25". Không có thông báo lỗi hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-002.md
    # TC-DIV-002: Bắt lỗi ngoại lệ chia cho số 0
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Negative / Error Guessing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 50 |
    | Second number | 0 |
    | Operation | Divide |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "50" vào trường First number
    4. Nhập "0" vào trường Second number
    5. Chọn Operation là "Divide"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không crash, không tính toán ra Infinity/NaN. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung chính xác: "Divide by zero error!".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    # TC-FMT-001: Làm tròn kết quả số nguyên khi chọn Integers only
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / Functional / State Transition
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 5 |
    | Second number | 2 |
    | Operation | Divide |
    | Integers only | Checked |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "5" vào trường First number
    4. Nhập "2" vào trường Second number
    5. Chọn Operation là "Divide"
    6. Tích chọn checkbox "Integers only"
    7. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả làm tròn thành số nguyên là "2" (thay vì 2.5).
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    # TC-FMT-002: Kiểm tra chức năng nút Clear xóa kết quả và đặt lại trạng thái
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / UI & Event / State Reset
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Đã thực hiện một phép tính trước đó và trường Answer đang hiển thị kết quả
    
    ## Test data
    | Build | Prototype |
    | First number | 20 |
    | Second number | 30 |
    | Operation | Add |
    
    ## Test steps
    1. Nhập First number = 20, Second number = 30, Operation = Add và bấm Calculate
    2. Kiểm tra ô Answer đang hiển thị "50"
    3. Bấm nút "Clear"
    
    ## Expected result
    Trường Answer bị xóa rỗng. Các thông báo lỗi (nếu có) bị xóa bỏ.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-3-concatenate/*.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-3-concatenate/TC-CON-001.md
    # TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 12 |
    | Second number | 34 |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "12" vào trường First number
    4. Nhập "34" vào trường Second number
    5. Chọn Operation là "Concatenate"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả nối chuỗi chính xác là "1234". Checkbox "Integers only" tự động ẩn đi khi chọn Concatenate.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-002.md
    # TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | abc |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "abc" vào trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép tính. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung: "Number 1 is not a number".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-003.md
    # TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `hello` |
    | Second number (`number2Field`) | `world` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype" từ dropdown.
    3. Nhập "hello" vào trường First number.
    4. Nhập "world" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi chính xác là `helloworld`.
    - Khu vực `errorMsgField` không hiển thị bất kỳ thông báo lỗi nào.
    - Checkbox `Integers only` bị ẩn và vô hiệu hóa.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-004.md
    # TC-CON-004: Ghép chuỗi chứa các ký tự đặc biệt
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `@#$%` |
    | Second number (`number2Field`) | `&*!?` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "@#$%" vào trường First number.
    4. Nhập "&*!?" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi là `@#$%&*!?`.
    - Không có lỗi hiển thị ở `errorMsgField`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-005.md
    # TC-CON-005: Ghép chuỗi khi trường First number để trống
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | *(để trống - empty)* |
    | Second number (`number2Field`) | `world` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Để trống trường First number (không nhập gì).
    4. Nhập "world" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị kết quả là `world`.
    - Không có lỗi hiển thị ở `errorMsgField`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-006.md
    # TC-CON-006: Ghép chuỗi khi trường Second number để trống
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `hello` |
    | Second number (`number2Field`) | *(để trống - empty)* |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "hello" vào trường First number.
    4. Để trống trường Second number (không nhập gì).
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị kết quả là `hello`.
    - Không có lỗi hiển thị ở `errorMsgField`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-007.md
    # TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Edge Case Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | *(để trống)* |
    | Second number (`number2Field`) | *(để trống)* |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Để trống cả hai trường First number và Second number.
    4. Chọn Operation là "Concatenate".
    5. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị chuỗi rỗng `""`.
    - Trang web không bị crash hoặc sinh lỗi JavaScript.
    - Khu vực `errorMsgField` không báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-008.md
    # TC-CON-008: Ghép hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi trường)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `1234567890` (10 ký tự) |
    | Second number (`number2Field`) | `abcdefghij` (10 ký tự) |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "1234567890" vào trường First number.
    4. Nhập "abcdefghij" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị đầy đủ chuỗi ghép 20 ký tự: `1234567890abcdefghij`.
    - Chuỗi không bị cắt ngắn (truncate) sai quy cách.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-009.md
    # TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `Hello ` (có space cuối) |
    | Second number (`number2Field`) | ` World` (có space đầu) |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "Hello " vào trường First number.
    4. Nhập " World" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị nguyên vẹn các khoảng trắng: `Hello  World`.
    - Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-010.md
    # TC-CON-010: Bắt lỗi khi trường Second number chứa chữ cái trên phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `25` |
    | Second number (`number2Field`) | `xyz` |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "25" vào trường First number.
    4. Nhập "xyz" vào trường Second number.
    5. Chọn Operation là "Add".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép tính cộng.
    - Trường Answer (`numberAnswerField`) không hiển thị kết quả tính.
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-011.md
    # TC-CON-011: Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự không hợp lệ
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Priority & Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `abc` |
    | Second number (`number2Field`) | `xyz` |
    | Operation (`selectOperationDropdown`) | `Multiply` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "abc" vào trường First number.
    4. Nhập "xyz" vào trường Second number.
    5. Chọn Operation là "Multiply".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống ưu tiên bắt lỗi từ trường đầu tiên (`num1`).
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    - Không thực hiện phép tính nhân.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-012.md
    # TC-CON-012: Bắt lỗi khi First number chứa ký tự đặc biệt trên phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `!@#$%` |
    | Second number (`number2Field`) | `50` |
    | Operation (`selectOperationDropdown`) | `Subtract` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "!@#$%" vào trường First number.
    4. Nhập "50" vào trường Second number.
    5. Chọn Operation là "Subtract".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống chặn việc thực hiện phép trừ.
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-013.md
    # TC-CON-013: Bắt lỗi khi Second number chứa ký tự đặc biệt trên phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `50` |
    | Second number (`number2Field`) | `&*()` |
    | Operation (`selectOperationDropdown`) | `Divide` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "50" vào trường First number.
    4. Nhập "&*()" vào trường Second number.
    5. Chọn Operation là "Divide".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống chặn việc thực hiện phép chia.
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ find tests/test-cases -name 'TC-*.md' -print | sort; git status --short; nl -ba tests/test-cases/module-3-concatenate/TC-CON-001.md | head -45; nl -ba tests/test-cases/module-3-concatenate/TC-CON-002.md | head -45; nl -ba tests/test-cases/module-4-formatting-builds/TC-FMT-001.md | head -40
    tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    tests/test-cases/module-2-division/TC-DIV-001.md
    tests/test-cases/module-2-division/TC-DIV-002.md
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
         1    # TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
         2
         3    ## Requirement ID
         4    FR-CALC-03
         5
         6    ## Module / Test type / Technique
         7    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
         8
         9    ## Preconditions
        10    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
        11    - Chọn Build: Prototype
        12
        13    ## Test data
        14    | Build | Prototype |
        15    | First number | 12 |
        16    | Second number | 34 |
        17    | Operation | Concatenate |
        18
        19    ## Test steps
        20    1. Truy cập trang web Basic Calculator
        21    2. Chọn Build "Prototype"
        22    3. Nhập "12" vào trường First number
        23    4. Nhập "34" vào trường Second number
        24    5. Chọn Operation là "Concatenate"
        25    6. Bấm nút "Calculate"
        26
        27    ## Expected result
        28    Trường Answer hiển thị kết quả nối chuỗi chính xác là "1234". Checkbox "Integers only" tự động ẩn đi khi chọn Concatenate.
        29
        30    ## Status / Related bugs
        31    Not Run / None
         1    # TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
         2
         3    ## Requirement ID
         4    FR-CALC-03
         5
         6    ## Module / Test type / Technique
         7    Module 3 - Concatenate & Validation / Validation / Negative Testing
         8
         9    ## Preconditions
        10    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
        11    - Chọn Build: Prototype
        12
        13    ## Test data
        14    | Build | Prototype |
        15    | First number | abc |
        16    | Second number | 10 |
        17    | Operation | Add |
        18
        19    ## Test steps
        20    1. Truy cập trang web Basic Calculator
        21    2. Chọn Build "Prototype"
        22    3. Nhập "abc" vào trường First number
        23    4. Nhập "10" vào trường Second number
        24    5. Chọn Operation là "Add"
        25    6. Bấm nút "Calculate"
        26
        27    ## Expected result
        28    Hệ thống không thực hiện phép tính. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung: "Number 1 is not a number".
        29
        30    ## Status / Related bugs
        31    Not Run / None
         1    # TC-FMT-001: Làm tròn kết quả số nguyên khi chọn Integers only
         2
         3    ## Requirement ID
         4    FR-CALC-04
         5
         6    ## Module / Test type / Technique
         7    Module 4 - Formatting & Controls / Functional / State Transition
         8
         9    ## Preconditions
        10    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
        11    - Chọn Build: Prototype
        12
        13    ## Test data
        14    | Build | Prototype |
        15    | First number | 5 |
        16    | Second number | 2 |
        17    | Operation | Divide |
        18    | Integers only | Checked |
        19
        20    ## Test steps
        21    1. Truy cập trang web Basic Calculator
        22    2. Chọn Build "Prototype"
        23    3. Nhập "5" vào trường First number
        24    4. Nhập "2" vào trường Second number
        25    5. Chọn Operation là "Divide"
        26    6. Tích chọn checkbox "Integers only"
        27    7. Bấm nút "Calculate"
        28
        29    ## Expected result
        30    Trường Answer hiển thị kết quả làm tròn thành số nguyên là "2" (thay vì 2.5).
        31
        32    ## Status / Related bugs
        33    Not Run / None
    ✓ • 52ms

## Assistant — 2026-09-28 14:30:22 (UTC+07:00)

Mình đã đọc lại cấu trúc hiện tại. Dự án đang chia việc theo **4 module** trong [kế hoạch phân công](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/docs/01_phan_chia_module.md):

| Thư mục test case | Phạm vi |
|---|---|
| `module-1-arithmetic` | Cộng, trừ, nhân và giá trị biên |
| `module-2-division` | Phép chia và ngoại lệ |
| `module-3-concatenate` | Ghép chuỗi và kiểm tra dữ liệu nhập |
| `module-4-formatting-builds` | Định dạng kết quả, điều khiển và các build lỗi |

Mỗi test case là một file Markdown mang mã `TC-ARI/DIV/CON/FMT-xxx`, theo mẫu: requirement, điều kiện tiên quyết, dữ liệu, các bước và kết quả mong đợi. Kết quả thực hiện nằm ở `tests/test-runs/`; quan hệ giữa yêu cầu và test case nằm ở `tests/test-summary/`; mẫu Issue nằm trong `.github/ISSUE_TEMPLATE/`. Mình sẽ theo **cấu trúc thực tế này** khi làm tiếp.

Có một điểm cần lưu ý: [README](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/README.md) vẫn mô tả cấu trúc `docs/02_thiet_ke_test_cases.md` chưa tồn tại, còn test run và ma trận truy vết mới liệt kê 8 test case mẫu. Các file Module 3 mới thêm chưa được phản ánh ở đó. Mình chưa sửa file nào.

## User — 2026-09-28 14:30:38 (UTC+07:00)

tôi đang được chia làm module 3

## Assistant — 2026-09-28 14:30:47 (UTC+07:00)

Mình hiểu: bạn phụ trách **Module 3 – Ghép chuỗi và kiểm tra dữ liệu nhập**. Từ đây, mình sẽ tập trung vào các test case `TC-CON-*` trong [thư mục Module 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate), gồm phép Concatenate, dữ liệu không hợp lệ ở các phép toán số học và trạng thái checkbox *Integers only*.

## User — 2026-09-28 14:33:10 (UTC+07:00)

kiểm tra các test case của module 3 đã đầy đủ và ổn chưa

## Assistant — 2026-09-28 14:33:18 (UTC+07:00)

Mình sẽ rà từng `TC-CON-*` theo phạm vi Module 3, kiểm tra chỗ trùng hoặc thiếu và đối chiếu các expected result quan trọng với ứng dụng mẫu trước khi kết luận.

## Activity

    $ sed -n '50,145p' docs/01_phan_chia_module.md; cat tests/test-cases/module-3-concatenate/TC-CON-013.md tests/test-cases/module-3-concatenate/TC-CON-014.md
         - Trừ đi 0, trừ 2 số bằng nhau (ra 0).
         - Trừ số âm (phép trừ biến thành phép cộng).
      3. Thiết kế test case cho phép toán **Nhân (Multiply)**:
         - Nhân với 0, nhân với 1, nhân với -1.
         - Nhân 2 số âm (kết quả dương).
         - Nhân số thập phân.
      4. **Kiểm thử biên (Boundary Value Analysis)**:
         - Nhập giá trị biên độ dài: chuỗi đúng 10 chữ số (giới hạn `maxlength=10`).
         - Thử nhập quá 10 ký tự để kiểm tra input field có ngăn chặn hay không.
         - Kết quả tính toán vượt quá giới hạn hiển thị của ô `Answer`.
    
    ---
    
    ### 👤 Module 2: Phép Chia (Divide) & Xử lý Ngoại lệ Toán học (Error Handling)
    * **Mục tiêu**: Kiểm tra tính chính xác của phép chia và năng lực bắt lỗi/xử lý ngoại lệ của hệ thống đối với các giá trị đặc biệt trong toán học.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép **Chia hợp lệ**:
         - Phép chia hết: kết quả là số nguyên dương.
         - Phép chia ra số thập phân hữu hạn (ví dụ: `5 / 2 = 2.5`).
         - Phép chia ra số thập phân vô hạn / tuần hoàn (ví dụ: `10 / 3 = 3.333333333...`).
         - Số 0 chia cho số khác (`0 / x = 0`).
         - Phép chia với số âm (kết quả âm hoặc dương).
      2. Thiết kế test case cho **Ngoại lệ Chia cho 0**:
         - Số khác 0 chia cho 0 (`x / 0`): Hệ thống phải dừng tính, không làm crash trang web, hiển thị thông báo lỗi màu đỏ `"Divide by zero error!"`.
         - Phép tính `0 / 0`: Kiểm tra xem có bắt lỗi chia cho 0 hay trả về NaN.
      3. Kiểm tra tính đúng đắn của **Thứ tự toán hạng**:
         - Đảm bảo phép chia luôn lấy `Number 1 / Number 2` chứ không bị đảo ngược.
      4. Kiểm tra trạng thái làm sạch thông báo lỗi khi người dùng thực hiện một phép tính hợp lệ ngay sau khi bị lỗi chia cho 0.
    
    ---
    
    ### 👤 Module 3: Ghép Chuỗi (Concatenate) & Kiểm thử Hợp lệ Dữ liệu Đầu vào (Validation)
    * **Mục tiêu**: Đảm bảo hệ thống xử lý đúng định dạng chuỗi và ngăn chặn triệt để dữ liệu không hợp lệ đối với các phép toán số học.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép **Ghép Chuỗi (Concatenate)**:
         - Ghép 2 chuỗi số (`"12"` + `"34"` $\rightarrow$ `"1234"`).
         - Ghép văn bản chữ thông thường (`"hello"` + `"world"` $\rightarrow$ `"helloworld"`).
         - Ghép với chuỗi ký tự đặc biệt (`"@#"` + `"!$"`).
         - Ghép với ô nhập để trống (empty string).
         - Ghép chuỗi dài vượt quá kích thước hiển thị.
      2. Thiết kế test case **Kiểm tra Ràng buộc Nhập liệu (Input Validation)**:
         - Nhập chữ cái (letters) vào `Number 1` hoặc `Number 2` đối với các phép toán số học.
         - Nhập ký tự đặc biệt, icon, khoảng trắng (whitespace) vào các trường số.
         - Bỏ trống trường `Number 1` hoặc `Number 2` và nhấn Calculate.
         - Xác minh thông báo lỗi hiển thị đúng nội dung:
           - `"Number 1 is not a number"`
           - `"Number 2 is not a number"`
      3. Kiểm tra **Hành vi Giao diện động (UI Behavior)**:
         - Khi chọn *Concatenate*: Checkbox *Integers only* và nhãn của nó phải tự động **ẩn (hidden) và vô hiệu hóa (disabled)**.
         - Khi chuyển từ *Concatenate* về lại phép toán số học: Checkbox và nhãn phải tự động hiển thị và kích hoạt lại.
    
    ---
    
    ### 👤 Module 4: Định dạng Kết quả, Điều khiển Giao diện & Kiểm thử Đa phiên bản (Builds 1–9)
    * **Mục tiêu**: Kiểm tra tính năng làm tròn số nguyên, các nút bấm điều khiển và lập ma trận kiểm thử đối chiếu để tìm lỗi trên 9 bản build của website.
    * **Nhiệm vụ cụ thể**:
      1. Kiểm thử chức năng **"Integers only"**:
         - Tích chọn *Integers only* trước khi tính toán số thập phân (ví dụ: `5.7` $\rightarrow$ `5`).
         - Tích chọn *Integers only* **sau khi** kết quả đã xuất hiện trong ô `Answer` (kiểm tra sự kiện tự động cập nhật lại kết quả tức thì).
         - Bỏ tích chọn *Integers only* để khôi phục lại giá trị thập phân ban đầu.
         - Kiểm tra với số âm (ví dụ: `-2.8` $\rightarrow$ `-2`).
      2. Kiểm thử **Điều khiển Giao diện (Buttons & UX)**:
         - Nút **Calculate**: Hiển thị trạng thái loading (`calculatingForm` với ảnh `waiting.gif`), vô hiệu hóa nút tính toán trong khi đang xử lý nhằm chống spam click.
         - Nút **Clear**: Xóa sạch ô `Answer`, hủy tích checkbox *Integers only*, xóa thông báo lỗi đỏ.
      3. Kiểm thử **Ma trận Phát hiện Lỗi trên các Build (Build 1 đến 9)**:
         - *Build 1*: Không kiểm tra tính hợp lệ của số.
         - *Build 2*: Bị đảo ngược giữa phép Cộng (`Add`) và Ghép chuỗi (`Concatenate`).
         - *Build 3*: Luôn ép kiểm tra kiểu số (kể cả khi chọn Concatenate).
         - *Build 4*: Bị khóa cứng ở chế độ Integers only.
         - *Build 5*: Nút Clear bị vô hiệu hóa (disabled).
         - *Build 6*: Không bắt lỗi chia cho 0 (`Divide by zero`).
         - *Build 7*: Sử dụng kết quả cũ của Answer làm Number 1 thay vì giá trị người dùng nhập.
         - *Build 8*: Bị hoán đổi vị trí giữa Number 1 và Number 2.
         - *Build 9*: Các phần tử giao diện bị biến mất (Number 2 và nút Calculate).
    # TC-CON-013: Bắt lỗi khi Second number chứa ký tự đặc biệt trên phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `50` |
    | Second number (`number2Field`) | `&*()` |
    | Operation (`selectOperationDropdown`) | `Divide` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "50" vào trường First number.
    4. Nhập "&*()" vào trường Second number.
    5. Chọn Operation là "Divide".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống chặn việc thực hiện phép chia.
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | Operation ban đầu | `Add` |
    | Operation chuyển đổi | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Quan sát giao diện: Checkbox `integerSelect` và nhãn `intSelectionLabel` ("Integers only") đang hiển thị bình thường.
    4. Tích chọn vào checkbox "Integers only".
    5. Tại dropdown `selectOperationDropdown`, đổi lựa chọn sang "Concatenate".
    6. Quan sát phản ứng của giao diện ngay khi vừa chọn "Concatenate".
    
    ## Expected result
    - Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    - Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 40ms

## Activity

    $ cat /home/pham-quang-vinh/.codex/skills/playwright/SKILL.md
    ---
    name: "playwright"
    description: "Use when the task requires automating a real browser from the terminal (navigation, form filling, snapshots, screenshots, data extraction, UI-flow debugging) via `playwright-cli` or the bundled wrapper script."
    ---
    
    
    # Playwright CLI Skill
    
    Drive a real browser from the terminal using `playwright-cli`. Prefer the bundled wrapper script so the CLI works even when it is not globally installed.
    Treat this skill as CLI-first automation. Do not pivot to `@playwright/test` unless the user explicitly asks for test files.
    
    ## Prerequisite check (required)
    
    Before proposing commands, check whether `npx` is available (the wrapper depends on it):
    
    ```bash
    command -v npx >/dev/null 2>&1
    ```
    
    If it is not available, pause and ask the user to install Node.js/npm (which provides `npx`). Provide these steps verbatim:
    
    ```bash
    # Verify Node/npm are installed
    node --version
    npm --version
    
    # If missing, install Node.js/npm, then:
    npm install -g @playwright/cli@latest
    playwright-cli --help
    ```
    
    Once `npx` is present, proceed with the wrapper script. A global install of `playwright-cli` is optional.
    
    ## Skill path (set once)
    
    ```bash
    export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
    export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
    ```
    
    User-scoped skills install under `$CODEX_HOME/skills` (default: `~/.codex/skills`).
    
    ## Quick start
    
    Use the wrapper script:
    
    ```bash
    "$PWCLI" open https://playwright.dev --headed
    "$PWCLI" snapshot
    "$PWCLI" click e15
    "$PWCLI" type "Playwright"
    "$PWCLI" press Enter
    "$PWCLI" screenshot
    ```
    
    If the user prefers a global install, this is also valid:
    
    ```bash
    npm install -g @playwright/cli@latest
    playwright-cli --help
    ```
    
    ## Core workflow
    
    1. Open the page.
    2. Snapshot to get stable element refs.
    3. Interact using refs from the latest snapshot.
    4. Re-snapshot after navigation or significant DOM changes.
    5. Capture artifacts (screenshot, pdf, traces) when useful.
    
    Minimal loop:
    
    ```bash
    "$PWCLI" open https://example.com
    "$PWCLI" snapshot
    "$PWCLI" click e3
    "$PWCLI" snapshot
    ```
    
    ## When to snapshot again
    
    Snapshot again after:
    
    - navigation
    - clicking elements that change the UI substantially
    - opening/closing modals or menus
    - tab switches
    
    Refs can go stale. When a command fails due to a missing ref, snapshot again.
    
    ## Recommended patterns
    
    ### Form fill and submit
    
    ```bash
    "$PWCLI" open https://example.com/form
    "$PWCLI" snapshot
    "$PWCLI" fill e1 "user@example.com"
    "$PWCLI" fill e2 "password123"
    "$PWCLI" click e3
    "$PWCLI" snapshot
    ```
    
    ### Debug a UI flow with traces
    
    ```bash
    "$PWCLI" open https://example.com --headed
    "$PWCLI" tracing-start
    # ...interactions...
    "$PWCLI" tracing-stop
    ```
    
    ### Multi-tab work
    
    ```bash
    "$PWCLI" tab-new https://example.com
    "$PWCLI" tab-list
    "$PWCLI" tab-select 0
    "$PWCLI" snapshot
    ```
    
    ## Wrapper script
    
    The wrapper script uses `npx --package @playwright/cli playwright-cli` so the CLI can run without a global install:
    
    ```bash
    "$PWCLI" --help
    ```
    
    Prefer the wrapper unless the repository already standardizes on a global install.
    
    ## References
    
    Open only what you need:
    
    - CLI command reference: `references/cli.md`
    - Practical workflows and troubleshooting: `references/workflows.md`
    
    ## Guardrails
    
    - Always snapshot before referencing element ids like `e12`.
    - Re-snapshot when refs seem stale.
    - Prefer explicit commands over `eval` and `run-code` unless needed.
    - When you do not have a fresh snapshot, use placeholder refs like `eX` and say why; do not bypass refs with `run-code`.
    - Use `--headed` when a visual check will help.
    - When capturing artifacts in this repo, use `output/playwright/` and avoid introducing new top-level artifact folders.
    - Default to CLI commands and workflows, not Playwright test specs.
    ✓ • 45ms

## Activity

    $ find tests/test-cases/module-3-concatenate -maxdepth 1 -type f -name 'TC-CON-*.md' -print | sort; git status --short; rg -n '^# |^## |^\| (First|Second|Operation|Build|Integers|.*number)|^-' tests/test-cases/module-3-concatenate/TC-CON-*.md
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
     M tests/test-summary/traceability-matrix.md
    ?? docs/02_thiet_ke_test_cases.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md:1:# TC-CON-006: Ghép chuỗi khi trường Second number để trống
    tests/test-cases/module-3-concatenate/TC-CON-006.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-006.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-006.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-006.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-006.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-006.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-006.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-006.md:17:| First number (`number1Field`) | `hello` |
    tests/test-cases/module-3-concatenate/TC-CON-006.md:18:| Second number (`number2Field`) | *(để trống - empty)* |
    tests/test-cases/module-3-concatenate/TC-CON-006.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-006.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-006.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-006.md:30:- Trường Answer (`numberAnswerField`) hiển thị kết quả là `hello`.
    tests/test-cases/module-3-concatenate/TC-CON-006.md:31:- Không có lỗi hiển thị ở `errorMsgField`.
    tests/test-cases/module-3-concatenate/TC-CON-006.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-003.md:1:# TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường
    tests/test-cases/module-3-concatenate/TC-CON-003.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-003.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-003.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-003.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-003.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-003.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-003.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-003.md:17:| First number (`number1Field`) | `hello` |
    tests/test-cases/module-3-concatenate/TC-CON-003.md:18:| Second number (`number2Field`) | `world` |
    tests/test-cases/module-3-concatenate/TC-CON-003.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-003.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-003.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-003.md:30:- Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi chính xác là `helloworld`.
    tests/test-cases/module-3-concatenate/TC-CON-003.md:31:- Khu vực `errorMsgField` không hiển thị bất kỳ thông báo lỗi nào.
    tests/test-cases/module-3-concatenate/TC-CON-003.md:32:- Checkbox `Integers only` bị ẩn và vô hiệu hóa.
    tests/test-cases/module-3-concatenate/TC-CON-003.md:34:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-018.md:1:# TC-CON-018: Đối sánh bắt lỗi Build 3 - Ép kiểm tra kiểu số ngay cả khi thực hiện phép Ghép chuỗi (Concatenate)
    tests/test-cases/module-3-concatenate/TC-CON-018.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-018.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-018.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-018.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-018.md:11:- Chọn Build: `3`
    tests/test-cases/module-3-concatenate/TC-CON-018.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-018.md:16:| Build | `3` |
    tests/test-cases/module-3-concatenate/TC-CON-018.md:17:| First number (`number1Field`) | `hello` |
    tests/test-cases/module-3-concatenate/TC-CON-018.md:18:| Second number (`number2Field`) | `world` |
    tests/test-cases/module-3-concatenate/TC-CON-018.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-018.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-018.md:29:## Expected result (Theo Prototype chuẩn)
    tests/test-cases/module-3-concatenate/TC-CON-018.md:30:- Ô Answer hiển thị kết quả ghép chuỗi là `helloworld`. Phép Concatenate không được ép kiểu số.
    tests/test-cases/module-3-concatenate/TC-CON-018.md:32:## Actual result (Hành vi lỗi trên Build 3)
    tests/test-cases/module-3-concatenate/TC-CON-018.md:33:- Trên Build 3, cờ `isNumber` luôn bị gán cứng bằng `true`. Khi người dùng nhập chuỗi chữ cái và chọn Concatenate, hệ thống vẫn bắt lỗi `isNaN` và hiển thị thông báo lỗi màu đỏ `"Number 1 is not a number"`, ngăn cản hoàn toàn việc ghép chuỗi văn bản thông thường.
    tests/test-cases/module-3-concatenate/TC-CON-018.md:35:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-017.md:1:# TC-CON-017: Đối sánh bắt lỗi Build 2 - Phép toán Concatenate bị hoán đổi thành phép Add
    tests/test-cases/module-3-concatenate/TC-CON-017.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-017.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-017.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-017.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-017.md:11:- Chọn Build: `2`
    tests/test-cases/module-3-concatenate/TC-CON-017.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-017.md:16:| Build | `2` |
    tests/test-cases/module-3-concatenate/TC-CON-017.md:17:| First number (`number1Field`) | `12` |
    tests/test-cases/module-3-concatenate/TC-CON-017.md:18:| Second number (`number2Field`) | `34` |
    tests/test-cases/module-3-concatenate/TC-CON-017.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-017.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-017.md:29:## Expected result (Theo Prototype chuẩn)
    tests/test-cases/module-3-concatenate/TC-CON-017.md:30:- Ô Answer phải hiển thị kết quả ghép chuỗi là `1234`.
    tests/test-cases/module-3-concatenate/TC-CON-017.md:32:## Actual result (Hành vi lỗi trên Build 2)
    tests/test-cases/module-3-concatenate/TC-CON-017.md:33:- Trên Build 2, logic phép toán bị đảo ngược giữa Add và Concatenate: chọn Concatenate nhưng hệ thống lại thực hiện phép cộng số học và trả về `46` trong ô Answer.
    tests/test-cases/module-3-concatenate/TC-CON-017.md:35:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-015.md:1:# TC-CON-015: Kiểm tra trạng thái tự động hiển thị và kích hoạt lại của checkbox Integers only khi chuyển về phép toán số học
    tests/test-cases/module-3-concatenate/TC-CON-015.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-015.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-015.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-015.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-015.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-015.md:12:- Phép toán đang chọn là `Concatenate` (checkbox Integers only đang bị ẩn)
    tests/test-cases/module-3-concatenate/TC-CON-015.md:14:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-015.md:17:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-015.md:18:| Operation ban đầu | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-015.md:19:| Operation chuyển đổi | `Subtract` (hoặc `Add` / `Multiply` / `Divide`) |
    tests/test-cases/module-3-concatenate/TC-CON-015.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-015.md:28:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-015.md:29:- Ngay khi chuyển về phép toán số học ("Subtract"), checkbox `integerSelect` và nhãn `intSelectionLabel` tự động hiển thị trở lại (`hidden = false`).
    tests/test-cases/module-3-concatenate/TC-CON-015.md:30:- Checkbox `integerSelect` ở trạng thái được kích hoạt sẵn sàng để người dùng tương tác (`disabled = false`).
    tests/test-cases/module-3-concatenate/TC-CON-015.md:32:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-016.md:1:# TC-CON-016: Đối sánh bắt lỗi Build 1 - Bỏ qua bước kiểm tra dữ liệu số hợp lệ (No Input Validation)
    tests/test-cases/module-3-concatenate/TC-CON-016.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-016.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-016.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-016.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-016.md:11:- Chọn Build: `1`
    tests/test-cases/module-3-concatenate/TC-CON-016.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-016.md:16:| Build | `1` |
    tests/test-cases/module-3-concatenate/TC-CON-016.md:17:| First number (`number1Field`) | `abc` |
    tests/test-cases/module-3-concatenate/TC-CON-016.md:18:| Second number (`number2Field`) | `10` |
    tests/test-cases/module-3-concatenate/TC-CON-016.md:19:| Operation (`selectOperationDropdown`) | `Add` |
    tests/test-cases/module-3-concatenate/TC-CON-016.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-016.md:29:## Expected result (Theo Prototype chuẩn)
    tests/test-cases/module-3-concatenate/TC-CON-016.md:30:- Hệ thống phải chặn phép tính và hiển thị lỗi màu đỏ: `"Number 1 is not a number"`.
    tests/test-cases/module-3-concatenate/TC-CON-016.md:32:## Actual result (Hành vi lỗi trên Build 1)
    tests/test-cases/module-3-concatenate/TC-CON-016.md:33:- Build 1 bỏ qua việc kiểm tra `isNaN`, dẫn đến hệ thống vẫn cố tình thực hiện phép cộng và trả về kết quả `NaN` trong ô Answer thay vì cảnh báo lỗi cho người dùng.
    tests/test-cases/module-3-concatenate/TC-CON-016.md:35:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-013.md:1:# TC-CON-013: Bắt lỗi khi Second number chứa ký tự đặc biệt trên phép toán số học
    tests/test-cases/module-3-concatenate/TC-CON-013.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-013.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-013.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-013.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-013.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-013.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-013.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-013.md:17:| First number (`number1Field`) | `50` |
    tests/test-cases/module-3-concatenate/TC-CON-013.md:18:| Second number (`number2Field`) | `&*()` |
    tests/test-cases/module-3-concatenate/TC-CON-013.md:19:| Operation (`selectOperationDropdown`) | `Divide` |
    tests/test-cases/module-3-concatenate/TC-CON-013.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-013.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-013.md:30:- Hệ thống chặn việc thực hiện phép chia.
    tests/test-cases/module-3-concatenate/TC-CON-013.md:31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    tests/test-cases/module-3-concatenate/TC-CON-013.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-014.md:1:# TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    tests/test-cases/module-3-concatenate/TC-CON-014.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-014.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-014.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-014.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-014.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-014.md:12:- Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    tests/test-cases/module-3-concatenate/TC-CON-014.md:14:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-014.md:17:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-014.md:18:| Operation ban đầu | `Add` |
    tests/test-cases/module-3-concatenate/TC-CON-014.md:19:| Operation chuyển đổi | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-014.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-014.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-014.md:30:- Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    tests/test-cases/module-3-concatenate/TC-CON-014.md:31:- Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    tests/test-cases/module-3-concatenate/TC-CON-014.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-011.md:1:# TC-CON-011: Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự không hợp lệ
    tests/test-cases/module-3-concatenate/TC-CON-011.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-011.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-011.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-011.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-011.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-011.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-011.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-011.md:17:| First number (`number1Field`) | `abc` |
    tests/test-cases/module-3-concatenate/TC-CON-011.md:18:| Second number (`number2Field`) | `xyz` |
    tests/test-cases/module-3-concatenate/TC-CON-011.md:19:| Operation (`selectOperationDropdown`) | `Multiply` |
    tests/test-cases/module-3-concatenate/TC-CON-011.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-011.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-011.md:30:- Hệ thống ưu tiên bắt lỗi từ trường đầu tiên (`num1`).
    tests/test-cases/module-3-concatenate/TC-CON-011.md:31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    tests/test-cases/module-3-concatenate/TC-CON-011.md:32:- Không thực hiện phép tính nhân.
    tests/test-cases/module-3-concatenate/TC-CON-011.md:34:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-009.md:1:# TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)
    tests/test-cases/module-3-concatenate/TC-CON-009.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-009.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-009.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-009.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-009.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-009.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-009.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-009.md:17:| First number (`number1Field`) | `Hello ` (có space cuối) |
    tests/test-cases/module-3-concatenate/TC-CON-009.md:18:| Second number (`number2Field`) | ` World` (có space đầu) |
    tests/test-cases/module-3-concatenate/TC-CON-009.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-009.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-009.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-009.md:30:- Trường Answer (`numberAnswerField`) hiển thị nguyên vẹn các khoảng trắng: `Hello  World`.
    tests/test-cases/module-3-concatenate/TC-CON-009.md:31:- Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    tests/test-cases/module-3-concatenate/TC-CON-009.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-010.md:1:# TC-CON-010: Bắt lỗi khi trường Second number chứa chữ cái trên phép toán số học
    tests/test-cases/module-3-concatenate/TC-CON-010.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-010.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-010.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-010.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-010.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-010.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-010.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-010.md:17:| First number (`number1Field`) | `25` |
    tests/test-cases/module-3-concatenate/TC-CON-010.md:18:| Second number (`number2Field`) | `xyz` |
    tests/test-cases/module-3-concatenate/TC-CON-010.md:19:| Operation (`selectOperationDropdown`) | `Add` |
    tests/test-cases/module-3-concatenate/TC-CON-010.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-010.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-010.md:30:- Hệ thống không thực hiện phép tính cộng.
    tests/test-cases/module-3-concatenate/TC-CON-010.md:31:- Trường Answer (`numberAnswerField`) không hiển thị kết quả tính.
    tests/test-cases/module-3-concatenate/TC-CON-010.md:32:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    tests/test-cases/module-3-concatenate/TC-CON-010.md:34:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-008.md:1:# TC-CON-008: Ghép hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi trường)
    tests/test-cases/module-3-concatenate/TC-CON-008.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-008.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-008.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-008.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-008.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-008.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-008.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-008.md:17:| First number (`number1Field`) | `1234567890` (10 ký tự) |
    tests/test-cases/module-3-concatenate/TC-CON-008.md:18:| Second number (`number2Field`) | `abcdefghij` (10 ký tự) |
    tests/test-cases/module-3-concatenate/TC-CON-008.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-008.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-008.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-008.md:30:- Trường Answer (`numberAnswerField`) hiển thị đầy đủ chuỗi ghép 20 ký tự: `1234567890abcdefghij`.
    tests/test-cases/module-3-concatenate/TC-CON-008.md:31:- Chuỗi không bị cắt ngắn (truncate) sai quy cách.
    tests/test-cases/module-3-concatenate/TC-CON-008.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-004.md:1:# TC-CON-004: Ghép chuỗi chứa các ký tự đặc biệt
    tests/test-cases/module-3-concatenate/TC-CON-004.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-004.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-004.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-004.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-004.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-004.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-004.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-004.md:17:| First number (`number1Field`) | `@#$%` |
    tests/test-cases/module-3-concatenate/TC-CON-004.md:18:| Second number (`number2Field`) | `&*!?` |
    tests/test-cases/module-3-concatenate/TC-CON-004.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-004.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-004.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-004.md:30:- Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi là `@#$%&*!?`.
    tests/test-cases/module-3-concatenate/TC-CON-004.md:31:- Không có lỗi hiển thị ở `errorMsgField`.
    tests/test-cases/module-3-concatenate/TC-CON-004.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-001.md:1:# TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
    tests/test-cases/module-3-concatenate/TC-CON-001.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-001.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-001.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-001.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-001.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-001.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-001.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-001.md:15:| First number | 12 |
    tests/test-cases/module-3-concatenate/TC-CON-001.md:16:| Second number | 34 |
    tests/test-cases/module-3-concatenate/TC-CON-001.md:17:| Operation | Concatenate |
    tests/test-cases/module-3-concatenate/TC-CON-001.md:19:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-001.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-001.md:30:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-007.md:1:# TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống
    tests/test-cases/module-3-concatenate/TC-CON-007.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-007.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-007.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-007.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-007.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-007.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-007.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-007.md:17:| First number (`number1Field`) | *(để trống)* |
    tests/test-cases/module-3-concatenate/TC-CON-007.md:18:| Second number (`number2Field`) | *(để trống)* |
    tests/test-cases/module-3-concatenate/TC-CON-007.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-007.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-007.md:28:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-007.md:29:- Trường Answer (`numberAnswerField`) hiển thị chuỗi rỗng `""`.
    tests/test-cases/module-3-concatenate/TC-CON-007.md:30:- Trang web không bị crash hoặc sinh lỗi JavaScript.
    tests/test-cases/module-3-concatenate/TC-CON-007.md:31:- Khu vực `errorMsgField` không báo lỗi.
    tests/test-cases/module-3-concatenate/TC-CON-007.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-005.md:1:# TC-CON-005: Ghép chuỗi khi trường First number để trống
    tests/test-cases/module-3-concatenate/TC-CON-005.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-005.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-005.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-005.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-005.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-005.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-005.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-005.md:17:| First number (`number1Field`) | *(để trống - empty)* |
    tests/test-cases/module-3-concatenate/TC-CON-005.md:18:| Second number (`number2Field`) | `world` |
    tests/test-cases/module-3-concatenate/TC-CON-005.md:19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    tests/test-cases/module-3-concatenate/TC-CON-005.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-005.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-005.md:30:- Trường Answer (`numberAnswerField`) hiển thị kết quả là `world`.
    tests/test-cases/module-3-concatenate/TC-CON-005.md:31:- Không có lỗi hiển thị ở `errorMsgField`.
    tests/test-cases/module-3-concatenate/TC-CON-005.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-012.md:1:# TC-CON-012: Bắt lỗi khi First number chứa ký tự đặc biệt trên phép toán số học
    tests/test-cases/module-3-concatenate/TC-CON-012.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-012.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-012.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-012.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-012.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-012.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-012.md:16:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-012.md:17:| First number (`number1Field`) | `!@#$%` |
    tests/test-cases/module-3-concatenate/TC-CON-012.md:18:| Second number (`number2Field`) | `50` |
    tests/test-cases/module-3-concatenate/TC-CON-012.md:19:| Operation (`selectOperationDropdown`) | `Subtract` |
    tests/test-cases/module-3-concatenate/TC-CON-012.md:21:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-012.md:29:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-012.md:30:- Hệ thống chặn việc thực hiện phép trừ.
    tests/test-cases/module-3-concatenate/TC-CON-012.md:31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    tests/test-cases/module-3-concatenate/TC-CON-012.md:33:## Status / Related bugs
    tests/test-cases/module-3-concatenate/TC-CON-002.md:1:# TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
    tests/test-cases/module-3-concatenate/TC-CON-002.md:3:## Requirement ID
    tests/test-cases/module-3-concatenate/TC-CON-002.md:6:## Module / Test type / Technique
    tests/test-cases/module-3-concatenate/TC-CON-002.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-002.md:10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    tests/test-cases/module-3-concatenate/TC-CON-002.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-002.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-002.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-002.md:15:| First number | abc |
    tests/test-cases/module-3-concatenate/TC-CON-002.md:16:| Second number | 10 |
    tests/test-cases/module-3-concatenate/TC-CON-002.md:17:| Operation | Add |
    tests/test-cases/module-3-concatenate/TC-CON-002.md:19:## Test steps
    tests/test-cases/module-3-concatenate/TC-CON-002.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-002.md:30:## Status / Related bugs
    ✓ • 76ms

## Assistant — 2026-09-28 14:33:27 (UTC+07:00)

Mình đang dùng quy trình Playwright để kiểm tra hành vi thực tế của trang mẫu, nhất là các giả định về ô trống, khoảng trắng và checkbox. Các file trong Module 3 đang được bổ sung trong lúc mình rà soát, nên mình sẽ kiểm tra theo trạng thái mới nhất trước khi kết luận.

## Activity

    $ command -v npx >/dev/null 2>&1; echo npx:$?; command -v playwright-cli; ls /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh
    npx:0
    /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh
    ✓ • 0ms

## Activity

    Opened https://testsheepnz.github.io/BasicCalculator.html

## Assistant — 2026-09-28 14:34:51 (UTC+07:00)

Trang mẫu xác nhận rằng Concatenate xử lý đầu vào như chuỗi, còn các phép toán số học kiểm tra dữ liệu số. Mình đang kiểm tra thêm những expected result quá cụ thể trong test case vì chúng có thể khác hành vi thực tế của Prototype.

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh open https://testsheepnz.github.io/BasicCalculator.html
    npm error code EAI_AGAIN
    npm error syscall getaddrinfo
    npm error errno EAI_AGAIN
    npm error request to https://registry.npmjs.org/@playwright%2fcli failed, reason: getaddrinfo EAI_AGAIN registry.npmjs.org
    npm error Log files were not written due to an error writing to the directory: /home/pham-quang-vinh/.npm/_logs
    npm error You can rerun the command with `--loglevel=verbose` to see the logs in your terminal
    ✗ (1) • 1m 11s

## Activity

    $ for f in tests/test-cases/module-3-concatenate/TC-CON-{009..011}.md; do cat "$f"; done
    # TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `Hello ` (có space cuối) |
    | Second number (`number2Field`) | ` World` (có space đầu) |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "Hello " vào trường First number.
    4. Nhập " World" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị nguyên vẹn các khoảng trắng: `Hello  World`.
    - Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-010: Bắt lỗi khi trường Second number chứa chữ cái trên phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `25` |
    | Second number (`number2Field`) | `xyz` |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "25" vào trường First number.
    4. Nhập "xyz" vào trường Second number.
    5. Chọn Operation là "Add".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép tính cộng.
    - Trường Answer (`numberAnswerField`) không hiển thị kết quả tính.
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-011: Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự không hợp lệ
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Priority & Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `abc` |
    | Second number (`number2Field`) | `xyz` |
    | Operation (`selectOperationDropdown`) | `Multiply` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "abc" vào trường First number.
    4. Nhập "xyz" vào trường Second number.
    5. Chọn Operation là "Multiply".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Hệ thống ưu tiên bắt lỗi từ trường đầu tiên (`num1`).
    - Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    - Không thực hiện phép tính nhân.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-3-concatenate/TC-CON-{014..018}.md; do cat "$f"; done
    # TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | Operation ban đầu | `Add` |
    | Operation chuyển đổi | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Quan sát giao diện: Checkbox `integerSelect` và nhãn `intSelectionLabel` ("Integers only") đang hiển thị bình thường.
    4. Tích chọn vào checkbox "Integers only".
    5. Tại dropdown `selectOperationDropdown`, đổi lựa chọn sang "Concatenate".
    6. Quan sát phản ứng của giao diện ngay khi vừa chọn "Concatenate".
    
    ## Expected result
    - Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    - Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-015: Kiểm tra trạng thái tự động hiển thị và kích hoạt lại của checkbox Integers only khi chuyển về phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn là `Concatenate` (checkbox Integers only đang bị ẩn)
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | Operation ban đầu | `Concatenate` |
    | Operation chuyển đổi | `Subtract` (hoặc `Add` / `Multiply` / `Divide`) |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Chọn Operation là "Concatenate" (xác nhận checkbox "Integers only" đã bị ẩn).
    4. Tại dropdown `selectOperationDropdown`, đổi sang "Subtract".
    5. Quan sát phản ứng của giao diện.
    
    ## Expected result
    - Ngay khi chuyển về phép toán số học ("Subtract"), checkbox `integerSelect` và nhãn `intSelectionLabel` tự động hiển thị trở lại (`hidden = false`).
    - Checkbox `integerSelect` ở trạng thái được kích hoạt sẵn sàng để người dùng tương tác (`disabled = false`).
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-016: Đối sánh bắt lỗi Build 1 - Bỏ qua bước kiểm tra dữ liệu số hợp lệ (No Input Validation)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `1`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `1` |
    | First number (`number1Field`) | `abc` |
    | Second number (`number2Field`) | `10` |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "1" từ dropdown `selectBuild`.
    3. Nhập "abc" vào trường First number.
    4. Nhập "10" vào trường Second number.
    5. Chọn Operation là "Add".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Hệ thống phải chặn phép tính và hiển thị lỗi màu đỏ: `"Number 1 is not a number"`.
    
    ## Actual result (Hành vi lỗi trên Build 1)
    - Build 1 bỏ qua việc kiểm tra `isNaN`, dẫn đến hệ thống vẫn cố tình thực hiện phép cộng và trả về kết quả `NaN` trong ô Answer thay vì cảnh báo lỗi cho người dùng.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-017: Đối sánh bắt lỗi Build 2 - Phép toán Concatenate bị hoán đổi thành phép Add
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `2`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `2` |
    | First number (`number1Field`) | `12` |
    | Second number (`number2Field`) | `34` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "2" từ dropdown `selectBuild`.
    3. Nhập "12" vào trường First number.
    4. Nhập "34" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Ô Answer phải hiển thị kết quả ghép chuỗi là `1234`.
    
    ## Actual result (Hành vi lỗi trên Build 2)
    - Trên Build 2, logic phép toán bị đảo ngược giữa Add và Concatenate: chọn Concatenate nhưng hệ thống lại thực hiện phép cộng số học và trả về `46` trong ô Answer.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-018: Đối sánh bắt lỗi Build 3 - Ép kiểm tra kiểu số ngay cả khi thực hiện phép Ghép chuỗi (Concatenate)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `3`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `3` |
    | First number (`number1Field`) | `hello` |
    | Second number (`number2Field`) | `world` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "3" từ dropdown `selectBuild`.
    3. Nhập "hello" vào trường First number.
    4. Nhập "world" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Ô Answer hiển thị kết quả ghép chuỗi là `helloworld`. Phép Concatenate không được ép kiểu số.
    
    ## Actual result (Hành vi lỗi trên Build 3)
    - Trên Build 3, cờ `isNumber` luôn bị gán cứng bằng `true`. Khi người dùng nhập chuỗi chữ cái và chọn Concatenate, hệ thống vẫn bắt lỗi `isNaN` và hiển thị thông báo lỗi màu đỏ `"Number 1 is not a number"`, ngăn cản hoàn toàn việc ghép chuỗi văn bản thông thường.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    Searched the web for site:github.com testsheepnz BasicCalculator.html js BasicCalculator, testsheepnz Basic Calculator github source JavaScript integerSelect

## User — 2026-09-28 14:35:34 (UTC+07:00)

bạn hãy xem phần thiết kế test case thôi

## Assistant — 2026-09-28 14:35:43 (UTC+07:00)

Mình sẽ chỉ rà phần thiết kế test case của Module 3 trong repository: độ bao phủ, dữ liệu, bước chạy, expected result và tính nhất quán.

## Activity

    $ find tests/test-cases/module-3-concatenate -maxdepth 1 -name 'TC-CON-*.md' -print | sort; git status --short
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
     M tests/test-runs/sprint-1-test-run.md
     M tests/test-runs/sprint-2-regression.md
     M tests/test-summary/traceability-matrix.md
    ?? docs/02_thiet_ke_test_cases.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-summary/bug-reports/
    ✓ • 0ms

## Activity

    $ rg -n 'Module 3|TC-CON|FR-CALC-03|test case|Test Case' docs/02_thiet_ke_test_cases.md tests/test-summary/traceability-matrix.md README.md
    README.md:23:| **Thành viên 3** | **Module 3**: Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | - Phép Ghép chuỗi (`Concatenate`) chuỗi chữ, chuỗi số, ký tự đặc biệt.<br>- Bắt lỗi nhập liệu không phải số (`is not a number`).<br>- Trạng thái ẩn/hiện của checkbox Integers only. | [Xem Module 3](docs/02_thiet_ke_test_cases.md#-module-3-ghép-chuỗi--kiểm-tra-hợp-lệ-dữ-liệu-đầu-vào) |
    README.md:35:    └── 02_thiet_ke_test_cases.md      # Đặc tả chi tiết 40+ Test Cases chuẩn IEEE 829
    README.md:42:- 🧪 [Tài liệu 02: Thiết kế Test Cases chi tiết (IEEE 829)](docs/02_thiet_ke_test_cases.md)
    tests/test-summary/traceability-matrix.md:6:Ma trận Truy xuất Nguồn gốc Yêu cầu (RTM) đối với ứng dụng **Basic Calculator** nhằm đảm bảo toàn bộ 4 Module chức năng của hệ thống được bao phủ đầy đủ bởi các kịch bản kiểm thử (Test Cases), phục vụ kiểm thử đối sánh giữa bản **Prototype** và **Builds 1 - 9**.
    tests/test-summary/traceability-matrix.md:12:| Module | Tên Module | Người phụ trách | Số Test Cases mẫu | Tỷ lệ bao phủ |
    tests/test-summary/traceability-matrix.md:16:| **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 18 | 100% |
    tests/test-summary/traceability-matrix.md:23:| Mã Yêu cầu (Req ID) | Module | Mô tả Yêu cầu Chức năng | Mã Test Case | Loại kiểm thử | Kỹ thuật áp dụng |
    tests/test-summary/traceability-matrix.md:27:| **FR-CALC-03** | Module 3 (Concatenate) | Ghép chuỗi văn bản và số; validation bắt lỗi ký tự không hợp lệ ("is not a number"); trạng thái động checkbox Integers only; đối sánh bắt lỗi Builds 1, 2, 3. | `TC-CON-001` đến `TC-CON-018` | Functional<br>Validation<br>UI State<br>Defect Hunting | Phân vùng tương đương (EP)<br>Phân tích giá trị biên (BVA)<br>Negative Testing<br>State Transition<br>Comparative Testing |
    docs/02_thiet_ke_test_cases.md:12:3. [Module 3: Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu Đầu vào](#-module-3-ghép-chuỗi--kiểm-tra-hợp-lệ-dữ-liệu-đầu-vào)
    docs/02_thiet_ke_test_cases.md:20:| Mã Test Case | Tên kịch bản kiểm thử | Phép toán | Kỹ thuật áp dụng | File chi tiết |
    docs/02_thiet_ke_test_cases.md:30:| Mã Test Case | Tên kịch bản kiểm thử | Phép toán | Kỹ thuật áp dụng | File chi tiết |
    docs/02_thiet_ke_test_cases.md:40:### 1. Danh sách kịch bản kiểm thử (18 Test Cases)
    docs/02_thiet_ke_test_cases.md:42:| Mã Test Case | Tiêu đề kịch bản | Phân loại | Kỹ thuật | File liên kết |
    docs/02_thiet_ke_test_cases.md:44:| `TC-CON-001` | Ghép hai chuỗi số hợp lệ | Chức năng (Functional) | Phân vùng tương đương (EP) | [TC-CON-001.md](../tests/test-cases/module-3-concatenate/TC-CON-001.md) |
    docs/02_thiet_ke_test_cases.md:45:| `TC-CON-002` | Bắt lỗi nhập chữ cái vào phép toán số học | Ràng buộc nhập liệu | Negative Testing | [TC-CON-002.md](../tests/test-cases/module-3-concatenate/TC-CON-002.md) |
    docs/02_thiet_ke_test_cases.md:46:| `TC-CON-003` | Ghép hai chuỗi văn bản chữ cái thông thường | Chức năng (Functional) | Phân vùng tương đương (EP) | [TC-CON-003.md](../tests/test-cases/module-3-concatenate/TC-CON-003.md) |
    docs/02_thiet_ke_test_cases.md:47:| `TC-CON-004` | Ghép chuỗi chứa ký tự đặc biệt | Chức năng (Functional) | Phân vùng tương đương (EP) | [TC-CON-004.md](../tests/test-cases/module-3-concatenate/TC-CON-004.md) |
    docs/02_thiet_ke_test_cases.md:48:| `TC-CON-005` | Ghép chuỗi khi trường First number để trống | Chức năng (Functional) | Phân tích giá trị biên (BVA) | [TC-CON-005.md](../tests/test-cases/module-3-concatenate/TC-CON-005.md) |
    docs/02_thiet_ke_test_cases.md:49:| `TC-CON-006` | Ghép chuỗi khi trường Second number để trống | Chức năng (Functional) | Phân tích giá trị biên (BVA) | [TC-CON-006.md](../tests/test-cases/module-3-concatenate/TC-CON-006.md) |
    docs/02_thiet_ke_test_cases.md:50:| `TC-CON-007` | Ghép chuỗi khi cả hai trường đều để trống | Kiểm thử biên (Edge Case) | Negative Testing | [TC-CON-007.md](../tests/test-cases/module-3-concatenate/TC-CON-007.md) |
    docs/02_thiet_ke_test_cases.md:51:| `TC-CON-008` | Ghép chuỗi đạt độ dài biên tối đa (10 + 10 ký tự) | Kiểm thử biên (Boundary) | Phân tích giá trị biên (BVA) | [TC-CON-008.md](../tests/test-cases/module-3-concatenate/TC-CON-008.md) |
    docs/02_thiet_ke_test_cases.md:52:| `TC-CON-009` | Ghép chuỗi có chứa ký tự khoảng trắng | Chức năng (Functional) | Phân vùng tương đương (EP) | [TC-CON-009.md](../tests/test-cases/module-3-concatenate/TC-CON-009.md) |
    docs/02_thiet_ke_test_cases.md:53:| `TC-CON-010` | Bắt lỗi Second number chứa chữ cái trên phép tính | Ràng buộc nhập liệu | Negative Testing | [TC-CON-010.md](../tests/test-cases/module-3-concatenate/TC-CON-010.md) |
    docs/02_thiet_ke_test_cases.md:54:| `TC-CON-011` | Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự sai | Ràng buộc nhập liệu | Priority / Negative Testing | [TC-CON-011.md](../tests/test-cases/module-3-concatenate/TC-CON-011.md) |
    docs/02_thiet_ke_test_cases.md:55:| `TC-CON-012` | Bắt lỗi First number chứa ký tự đặc biệt trên phép tính | Ràng buộc nhập liệu | Negative Testing | [TC-CON-012.md](../tests/test-cases/module-3-concatenate/TC-CON-012.md) |
    docs/02_thiet_ke_test_cases.md:56:| `TC-CON-013` | Bắt lỗi Second number chứa ký tự đặc biệt trên phép tính | Ràng buộc nhập liệu | Negative Testing | [TC-CON-013.md](../tests/test-cases/module-3-concatenate/TC-CON-013.md) |
    docs/02_thiet_ke_test_cases.md:57:| `TC-CON-014` | Tự động ẩn & vô hiệu hóa checkbox Integers only khi chọn Concatenate | Trạng thái giao diện | State Transition Testing | [TC-CON-014.md](../tests/test-cases/module-3-concatenate/TC-CON-014.md) |
    docs/02_thiet_ke_test_cases.md:58:| `TC-CON-015` | Tự động hiển thị & kích hoạt lại Integers only khi rời Concatenate | Trạng thái giao diện | State Transition Testing | [TC-CON-015.md](../tests/test-cases/module-3-concatenate/TC-CON-015.md) |
    docs/02_thiet_ke_test_cases.md:59:| `TC-CON-016` | Bắt lỗi Build 1 - Không validate kiểu số (ra NaN) | Đối sánh bắt lỗi | Comparative Testing | [TC-CON-016.md](../tests/test-cases/module-3-concatenate/TC-CON-016.md) |
    docs/02_thiet_ke_test_cases.md:60:| `TC-CON-017` | Bắt lỗi Build 2 - Phép Concatenate bị đảo thành Add | Đối sánh bắt lỗi | Comparative Testing | [TC-CON-017.md](../tests/test-cases/module-3-concatenate/TC-CON-017.md) |
    docs/02_thiet_ke_test_cases.md:61:| `TC-CON-018` | Bắt lỗi Build 3 - Luôn ép kiểu số khi Concatenate (chặn chuỗi chữ) | Đối sánh bắt lỗi | Comparative Testing | [TC-CON-018.md](../tests/test-cases/module-3-concatenate/TC-CON-018.md) |
    docs/02_thiet_ke_test_cases.md:68:| Mã Test Case | Tên kịch bản kiểm thử | Tính năng | Kỹ thuật áp dụng | File chi tiết |
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-3-concatenate/TC-CON-*.md; do echo "### $f"; rg -n '^# TC-|^## Requirement|^FR-|^## Module|^Module 3|^## Test data|^\| (First|Second|Operation|Build|Integers|:---)|^## Test steps|^## Expected|^## Actual|^## Status|^Not Run|^-' "$f"; done
    ### tests/test-cases/module-3-concatenate/TC-CON-001.md
    1:# TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    14:| Build | Prototype |
    15:| First number | 12 |
    16:| Second number | 34 |
    17:| Operation | Concatenate |
    19:## Test steps
    27:## Expected result
    30:## Status / Related bugs
    31:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-002.md
    1:# TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Validation / Negative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    14:| Build | Prototype |
    15:| First number | abc |
    16:| Second number | 10 |
    17:| Operation | Add |
    19:## Test steps
    27:## Expected result
    30:## Status / Related bugs
    31:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-003.md
    1:# TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `hello` |
    18:| Second number (`number2Field`) | `world` |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi chính xác là `helloworld`.
    31:- Khu vực `errorMsgField` không hiển thị bất kỳ thông báo lỗi nào.
    32:- Checkbox `Integers only` bị ẩn và vô hiệu hóa.
    34:## Status / Related bugs
    35:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-004.md
    1:# TC-CON-004: Ghép chuỗi chứa các ký tự đặc biệt
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `@#$%` |
    18:| Second number (`number2Field`) | `&*!?` |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị kết quả nối chuỗi là `@#$%&*!?`.
    31:- Không có lỗi hiển thị ở `errorMsgField`.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-005.md
    1:# TC-CON-005: Ghép chuỗi khi trường First number để trống
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | *(để trống - empty)* |
    18:| Second number (`number2Field`) | `world` |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị kết quả là `world`.
    31:- Không có lỗi hiển thị ở `errorMsgField`.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-006.md
    1:# TC-CON-006: Ghép chuỗi khi trường Second number để trống
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `hello` |
    18:| Second number (`number2Field`) | *(để trống - empty)* |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị kết quả là `hello`.
    31:- Không có lỗi hiển thị ở `errorMsgField`.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-007.md
    1:# TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Edge Case Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | *(để trống)* |
    18:| Second number (`number2Field`) | *(để trống)* |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    28:## Expected result
    29:- Trường Answer (`numberAnswerField`) hiển thị chuỗi rỗng `""`.
    30:- Trang web không bị crash hoặc sinh lỗi JavaScript.
    31:- Khu vực `errorMsgField` không báo lỗi.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-008.md
    1:# TC-CON-008: Ghép hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi trường)
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `1234567890` (10 ký tự) |
    18:| Second number (`number2Field`) | `abcdefghij` (10 ký tự) |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị đầy đủ chuỗi ghép 20 ký tự: `1234567890abcdefghij`.
    31:- Chuỗi không bị cắt ngắn (truncate) sai quy cách.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-009.md
    1:# TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `Hello ` (có space cuối) |
    18:| Second number (`number2Field`) | ` World` (có space đầu) |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Trường Answer (`numberAnswerField`) hiển thị nguyên vẹn các khoảng trắng: `Hello  World`.
    31:- Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-010.md
    1:# TC-CON-010: Bắt lỗi khi trường Second number chứa chữ cái trên phép toán số học
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Validation / Negative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `25` |
    18:| Second number (`number2Field`) | `xyz` |
    19:| Operation (`selectOperationDropdown`) | `Add` |
    21:## Test steps
    29:## Expected result
    30:- Hệ thống không thực hiện phép tính cộng.
    31:- Trường Answer (`numberAnswerField`) không hiển thị kết quả tính.
    32:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    34:## Status / Related bugs
    35:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-011.md
    1:# TC-CON-011: Bắt lỗi ưu tiên khi cả hai trường đều chứa ký tự không hợp lệ
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Validation / Priority & Negative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `abc` |
    18:| Second number (`number2Field`) | `xyz` |
    19:| Operation (`selectOperationDropdown`) | `Multiply` |
    21:## Test steps
    29:## Expected result
    30:- Hệ thống ưu tiên bắt lỗi từ trường đầu tiên (`num1`).
    31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    32:- Không thực hiện phép tính nhân.
    34:## Status / Related bugs
    35:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-012.md
    1:# TC-CON-012: Bắt lỗi khi First number chứa ký tự đặc biệt trên phép toán số học
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Validation / Negative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `!@#$%` |
    18:| Second number (`number2Field`) | `50` |
    19:| Operation (`selectOperationDropdown`) | `Subtract` |
    21:## Test steps
    29:## Expected result
    30:- Hệ thống chặn việc thực hiện phép trừ.
    31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 1 is not a number"`.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-013.md
    1:# TC-CON-013: Bắt lỗi khi Second number chứa ký tự đặc biệt trên phép toán số học
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Validation / Negative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    13:## Test data
    15:| :--- | :--- |
    16:| Build | Prototype |
    17:| First number (`number1Field`) | `50` |
    18:| Second number (`number2Field`) | `&*()` |
    19:| Operation (`selectOperationDropdown`) | `Divide` |
    21:## Test steps
    29:## Expected result
    30:- Hệ thống chặn việc thực hiện phép chia.
    31:- Hiển thị thông báo lỗi màu đỏ tại `errorMsgField`: `"Number 2 is not a number"`.
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-014.md
    1:# TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    12:- Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    14:## Test data
    16:| :--- | :--- |
    17:| Build | Prototype |
    18:| Operation ban đầu | `Add` |
    19:| Operation chuyển đổi | `Concatenate` |
    21:## Test steps
    29:## Expected result
    30:- Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    31:- Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    33:## Status / Related bugs
    34:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-015.md
    1:# TC-CON-015: Kiểm tra trạng thái tự động hiển thị và kích hoạt lại của checkbox Integers only khi chuyển về phép toán số học
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: Prototype
    12:- Phép toán đang chọn là `Concatenate` (checkbox Integers only đang bị ẩn)
    14:## Test data
    16:| :--- | :--- |
    17:| Build | Prototype |
    18:| Operation ban đầu | `Concatenate` |
    19:| Operation chuyển đổi | `Subtract` (hoặc `Add` / `Multiply` / `Divide`) |
    21:## Test steps
    28:## Expected result
    29:- Ngay khi chuyển về phép toán số học ("Subtract"), checkbox `integerSelect` và nhãn `intSelectionLabel` tự động hiển thị trở lại (`hidden = false`).
    30:- Checkbox `integerSelect` ở trạng thái được kích hoạt sẵn sàng để người dùng tương tác (`disabled = false`).
    32:## Status / Related bugs
    33:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-016.md
    1:# TC-CON-016: Đối sánh bắt lỗi Build 1 - Bỏ qua bước kiểm tra dữ liệu số hợp lệ (No Input Validation)
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: `1`
    13:## Test data
    15:| :--- | :--- |
    16:| Build | `1` |
    17:| First number (`number1Field`) | `abc` |
    18:| Second number (`number2Field`) | `10` |
    19:| Operation (`selectOperationDropdown`) | `Add` |
    21:## Test steps
    29:## Expected result (Theo Prototype chuẩn)
    30:- Hệ thống phải chặn phép tính và hiển thị lỗi màu đỏ: `"Number 1 is not a number"`.
    32:## Actual result (Hành vi lỗi trên Build 1)
    33:- Build 1 bỏ qua việc kiểm tra `isNaN`, dẫn đến hệ thống vẫn cố tình thực hiện phép cộng và trả về kết quả `NaN` trong ô Answer thay vì cảnh báo lỗi cho người dùng.
    35:## Status / Related bugs
    36:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-017.md
    1:# TC-CON-017: Đối sánh bắt lỗi Build 2 - Phép toán Concatenate bị hoán đổi thành phép Add
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: `2`
    13:## Test data
    15:| :--- | :--- |
    16:| Build | `2` |
    17:| First number (`number1Field`) | `12` |
    18:| Second number (`number2Field`) | `34` |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result (Theo Prototype chuẩn)
    30:- Ô Answer phải hiển thị kết quả ghép chuỗi là `1234`.
    32:## Actual result (Hành vi lỗi trên Build 2)
    33:- Trên Build 2, logic phép toán bị đảo ngược giữa Add và Concatenate: chọn Concatenate nhưng hệ thống lại thực hiện phép cộng số học và trả về `46` trong ô Answer.
    35:## Status / Related bugs
    36:Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-018.md
    1:# TC-CON-018: Đối sánh bắt lỗi Build 3 - Ép kiểm tra kiểu số ngay cả khi thực hiện phép Ghép chuỗi (Concatenate)
    3:## Requirement ID
    4:FR-CALC-03
    6:## Module / Test type / Technique
    7:Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    10:- Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    11:- Chọn Build: `3`
    13:## Test data
    15:| :--- | :--- |
    16:| Build | `3` |
    17:| First number (`number1Field`) | `hello` |
    18:| Second number (`number2Field`) | `world` |
    19:| Operation (`selectOperationDropdown`) | `Concatenate` |
    21:## Test steps
    29:## Expected result (Theo Prototype chuẩn)
    30:- Ô Answer hiển thị kết quả ghép chuỗi là `helloworld`. Phép Concatenate không được ép kiểu số.
    32:## Actual result (Hành vi lỗi trên Build 3)
    33:- Trên Build 3, cờ `isNumber` luôn bị gán cứng bằng `true`. Khi người dùng nhập chuỗi chữ cái và chọn Concatenate, hệ thống vẫn bắt lỗi `isNaN` và hiển thị thông báo lỗi màu đỏ `"Number 1 is not a number"`, ngăn cản hoàn toàn việc ghép chuỗi văn bản thông thường.
    35:## Status / Related bugs
    36:Not Run / None
    ✓ • 194ms

## Assistant — 2026-09-28 14:36:21 (UTC+07:00)

Mình đã rà **18 file `TC-CON-001` đến `TC-CON-018` chỉ ở mức thiết kế**. Bộ test đã bao phủ khá tốt việc ghép chuỗi số, chữ, ký tự đặc biệt, ô trống, dữ liệu sai ở hai ô và chuyển trạng thái *Integers only*. **Chưa nên xem là đầy đủ hoặc chốt bản thiết kế**, vì còn các điểm sau:

1. **Thiếu trường hợp validation theo phân công Module 3:** chưa có test riêng cho ô số để trống, đầu vào chỉ gồm khoảng trắng, hoặc emoji/ký tự Unicode trong phép toán số học. [Kế hoạch Module 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/docs/01_phan_chia_module.md:91) có nêu các nhóm dữ liệu này.
2. **`TC-CON-016` đến `018` ghi “Actual result” dù trạng thái vẫn là `Not Run`.** Đây đang là hành vi lỗi dự kiến để tìm trên các build, chưa phải kết quả quan sát. Nên chuyển phần đó thành *dấu hiệu lỗi cần kiểm tra*; kết quả thực tế ghi vào test run sau khi chạy. Xem [TC-CON-016](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-016.md:29).
3. **`TC-CON-014` quy định checkbox phải `checked = false` và `disabled = true`**, trong khi yêu cầu Module 3 chỉ nêu việc ẩn/vô hiệu hóa. Cần xác định rõ đây là tiêu chí được yêu cầu hay giả định thêm, để tránh đánh Fail sai. [TC-CON-014](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-014.md:29).
4. **Một số tiêu chí cần viết chính xác hơn:** [TC-CON-007](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-007.md:28) nên nói ô Answer có giá trị rỗng, tránh hiểu là hiển thị hai dấu ngoặc kép; [TC-CON-008](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-008.md:29) mới thử đúng 10 ký tự mỗi ô, chưa thử ký tự thứ 11.
5. **Định dạng chưa thống nhất:** bảng Test data của [TC-CON-001](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-001.md:13) và `002` thiếu hàng tiêu đề/dấu phân cách Markdown như các file còn lại.

Ưu tiên trước khi nộp: bổ sung các trường hợp còn thiếu, sửa cách ghi `Actual result` của ba case theo build, rồi chuẩn hóa expected result và bảng dữ liệu. Mình **chưa chạy ứng dụng và chưa sửa file**, nên nhận xét này chỉ đánh giá chất lượng thiết kế.

## User — 2026-09-28 14:37:00 (UTC+07:00)

bạn hãy sửa giúp tôi chỉ thiết kế phần test case thôi các phần khác chưa làm

## Assistant — 2026-09-28 14:37:12 (UTC+07:00)

Mình sẽ chỉ sửa các file `tests/test-cases/module-3-concatenate/TC-CON-*.md`: bổ sung ca còn thiếu và làm rõ các tiêu chí thiết kế. Mình sẽ không cập nhật test run, bug report hay tài liệu tổng hợp ở bước này.

## Activity

    $ find tests/test-cases/module-3-concatenate -maxdepth 1 -name 'TC-CON-*.md' | sort | tail -8; sed -n '82,112p' docs/01_phan_chia_module.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
    * **Mục tiêu**: Đảm bảo hệ thống xử lý đúng định dạng chuỗi và ngăn chặn triệt để dữ liệu không hợp lệ đối với các phép toán số học.
    * **Nhiệm vụ cụ thể**:
      1. Thiết kế test case cho phép **Ghép Chuỗi (Concatenate)**:
         - Ghép 2 chuỗi số (`"12"` + `"34"` $\rightarrow$ `"1234"`).
         - Ghép văn bản chữ thông thường (`"hello"` + `"world"` $\rightarrow$ `"helloworld"`).
         - Ghép với chuỗi ký tự đặc biệt (`"@#"` + `"!$"`).
         - Ghép với ô nhập để trống (empty string).
         - Ghép chuỗi dài vượt quá kích thước hiển thị.
      2. Thiết kế test case **Kiểm tra Ràng buộc Nhập liệu (Input Validation)**:
         - Nhập chữ cái (letters) vào `Number 1` hoặc `Number 2` đối với các phép toán số học.
         - Nhập ký tự đặc biệt, icon, khoảng trắng (whitespace) vào các trường số.
         - Bỏ trống trường `Number 1` hoặc `Number 2` và nhấn Calculate.
         - Xác minh thông báo lỗi hiển thị đúng nội dung:
           - `"Number 1 is not a number"`
           - `"Number 2 is not a number"`
      3. Kiểm tra **Hành vi Giao diện động (UI Behavior)**:
         - Khi chọn *Concatenate*: Checkbox *Integers only* và nhãn của nó phải tự động **ẩn (hidden) và vô hiệu hóa (disabled)**.
         - Khi chuyển từ *Concatenate* về lại phép toán số học: Checkbox và nhãn phải tự động hiển thị và kích hoạt lại.
    
    ---
    
    ### 👤 Module 4: Định dạng Kết quả, Điều khiển Giao diện & Kiểm thử Đa phiên bản (Builds 1–9)
    * **Mục tiêu**: Kiểm tra tính năng làm tròn số nguyên, các nút bấm điều khiển và lập ma trận kiểm thử đối chiếu để tìm lỗi trên 9 bản build của website.
    * **Nhiệm vụ cụ thể**:
      1. Kiểm thử chức năng **"Integers only"**:
         - Tích chọn *Integers only* trước khi tính toán số thập phân (ví dụ: `5.7` $\rightarrow$ `5`).
         - Tích chọn *Integers only* **sau khi** kết quả đã xuất hiện trong ô `Answer` (kiểm tra sự kiện tự động cập nhật lại kết quả tức thì).
         - Bỏ tích chọn *Integers only* để khôi phục lại giá trị thập phân ban đầu.
         - Kiểm tra với số âm (ví dụ: `-2.8` $\rightarrow$ `-2`).
      2. Kiểm thử **Điều khiển Giao diện (Buttons & UX)**:
         - Nút **Calculate**: Hiển thị trạng thái loading (`calculatingForm` với ảnh `waiting.gif`), vô hiệu hóa nút tính toán trong khi đang xử lý nhằm chống spam click.
    ✓ • 0ms

## Activity

    $ git status --short; for f in tests/test-cases/module-3-concatenate/TC-CON-{001,002,007,008,014,015,016,017,018}.md; do echo "### $f"; cat "$f"; done
     M tests/test-runs/sprint-1-test-run.md
     M tests/test-runs/sprint-2-regression.md
     M tests/test-summary/traceability-matrix.md
    ?? docs/02_thiet_ke_test_cases.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-summary/bug-reports/
    ### tests/test-cases/module-3-concatenate/TC-CON-001.md
    # TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 12 |
    | Second number | 34 |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "12" vào trường First number
    4. Nhập "34" vào trường Second number
    5. Chọn Operation là "Concatenate"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả nối chuỗi chính xác là "1234". Checkbox "Integers only" tự động ẩn đi khi chọn Concatenate.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-002.md
    # TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | abc |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "abc" vào trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép tính. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung: "Number 1 is not a number".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-007.md
    # TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Edge Case Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | *(để trống)* |
    | Second number (`number2Field`) | *(để trống)* |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Để trống cả hai trường First number và Second number.
    4. Chọn Operation là "Concatenate".
    5. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị chuỗi rỗng `""`.
    - Trang web không bị crash hoặc sinh lỗi JavaScript.
    - Khu vực `errorMsgField` không báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-008.md
    # TC-CON-008: Ghép hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi trường)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `1234567890` (10 ký tự) |
    | Second number (`number2Field`) | `abcdefghij` (10 ký tự) |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Nhập "1234567890" vào trường First number.
    4. Nhập "abcdefghij" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result
    - Trường Answer (`numberAnswerField`) hiển thị đầy đủ chuỗi ghép 20 ký tự: `1234567890abcdefghij`.
    - Chuỗi không bị cắt ngắn (truncate) sai quy cách.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-014.md
    # TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | Operation ban đầu | `Add` |
    | Operation chuyển đổi | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Quan sát giao diện: Checkbox `integerSelect` và nhãn `intSelectionLabel` ("Integers only") đang hiển thị bình thường.
    4. Tích chọn vào checkbox "Integers only".
    5. Tại dropdown `selectOperationDropdown`, đổi lựa chọn sang "Concatenate".
    6. Quan sát phản ứng của giao diện ngay khi vừa chọn "Concatenate".
    
    ## Expected result
    - Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    - Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-015.md
    # TC-CON-015: Kiểm tra trạng thái tự động hiển thị và kích hoạt lại của checkbox Integers only khi chuyển về phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn là `Concatenate` (checkbox Integers only đang bị ẩn)
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | Operation ban đầu | `Concatenate` |
    | Operation chuyển đổi | `Subtract` (hoặc `Add` / `Multiply` / `Divide`) |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "Prototype".
    3. Chọn Operation là "Concatenate" (xác nhận checkbox "Integers only" đã bị ẩn).
    4. Tại dropdown `selectOperationDropdown`, đổi sang "Subtract".
    5. Quan sát phản ứng của giao diện.
    
    ## Expected result
    - Ngay khi chuyển về phép toán số học ("Subtract"), checkbox `integerSelect` và nhãn `intSelectionLabel` tự động hiển thị trở lại (`hidden = false`).
    - Checkbox `integerSelect` ở trạng thái được kích hoạt sẵn sàng để người dùng tương tác (`disabled = false`).
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-016.md
    # TC-CON-016: Đối sánh bắt lỗi Build 1 - Bỏ qua bước kiểm tra dữ liệu số hợp lệ (No Input Validation)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `1`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `1` |
    | First number (`number1Field`) | `abc` |
    | Second number (`number2Field`) | `10` |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "1" từ dropdown `selectBuild`.
    3. Nhập "abc" vào trường First number.
    4. Nhập "10" vào trường Second number.
    5. Chọn Operation là "Add".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Hệ thống phải chặn phép tính và hiển thị lỗi màu đỏ: `"Number 1 is not a number"`.
    
    ## Actual result (Hành vi lỗi trên Build 1)
    - Build 1 bỏ qua việc kiểm tra `isNaN`, dẫn đến hệ thống vẫn cố tình thực hiện phép cộng và trả về kết quả `NaN` trong ô Answer thay vì cảnh báo lỗi cho người dùng.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-017.md
    # TC-CON-017: Đối sánh bắt lỗi Build 2 - Phép toán Concatenate bị hoán đổi thành phép Add
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `2`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `2` |
    | First number (`number1Field`) | `12` |
    | Second number (`number2Field`) | `34` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "2" từ dropdown `selectBuild`.
    3. Nhập "12" vào trường First number.
    4. Nhập "34" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Ô Answer phải hiển thị kết quả ghép chuỗi là `1234`.
    
    ## Actual result (Hành vi lỗi trên Build 2)
    - Trên Build 2, logic phép toán bị đảo ngược giữa Add và Concatenate: chọn Concatenate nhưng hệ thống lại thực hiện phép cộng số học và trả về `46` trong ô Answer.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-018.md
    # TC-CON-018: Đối sánh bắt lỗi Build 3 - Ép kiểm tra kiểu số ngay cả khi thực hiện phép Ghép chuỗi (Concatenate)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: `3`
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | `3` |
    | First number (`number1Field`) | `hello` |
    | Second number (`number2Field`) | `world` |
    | Operation (`selectOperationDropdown`) | `Concatenate` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator.
    2. Chọn Build "3" từ dropdown `selectBuild`.
    3. Nhập "hello" vào trường First number.
    4. Nhập "world" vào trường Second number.
    5. Chọn Operation là "Concatenate".
    6. Bấm nút "Calculate".
    
    ## Expected result (Theo Prototype chuẩn)
    - Ô Answer hiển thị kết quả ghép chuỗi là `helloworld`. Phép Concatenate không được ép kiểu số.
    
    ## Actual result (Hành vi lỗi trên Build 3)
    - Trên Build 3, cờ `isNumber` luôn bị gán cứng bằng `true`. Khi người dùng nhập chuỗi chữ cái và chọn Concatenate, hệ thống vẫn bắt lỗi `isNaN` và hiển thị thông báo lỗi màu đỏ `"Number 1 is not a number"`, ngăn cản hoàn toàn việc ghép chuỗi văn bản thông thường.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    file changes: Completed · 9 changes
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-001.md
    @@ -13,6 +13,8 @@
     ## Test data
    +| Tham số | Giá trị |
    +| :--- | :--- |
     | Build | Prototype |
    -| First number | 12 |
    -| Second number | 34 |
    -| Operation | Concatenate |
    +| First number | `12` |
    +| Second number | `34` |
    +| Operation | `Concatenate` |
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-002.md
    @@ -13,6 +13,8 @@
     ## Test data
    +| Tham số | Giá trị |
    +| :--- | :--- |
     | Build | Prototype |
    -| First number | abc |
    -| Second number | 10 |
    -| Operation | Add |
    +| First number | `abc` |
    +| Second number | `10` |
    +| Operation | `Add` |
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-007.md
    @@ -28,3 +28,3 @@
     ## Expected result
    -- Trường Answer (`numberAnswerField`) hiển thị chuỗi rỗng `""`.
    +- Giá trị của trường Answer (`numberAnswerField`) là chuỗi rỗng; ô không hiển thị ký tự nào.
     - Trang web không bị crash hoặc sinh lỗi JavaScript.
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-008.md
    @@ -1,2 +1,2 @@
    -# TC-CON-008: Ghép hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi trường)
    +# TC-CON-008: Kiểm tra giới hạn 10 ký tự mỗi trường khi ghép chuỗi
     
    @@ -23,10 +23,10 @@
     2. Chọn Build "Prototype".
    -3. Nhập "1234567890" vào trường First number.
    -4. Nhập "abcdefghij" vào trường Second number.
    -5. Chọn Operation là "Concatenate".
    -6. Bấm nút "Calculate".
    +3. Nhập "1234567890" vào trường First number, sau đó thử nhập thêm ký tự "1".
    +4. Nhập "abcdefghij" vào trường Second number, sau đó thử nhập thêm ký tự "k".
    +5. Kiểm tra giá trị đang có trong hai trường nhập.
    +6. Chọn Operation là "Concatenate" và bấm nút "Calculate".
     
     ## Expected result
    -- Trường Answer (`numberAnswerField`) hiển thị đầy đủ chuỗi ghép 20 ký tự: `1234567890abcdefghij`.
    -- Chuỗi không bị cắt ngắn (truncate) sai quy cách.
    +- Mỗi trường chỉ giữ 10 ký tự đầu; ký tự thứ 11 không được nhập vào.
    +- Giá trị trường Answer (`numberAnswerField`) là chuỗi 20 ký tự `1234567890abcdefghij`, không bị cắt ngắn.
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-014.md
    @@ -29,4 +29,4 @@
     ## Expected result
    -- Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn `intSelectionLabel` tự động bị ẩn (`hidden = true`).
    -- Checkbox `integerSelect` bị bỏ tích (`checked = false`) và bị vô hiệu hóa (`disabled = true`).
    +- Ngay khi chọn "Concatenate", checkbox `integerSelect` và nhãn "Integers only" không còn hiển thị.
    +- Tùy chọn "Integers only" không thể tương tác hoặc ảnh hưởng đến phép ghép chuỗi.
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-015.md
    @@ -28,4 +28,4 @@
     ## Expected result
    -- Ngay khi chuyển về phép toán số học ("Subtract"), checkbox `integerSelect` và nhãn `intSelectionLabel` tự động hiển thị trở lại (`hidden = false`).
    -- Checkbox `integerSelect` ở trạng thái được kích hoạt sẵn sàng để người dùng tương tác (`disabled = false`).
    +- Ngay khi chuyển về phép toán số học "Subtract", checkbox `integerSelect` và nhãn "Integers only" hiển thị trở lại.
    +- Người dùng có thể tương tác với checkbox "Integers only".
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-016.md
    @@ -1,2 +1,2 @@
    -# TC-CON-016: Đối sánh bắt lỗi Build 1 - Bỏ qua bước kiểm tra dữ liệu số hợp lệ (No Input Validation)
    +# TC-CON-016: Kiểm tra validation dữ liệu số trên Build 1
     
    @@ -28,7 +28,8 @@
     
    -## Expected result (Theo Prototype chuẩn)
    -- Hệ thống phải chặn phép tính và hiển thị lỗi màu đỏ: `"Number 1 is not a number"`.
    +## Expected result
    +- Hệ thống không thực hiện phép cộng, trường Answer không hiển thị kết quả tính.
    +- Hiển thị lỗi `"Number 1 is not a number"` như yêu cầu validation của phép toán số học.
     
    -## Actual result (Hành vi lỗi trên Build 1)
    -- Build 1 bỏ qua việc kiểm tra `isNaN`, dẫn đến hệ thống vẫn cố tình thực hiện phép cộng và trả về kết quả `NaN` trong ô Answer thay vì cảnh báo lỗi cho người dùng.
    +## Mục tiêu đối sánh
    +- So sánh với `TC-CON-002` trên Prototype để phát hiện trường hợp Build 1 bỏ qua validation hoặc đưa kết quả không hợp lệ vào Answer.
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-017.md
    @@ -1,2 +1,2 @@
    -# TC-CON-017: Đối sánh bắt lỗi Build 2 - Phép toán Concatenate bị hoán đổi thành phép Add
    +# TC-CON-017: Kiểm tra phép Concatenate trên Build 2
     
    @@ -28,7 +28,7 @@
     
    -## Expected result (Theo Prototype chuẩn)
    -- Ô Answer phải hiển thị kết quả ghép chuỗi là `1234`.
    +## Expected result
    +- Trường Answer hiển thị kết quả ghép chuỗi `1234`, không phải kết quả phép cộng số học.
     
    -## Actual result (Hành vi lỗi trên Build 2)
    -- Trên Build 2, logic phép toán bị đảo ngược giữa Add và Concatenate: chọn Concatenate nhưng hệ thống lại thực hiện phép cộng số học và trả về `46` trong ô Answer.
    +## Mục tiêu đối sánh
    +- So sánh với `TC-CON-001` trên Prototype để phát hiện trường hợp Build 2 thực hiện phép Add thay cho Concatenate.
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-018.md
    @@ -1,2 +1,2 @@
    -# TC-CON-018: Đối sánh bắt lỗi Build 3 - Ép kiểm tra kiểu số ngay cả khi thực hiện phép Ghép chuỗi (Concatenate)
    +# TC-CON-018: Kiểm tra ghép chuỗi chữ trên Build 3
     
    @@ -28,7 +28,7 @@
     
    -## Expected result (Theo Prototype chuẩn)
    -- Ô Answer hiển thị kết quả ghép chuỗi là `helloworld`. Phép Concatenate không được ép kiểu số.
    +## Expected result
    +- Trường Answer hiển thị `helloworld`; không hiển thị lỗi validation dữ liệu số.
     
    -## Actual result (Hành vi lỗi trên Build 3)
    -- Trên Build 3, cờ `isNumber` luôn bị gán cứng bằng `true`. Khi người dùng nhập chuỗi chữ cái và chọn Concatenate, hệ thống vẫn bắt lỗi `isNaN` và hiển thị thông báo lỗi màu đỏ `"Number 1 is not a number"`, ngăn cản hoàn toàn việc ghép chuỗi văn bản thông thường.
    +## Mục tiêu đối sánh
    +- So sánh với `TC-CON-003` trên Prototype để phát hiện trường hợp Build 3 áp dụng validation số cho phép Concatenate.
     

## Activity

    file changes: Completed · 4 changes
    Add: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-019.md
    # TC-CON-019: Bắt lỗi khi First number để trống trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | *(để trống)* |
    | Second number (`number2Field`) | `10` |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator và chọn Build "Prototype".
    2. Để trống trường First number, nhập `10` vào trường Second number.
    3. Chọn Operation là "Add" và bấm "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép cộng; trường Answer không hiển thị kết quả tính.
    - Hiển thị thông báo `"Number 1 is not a number"` tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    Add: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-020.md
    # TC-CON-020: Bắt lỗi khi Second number để trống trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `10` |
    | Second number (`number2Field`) | *(để trống)* |
    | Operation (`selectOperationDropdown`) | `Add` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator và chọn Build "Prototype".
    2. Nhập `10` vào trường First number, để trống trường Second number.
    3. Chọn Operation là "Add" và bấm "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép cộng; trường Answer không hiển thị kết quả tính.
    - Hiển thị thông báo `"Number 2 is not a number"` tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    Add: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-021.md
    # TC-CON-021: Bắt lỗi khi Second number chỉ chứa khoảng trắng trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `10` |
    | Second number (`number2Field`) | `   ` (ba dấu cách) |
    | Operation (`selectOperationDropdown`) | `Multiply` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator và chọn Build "Prototype".
    2. Nhập `10` vào trường First number; nhập đúng ba dấu cách vào trường Second number.
    3. Chọn Operation là "Multiply" và bấm "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép nhân; trường Answer không hiển thị kết quả tính.
    - Hiển thị thông báo `"Number 2 is not a number"` tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    Add: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-022.md
    # TC-CON-022: Bắt lỗi khi First number chứa emoji trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Tham số | Giá trị |
    | :--- | :--- |
    | Build | Prototype |
    | First number (`number1Field`) | `🙂` |
    | Second number (`number2Field`) | `5` |
    | Operation (`selectOperationDropdown`) | `Subtract` |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator và chọn Build "Prototype".
    2. Nhập emoji `🙂` vào trường First number, nhập `5` vào trường Second number.
    3. Chọn Operation là "Subtract" và bấm "Calculate".
    
    ## Expected result
    - Hệ thống không thực hiện phép trừ; trường Answer không hiển thị kết quả tính.
    - Hiển thị thông báo `"Number 1 is not a number"` tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None

## Assistant — 2026-09-28 14:38:39 (UTC+07:00)

Mình đã bổ sung bốn ca về ô trống, đầu vào chỉ có dấu cách và emoji; đồng thời sửa các ca đối sánh build để phần thiết kế không ghi sẵn kết quả thực tế. Giờ mình kiểm tra lại mã test case, cấu trúc Markdown và phạm vi file đã sửa.

## Activity

    $ git diff --check; git diff -- tests/test-cases/module-3-concatenate/TC-CON-001.md tests/test-cases/module-3-concatenate/TC-CON-002.md; git status --short
    diff --git a/tests/test-cases/module-3-concatenate/TC-CON-001.md b/tests/test-cases/module-3-concatenate/TC-CON-001.md
    index fe40f35..22aa599 100644
    --- a/tests/test-cases/module-3-concatenate/TC-CON-001.md
    +++ b/tests/test-cases/module-3-concatenate/TC-CON-001.md
    @@ -11,10 +11,12 @@ Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
     - Chọn Build: Prototype
    
     ## Test data
    +| Tham số | Giá trị |
    +| :--- | :--- |
     | Build | Prototype |
    -| First number | 12 |
    -| Second number | 34 |
    -| Operation | Concatenate |
    +| First number | `12` |
    +| Second number | `34` |
    +| Operation | `Concatenate` |
    
     ## Test steps
     1. Truy cập trang web Basic Calculator
    diff --git a/tests/test-cases/module-3-concatenate/TC-CON-002.md b/tests/test-cases/module-3-concatenate/TC-CON-002.md
    index 6088a42..d768b64 100644
    --- a/tests/test-cases/module-3-concatenate/TC-CON-002.md
    +++ b/tests/test-cases/module-3-concatenate/TC-CON-002.md
    @@ -11,10 +11,12 @@ Module 3 - Concatenate & Validation / Validation / Negative Testing
     - Chọn Build: Prototype
    
     ## Test data
    +| Tham số | Giá trị |
    +| :--- | :--- |
     | Build | Prototype |
    -| First number | abc |
    -| Second number | 10 |
    -| Operation | Add |
    +| First number | `abc` |
    +| Second number | `10` |
    +| Operation | `Add` |
    
     ## Test steps
     1. Truy cập trang web Basic Calculator
     M tests/test-cases/module-3-concatenate/TC-CON-001.md
     M tests/test-cases/module-3-concatenate/TC-CON-002.md
     M tests/test-runs/sprint-1-test-run.md
     M tests/test-runs/sprint-2-regression.md
     M tests/test-summary/traceability-matrix.md
    ?? docs/02_thiet_ke_test_cases.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    ?? tests/test-summary/bug-reports/
    ✓ • 0ms

## Activity

    $ rg -n 'Actual result|checked = false|hidden =|disabled =|chuỗi rỗng|ký tự thứ 11' tests/test-cases/module-3-concatenate
    tests/test-cases/module-3-concatenate/TC-CON-008.md:30:- Mỗi trường chỉ giữ 10 ký tự đầu; ký tự thứ 11 không được nhập vào.
    tests/test-cases/module-3-concatenate/TC-CON-007.md:29:- Giá trị của trường Answer (`numberAnswerField`) là chuỗi rỗng; ô không hiển thị ký tự nào.
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        root=Path('tests/test-cases/module-3-concatenate')
        files=sorted(root.glob('TC-CON-*.md'))
        expected=[f'{i:03}' for i in range(1,23)]
        found=[re.search(r'TC-CON-(\d{3})',p.name).group(1) for p in files]
        print('count:',len(files),'IDs complete:',found==expected)
        for p in files:
         s=p.read_text()
         missing=[x for x in ('## Requirement ID','## Module / Test type / Technique','## Preconditions','## Test data','## Test steps','## Expected result','## Status / Related bugs') if x not in s]
         if missing: print(p.name,'missing:',missing)
         if '## Actual result' in s: print(p.name,'contains actual result')
         if not re.search(r'\|\s*:?-{3}',s): print(p.name,'data table separator missing')
         if not s.rstrip().endswith('Not Run / None'): print(p.name,'status unexpected')
        print('new case headings:')
        for p in files[-4:]: print(p.name,p.read_text().splitlines()[0])
        PY
    count: 22 IDs complete: True
    new case headings:
    TC-CON-019.md # TC-CON-019: Bắt lỗi khi First number để trống trong phép toán số học
    TC-CON-020.md # TC-CON-020: Bắt lỗi khi Second number để trống trong phép toán số học
    TC-CON-021.md # TC-CON-021: Bắt lỗi khi Second number chỉ chứa khoảng trắng trong phép toán số học
    TC-CON-022.md # TC-CON-022: Bắt lỗi khi First number chứa emoji trong phép toán số học
    ✓ • 29ms

## Assistant — 2026-09-28 14:38:58 (UTC+07:00)

Mình đã sửa **chỉ các file test case của Module 3**. Bộ thiết kế hiện có 22 ca `TC-CON-001` đến `TC-CON-022`.

Mình bổ sung ca cho ô số để trống, đầu vào chỉ có dấu cách và emoji; làm rõ kiểm thử ký tự thứ 11; chuẩn hóa bảng dữ liệu và expected result. Các ca Build 1–3 giờ ghi **mục tiêu đối sánh** thay vì ghi sẵn “Actual result” khi chưa chạy.

Mình đã kiểm tra mã test case liên tục, đủ các mục trong mẫu và không còn mục “Actual result” trong bộ thiết kế. Chưa chạy ứng dụng; expected result của các ca mới sẽ được xác nhận khi thực hiện test. Mình không sửa test run, bug report hay tài liệu tổng hợp.

## User — 2026-09-28 14:39:31 (UTC+07:00)

bạn phải làm theo chuẩn ban đầu của tc-con-001 á

## Assistant — 2026-09-28 14:39:52 (UTC+07:00)

Mình đã hiểu: các test case Module 3 cần theo đúng mẫu ban đầu của `TC-CON-001`. Mình sẽ khôi phục cách trình bày đó cho cả bộ, giữ nội dung kiểm thử đã bổ sung và chỉ sửa trong thư mục test case Module 3.

## Activity

    $ git show HEAD:tests/test-cases/module-3-concatenate/TC-CON-001.md; git show HEAD:tests/test-cases/module-3-concatenate/TC-CON-002.md
    # TC-CON-001: Thực hiện phép ghép chuỗi hai số hợp lệ
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 12 |
    | Second number | 34 |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "12" vào trường First number
    4. Nhập "34" vào trường Second number
    5. Chọn Operation là "Concatenate"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả nối chuỗi chính xác là "1234". Checkbox "Integers only" tự động ẩn đi khi chọn Concatenate.
    
    ## Status / Related bugs
    Not Run / None
    # TC-CON-002: Bắt lỗi nhập chữ cái vào phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | abc |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "abc" vào trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép tính. Hiển thị thông báo lỗi màu đỏ tại ô errorMsgField với nội dung: "Number 1 is not a number".
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        for p in sorted(Path('tests/test-cases/module-3-concatenate').glob('TC-CON-*.md')):
         s=p.read_text()
         hs=re.findall(r'^## (.*)$',s,re.M)
         print(p.name, ' | '.join(hs))
        PY
    TC-CON-001.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-002.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-003.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-004.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-005.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-006.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-007.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-008.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-009.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-010.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-011.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-012.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-013.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-014.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-015.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-016.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Mục tiêu đối sánh | Status / Related bugs
    TC-CON-017.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Mục tiêu đối sánh | Status / Related bugs
    TC-CON-018.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Mục tiêu đối sánh | Status / Related bugs
    TC-CON-019.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-020.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-021.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    TC-CON-022.md Requirement ID | Module / Test type / Technique | Preconditions | Test data | Test steps | Expected result | Status / Related bugs
    ✓ • 2ms

## Activity

    file changes: Completed · 2 changes
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-001.md
    @@ -13,8 +13,6 @@
     ## Test data
    -| Tham số | Giá trị |
    -| :--- | :--- |
     | Build | Prototype |
    -| First number | `12` |
    -| Second number | `34` |
    -| Operation | `Concatenate` |
    +| First number | 12 |
    +| Second number | 34 |
    +| Operation | Concatenate |
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-002.md
    @@ -13,8 +13,6 @@
     ## Test data
    -| Tham số | Giá trị |
    -| :--- | :--- |
     | Build | Prototype |
    -| First number | `abc` |
    -| Second number | `10` |
    -| Operation | `Add` |
    +| First number | abc |
    +| Second number | 10 |
    +| Operation | Add |
     

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        root = Path('tests/test-cases/module-3-concatenate')
        sections = ['Requirement ID', 'Module / Test type / Technique', 'Preconditions', 'Test data', 'Test steps', 'Expected result', 'Status / Related bugs']
        steps_new = {
         '019': ['Truy cập trang web Basic Calculator', 'Chọn Build "Prototype"', 'Để trống trường First number', 'Nhập "10" vào trường Second number', 'Chọn Operation là "Add"', 'Bấm nút "Calculate"'],
         '020': ['Truy cập trang web Basic Calculator', 'Chọn Build "Prototype"', 'Nhập "10" vào trường First number', 'Để trống trường Second number', 'Chọn Operation là "Add"', 'Bấm nút "Calculate"'],
         '021': ['Truy cập trang web Basic Calculator', 'Chọn Build "Prototype"', 'Nhập "10" vào trường First number', 'Nhập đúng ba dấu cách vào trường Second number', 'Chọn Operation là "Multiply"', 'Bấm nút "Calculate"'],
         '022': ['Truy cập trang web Basic Calculator', 'Chọn Build "Prototype"', 'Nhập emoji "🙂" vào trường First number', 'Nhập "5" vào trường Second number', 'Chọn Operation là "Subtract"', 'Bấm nút "Calculate"'],
        }
        for p in sorted(root.glob('TC-CON-*.md')):
         n = int(p.stem[-3:])
         if n <= 2: continue
         raw = p.read_text()
         parts = re.split(r'^## (.+)\n', raw, flags=re.M)
         title = parts[0].strip()
         data = {parts[i]:parts[i+1].strip() for i in range(1,len(parts),2)}
         missing = set(sections) - set(data)
         if missing: raise ValueError(f'{p}: missing {missing}')
         data['Preconditions'] = '\n'.join(line.replace('`','') for line in data['Preconditions'].splitlines())
         rows = []
         for line in data['Test data'].splitlines():
          if not line.startswith('|'): continue
          cells = [c.strip() for c in line.strip().strip('|').split('|')]
          if len(cells) != 2: raise ValueError(f'{p}: unexpected data row {line}')
          if cells[0] == 'Tham số' or cells[0].startswith(':---'): continue
          key = re.sub(r' \(`[^`]+`\)', '', cells[0])
          rows.append(f'| {key} | {cells[1].replace("`", "")} |')
         data['Test data'] = '\n'.join(rows)
         key = p.stem[-3:]
         if key in steps_new:
          data['Test steps'] = '\n'.join(f'{i}. {step}' for i,step in enumerate(steps_new[key],1))
         else:
          data['Test steps'] = '\n'.join(line.replace('`','').rstrip('.') for line in data['Test steps'].splitlines())
         expected = [line.strip().removeprefix('- ').replace('`','') for line in data['Expected result'].splitlines() if line.strip()]
         data['Expected result'] = ' '.join(expected)
         out = title + '\n\n' + '\n\n'.join(f'## {section}\n{data[section]}' for section in sections) + '\n'
         p.write_text(out)
        print('Normalized', len(list(root.glob('TC-CON-*.md')))-2, 'files to original TC-CON-001 structure')
        PY
    Normalized 20 files to original TC-CON-001 structure
    ✓ • 28ms

## Activity

    $ for f in tests/test-cases/module-3-concatenate/TC-CON-{003,007,008,009,014,016,019,021,022}.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-3-concatenate/TC-CON-003.md
    # TC-CON-003: Ghép hai chuỗi văn bản chữ cái thông thường
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | hello |
    | Second number | world |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype" từ dropdown
    3. Nhập "hello" vào trường First number
    4. Nhập "world" vào trường Second number
    5. Chọn Operation là "Concatenate"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer (numberAnswerField) hiển thị kết quả nối chuỗi chính xác là helloworld. Khu vực errorMsgField không hiển thị bất kỳ thông báo lỗi nào. Checkbox Integers only bị ẩn và vô hiệu hóa.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-007.md
    # TC-CON-007: Ghép chuỗi khi cả hai trường đều để trống
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Edge Case Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | *(để trống)* |
    | Second number | *(để trống)* |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Để trống cả hai trường First number và Second number
    4. Chọn Operation là "Concatenate"
    5. Bấm nút "Calculate"
    
    ## Expected result
    Giá trị của trường Answer (numberAnswerField) là chuỗi rỗng; ô không hiển thị ký tự nào. Trang web không bị crash hoặc sinh lỗi JavaScript. Khu vực errorMsgField không báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-008.md
    # TC-CON-008: Kiểm tra giới hạn 10 ký tự mỗi trường khi ghép chuỗi
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Boundary Value Analysis
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 1234567890 (10 ký tự) |
    | Second number | abcdefghij (10 ký tự) |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "1234567890" vào trường First number, sau đó thử nhập thêm ký tự "1"
    4. Nhập "abcdefghij" vào trường Second number, sau đó thử nhập thêm ký tự "k"
    5. Kiểm tra giá trị đang có trong hai trường nhập
    6. Chọn Operation là "Concatenate" và bấm nút "Calculate"
    
    ## Expected result
    Mỗi trường chỉ giữ 10 ký tự đầu; ký tự thứ 11 không được nhập vào. Giá trị trường Answer (numberAnswerField) là chuỗi 20 ký tự 1234567890abcdefghij, không bị cắt ngắn.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-009.md
    # TC-CON-009: Ghép chuỗi có chứa ký tự khoảng trắng (Whitespace)
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | Hello  (có space cuối) |
    | Second number |  World (có space đầu) |
    | Operation | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "Hello " vào trường First number
    4. Nhập " World" vào trường Second number
    5. Chọn Operation là "Concatenate"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer (numberAnswerField) hiển thị nguyên vẹn các khoảng trắng: Hello  World. Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-014.md
    # TC-CON-014: Kiểm tra trạng thái tự động ẩn và vô hiệu hóa của checkbox Integers only khi chọn Concatenate
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / UI & State / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Phép toán đang chọn mặc định là Add (hoặc một phép toán số học bất kỳ)
    
    ## Test data
    | Build | Prototype |
    | Operation ban đầu | Add |
    | Operation chuyển đổi | Concatenate |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Quan sát giao diện: Checkbox integerSelect và nhãn intSelectionLabel ("Integers only") đang hiển thị bình thường
    4. Tích chọn vào checkbox "Integers only"
    5. Tại dropdown selectOperationDropdown, đổi lựa chọn sang "Concatenate"
    6. Quan sát phản ứng của giao diện ngay khi vừa chọn "Concatenate"
    
    ## Expected result
    Ngay khi chọn "Concatenate", checkbox integerSelect và nhãn "Integers only" không còn hiển thị. Tùy chọn "Integers only" không thể tương tác hoặc ảnh hưởng đến phép ghép chuỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-016.md
    # TC-CON-016: Kiểm tra validation dữ liệu số trên Build 1
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: 1
    
    ## Test data
    | Build | 1 |
    | First number | abc |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "1" từ dropdown selectBuild
    3. Nhập "abc" vào trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép cộng, trường Answer không hiển thị kết quả tính. Hiển thị lỗi "Number 1 is not a number" như yêu cầu validation của phép toán số học.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-019.md
    # TC-CON-019: Bắt lỗi khi First number để trống trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | *(để trống)* |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Để trống trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép cộng; trường Answer không hiển thị kết quả tính. Hiển thị thông báo "Number 1 is not a number" tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-021.md
    # TC-CON-021: Bắt lỗi khi Second number chỉ chứa khoảng trắng trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 10 |
    | Second number |     (ba dấu cách) |
    | Operation | Multiply |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập "10" vào trường First number
    4. Nhập đúng ba dấu cách vào trường Second number
    5. Chọn Operation là "Multiply"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép nhân; trường Answer không hiển thị kết quả tính. Hiển thị thông báo "Number 2 is not a number" tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-022.md
    # TC-CON-022: Bắt lỗi khi First number chứa emoji trong phép toán số học
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Validation / Negative Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 🙂 |
    | Second number | 5 |
    | Operation | Subtract |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập emoji "🙂" vào trường First number
    4. Nhập "5" vào trường Second number
    5. Chọn Operation là "Subtract"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép trừ; trường Answer không hiển thị kết quả tính. Hiển thị thông báo "Number 1 is not a number" tại khu vực lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ git diff --check; git status --short | head -40
     D tests/test-runs/sprint-1-test-run.md
     D tests/test-runs/sprint-2-regression.md
     D tests/test-summary/traceability-matrix.md
    ?? docs/02_thiet_ke_test_cases.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re,subprocess
        root=Path('tests/test-cases/module-3-concatenate')
        fs=sorted(root.glob('TC-CON-*.md'))
        needed=['Requirement ID','Module / Test type / Technique','Preconditions','Test data','Test steps','Expected result','Status / Related bugs']
        print('files',len(fs),'sequential', [p.stem for p in fs]==[f'TC-CON-{i:03}' for i in range(1,23)])
        for p in fs:
         s=p.read_text(); hs=re.findall(r'^## (.*)$',s,re.M)
         if hs!=needed: print('BAD HEADINGS',p.name,hs)
         if not s.rstrip().endswith('Not Run / None'): print('BAD STATUS',p.name)
         if re.search(r'^\|\s*Tham số|^\|\s*:---',s,re.M): print('HAS HEADER',p.name)
         if '## Actual result' in s: print('HAS ACTUAL',p.name)
        for i in [1,2]:
         p=root/f'TC-CON-{i:03}.md'
         before=subprocess.check_output(['git','show',f'HEAD:{p.as_posix()}']).decode()
         print(p.name,'original exact:',p.read_text()==before)
        PY
    files 22 sequential True
    TC-CON-001.md original exact: True
    TC-CON-002.md original exact: True
    ✓ • 13ms

## Activity

    file changes: Completed · 2 changes
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-009.md
    @@ -14,4 +14,4 @@
     | Build | Prototype |
    -| First number | Hello  (có space cuối) |
    -| Second number |  World (có space đầu) |
    +| First number | "Hello " (có một dấu cách cuối) |
    +| Second number | " World" (có một dấu cách đầu) |
     | Operation | Concatenate |
    @@ -27,3 +27,3 @@
     ## Expected result
    -Trường Answer (numberAnswerField) hiển thị nguyên vẹn các khoảng trắng: Hello  World. Hệ thống không tự ý cắt bỏ (trim) các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
    +Trường Answer (numberAnswerField) hiển thị đúng "Hello  World" với hai dấu cách ở giữa. Hệ thống không tự ý cắt bỏ các khoảng trắng có chủ đích của người dùng khi ghép chuỗi.
     
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-cases/module-3-concatenate/TC-CON-021.md
    @@ -15,3 +15,3 @@
     | First number | 10 |
    -| Second number |     (ba dấu cách) |
    +| Second number | "   " (ba dấu cách) |
     | Operation | Multiply |

## Assistant — 2026-09-28 14:41:23 (UTC+07:00)

Mình đã chỉnh lại **toàn bộ 22 test case Module 3 theo đúng mẫu ban đầu của `TC-CON-001`**. `TC-CON-001` và `TC-CON-002` đã trở về nguyên văn bản gốc; các file còn lại dùng cùng thứ tự mục, bảng dữ liệu hai cột đơn giản và phần Expected result dạng đoạn văn.

Mình giữ các ca đã bổ sung và kiểm tra rằng mã `TC-CON-001` đến `TC-CON-022` liên tục, mỗi file đủ các mục của mẫu. Chỉ các file test case Module 3 được sửa; chưa thực hiện test run.

## User — 2026-09-28 14:42:22 (UTC+07:00)

push các test case lên giúp tôi

## Assistant — 2026-09-28 14:42:28 (UTC+07:00)

Mình sẽ kiểm tra nhánh và trạng thái Git, rồi chỉ đưa các file test case Module 3 vào commit để đẩy lên remote.

## Activity

    $ git status --short; git branch --show-current; git remote -v; git log -3 --format='%h %s'
     D tests/test-runs/sprint-2-regression.md
     D tests/test-summary/traceability-matrix.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    ?? tests/test-summary/bug-reports/
    main
    origin    https://github.com/NgBaoAnn/calculator-test (fetch)
    origin    https://github.com/NgBaoAnn/calculator-test (push)
    0a0e6da refactor(tests): organize test cases into 4 calculator modules with standardized template
    f296dab test: add skeleton test cases, test runs, traceability matrix, and issue templates
    a96c3c3 docs: remove detailed test case design document
    ✓ • 10ms

## Activity

    $ git status --porcelain=v1 --untracked-files=all | rg 'tests/test-cases/module-3-concatenate|tests/test-runs|tests/test-summary|docs/'
     D tests/test-runs/sprint-2-regression.md
     D tests/test-summary/traceability-matrix.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    ?? tests/test-summary/bug-reports/BUG-003-build-3-concatenate-treated-as-number.md
    ✓ • 12ms

## Activity

    $ find tests/test-cases/module-3-concatenate -maxdepth 1 -name 'TC-CON-*.md' -printf '%f\n' | sort; git diff --check; git diff -- tests/test-cases/module-3-concatenate/TC-CON-001.md tests/test-cases/module-3-concatenate/TC-CON-002.md
    TC-CON-001.md
    TC-CON-002.md
    TC-CON-003.md
    TC-CON-004.md
    TC-CON-005.md
    TC-CON-006.md
    TC-CON-007.md
    TC-CON-008.md
    TC-CON-009.md
    TC-CON-010.md
    TC-CON-011.md
    TC-CON-012.md
    TC-CON-013.md
    TC-CON-014.md
    TC-CON-015.md
    TC-CON-016.md
    TC-CON-017.md
    TC-CON-018.md
    TC-CON-019.md
    TC-CON-020.md
    TC-CON-021.md
    TC-CON-022.md
    ✓ • 23ms

## Activity

    $ git fetch origin
    From https://github.com/NgBaoAnn/calculator-test
       0a0e6da..eb22583  main       -> origin/main
    ✓ • 1.11s

## Activity

    $ git ls-tree -r --name-only origin/main tests/test-cases/module-3-concatenate; git ls-tree -r --name-only origin/main tests/test-runs tests/test-summary docs
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    docs/01_phan_chia_module.md
    tests/test-runs/sprint-1-test-run.md
    tests/test-runs/sprint-2-regression.md
    tests/test-summary/traceability-matrix.md
    ✓ • 0ms

## Activity

    $ git log --oneline --decorate main..origin/main; git diff --name-status main..origin/main; git status --short
    eb22583 (origin/main, origin/HEAD) test(module-1): add test cases TC-ARI-003 to TC-ARI-018 and update traceability matrix
    A    tests/test-cases/module-1-arithmetic/TC-ARI-003.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-004.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-005.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-006.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-007.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-008.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-009.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-010.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-011.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-012.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-013.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-014.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-015.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-016.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-017.md
    A    tests/test-cases/module-1-arithmetic/TC-ARI-018.md
    M    tests/test-summary/traceability-matrix.md
     D tests/test-summary/traceability-matrix.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    ?? tests/test-summary/bug-reports/
    ✓ • 0ms

## Assistant — 2026-09-28 14:43:02 (UTC+07:00)

Remote `main` vừa có thêm commit của Module 1. Mình sẽ dùng một worktree tạm từ trạng thái remote mới nhất để đẩy riêng các test case Module 3, tránh đưa các thay đổi khác trong thư mục làm việc của bạn vào commit.

## Activity

    $ git worktree add --detach /tmp/calculator-test-module3-push origin/main
    Preparing worktree (detached HEAD eb22583)
    HEAD is now at eb22583 test(module-1): add test cases TC-ARI-003 to TC-ARI-018 and update traceability matrix
    ✓ • 0ms

## Activity

    $ cp tests/test-cases/module-3-concatenate/TC-CON-{003..022}.md /tmp/calculator-test-module3-push/tests/test-cases/module-3-concatenate/
    ✓ • 0ms

## Activity

    $ git add tests/test-cases/module-3-concatenate/TC-CON-{003..022}.md
    fatal: Unable to create '/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/.git/worktrees/calculator-test-module3-push/index.lock': Read-only file system
    ✗ (128) • 35ms

## User — 2026-09-28 14:44:07 (UTC+07:00)

bạn pull về trước đi xong push lên ko cần tạo worktree

## Assistant — 2026-09-28 14:44:15 (UTC+07:00)

Mình sẽ làm theo cách bạn chọn: pull nhánh `main` về ngay trong repository này, sau đó commit riêng các test case Module 3 và push. Mình sẽ giữ nguyên các thay đổi khác đang có trong thư mục.

## Activity

    $ git pull --ff-only origin main
    error: cannot open '.git/FETCH_HEAD': Read-only file system
    ✗ (1) • 20ms

## Activity

    $ git pull --ff-only origin main
    From https://github.com/NgBaoAnn/calculator-test
     * branch            main       -> FETCH_HEAD
       eb22583..7498ac1  main       -> origin/main
    Updating 0a0e6da..7498ac1
    Fast-forward
     tests/test-cases/module-1-arithmetic/TC-ARI-003.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-004.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-005.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-006.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-007.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-008.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-009.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-010.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-011.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-012.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-013.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-014.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-015.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-016.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-017.md | 31 ++++++++++++++++
     tests/test-cases/module-1-arithmetic/TC-ARI-018.md | 31 ++++++++++++++++
     tests/test-cases/module-2-division/README.md       | 41 ++++++++++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-003.md   | 29 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-004.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-005.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-006.md   | 31 ++++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-007.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-008.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-009.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-010.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-011.md   | 27 ++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-012.md   | 28 +++++++++++++++
     tests/test-cases/module-2-division/TC-DIV-013.md   | 28 +++++++++++++++
     tests/test-summary/traceability-matrix.md          |  8 ++---
     29 files changed, 852 insertions(+), 4 deletions(-)
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-003.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-004.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-005.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-006.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-007.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-008.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-009.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-010.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-011.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-012.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-013.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-014.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-015.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-016.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-017.md
     create mode 100644 tests/test-cases/module-1-arithmetic/TC-ARI-018.md
     create mode 100644 tests/test-cases/module-2-division/README.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-003.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-004.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-005.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-006.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-007.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-008.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-009.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-010.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-011.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-012.md
     create mode 100644 tests/test-cases/module-2-division/TC-DIV-013.md
    ✓ • 1.84s

## Activity

    $ git status --short; git log -1 --format='%h %s'; git diff --check
    ?? tests/test-cases/module-3-concatenate/TC-CON-003.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-004.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-005.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-006.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-007.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-008.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-009.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-010.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-011.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-012.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-013.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-014.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-015.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-016.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-017.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-018.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-019.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-020.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-021.md
    ?? tests/test-cases/module-3-concatenate/TC-CON-022.md
    7498ac1 test: merge expanded arithmetic and division cases
    ✓ • 21ms

## Activity

    $ git add tests/test-cases/module-3-concatenate/TC-CON-{003..022}.md
    ✓ • 0ms

## Assistant — 2026-09-28 14:44:53 (UTC+07:00)

Pull đã hoàn tất. Mình đã stage đúng 20 file mới `TC-CON-003` đến `TC-CON-022`; hai file gốc `001` và `002` không có thay đổi. Mình sẽ kiểm tra lại nội dung đã stage rồi tạo commit và push.

## Activity

    $ git diff --cached --check; git diff --cached --name-only; git diff --cached --stat
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
    tests/test-cases/module-3-concatenate/TC-CON-019.md
    tests/test-cases/module-3-concatenate/TC-CON-020.md
    tests/test-cases/module-3-concatenate/TC-CON-021.md
    tests/test-cases/module-3-concatenate/TC-CON-022.md
     .../test-cases/module-3-concatenate/TC-CON-003.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-004.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-005.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-006.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-007.md  | 30 +++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-008.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-009.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-010.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-011.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-012.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-013.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-014.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-015.md  | 30 +++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-016.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-017.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-018.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-019.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-020.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-021.md  | 31 ++++++++++++++++++++++
     .../test-cases/module-3-concatenate/TC-CON-022.md  | 31 ++++++++++++++++++++++
     20 files changed, 618 insertions(+)
    ✓ • 47ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        root=Path('tests/test-cases/module-3-concatenate')
        files=sorted(root.glob('TC-CON-*.md'))
        heads=['Requirement ID','Module / Test type / Technique','Preconditions','Test data','Test steps','Expected result','Status / Related bugs']
        print('total:',len(files))
        print('ids:',files[0].stem,'to',files[-1].stem)
        print('sequential:',[p.stem for p in files]==[f'TC-CON-{i:03}' for i in range(1,23)])
        print('template complete:',all(re.findall(r'^## (.*)$',p.read_text(),re.M)==heads for p in files))
        PY
    total: 22
    ids: TC-CON-001 to TC-CON-022
    sequential: True
    template complete: True
    ✓ • 79ms

## Activity

    $ git commit -m "test(module-3): add concatenate and validation test cases"
    fatal: Unable to create '/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/.git/index.lock': Read-only file system
    ✗ (128) • 6ms

## Activity

    $ git commit -m "test(module-3): add concatenate and validation test cases"
    [main 67a2da5] test(module-3): add concatenate and validation test cases
     20 files changed, 618 insertions(+)
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-003.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-004.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-005.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-006.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-007.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-008.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-009.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-010.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-011.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-012.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-013.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-014.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-015.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-016.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-017.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-018.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-019.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-020.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-021.md
     create mode 100644 tests/test-cases/module-3-concatenate/TC-CON-022.md
    ✓ • 0ms

## Activity

    $ git push origin main
    fatal: unable to access 'https://github.com/NgBaoAnn/calculator-test/': Could not resolve host: github.com
    ✗ (128) • 29ms

## Activity

    $ git push origin main
    remote: Permission to NgBaoAnn/calculator-test.git denied to vinh-code.
    fatal: unable to access 'https://github.com/NgBaoAnn/calculator-test/': The requested URL returned error: 403
    ✗ (128) • 947ms

## Assistant — 2026-09-28 14:45:32 (UTC+07:00)

Commit `67a2da5` đã được tạo đúng phạm vi Module 3. Push qua HTTPS bị GitHub từ chối vì tài khoản hiện dùng (`vinh-code`) không có quyền ghi vào repository `NgBaoAnn/calculator-test`. Mình sẽ kiểm tra xem SSH hoặc tài khoản GitHub khác đã cấu hình có quyền đẩy commit này không.

## Activity

    $ git status --short; git log -1 --format='%h %s'; git remote -v; git worktree list
    67a2da5 test(module-3): add concatenate and validation test cases
    origin    https://github.com/NgBaoAnn/calculator-test (fetch)
    origin    https://github.com/NgBaoAnn/calculator-test (push)
    /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test  67a2da5 [main]
    /tmp/calculator-test-module3-push                                          eb22583 (detached HEAD)
    ✓ • 48ms

## Activity

    $ gh auth status
    github.com
      X Failed to log in to github.com account vinh-code (/home/pham-quang-vinh/.config/gh/hosts.yml)
      - Active account: true
      - The token in /home/pham-quang-vinh/.config/gh/hosts.yml is invalid.
      - To re-authenticate, run: gh auth login -h github.com
      - To forget about this account, run: gh auth logout -h github.com -u vinh-code
    ✓ • 121ms

## Activity

    $ ssh -T git@github.com
    git@github.com: Permission denied (publickey).
    ✗ (255) • 2.91s

## Activity

    $ git worktree remove /tmp/calculator-test-module3-push
    fatal: '/tmp/calculator-test-module3-push' contains modified or untracked files, use --force to delete it
    ✗ (128) • 38ms

## Activity

    $ git worktree remove --force /tmp/calculator-test-module3-push
    ✓ • 0ms

## Activity

    $ git status --short --branch; git worktree list; git log -1 --format='%h %s'; git rev-list --count origin/main..main
    ## main...origin/main [ahead 1]
    /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test  67a2da5 [main]
    67a2da5 test(module-3): add concatenate and validation test cases
    1
    ✓ • 0ms

## Assistant — 2026-09-28 14:46:15 (UTC+07:00)

Mình đã pull `main` và tạo commit `67a2da5` chỉ gồm 20 test case mới của Module 3 (`TC-CON-003` đến `TC-CON-022`). Repository hiện sạch, nhánh local đang đi trước remote 1 commit.

**Push chưa thành công:** GitHub trả lỗi `403` vì tài khoản đang dùng (`vinh-code`) không có quyền ghi vào `NgBaoAnn/calculator-test`. Bạn cần cấp quyền ghi cho tài khoản này hoặc đăng nhập bằng tài khoản có quyền; sau đó mình có thể push commit đã tạo.

## User — 2026-09-28 14:46:26 (UTC+07:00)

tôi có quyền r á push dùm tui

## Assistant — 2026-09-28 14:46:34 (UTC+07:00)

Mình sẽ thử push lại commit `67a2da5` bằng quyền hiện tại và kiểm tra kết quả trên remote.

## Activity

    $ git push origin main
    fatal: unable to access 'https://github.com/NgBaoAnn/calculator-test/': Failed to connect to github.com port 443 after 133549 ms: Couldn't connect to server
    ✗ (128) • 2m 13s

## User — 2026-09-28 14:53:45 (UTC+07:00)

hãy review lại tất cả tc giúp tôi xem đã theo đúng chuẩn form cùng form với nhau giúp tôi

## User — 2026-09-28 14:56:29 (UTC+07:00)

hãy sửa trong test case không để mặc định là prototype vì cho 9 build lận hãy thiết kế lại dùng cho tất cả các build

## Assistant — 2026-09-28 14:56:48 (UTC+07:00)

Mình sẽ rà toàn bộ test case và chuẩn hóa phần Build để mỗi ca có thể dùng khi chạy trên Prototype và các Build 1–9. Mình cũng sẽ kiểm tra form giữa các module và chỉ sửa trong `tests/test-cases/`.

## Activity

    $ rg -n 'Prototype|Build [0-9]|Builds|selectBuild|## Test data|## Preconditions|## Expected result' tests/test-cases --glob '*.md' | head -220
    tests/test-cases/module-3-concatenate/TC-CON-001.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-001.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-001.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-001.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-001.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-001.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-022.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-022.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-022.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-022.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-022.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-022.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-017.md:1:# TC-CON-017: Kiểm tra phép Concatenate trên Build 2
    tests/test-cases/module-3-concatenate/TC-CON-017.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-017.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-017.md:21:2. Chọn Build "2" từ dropdown selectBuild
    tests/test-cases/module-3-concatenate/TC-CON-017.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-002.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-002.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-002.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-002.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-002.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-002.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-018.md:1:# TC-CON-018: Kiểm tra ghép chuỗi chữ trên Build 3
    tests/test-cases/module-3-concatenate/TC-CON-018.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-018.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-018.md:21:2. Chọn Build "3" từ dropdown selectBuild
    tests/test-cases/module-3-concatenate/TC-CON-018.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-014.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-014.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-014.md:14:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-014.md:15:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-014.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-014.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-009.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-009.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-009.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-009.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-009.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-009.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-020.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-020.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-020.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-020.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-020.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-020.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-007.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-007.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-007.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-007.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-007.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-007.md:26:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-003.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-003.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-003.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-003.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-003.md:21:2. Chọn Build "Prototype" từ dropdown
    tests/test-cases/module-3-concatenate/TC-CON-003.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-013.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-013.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-013.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-013.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-013.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-013.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-015.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-015.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-015.md:14:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-015.md:15:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-015.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-015.md:26:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-008.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-008.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-008.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-008.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-008.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-008.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-010.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-010.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-010.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-010.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-010.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-010.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-016.md:1:# TC-CON-016: Kiểm tra validation dữ liệu số trên Build 1
    tests/test-cases/module-3-concatenate/TC-CON-016.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-016.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-016.md:21:2. Chọn Build "1" từ dropdown selectBuild
    tests/test-cases/module-3-concatenate/TC-CON-016.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-004.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-004.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-004.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-004.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-004.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-004.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-019.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-019.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-019.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-019.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-019.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-019.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-012.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-012.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-012.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-012.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-012.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-012.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-006.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-006.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-006.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-006.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-006.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-006.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-021.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-021.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-021.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-021.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-021.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-021.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-011.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-011.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-011.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-011.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-011.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-011.md:27:## Expected result
    tests/test-cases/module-3-concatenate/TC-CON-005.md:9:## Preconditions
    tests/test-cases/module-3-concatenate/TC-CON-005.md:11:- Chọn Build: Prototype
    tests/test-cases/module-3-concatenate/TC-CON-005.md:13:## Test data
    tests/test-cases/module-3-concatenate/TC-CON-005.md:14:| Build | Prototype |
    tests/test-cases/module-3-concatenate/TC-CON-005.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-3-concatenate/TC-CON-005.md:27:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md:10:- Mở trang, chọn Prototype và nhấn Clear.
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md:23:## Expected result
    tests/test-cases/module-2-division/TC-DIV-003.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-003.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-003.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-003.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-003.md:20:1. Chọn Build "Prototype".
    tests/test-cases/module-2-division/TC-DIV-003.md:25:## Expected result
    tests/test-cases/module-2-division/TC-DIV-007.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-007.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-007.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-007.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-007.md:20:1. Chọn Build "Prototype".
    tests/test-cases/module-2-division/TC-DIV-007.md:24:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md:10:- Mở trang, chọn Prototype và nhấn Clear.
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md:22:## Expected result
    tests/test-cases/module-2-division/TC-DIV-008.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-008.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-008.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-008.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-008.md:20:1. Chọn Build "Prototype".
    tests/test-cases/module-2-division/TC-DIV-008.md:24:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md:10:- Mở trang, chọn Prototype và nhấn Clear.
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md:22:## Expected result
    tests/test-cases/module-2-division/TC-DIV-013.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-013.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-013.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-013.md:16:| Prototype | 9999999999 | 1 | Divide |
    tests/test-cases/module-2-division/TC-DIV-013.md:19:1. Chọn Build "Prototype".
    tests/test-cases/module-2-division/TC-DIV-013.md:24:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:1:# TC-BLD-006: Build 6 chặn phép chia cho 0
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:7:Module 4 - Builds / Regression / Error Guessing
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:10:- Mở trang; chạy độc lập trên Prototype và Build 6, tải lại trang trước mỗi lượt.
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:21:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:23:- Ghi nhận lỗi nếu Build 6 trả về một giá trị số không hợp lệ.
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:24:- Trạng thái chờ của Prototype khi gặp lỗi được kiểm riêng ở `TC-FMT-006`.
    tests/test-cases/module-2-division/TC-DIV-002.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-002.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-002.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-002.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-002.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-2-division/TC-DIV-002.md:27:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md:10:- Mở trang, chọn Prototype và nhấn Clear.
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md:22:## Expected result
    tests/test-cases/module-2-division/TC-DIV-009.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-009.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-009.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-009.md:20:1. Chọn Build "Prototype", nhập dữ liệu ở giai đoạn "Tạo lỗi" và bấm "Calculate".
    tests/test-cases/module-2-division/TC-DIV-009.md:24:## Expected result
    tests/test-cases/module-2-division/README.md:39:- Chạy toàn bộ 9 test case trên Build `Prototype`.
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md:10:- Mở https://testsheepnz.github.io/BasicCalculator.html và chọn Prototype.
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md:13:## Test data
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md:24:## Expected result
    tests/test-cases/module-2-division/TC-DIV-001.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-001.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-001.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-001.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-001.md:21:2. Chọn Build "Prototype"
    tests/test-cases/module-2-division/TC-DIV-001.md:27:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:1:# TC-BLD-002: Build 2 giữ đúng ý nghĩa Add và Concatenate
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:7:Module 4 - Builds / Regression / Decision Table
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:9:## Preconditions
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:10:- Mở trang; chạy độc lập trên Prototype và Build 2, tải lại trang trước mỗi lượt.
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:12:## Test data
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:21:3. Đối chiếu với Prototype và cột Answer chuẩn.
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:23:## Expected result
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:25:- Ghi nhận lỗi nếu Build 2 đảo kết quả hai phép toán.
    tests/test-cases/module-2-division/TC-DIV-004.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-004.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-004.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-004.md:14:| Build | Prototype |
    tests/test-cases/module-2-division/TC-DIV-004.md:20:1. Chọn Build "Prototype".
    tests/test-cases/module-2-division/TC-DIV-004.md:24:## Expected result
    tests/test-cases/module-2-division/TC-DIV-006.md:9:## Preconditions
    tests/test-cases/module-2-division/TC-DIV-006.md:11:- Chọn Build: Prototype
    tests/test-cases/module-2-division/TC-DIV-006.md:13:## Test data
    tests/test-cases/module-2-division/TC-DIV-006.md:23:1. Chọn Build "Prototype" và Operation "Divide".
    tests/test-cases/module-2-division/TC-DIV-006.md:27:## Expected result
    tests/test-cases/module-1-arithmetic/TC-ARI-006.md:9:## Preconditions
    tests/test-cases/module-1-arithmetic/TC-ARI-006.md:11:- Chọn Build: Prototype
    ✓ • 0ms

## Activity

    $ git status --short --branch; git log -2 --format='%h %s'; git remote -v; find tests/test-cases -type f -name 'TC-*.md' | sort | wc -l; find tests/test-cases -maxdepth 2 -type f | sort | head -100
    ## main...origin/main
    7db8525 test(module-4): add formatting and build regression cases
    67a2da5 test(module-3): add concatenate and validation test cases
    origin    https://github.com/NgBaoAnn/calculator-test (fetch)
    origin    https://github.com/NgBaoAnn/calculator-test (push)
    69
    tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    tests/test-cases/module-1-arithmetic/TC-ARI-003.md
    tests/test-cases/module-1-arithmetic/TC-ARI-004.md
    tests/test-cases/module-1-arithmetic/TC-ARI-005.md
    tests/test-cases/module-1-arithmetic/TC-ARI-006.md
    tests/test-cases/module-1-arithmetic/TC-ARI-007.md
    tests/test-cases/module-1-arithmetic/TC-ARI-008.md
    tests/test-cases/module-1-arithmetic/TC-ARI-009.md
    tests/test-cases/module-1-arithmetic/TC-ARI-010.md
    tests/test-cases/module-1-arithmetic/TC-ARI-011.md
    tests/test-cases/module-1-arithmetic/TC-ARI-012.md
    tests/test-cases/module-1-arithmetic/TC-ARI-013.md
    tests/test-cases/module-1-arithmetic/TC-ARI-014.md
    tests/test-cases/module-1-arithmetic/TC-ARI-015.md
    tests/test-cases/module-1-arithmetic/TC-ARI-016.md
    tests/test-cases/module-1-arithmetic/TC-ARI-017.md
    tests/test-cases/module-1-arithmetic/TC-ARI-018.md
    tests/test-cases/module-2-division/README.md
    tests/test-cases/module-2-division/TC-DIV-001.md
    tests/test-cases/module-2-division/TC-DIV-002.md
    tests/test-cases/module-2-division/TC-DIV-003.md
    tests/test-cases/module-2-division/TC-DIV-004.md
    tests/test-cases/module-2-division/TC-DIV-005.md
    tests/test-cases/module-2-division/TC-DIV-006.md
    tests/test-cases/module-2-division/TC-DIV-007.md
    tests/test-cases/module-2-division/TC-DIV-008.md
    tests/test-cases/module-2-division/TC-DIV-009.md
    tests/test-cases/module-2-division/TC-DIV-010.md
    tests/test-cases/module-2-division/TC-DIV-011.md
    tests/test-cases/module-2-division/TC-DIV-012.md
    tests/test-cases/module-2-division/TC-DIV-013.md
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
    tests/test-cases/module-3-concatenate/TC-CON-019.md
    tests/test-cases/module-3-concatenate/TC-CON-020.md
    tests/test-cases/module-3-concatenate/TC-CON-021.md
    tests/test-cases/module-3-concatenate/TC-CON-022.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-001.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-003.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-004.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-005.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-007.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-008.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    ✓ • 0ms

## Activity

    Opened https://testsheepnz.github.io/BasicCalculator.html

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        for p in sorted(Path('tests/test-cases').glob('**/TC-*.md')):
         s=p.read_text()
         headings='|'.join(re.findall(r'^## (.*)$',s,re.M))
         build=[x.strip() for x in s.splitlines() if 'Build' in x or 'Prototype' in x]
         print(p.name, headings, ' || '.join(build[:4]))
        PY
    TC-ARI-001.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-002.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-ARI-003.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-004.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-005.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-006.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-007.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-008.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-009.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-010.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-011.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-012.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-013.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-014.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-015.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-016.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-017.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-ARI-018.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-DIV-001.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-DIV-002.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-DIV-003.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 1. Chọn Build "Prototype".
    TC-DIV-004.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 1. Chọn Build "Prototype".
    TC-DIV-005.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 1. Chọn Build "Prototype".
    TC-DIV-006.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || 1. Chọn Build "Prototype" và Operation "Divide".
    TC-DIV-007.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 1. Chọn Build "Prototype".
    TC-DIV-008.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 1. Chọn Build "Prototype".
    TC-DIV-009.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || 1. Chọn Build "Prototype", nhập dữ liệu ở giai đoạn "Tạo lỗi" và bấm "Calculate".
    TC-DIV-010.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | First number | Second number | Operation | || | Prototype | 7.5 | 2.5 | Divide | || 1. Chọn Build "Prototype".
    TC-DIV-011.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | First number | Second number | Operation | || | Prototype | 50 | -0 | Divide | || 1. Chọn Build "Prototype".
    TC-DIV-012.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | First number | Second number | Operation | || | Prototype | 1 | 8 | Divide | || 1. Chọn Build "Prototype".
    TC-DIV-013.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | First number | Second number | Operation | || | Prototype | 9999999999 | 1 | Divide | || 1. Chọn Build "Prototype".
    TC-CON-001.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-002.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-003.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype" từ dropdown
    TC-CON-004.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-005.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-006.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-007.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-008.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-009.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-010.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-011.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-012.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-013.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-014.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-015.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-016.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-CON-016: Kiểm tra validation dữ liệu số trên Build 1 || - Chọn Build: 1 || | Build | 1 | || 2. Chọn Build "1" từ dropdown selectBuild
    TC-CON-017.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-CON-017: Kiểm tra phép Concatenate trên Build 2 || - Chọn Build: 2 || | Build | 2 | || 2. Chọn Build "2" từ dropdown selectBuild
    TC-CON-018.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-CON-018: Kiểm tra ghép chuỗi chữ trên Build 3 || - Chọn Build: 3 || | Build | 3 | || 2. Chọn Build "3" từ dropdown selectBuild
    TC-CON-019.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-020.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-021.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-CON-022.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Chọn Build: Prototype || | Build | Prototype | || 2. Chọn Build "Prototype"
    TC-BLD-001.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-001: Build 1 phải từ chối đầu vào không phải số || Module 4 - Builds / Regression / Error Guessing || - Mở trang; chạy độc lập trên Prototype và Build 1, tải lại trang trước mỗi lượt. || - Prototype: hiện `Number 1 is not a number`, không tạo kết quả mới.
    TC-BLD-002.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-002: Build 2 giữ đúng ý nghĩa Add và Concatenate || Module 4 - Builds / Regression / Decision Table || - Mở trang; chạy độc lập trên Prototype và Build 2, tải lại trang trước mỗi lượt. || 3. Đối chiếu với Prototype và cột Answer chuẩn.
    TC-BLD-003.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-003: Build 3 không kiểm tra kiểu số khi Concatenate || Module 4 - Builds / Regression / Equivalence Partitioning || - Mở trang; chạy độc lập trên Prototype và Build 3, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 3 báo `is not a number`.
    TC-BLD-004.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-004: Build 4 cho phép bỏ chọn Integers only || Module 4 - Builds / Regression / State Transition || - Mở trang; chạy độc lập trên Prototype và Build 4, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 4 khóa checkbox hoặc bắt buộc hiển thị `2`.
    TC-BLD-005.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-005: Build 5 cho phép Clear trước khi Calculate || Module 4 - Builds / Regression / State Transition || - Mở trang; chạy độc lập trên Prototype và Build 5, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 5 vô hiệu hóa Clear. Thử trước Calculate để tránh việc nút được bật lại sau xử lý.
    TC-BLD-006.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-006: Build 6 chặn phép chia cho 0 || Module 4 - Builds / Regression / Error Guessing || - Mở trang; chạy độc lập trên Prototype và Build 6, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 6 trả về một giá trị số không hợp lệ.
    TC-BLD-007.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-007: Build 7 dùng First number được nhập thay vì Answer cũ || Module 4 - Builds / Regression / State Transition || - Mở trang; chạy độc lập trên Prototype và Build 7, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 7 dùng Answer của lượt trước hoặc Answer rỗng làm toán hạng thứ nhất.
    TC-BLD-008.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-008: Build 8 giữ đúng thứ tự hai toán hạng || Module 4 - Builds / Regression / Equivalence Partitioning || - Mở trang; chạy độc lập trên Prototype và Build 8, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 8 cho `-5`, dấu hiệu hai toán hạng bị đảo.
    TC-BLD-009.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs # TC-BLD-009: Build 9 hiển thị và cho sử dụng đủ các phần tử chính || Module 4 - Builds / Regression / UI State || - Mở trang; quan sát trên Prototype và Build 9, tải lại trang trước mỗi lượt. || - Ghi nhận lỗi nếu Build 9 ẩn/vô hiệu hóa Second number hoặc Calculate.
    TC-FMT-001.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở https://testsheepnz.github.io/BasicCalculator.html và chọn Prototype.
    TC-FMT-002.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang và chọn Prototype.
    TC-FMT-003.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang, chọn Prototype và nhấn Clear.
    TC-FMT-004.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang, chọn Prototype và nhấn Clear.
    TC-FMT-005.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang, chọn Prototype và nhấn Clear.
    TC-FMT-006.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang, chọn Prototype và nhấn Clear.
    TC-FMT-007.md Requirement ID|Module / Test type / Technique|Preconditions|Test data|Test steps|Expected result|Status / Related bugs - Mở trang, chọn Prototype và nhấn Clear.
    ✓ • 0ms

## Activity

    $ curl -fsSL https://testsheepnz.github.io/BasicCalculator.html -o /tmp/calculator-basic.html; rg -n 'selectBuild|Prototype|option|Build 9|value="9"' /tmp/calculator-basic.html | head -70
    65:                <p><i>There are multiple builds available. <b>Prototype</b> works perfectly, whereas builds 1-8 have problems. A good set of tests should help identify what the problems are.</i></p>
    74:                      <select class="element select medium" id="selectBuild" data-testid="selectBuild" name="selectBuild" onchange="buildChanged(this.preset)">
    75:                          <option value="0" >Prototype</option>
    76:                          <option value="1" >1</option>
    77:                          <option value="2" >2</option>
    78:                          <option value="3" >3</option>
    79:                          <option value="4" >4</option>
    80:                          <option value="5" >5</option>
    81:                          <option value="6" >6</option>
    82:                          <option value="7" >7</option>
    83:                          <option value="8" >8</option>
    84:                          <option value="9" >9</option>
    129:                            <option value="0" >Add</option>
    130:                            <option value="1" >Subtract</option>
    131:                            <option value="2" >Multiply</option>
    132:                            <option value="3" >Divide</option>
    133:                            <option value="4" >Concatenate</option>
    447:        selectedBuild = document.getElementById('selectBuild').value;
    ✓ • 1.51s

## Assistant — 2026-09-28 14:57:26 (UTC+07:00)

Trang có lựa chọn Prototype và Build 1–9, dù phần giới thiệu trên trang vẫn ghi 1–8. Mình sẽ thiết kế các ca chức năng chạy lặp cho từng Build 1–9; với các ca đang gắn riêng một Build, mình sẽ giữ mục tiêu kiểm thử nhưng chuyển thành kịch bản có thể dùng trên mọi Build.

## Activity

    $ for f in tests/test-cases/module-2-division/TC-DIV-{006,009,010,011,012,013}.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-2-division/TC-DIV-006.md
    # TC-DIV-006: Chia với toán hạng âm
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Lần chạy | First number | Second number | Expected Answer |
    | :---: | ---: | ---: | ---: |
    | 1 | -12 | 3 | -4 |
    | 2 | -12 | -3 | 4 |
    | 3 | 12 | -3 | -4 |
    
    Operation cho cả ba lần chạy: `Divide`.
    
    ## Test steps
    1. Chọn Build "Prototype" và Operation "Divide".
    2. Lần lượt nhập từng cặp dữ liệu trong bảng và bấm "Calculate".
    3. Đối chiếu Answer với cột Expected Answer sau mỗi lần chạy.
    
    ## Expected result
    Mỗi lần chạy trả về đúng dấu và giá trị theo bảng; không có thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-009.md
    # TC-DIV-009: Xóa thông báo lỗi khi tính hợp lệ sau chia cho 0
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / State Transition / State Transition Testing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Giai đoạn | First number | Second number | Operation |
    | :--- | ---: | ---: | :--- |
    | Tạo lỗi | 50 | 0 | Divide |
    | Phục hồi | 50 | 5 | Divide |
    
    ## Test steps
    1. Chọn Build "Prototype", nhập dữ liệu ở giai đoạn "Tạo lỗi" và bấm "Calculate".
    2. Xác nhận errorMsgField hiển thị "Divide by zero error!".
    3. Thay Second number bằng "5" và bấm "Calculate" lần nữa.
    
    ## Expected result
    Sau bước 1, thông báo lỗi chia cho 0 xuất hiện. Sau bước 3, Answer hiển thị "10" và errorMsgField được xóa/ẩn; thông báo lỗi cũ không còn hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-010.md
    # TC-DIV-010: Chia hai toán hạng thập phân
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Checkbox Integers only không được chọn
    
    ## Test data
    | Build | First number | Second number | Operation |
    | :--- | ---: | ---: | :--- |
    | Prototype | 7.5 | 2.5 | Divide |
    
    ## Test steps
    1. Chọn Build "Prototype".
    2. Nhập "7.5" vào First number và "2.5" vào Second number.
    3. Chọn "Divide" và bấm "Calculate".
    
    ## Expected result
    Answer hiển thị "3"; không xuất hiện lỗi và không tự động làm tròn ngoài yêu cầu.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-011.md
    # TC-DIV-011: Chặn mẫu số âm 0
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Negative / Error Guessing
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | First number | Second number | Operation |
    | :--- | ---: | ---: | :--- |
    | Prototype | 50 | -0 | Divide |
    
    ## Test steps
    1. Chọn Build "Prototype".
    2. Nhập "50" vào First number và "-0" vào Second number.
    3. Chọn "Divide" và bấm "Calculate".
    
    ## Expected result
    Hệ thống coi `-0` là mẫu số bằng 0: không hiển thị `Infinity` hoặc `-Infinity`, đồng thời errorMsgField hiển thị chính xác "Divide by zero error!".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-012.md
    # TC-DIV-012: Kiểm tra thương nhỏ hơn 1
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    - Checkbox Integers only không được chọn
    
    ## Test data
    | Build | First number | Second number | Operation |
    | :--- | ---: | ---: | :--- |
    | Prototype | 1 | 8 | Divide |
    
    ## Test steps
    1. Chọn Build "Prototype".
    2. Nhập "1" vào First number và "8" vào Second number.
    3. Chọn "Divide" và bấm "Calculate".
    
    ## Expected result
    Answer hiển thị "0.125", không bị ép thành "0" và không có thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-013.md
    # TC-DIV-013: Chia dữ liệu ở giới hạn 10 ký tự
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Boundary / Boundary Value Analysis (BVA)
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | First number | Second number | Operation |
    | :--- | ---: | ---: | :--- |
    | Prototype | 9999999999 | 1 | Divide |
    
    ## Test steps
    1. Chọn Build "Prototype".
    2. Nhập đúng 10 ký tự "9999999999" vào First number.
    3. Nhập "1" vào Second number, chọn "Divide" và bấm "Calculate".
    4. Thử nhập thêm ký tự thứ 11 vào First number.
    
    ## Expected result
    Answer hiển thị "9999999999". Trường First number không nhận ký tự thứ 11 do giới hạn `maxlength=10`; không có lỗi chia.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-1-arithmetic/TC-ARI-{001,002,018}.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    # TC-ARI-001: Thực hiện phép cộng hai số nguyên dương hợp lệ
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 25 |
    | Second number | 15 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype" từ dropdown
    3. Nhập "25" vào trường First number
    4. Nhập "15" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả chính xác là "40". Không có thông báo lỗi hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    # TC-ARI-002: Kiểm tra biên độ dài tối đa 10 chữ số cho trường nhập liệu
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Boundary Value / Boundary Value Analysis (BVA)
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 9999999999 |
    | Second number | 1 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype"
    3. Nhập số có đúng 10 chữ số "9999999999" vào ô First number
    4. Thử gõ thêm ký tự thứ 11 vào ô First number
    5. Nhập "1" vào ô Second number
    6. Chọn Operation là "Add" và bấm nút "Calculate"
    
    ## Expected result
    Ô First number chỉ cho phép nhập tối đa 10 ký tự (không thể nhập ký tự thứ 11 do maxlength=10). Sau khi bấm Calculate, trường Answer hiển thị kết quả là "10000000000".
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-1-arithmetic/TC-ARI-018.md
    # TC-ARI-018: Kiểm tra hiển thị kết quả phép tính nhân vượt quá 10 chữ số
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Boundary Value / Boundary Value Analysis (BVA)
    
    ## Preconditions
    - Người dùng đã truy cập trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chọn Build: Prototype
    
    ## Test data
    | Build | Prototype |
    | First number | 9999999999 |
    | Second number | 2 |
    | Operation | Multiply |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build "Prototype" từ dropdown
    3. Nhập số cực đại 10 chữ số "9999999999" vào ô First number
    4. Nhập "2" vào ô Second number
    5. Chọn Operation là "Multiply"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị đầy đủ và chính xác kết quả tính toán là "19999999998", không bị cắt ngắn chuỗi hay tràn ô hiển thị. Không có thông báo lỗi hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-4-formatting-builds/TC-FMT-*.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    # TC-FMT-001: Integers only cắt phần thập phân khi được chọn trước Calculate
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Mở https://testsheepnz.github.io/BasicCalculator.html và chọn Prototype.
    - Nhấn Clear để Answer rỗng và Integers only bỏ chọn.
    
    ## Test data
    | First number | Second number | Operation | Integers only | Kết quả mong đợi |
    | --- | --- | --- | --- | --- |
    | 5 | 2 | Divide | Checked | 2 |
    | -5 | 2 | Divide | Checked | -2 |
    
    ## Test steps
    1. Với từng dòng dữ liệu, nhập hai số, chọn Divide và tích Integers only.
    2. Nhấn Calculate; chờ `Calculating ...` biến mất và Answer hiện lại.
    3. Đọc Answer; nhấn Clear trước khi thử dòng tiếp theo.
    
    ## Expected result
    - Answer khớp cột kết quả mong đợi, không có thông báo lỗi.
    - Phần thập phân bị cắt về 0; đây không phải làm tròn tới số nguyên gần nhất.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
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
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
    # TC-FMT-003: Bật và tắt Integers only sau khi đã có kết quả
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / UI & Event / State Transition
    
    ## Preconditions
    - Mở trang, chọn Prototype và nhấn Clear.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | 5 | 2 | Divide |
    
    ## Test steps
    1. Nhập dữ liệu và nhấn Calculate khi Integers only chưa chọn.
    2. Chờ Answer hiện `2.5`; tích Integers only mà không nhấn Calculate lần nữa.
    3. Quan sát Answer; bỏ tích Integers only và quan sát lại.
    
    ## Expected result
    - Ban đầu Answer là `2.5`.
    - Tích checkbox đổi Answer ngay thành `2`; bỏ tích đổi ngay lại thành `2.5`.
    - Hai đầu vào và phép toán không đổi; không xuất hiện thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
    # TC-FMT-004: Calculate hiển thị trạng thái xử lý và khóa nút trong lúc tính
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / UI & Event / State Transition
    
    ## Preconditions
    - Mở trang, chọn Prototype và nhấn Clear.
    
    ## Test data
    | First number | Second number | Operation | Answer |
    | --- | --- | --- | --- |
    | 20 | 30 | Add | 50 |
    
    ## Test steps
    1. Nhập dữ liệu và nhấn Calculate một lần.
    2. Quan sát ngay trạng thái `Calculating ...`, ảnh chờ, Answer, Calculate và Clear.
    3. Trong lúc đang xử lý, thử nhấn Calculate lần nữa.
    4. Chờ trạng thái xử lý kết thúc rồi kiểm tra các nút và Answer.
    
    ## Expected result
    - Trong lúc xử lý, `Calculating ...` và ảnh chờ hiện; Answer ẩn; Calculate và Clear bị vô hiệu hóa nên không thể khởi tạo lần tính thứ hai.
    - Khi hoàn tất, trạng thái chờ ẩn, Answer hiện `50`, Calculate và Clear hoạt động lại.
    - Không áp đặt thời gian chờ cố định vì trang dùng độ trễ ngẫu nhiên dưới 1 giây.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
    # TC-FMT-005: Clear xóa thông báo lỗi sau đầu vào không hợp lệ
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / UI & Event / State Transition
    
    ## Preconditions
    - Mở trang, chọn Prototype và nhấn Clear.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | abc | 10 | Add |
    
    ## Test steps
    1. Nhập dữ liệu và nhấn Calculate.
    2. Xác nhận thông báo `Number 1 is not a number` xuất hiện.
    3. Nhấn Clear rồi quan sát thông báo, Answer và hai ô nhập.
    
    ## Expected result
    - Thông báo lỗi và Answer đều rỗng sau Clear.
    - Hai đầu vào vẫn là `abc` và `10`; Calculate có thể sử dụng lại sau khi sửa đầu vào.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
    # TC-FMT-006: Trạng thái chờ kết thúc khi phép chia cho 0 báo lỗi
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / Negative / State Transition
    
    ## Preconditions
    - Mở trang, chọn Prototype và nhấn Clear.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | 5 | 0 | Divide |
    
    ## Test steps
    1. Nhập dữ liệu và nhấn Calculate.
    2. Chờ thông báo `Divide by zero error!` rồi quan sát trạng thái chờ, Answer, Calculate và Clear.
    3. Thử nhấn Clear để phục hồi giao diện.
    
    ## Expected result
    - Thông báo chia cho 0 xuất hiện, không hiển thị kết quả số.
    - Trạng thái chờ kết thúc; Answer hiện lại; Calculate và Clear có thể dùng tiếp; Clear xóa thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None; mã trang có đường `return` trước khi mở khóa, cần xác minh lỗi khi chạy.
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
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
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-4-formatting-builds/TC-BLD-*.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-001.md
    # TC-BLD-001: Build 1 phải từ chối đầu vào không phải số
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Error Guessing
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 1, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | abc | 2 | Add |
    
    ## Test steps
    1. Chọn build của lượt thử, nhập dữ liệu và nhấn Calculate.
    2. Quan sát thông báo lỗi và Answer sau khi xử lý.
    3. Đối chiếu kết quả của hai build.
    
    ## Expected result
    - Prototype: hiện `Number 1 is not a number`, không tạo kết quả mới.
    - Build 1 phải có cùng hành vi. Ghi nhận lỗi nếu cho ra `NaN` hoặc bỏ qua kiểm tra.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
    # TC-BLD-002: Build 2 giữ đúng ý nghĩa Add và Concatenate
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Decision Table
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 2, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 12 | 34 | Add | 46 |
    | 12 | 34 | Concatenate | 1234 |
    
    ## Test steps
    1. Trên từng build, thử cả hai dòng dữ liệu; nhấn Clear giữa các dòng.
    2. Chờ Answer hiện và ghi kết quả cho từng phép toán.
    3. Đối chiếu với Prototype và cột Answer chuẩn.
    
    ## Expected result
    - Cả hai build phải cho Add = `46`, Concatenate = `1234`.
    - Ghi nhận lỗi nếu Build 2 đảo kết quả hai phép toán.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-003.md
    # TC-BLD-003: Build 3 không kiểm tra kiểu số khi Concatenate
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Equivalence Partitioning
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 3, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | abc | xyz | Concatenate | abcxyz |
    
    ## Test steps
    1. Chọn build, nhập dữ liệu, chọn Concatenate và nhấn Calculate.
    2. Chờ Answer hiện; kiểm tra Answer, thông báo lỗi và trạng thái Integers only.
    3. Lặp lại với build còn lại.
    
    ## Expected result
    - Answer là `abcxyz`, không có lỗi kiểu số; Integers only ẩn và bị vô hiệu hóa.
    - Ghi nhận lỗi nếu Build 3 báo `is not a number`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-004.md
    # TC-BLD-004: Build 4 cho phép bỏ chọn Integers only
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / State Transition
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 4, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 5 | 2 | Divide | 2.5 |
    
    ## Test steps
    1. Chọn build và Divide; kiểm tra checkbox Integers only có thể bỏ chọn.
    2. Để checkbox bỏ chọn, nhập dữ liệu rồi nhấn Calculate.
    3. Chờ Answer hiện và đối chiếu kết quả giữa hai build.
    
    ## Expected result
    - Checkbox được bật/tắt tự do; khi bỏ chọn, Answer là `2.5`.
    - Ghi nhận lỗi nếu Build 4 khóa checkbox hoặc bắt buộc hiển thị `2`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-005.md
    # TC-BLD-005: Build 5 cho phép Clear trước khi Calculate
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / State Transition
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 5, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | 5 | 2 | Divide |
    
    ## Test steps
    1. Chọn build, nhập dữ liệu, chọn Divide và tích Integers only.
    2. Kiểm tra trạng thái Clear và nhấn Clear trước bất kỳ lần Calculate nào.
    3. Quan sát checkbox và Answer; lặp lại trên build còn lại.
    
    ## Expected result
    - Clear hoạt động ngay sau khi chọn build; checkbox bỏ chọn và Answer rỗng.
    - Ghi nhận lỗi nếu Build 5 vô hiệu hóa Clear. Thử trước Calculate để tránh việc nút được bật lại sau xử lý.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-006.md
    # TC-BLD-006: Build 6 chặn phép chia cho 0
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Error Guessing
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 6, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation |
    | --- | --- | --- |
    | 5 | 0 | Divide |
    
    ## Test steps
    1. Chọn build, nhập dữ liệu, chọn Divide và nhấn Calculate.
    2. Quan sát thông báo lỗi và Answer; lặp lại trên build còn lại.
    
    ## Expected result
    - Hiển thị `Divide by zero error!` và không đưa `Infinity` hoặc `NaN` vào Answer.
    - Ghi nhận lỗi nếu Build 6 trả về một giá trị số không hợp lệ.
    - Trạng thái chờ của Prototype khi gặp lỗi được kiểm riêng ở `TC-FMT-006`.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-007.md
    # TC-BLD-007: Build 7 dùng First number được nhập thay vì Answer cũ
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / State Transition
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 7, tải lại trang trước mỗi lượt.
    
    ## Test data
    | Lượt | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- | --- |
    | 1 | 10 | 2 | Add | 12 |
    | 2 | 20 | 3 | Add | 23 |
    
    ## Test steps
    1. Chọn build, thực hiện lượt 1 và chờ Answer hiện.
    2. Không nhấn Clear; thay hai đầu vào bằng dữ liệu lượt 2, nhấn Calculate và chờ Answer hiện.
    3. Ghi cả hai kết quả, rồi lặp lại từ trang mới trên build còn lại.
    
    ## Expected result
    - Lượt 1 cho `12`, lượt 2 cho `23` trên cả hai build.
    - Ghi nhận lỗi nếu Build 7 dùng Answer của lượt trước hoặc Answer rỗng làm toán hạng thứ nhất.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-008.md
    # TC-BLD-008: Build 8 giữ đúng thứ tự hai toán hạng
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Equivalence Partitioning
    
    ## Preconditions
    - Mở trang; chạy độc lập trên Prototype và Build 8, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 9 | 4 | Subtract | 5 |
    
    ## Test steps
    1. Chọn build, nhập dữ liệu, chọn Subtract rồi nhấn Calculate.
    2. Chờ Answer hiện; ghi kết quả và lặp lại trên build còn lại.
    
    ## Expected result
    - Answer là `5` trên cả hai build.
    - Ghi nhận lỗi nếu Build 8 cho `-5`, dấu hiệu hai toán hạng bị đảo.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
    # TC-BLD-009: Build 9 hiển thị và cho sử dụng đủ các phần tử chính
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / UI State
    
    ## Preconditions
    - Mở trang; quan sát trên Prototype và Build 9, tải lại trang trước mỗi lượt.
    
    ## Test data
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 2 | 3 | Add | 5 |
    
    ## Test steps
    1. Chọn build và kiểm tra First number, Second number, Operation, Calculate có hiện và dùng được.
    2. Nhập dữ liệu, nhấn Calculate và chờ Answer hiện.
    3. Đối chiếu trạng thái giao diện và kết quả giữa hai build.
    
    ## Expected result
    - Cả hai ô nhập và nút Calculate đều hiện, hoạt động; Answer là `5`.
    - Ghi nhận lỗi nếu Build 9 ẩn/vô hiệu hóa Second number hoặc Calculate.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        root = Path('tests/test-cases')
        files = sorted(root.glob('**/TC-*.md'))
        required = ['Requirement ID', 'Module / Test type / Technique', 'Preconditions', 'Test data', 'Test steps', 'Expected result', 'Status / Related bugs']
        assert len(files) == 69, len(files)
        bld = {
         '001': ('Kiểm tra từ chối đầu vào không phải số', ['Chọn Build đang kiểm thử, nhập dữ liệu và nhấn Calculate.', 'Quan sát thông báo lỗi và Answer sau khi xử lý.'], ['Hiển thị "Number 1 is not a number" và không tạo kết quả mới.', 'Ghi nhận Fail nếu bỏ qua kiểm tra hoặc đưa NaN vào Answer.']),
         '002': ('Kiểm tra Add và Concatenate giữ đúng ý nghĩa', ['Chọn Build đang kiểm thử; chạy lần lượt hai dòng dữ liệu và nhấn Clear giữa các dòng.', 'Ghi Answer của mỗi phép toán và đối chiếu với cột Answer chuẩn.'], ['Add trả về 46; Concatenate trả về 1234.', 'Ghi nhận Fail nếu hai phép toán bị đảo hoặc cho kết quả khác cột Answer chuẩn.']),
         '003': ('Kiểm tra Concatenate không yêu cầu dữ liệu số', ['Chọn Build đang kiểm thử, nhập dữ liệu, chọn Concatenate và nhấn Calculate.', 'Quan sát Answer, thông báo lỗi và trạng thái Integers only.'], ['Answer là abcxyz; không có lỗi kiểu số; Integers only ẩn và không thể tương tác.', 'Ghi nhận Fail nếu phép Concatenate báo lỗi "is not a number".']),
         '004': ('Kiểm tra có thể bỏ chọn Integers only', ['Chọn Build đang kiểm thử và phép Divide; kiểm tra checkbox Integers only có thể bỏ chọn.', 'Bỏ chọn checkbox, nhập dữ liệu và nhấn Calculate.', 'Quan sát Answer sau khi xử lý.'], ['Checkbox có thể bật/tắt; khi bỏ chọn, Answer là 2.5.', 'Ghi nhận Fail nếu checkbox bị khóa hoặc Answer bị ép thành 2.']),
         '005': ('Kiểm tra Clear hoạt động trước lần Calculate đầu tiên', ['Chọn Build đang kiểm thử, nhập dữ liệu, chọn Divide và tích Integers only.', 'Kiểm tra trạng thái Clear và nhấn Clear trước bất kỳ lần Calculate nào.', 'Quan sát checkbox và Answer.'], ['Clear hoạt động trước Calculate; checkbox bỏ chọn và Answer rỗng.', 'Ghi nhận Fail nếu Clear bị vô hiệu hóa.']),
         '006': ('Kiểm tra chặn phép chia cho 0', ['Chọn Build đang kiểm thử, nhập dữ liệu, chọn Divide và nhấn Calculate.', 'Quan sát thông báo lỗi và Answer.'], ['Hiển thị "Divide by zero error!" và không đưa Infinity hoặc NaN vào Answer.', 'Ghi nhận Fail nếu phép chia cho 0 tạo kết quả số không hợp lệ.']),
         '007': ('Kiểm tra phép tính mới dùng First number được nhập', ['Chọn Build đang kiểm thử, thực hiện lượt 1 và chờ Answer hiện.', 'Không nhấn Clear; thay hai đầu vào bằng dữ liệu lượt 2, nhấn Calculate và chờ Answer hiện.', 'Ghi kết quả của cả hai lượt.'], ['Lượt 1 cho 12, lượt 2 cho 23.', 'Ghi nhận Fail nếu lượt 2 dùng Answer cũ thay cho First number mới nhập.']),
         '008': ('Kiểm tra đúng thứ tự hai toán hạng', ['Chọn Build đang kiểm thử, nhập dữ liệu, chọn Subtract và nhấn Calculate.', 'Chờ Answer hiện và ghi kết quả.'], ['Answer là 5 theo thứ tự First number trừ Second number.', 'Ghi nhận Fail nếu kết quả là -5 hoặc thứ tự toán hạng bị đảo.']),
         '009': ('Kiểm tra các phần tử chính hiển thị và sử dụng được', ['Chọn Build đang kiểm thử; kiểm tra First number, Second number, Operation và Calculate có hiển thị và sử dụng được.', 'Nhập dữ liệu, nhấn Calculate và chờ Answer hiện.'], ['Hai ô nhập và nút Calculate đều hiển thị, sử dụng được; Answer là 5.', 'Ghi nhận Fail nếu thiếu hoặc không thể dùng phần tử chính.']),
        }
        for path in files:
         raw = path.read_text()
         parts = re.split(r'^## (.+)\n', raw, flags=re.M)
         title = parts[0].strip()
         sections = {parts[i]: parts[i+1].strip() for i in range(1,len(parts),2)}
         assert list(sections) == required, path
         old_pre = sections['Preconditions'].splitlines()
         extra = []
         for line in old_pre:
          if 'Prototype' in line or 'Chọn Build:' in line or 'Mở trang;' in line or 'Người dùng đã truy cập trang:' in line:
           if 'nhấn Clear' in line.lower() or 'Nhấn Clear' in line:
            extra.append('- Nhấn Clear trước khi nhập dữ liệu để bắt đầu từ trạng thái sạch.')
           continue
          extra.append(line)
         pre = ['- Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html', '- Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.']
         for line in extra:
          if line not in pre: pre.append(line)
         sections['Preconditions'] = '\n'.join(pre)
         lines = sections['Test data'].splitlines()
         new_data = []
         wide_build = bool(lines and re.match(r'^\|\s*Build\s*\|', lines[0]) and len(lines[0].split('|')) > 4)
         for line in lines:
          if re.match(r'^\|\s*Build\s*\|\s*(?:Prototype|[1-9])\s*\|\s*$', line): continue
          if wide_build and line.startswith('|'):
           cells = line.split('|')
           if len(cells) >= 5:
            line = '|' + '|'.join(cells[2:])
          new_data.append(line)
         sections['Test data'] = 'Build áp dụng: Build 1–9; chạy riêng từng Build.\n\n' + '\n'.join(new_data)
         steps = sections['Test steps']
         steps = re.sub(r'Chọn Build "(?:Prototype|[1-9])"', 'Chọn Build đang kiểm thử', steps)
         steps = re.sub(r'Chọn build của lượt thử', 'Chọn Build đang kiểm thử', steps)
         steps = steps.replace('Trên từng build', 'Trên Build đang kiểm thử')
         if path.name.startswith('TC-BLD-'):
          key = path.stem[-3:]
          suffix, custom_steps, custom_expected = bld[key]
          title = f'# TC-BLD-{key}: {suffix}'
          steps = '\n'.join(f'{i}. {step}' for i,step in enumerate(custom_steps,1))
          sections['Expected result'] = '\n'.join(f'- {line}' for line in custom_expected)
         elif path.name.startswith('TC-CON-') and path.stem[-3:] in {'016','017','018'}:
          title = {
           '016':'# TC-CON-016: Kiểm tra validation dữ liệu số trong phép cộng',
           '017':'# TC-CON-017: Kiểm tra Concatenate với hai chuỗi số',
           '018':'# TC-CON-018: Kiểm tra Concatenate với hai chuỗi chữ',
          }[path.stem[-3:]]
         if not re.search(r'Chọn Build đang kiểm thử', steps, re.I):
          lines_step = steps.splitlines()
          numbered = []
          for idx,line in enumerate(lines_step,2):
           numbered.append(re.sub(r'^\d+\.', f'{idx}.', line))
          steps = '1. Chọn Build đang kiểm thử theo mục Test data.\n' + '\n'.join(numbered)
         sections['Test steps'] = steps
         sections['Status / Related bugs'] = 'Not Run / None'
         output = title + '\n\n' + '\n\n'.join(f'## {name}\n{sections[name]}' for name in required) + '\n'
         path.write_text(output)
        print('updated',len(files),'test cases')
        PY
    updated 69 test cases
    ✓ • 0ms

## Activity

    $ for f in tests/test-cases/module-1-arithmetic/TC-ARI-001.md tests/test-cases/module-2-division/TC-DIV-010.md tests/test-cases/module-3-concatenate/TC-CON-016.md tests/test-cases/module-4-formatting-builds/TC-BLD-002.md tests/test-cases/module-4-formatting-builds/TC-FMT-006.md; do echo "### $f"; cat "$f"; done
    ### tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    # TC-ARI-001: Thực hiện phép cộng hai số nguyên dương hợp lệ
    
    ## Requirement ID
    FR-CALC-01
    
    ## Module / Test type / Technique
    Module 1 - Arithmetic / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | 25 |
    | Second number | 15 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build đang kiểm thử từ dropdown
    3. Nhập "25" vào trường First number
    4. Nhập "15" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Trường Answer hiển thị kết quả chính xác là "40". Không có thông báo lỗi hiển thị.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-2-division/TC-DIV-010.md
    # TC-DIV-010: Chia hai toán hạng thập phân
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    - Checkbox Integers only không được chọn
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | Second number | Operation |
    | ---: | ---: | :--- |
    | 7.5 | 2.5 | Divide |
    
    ## Test steps
    1. Chọn Build đang kiểm thử.
    2. Nhập "7.5" vào First number và "2.5" vào Second number.
    3. Chọn "Divide" và bấm "Calculate".
    
    ## Expected result
    Answer hiển thị "3"; không xuất hiện lỗi và không tự động làm tròn ngoài yêu cầu.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-3-concatenate/TC-CON-016.md
    # TC-CON-016: Kiểm tra validation dữ liệu số trong phép cộng
    
    ## Requirement ID
    FR-CALC-03
    
    ## Module / Test type / Technique
    Module 3 - Concatenate & Validation / Defect Hunting / Comparative Testing
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | abc |
    | Second number | 10 |
    | Operation | Add |
    
    ## Test steps
    1. Truy cập trang web Basic Calculator
    2. Chọn Build đang kiểm thử từ dropdown selectBuild
    3. Nhập "abc" vào trường First number
    4. Nhập "10" vào trường Second number
    5. Chọn Operation là "Add"
    6. Bấm nút "Calculate"
    
    ## Expected result
    Hệ thống không thực hiện phép cộng, trường Answer không hiển thị kết quả tính. Hiển thị lỗi "Number 1 is not a number" như yêu cầu validation của phép toán số học.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
    # TC-BLD-002: Kiểm tra Add và Concatenate giữ đúng ý nghĩa
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / Decision Table
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 12 | 34 | Add | 46 |
    | 12 | 34 | Concatenate | 1234 |
    
    ## Test steps
    1. Chọn Build đang kiểm thử; chạy lần lượt hai dòng dữ liệu và nhấn Clear giữa các dòng.
    2. Ghi Answer của mỗi phép toán và đối chiếu với cột Answer chuẩn.
    
    ## Expected result
    - Add trả về 46; Concatenate trả về 1234.
    - Ghi nhận Fail nếu hai phép toán bị đảo hoặc cho kết quả khác cột Answer chuẩn.
    
    ## Status / Related bugs
    Not Run / None
    ### tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
    # TC-FMT-006: Trạng thái chờ kết thúc khi phép chia cho 0 báo lỗi
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / Negative / State Transition
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | Second number | Operation |
    | --- | --- | --- |
    | 5 | 0 | Divide |
    
    ## Test steps
    1. Chọn Build đang kiểm thử theo mục Test data.
    2. Nhập dữ liệu và nhấn Calculate.
    3. Chờ thông báo `Divide by zero error!` rồi quan sát trạng thái chờ, Answer, Calculate và Clear.
    4. Thử nhấn Clear để phục hồi giao diện.
    
    ## Expected result
    - Thông báo chia cho 0 xuất hiện, không hiển thị kết quả số.
    - Trạng thái chờ kết thúc; Answer hiện lại; Calculate và Clear có thể dùng tiếp; Clear xóa thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ rg -n 'Prototype|Build [1-9]|Chọn Build "[1-9]"|Chọn Build:|trên từng build|build còn lại|hai build' tests/test-cases --glob 'TC-*.md'; git diff --check; git diff --stat; git status --short
    tests/test-cases/module-3-concatenate/TC-CON-001.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-006.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-012.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-022.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-013.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-006.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-007.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-005.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-008.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-002.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-017.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-014.md:15:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-015.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-004.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-020.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-009.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-003.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-018.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-002.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-008.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-001.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-010.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-004.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-009.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-005.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-011.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-013.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-016.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-017.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-019.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-010.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-003.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-004.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-007.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-016.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-014.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-012.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-001.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-011.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-1-arithmetic/TC-ARI-018.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-009.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-003.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-015.md:15:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-005.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-002.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-007.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md:15:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-001.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-006.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-012.md:15:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-FMT-004.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-003.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-010.md:15:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-4-formatting-builds/TC-BLD-008.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-005.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-002.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-013.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-009.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-007.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-011.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-004.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-3-concatenate/TC-CON-021.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
    tests/test-cases/module-2-division/TC-DIV-008.md:14:Build áp dụng: Build 1–9; chạy riêng từng Build.
     tests/test-cases/module-1-arithmetic/TC-ARI-001.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-002.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-003.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-004.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-005.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-006.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-007.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-008.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-009.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-010.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-011.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-012.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-013.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-014.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-015.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-016.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-017.md      |  9 +++++----
     tests/test-cases/module-1-arithmetic/TC-ARI-018.md      |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-001.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-002.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-003.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-004.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-005.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-006.md        |  8 +++++---
     tests/test-cases/module-2-division/TC-DIV-007.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-008.md        |  9 +++++----
     tests/test-cases/module-2-division/TC-DIV-009.md        |  8 +++++---
     tests/test-cases/module-2-division/TC-DIV-010.md        | 14 ++++++++------
     tests/test-cases/module-2-division/TC-DIV-011.md        | 14 ++++++++------
     tests/test-cases/module-2-division/TC-DIV-012.md        | 14 ++++++++------
     tests/test-cases/module-2-division/TC-DIV-013.md        | 14 ++++++++------
     tests/test-cases/module-3-concatenate/TC-CON-001.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-002.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-003.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-004.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-005.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-006.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-007.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-008.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-009.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-010.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-011.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-012.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-013.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-014.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-015.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-016.md     | 11 ++++++-----
     tests/test-cases/module-3-concatenate/TC-CON-017.md     | 11 ++++++-----
     tests/test-cases/module-3-concatenate/TC-CON-018.md     | 11 ++++++-----
     tests/test-cases/module-3-concatenate/TC-CON-019.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-020.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-021.md     |  9 +++++----
     tests/test-cases/module-3-concatenate/TC-CON-022.md     |  9 +++++----
     .../test-cases/module-4-formatting-builds/TC-BLD-001.md | 14 ++++++++------
     .../test-cases/module-4-formatting-builds/TC-BLD-002.md | 16 +++++++++-------
     .../test-cases/module-4-formatting-builds/TC-BLD-003.md | 16 +++++++++-------
     .../test-cases/module-4-formatting-builds/TC-BLD-004.md | 17 ++++++++++-------
     .../test-cases/module-4-formatting-builds/TC-BLD-005.md | 15 +++++++++------
     .../test-cases/module-4-formatting-builds/TC-BLD-006.md | 16 +++++++++-------
     .../test-cases/module-4-formatting-builds/TC-BLD-007.md | 15 +++++++++------
     .../test-cases/module-4-formatting-builds/TC-BLD-008.md | 15 +++++++++------
     .../test-cases/module-4-formatting-builds/TC-BLD-009.md | 14 ++++++++------
     .../test-cases/module-4-formatting-builds/TC-FMT-001.md | 12 ++++++++----
     .../test-cases/module-4-formatting-builds/TC-FMT-002.md | 12 ++++++++----
     .../test-cases/module-4-formatting-builds/TC-FMT-003.md | 12 ++++++++----
     .../test-cases/module-4-formatting-builds/TC-FMT-004.md | 14 +++++++++-----
     .../test-cases/module-4-formatting-builds/TC-FMT-005.md | 12 ++++++++----
     .../test-cases/module-4-formatting-builds/TC-FMT-006.md | 14 +++++++++-----
     .../test-cases/module-4-formatting-builds/TC-FMT-007.md | 14 +++++++++-----
     69 files changed, 419 insertions(+), 310 deletions(-)
     M tests/test-cases/module-1-arithmetic/TC-ARI-001.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-002.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-003.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-004.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-005.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-006.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-007.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-008.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-009.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-010.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-011.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-012.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-013.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-014.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-015.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-016.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-017.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-018.md
     M tests/test-cases/module-2-division/TC-DIV-001.md
     M tests/test-cases/module-2-division/TC-DIV-002.md
     M tests/test-cases/module-2-division/TC-DIV-003.md
     M tests/test-cases/module-2-division/TC-DIV-004.md
     M tests/test-cases/module-2-division/TC-DIV-005.md
     M tests/test-cases/module-2-division/TC-DIV-006.md
     M tests/test-cases/module-2-division/TC-DIV-007.md
     M tests/test-cases/module-2-division/TC-DIV-008.md
     M tests/test-cases/module-2-division/TC-DIV-009.md
     M tests/test-cases/module-2-division/TC-DIV-010.md
     M tests/test-cases/module-2-division/TC-DIV-011.md
     M tests/test-cases/module-2-division/TC-DIV-012.md
     M tests/test-cases/module-2-division/TC-DIV-013.md
     M tests/test-cases/module-3-concatenate/TC-CON-001.md
     M tests/test-cases/module-3-concatenate/TC-CON-002.md
     M tests/test-cases/module-3-concatenate/TC-CON-003.md
     M tests/test-cases/module-3-concatenate/TC-CON-004.md
     M tests/test-cases/module-3-concatenate/TC-CON-005.md
     M tests/test-cases/module-3-concatenate/TC-CON-006.md
     M tests/test-cases/module-3-concatenate/TC-CON-007.md
     M tests/test-cases/module-3-concatenate/TC-CON-008.md
     M tests/test-cases/module-3-concatenate/TC-CON-009.md
     M tests/test-cases/module-3-concatenate/TC-CON-010.md
     M tests/test-cases/module-3-concatenate/TC-CON-011.md
     M tests/test-cases/module-3-concatenate/TC-CON-012.md
     M tests/test-cases/module-3-concatenate/TC-CON-013.md
     M tests/test-cases/module-3-concatenate/TC-CON-014.md
     M tests/test-cases/module-3-concatenate/TC-CON-015.md
     M tests/test-cases/module-3-concatenate/TC-CON-016.md
     M tests/test-cases/module-3-concatenate/TC-CON-017.md
     M tests/test-cases/module-3-concatenate/TC-CON-018.md
     M tests/test-cases/module-3-concatenate/TC-CON-019.md
     M tests/test-cases/module-3-concatenate/TC-CON-020.md
     M tests/test-cases/module-3-concatenate/TC-CON-021.md
     M tests/test-cases/module-3-concatenate/TC-CON-022.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-001.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-003.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-004.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-005.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-006.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-007.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-008.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        files=sorted(Path('tests/test-cases').glob('**/TC-*.md'))
        want=['Requirement ID','Module / Test type / Technique','Preconditions','Test data','Test steps','Expected result','Status / Related bugs']
        print('files',len(files))
        for f in files:
         s=f.read_text(); headings=re.findall(r'^## (.*)$',s,re.M)
         problems=[]
         if headings!=want: problems.append('headings')
         if 'Build áp dụng: Build 1–9; chạy riêng từng Build.' not in s: problems.append('build coverage')
         if 'Chọn Build đang kiểm thử' not in s: problems.append('selection step')
         if not s.rstrip().endswith('Not Run / None'): problems.append('status')
         if problems: print(f.name, ', '.join(problems))
        PY
    files 69
    ✓ • 0ms

## Assistant — 2026-09-28 15:00:15 (UTC+07:00)

Mình đã đổi cả 69 test case để Build là tham số chạy từ 1 đến 9 và bỏ các bước chọn cố định Prototype. Mình đang rà lần cuối các ca có bảng nhiều dòng, trạng thái giao diện và mục Expected result để bảo đảm vẫn thực hiện được theo từng Build.

## Activity

    $ cat tests/test-cases/module-4-formatting-builds/TC-FMT-001.md; cat tests/test-cases/module-2-division/TC-DIV-006.md; cat tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
    # TC-FMT-001: Integers only cắt phần thập phân khi được chọn trước Calculate
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Formatting & Controls / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    - Nhấn Clear để Answer rỗng và Integers only bỏ chọn.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | Second number | Operation | Integers only | Kết quả mong đợi |
    | --- | --- | --- | --- | --- |
    | 5 | 2 | Divide | Checked | 2 |
    | -5 | 2 | Divide | Checked | -2 |
    
    ## Test steps
    1. Chọn Build đang kiểm thử theo mục Test data.
    2. Với từng dòng dữ liệu, nhập hai số, chọn Divide và tích Integers only.
    3. Nhấn Calculate; chờ `Calculating ...` biến mất và Answer hiện lại.
    4. Đọc Answer; nhấn Clear trước khi thử dòng tiếp theo.
    
    ## Expected result
    - Answer khớp cột kết quả mong đợi, không có thông báo lỗi.
    - Phần thập phân bị cắt về 0; đây không phải làm tròn tới số nguyên gần nhất.
    
    ## Status / Related bugs
    Not Run / None
    # TC-DIV-006: Chia với toán hạng âm
    
    ## Requirement ID
    FR-CALC-02
    
    ## Module / Test type / Technique
    Module 2 - Division / Functional / Equivalence Partitioning
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | Lần chạy | First number | Second number | Expected Answer |
    | :---: | ---: | ---: | ---: |
    | 1 | -12 | 3 | -4 |
    | 2 | -12 | -3 | 4 |
    | 3 | 12 | -3 | -4 |
    
    Operation cho cả ba lần chạy: `Divide`.
    
    ## Test steps
    1. Chọn Build đang kiểm thử và Operation "Divide".
    2. Lần lượt nhập từng cặp dữ liệu trong bảng và bấm "Calculate".
    3. Đối chiếu Answer với cột Expected Answer sau mỗi lần chạy.
    
    ## Expected result
    Mỗi lần chạy trả về đúng dấu và giá trị theo bảng; không có thông báo lỗi.
    
    ## Status / Related bugs
    Not Run / None
    # TC-BLD-009: Kiểm tra các phần tử chính hiển thị và sử dụng được
    
    ## Requirement ID
    FR-CALC-04
    
    ## Module / Test type / Technique
    Module 4 - Builds / Regression / UI State
    
    ## Preconditions
    - Người dùng đã mở trang: https://testsheepnz.github.io/BasicCalculator.html
    - Chạy riêng test case trên từng Build từ 1 đến 9; tải lại trang trước mỗi lượt.
    
    ## Test data
    Build áp dụng: Build 1–9; chạy riêng từng Build.
    
    | First number | Second number | Operation | Answer chuẩn |
    | --- | --- | --- | --- |
    | 2 | 3 | Add | 5 |
    
    ## Test steps
    1. Chọn Build đang kiểm thử; kiểm tra First number, Second number, Operation và Calculate có hiển thị và sử dụng được.
    2. Nhập dữ liệu, nhấn Calculate và chờ Answer hiện.
    
    ## Expected result
    - Hai ô nhập và nút Calculate đều hiển thị, sử dụng được; Answer là 5.
    - Ghi nhận Fail nếu thiếu hoặc không thể dùng phần tử chính.
    
    ## Status / Related bugs
    Not Run / None
    ✓ • 0ms

## Activity

    $ git diff --check; git diff --numstat | tail -5; git status --short --branch | head -80
    8    4    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
    9    5    tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
    8    4    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
    9    5    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
    9    5    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    ## main...origin/main
     M tests/test-cases/module-1-arithmetic/TC-ARI-001.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-002.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-003.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-004.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-005.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-006.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-007.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-008.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-009.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-010.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-011.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-012.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-013.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-014.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-015.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-016.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-017.md
     M tests/test-cases/module-1-arithmetic/TC-ARI-018.md
     M tests/test-cases/module-2-division/TC-DIV-001.md
     M tests/test-cases/module-2-division/TC-DIV-002.md
     M tests/test-cases/module-2-division/TC-DIV-003.md
     M tests/test-cases/module-2-division/TC-DIV-004.md
     M tests/test-cases/module-2-division/TC-DIV-005.md
     M tests/test-cases/module-2-division/TC-DIV-006.md
     M tests/test-cases/module-2-division/TC-DIV-007.md
     M tests/test-cases/module-2-division/TC-DIV-008.md
     M tests/test-cases/module-2-division/TC-DIV-009.md
     M tests/test-cases/module-2-division/TC-DIV-010.md
     M tests/test-cases/module-2-division/TC-DIV-011.md
     M tests/test-cases/module-2-division/TC-DIV-012.md
     M tests/test-cases/module-2-division/TC-DIV-013.md
     M tests/test-cases/module-3-concatenate/TC-CON-001.md
     M tests/test-cases/module-3-concatenate/TC-CON-002.md
     M tests/test-cases/module-3-concatenate/TC-CON-003.md
     M tests/test-cases/module-3-concatenate/TC-CON-004.md
     M tests/test-cases/module-3-concatenate/TC-CON-005.md
     M tests/test-cases/module-3-concatenate/TC-CON-006.md
     M tests/test-cases/module-3-concatenate/TC-CON-007.md
     M tests/test-cases/module-3-concatenate/TC-CON-008.md
     M tests/test-cases/module-3-concatenate/TC-CON-009.md
     M tests/test-cases/module-3-concatenate/TC-CON-010.md
     M tests/test-cases/module-3-concatenate/TC-CON-011.md
     M tests/test-cases/module-3-concatenate/TC-CON-012.md
     M tests/test-cases/module-3-concatenate/TC-CON-013.md
     M tests/test-cases/module-3-concatenate/TC-CON-014.md
     M tests/test-cases/module-3-concatenate/TC-CON-015.md
     M tests/test-cases/module-3-concatenate/TC-CON-016.md
     M tests/test-cases/module-3-concatenate/TC-CON-017.md
     M tests/test-cases/module-3-concatenate/TC-CON-018.md
     M tests/test-cases/module-3-concatenate/TC-CON-019.md
     M tests/test-cases/module-3-concatenate/TC-CON-020.md
     M tests/test-cases/module-3-concatenate/TC-CON-021.md
     M tests/test-cases/module-3-concatenate/TC-CON-022.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-001.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-003.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-004.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-005.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-006.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-007.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-008.md
     M tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        files=sorted(Path('tests/test-cases').glob('**/TC-*.md'))
        for p in files:
         s=p.read_text()
         if re.search(r'Prototype|Build [1-9](?!–)|Chọn Build "[1-9]"|build còn lại|hai build',s,re.I):
          hits=[line for line in s.splitlines() if re.search(r'Prototype|Build [1-9](?!–)|Chọn Build "[1-9]"|build còn lại|hai build',line,re.I)]
          print(p.name, hits)
         steps=re.search(r'## Test steps\n(.*?)\n\n## Expected result',s,re.S).group(1)
         nums=[int(n) for n in re.findall(r'^(\d+)\.',steps,re.M)]
         if nums != list(range(1,len(nums)+1)): print('bad steps',p.name,nums)
         if '| Build |' in s: print('fixed build row remains',p.name)
        print('checked',len(files))
        PY
    checked 69
    ✓ • 0ms

## Activity

    $ git fetch origin
    From https://github.com/NgBaoAnn/calculator-test
       7db8525..c3dfc09  main       -> origin/main
    ✓ • 6.18s

## Activity

    $ git log --oneline main..origin/main; git diff --name-status main..origin/main; git status --short | tail -5
    c3dfc09 Merge branch 'main' of https://github.com/NgBaoAnn/calculator-test
    0edea25 hi
    D    tests/test-cases/module-2-division/README.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
     M tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    ✓ • 0ms

## Assistant — 2026-09-28 15:00:57 (UTC+07:00)

Lần rà cuối cho thấy cả 69 file đều có cùng 7 mục, đều ghi Build 1–9, không còn bước chọn cố định Prototype hay Build cụ thể. Remote vừa có thêm một commit không đụng đến các test case này; mình sẽ cập nhật nhánh rồi đẩy phần chỉnh sửa lên.

## Activity

    $ git add tests/test-cases; git diff --cached --check; git diff --cached --stat | tail -2; git commit -m "test: parameterize test cases for builds 1 through 9"
     .../test-cases/module-4-formatting-builds/TC-FMT-007.md | 14 +++++++++-----
     69 files changed, 419 insertions(+), 310 deletions(-)
    [main 97f1408] test: parameterize test cases for builds 1 through 9
     69 files changed, 419 insertions(+), 310 deletions(-)
    ✓ • 0ms

## Activity

    $ git rebase origin/main
    Rebasing (1/1)
    ✓ • 0ms

## Activity

    $ git push origin main
    To https://github.com/NgBaoAnn/calculator-test
       c3dfc09..6c29796  main -> main
    ✓ • 2.37s

## User — 2026-09-28 15:02:00 (UTC+07:00)

ok đẩy lên main giúp tôi

## Assistant — 2026-09-28 15:02:05 (UTC+07:00)

Mình sẽ kiểm tra trạng thái remote sau lần push bị ngắt, rồi đẩy commit test case lên `main` nếu remote chưa nhận.

## Activity

    $ git status --short --branch; git log -1 --format='%h %s'; git rev-list --count origin/main..main; git remote -v
    ## main...origin/main
    6c29796 test: parameterize test cases for builds 1 through 9
    0
    origin    https://github.com/NgBaoAnn/calculator-test (fetch)
    origin    https://github.com/NgBaoAnn/calculator-test (push)
    ✓ • 0ms

## Activity

    $ git ls-remote origin refs/heads/main
    6c2979686a200f5d7881c4f9d27ef50249f427f2    refs/heads/main
    ✓ • 812ms

## Assistant — 2026-09-28 15:02:14 (UTC+07:00)

Đã đẩy lên `main` thành công. Commit `6c29796` cập nhật cả 69 test case để chạy riêng trên từng Build 1–9; mình đã xác nhận `main` trên GitHub trỏ tới commit này.

## User — 2026-09-28 15:06:12 (UTC+07:00)

bước sau là sẽ phải cần chạy playwright hãy kiểm tra xem máy tôi đủ công cụ dể chạy chưa

## Assistant — 2026-09-28 15:06:24 (UTC+07:00)

Mình sẽ kiểm tra Node/npm, Playwright CLI, trình duyệt và các thư viện hệ thống cần thiết, rồi chạy một lệnh smoke test nếu công cụ đã sẵn có.

## Activity

    $ ls -la /home/pham-quang-vinh/.cache/ms-playwright /home/pham-quang-vinh/.cache/ms-playwright-go /home/pham-quang-vinh/.npm/_npx 2>&1 | head -100; find /usr/bin -maxdepth 1 -iname '*chrome*' -o -iname '*chromium*' -o -iname '*firefox*' | head -30
    /home/pham-quang-vinh/.cache/ms-playwright:
    total 24
    drwxrwxr-x  6 pham-quang-vinh pham-quang-vinh 4096 Mar 28  2026 .
    drwx------ 50 pham-quang-vinh pham-quang-vinh 4096 Sep 28 09:43 ..
    drwxrwxr-x  2 pham-quang-vinh pham-quang-vinh 4096 Mar 28  2026 .links
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Mar 28  2026 chromium-1148
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Mar 28  2026 chromium_headless_shell-1148
    drwxrwxr-x  2 pham-quang-vinh pham-quang-vinh 4096 Mar 28  2026 ffmpeg-1010
    
    /home/pham-quang-vinh/.cache/ms-playwright-go:
    total 16
    drwxrwxr-x  4 pham-quang-vinh pham-quang-vinh 4096 Apr 24 21:19 .
    drwx------ 50 pham-quang-vinh pham-quang-vinh 4096 Sep 28 09:43 ..
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Mar 22  2026 1.50.1
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Apr 24 21:19 1.57.0
    
    /home/pham-quang-vinh/.npm/_npx:
    total 48
    drwxrwxr-x 12 pham-quang-vinh pham-quang-vinh 4096 Sep 26 23:41 .
    drwxrwxr-x  5 pham-quang-vinh pham-quang-vinh 4096 May  6 13:41 ..
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jun 24 22:08 125ee17d583c4e03
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 May 25 16:47 15c61037b1978c83
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jun 20 13:31 1a089ac50f181916
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jul  4 16:00 1bf7c3c15bf47d04
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Sep 26 23:42 668c188756b835f3
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jul  4 02:24 69c381f8ad94b576
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 May  6 13:41 ac0ed6aa23b37c1e
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jun 22 23:53 b8d86e6551a4f492
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jun 20 14:27 d66c5096c7023bfb
    drwxrwxr-x  3 pham-quang-vinh pham-quang-vinh 4096 Jun 24 01:35 e6e0ed1aca658cae
    /usr/bin/google-chrome
    /usr/bin/firefox
    /usr/bin/google-chrome-stable
    ✓ • 0ms

## Activity

    $ cat /etc/os-release | head -8; uname -m; df -h . /tmp | tail -3; git status --short
    PRETTY_NAME="Ubuntu 24.04.4 LTS"
    NAME="Ubuntu"
    VERSION_ID="24.04"
    VERSION="24.04.4 LTS (Noble Numbat)"
    VERSION_CODENAME=noble
    ID=ubuntu
    ID_LIKE=debian
    HOME_URL="https://www.ubuntu.com/"
    x86_64
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/nvme0n1p5  177G  104G   65G  62% /
    /dev/nvme0n1p5  177G  104G   65G  62% /
    ✓ • 0ms

## Activity

    $ node --version; npm --version; npx --version; command -v playwright-cli; command -v chromium; command -v chromium-browser; command -v google-chrome; command -v firefox; command -v xdg-open
    v24.18.0
    11.16.0
    11.16.0
    /usr/bin/google-chrome
    /usr/bin/firefox
    /usr/bin/xdg-open
    ✓ • 0ms

## Activity

    $ rg --files -g 'package.json' -g 'package-lock.json' -g 'playwright.config.*' -g '.npmrc' -g 'node_modules/**/package.json' | head -80; npm list -g --depth=0
    /home/pham-quang-vinh/.nvm/versions/node/v24.18.0/lib
    ├── @anthropic-ai/claude-code@2.1.283
    ├── @openai/codex@0.157.1
    ├── corepack@0.35.0
    └── npm@11.16.0
    
    ✓ • 84ms

## Activity

    $ find /home/pham-quang-vinh/.cache/ms-playwright-go -type f -name playwright -o -name playwright-cli | head -20
    ✓ • 0ms

## Activity

    $ find /home/pham-quang-vinh/.npm/_npx -path '*/node_modules/@playwright/cli/package.json' -o -path '*/node_modules/playwright/package.json' -o -path '*/node_modules/@playwright/test/package.json' | head -40; ls -l /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh; sed -n '1,100p' /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh
    -rw-rw-r-- 1 pham-quang-vinh pham-quang-vinh 526 Jun 20 13:57 /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh
    #!/usr/bin/env bash
    set -euo pipefail
    
    if ! command -v npx >/dev/null 2>&1; then
      echo "Error: npx is required but not found on PATH." >&2
      exit 1
    fi
    
    has_session_flag="false"
    for arg in "$@"; do
      case "$arg" in
        --session|--session=*)
          has_session_flag="true"
          break
          ;;
      esac
    done
    
    cmd=(npx --yes --package @playwright/cli playwright-cli)
    if [[ "${has_session_flag}" != "true" && -n "${PLAYWRIGHT_CLI_SESSION:-}" ]]; then
      cmd+=(--session "${PLAYWRIGHT_CLI_SESSION}")
    fi
    cmd+=("$@")
    
    exec "${cmd[@]}"
    ✓ • 316ms

## Activity

    $ find /home/pham-quang-vinh/.cache/ms-playwright/chromium-1148 /home/pham-quang-vinh/.cache/ms-playwright/chromium_headless_shell-1148 -type f \( -name chrome -o -name headless_shell \) -print | head -10; google-chrome --version; firefox --version
    /home/pham-quang-vinh/.cache/ms-playwright/chromium-1148/chrome-linux/chrome
    /home/pham-quang-vinh/.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell
    Google Chrome 146.0.7680.177
    update.go:193: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/local/share/doc /usr/local/share/doc none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/local/share/doc" because it would affect the host in "/var/lib/snapd"
    update.go:193: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/gimp/2.0/help /usr/share/gimp/2.0/help none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/gimp/2.0/help" because it would affect the host in "/var/lib/snapd"
    update.go:193: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/sphinx_rtd_theme /usr/share/sphinx_rtd_theme none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/sphinx_rtd_theme" because it would affect the host in "/var/lib/snapd"
    update.go:193: cannot change mount namespace according to change mount (/var/lib/snapd/hostfs/usr/share/xubuntu-docs /usr/share/xubuntu-docs none bind,ro 0 0): cannot write to "/var/lib/snapd/hostfs/usr/share/xubuntu-docs" because it would affect the host in "/var/lib/snapd"
    Mozilla Firefox 156.0.1
    ✓ • 451ms

## Assistant — 2026-09-28 15:06:49 (UTC+07:00)

Máy có Node/npm, Chrome và Firefox, nhưng chưa thấy Playwright CLI được cài sẵn. Mình sẽ thử công cụ CLI theo quy trình đang dùng; nếu khởi động được trình duyệt và mở trang mẫu thì môi trường đã sẵn sàng.

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh --help
    playwright-cli - run playwright mcp commands from terminal
    
    Usage: playwright-cli <command> [args] [options]
    Usage: playwright-cli -s=<session> <command> [args] [options]
    
    Core:
      open [url]                  open the browser
      attach [name]               attach to a running playwright browser
      close                       close the browser
      detach                      detach from an attached browser
      goto <url>                  navigate to a url
      type <text>                 type text into editable element
      click <target> [button]     perform click on a web page
      dblclick <target> [button]  perform double click on a web page
      fill <target> <text>        fill text into editable element
      drag <startTarget> <endTarget> perform drag and drop between two elements
      drop <target>               drop files or data onto an element
      hover <target>              hover over element on page
      select <target> <val>       select an option in a dropdown
      upload <files...>           upload one or multiple files
      check <target>              check a checkbox or radio button
      uncheck <target>            uncheck a checkbox or radio button
      snapshot [target]           capture page snapshot to obtain element ref
      find [text]                 search the page snapshot for text or a regexp, returning matching nodes with surrounding context (like search snippets)
      eval <func> [target]        evaluate javascript expression on page or element
      dialog-accept [prompt]      accept a dialog
      dialog-dismiss              dismiss a dialog
      resize <w> <h>              resize the browser window
      delete-data                 delete session data
    
    Navigation:
      go-back                     go back to the previous page
      go-forward                  go forward to the next page
      reload                      reload the current page
    
    Keyboard:
      press <key>                 press a key on the keyboard, `a`, `arrowleft`
      keydown <key>               press a key down on the keyboard
      keyup <key>                 press a key up on the keyboard
    
    Mouse:
      mousemove <x> <y>           move mouse to a given position
      mousedown [button]          press mouse down
      mouseup [button]            press mouse up
      mousewheel <dx> <dy>        scroll mouse wheel
    
    Save as:
      screenshot [target]         screenshot of the current page or element
      pdf                         save page as pdf
    
    Tabs:
      tab-list                    list all tabs
      tab-new [url]               create a new tab
      tab-close [index]           close a browser tab
      tab-select <index>          select a browser tab
    
    Storage:
      state-load <filename>       loads browser storage (authentication) state from a file
      state-save [filename]       saves the current storage (authentication) state to a file
      cookie-list                 list all cookies (optionally filtered by domain/path)
      cookie-get <name>           get a specific cookie by name
      cookie-set <name> <value>   set a cookie with optional flags
      cookie-delete <name>        delete a specific cookie
      cookie-clear                clear all cookies
      localstorage-list           list all localstorage key-value pairs
      localstorage-get <key>      get a localstorage item by key
      localstorage-set <key> <value> set a localstorage item
      localstorage-delete <key>   delete a localstorage item
      localstorage-clear          clear all localstorage
      sessionstorage-list         list all sessionstorage key-value pairs
      sessionstorage-get <key>    get a sessionstorage item by key
      sessionstorage-set <key> <value> set a sessionstorage item
      sessionstorage-delete <key> delete a sessionstorage item
      sessionstorage-clear        clear all sessionstorage
    
    Emulation:
      set-color-scheme <scheme>   emulate the light or dark color scheme
      set-reduced-motion <motion> emulate the reduced motion preference
      set-forced-colors <colors>  emulate forced colors mode
      set-contrast <contrast>     emulate the preferred contrast
      set-media <media>           emulate the css media type
      clear-color-scheme          clear color scheme emulation
      clear-reduced-motion        clear reduced motion emulation
      clear-forced-colors         clear forced colors emulation
      clear-contrast              clear preferred contrast emulation
      clear-media                 clear css media type emulation
    
    Network:
      requests                    list all network requests since loading the page. each request is numbered for use with the `request` command.
      request <index>             show full details (headers, body, response) of a single network request by its number from the `requests` command.
      request-headers <index>     print only the request headers for a single network request by its number from the `requests` command.
      request-body <index>        print only the request body for a single network request by its number from the `requests` command.
      response-headers <index>    print only the response headers for a single network request by its number from the `requests` command.
      response-body <index>       print the response body for a single network request by its number from the `requests` command. textual bodies are inlined; binary bodies are saved to a file and the path is printed.
      route <pattern>             mock network requests matching a url pattern
      route-list                  list all active network routes
      unroute [pattern]           remove routes matching a pattern (or all routes)
      network-state-set <state>   set the browser network state to online or offline
    
    DevTools:
      console [min-level]         list console messages
      run-code [code]             run playwright code snippet
      recording-start             start recording user actions
      recording-stop              stop recording user actions and print them as playwright code
      tracing-start               start trace recording
      tracing-stop                stop trace recording
      video-start [filename]      start video recording
      video-stop                  stop video recording
      video-chapter <title>       add a chapter marker to the video recording
      video-show-actions          annotate subsequent cli/mcp actions on the page with a callout that names the action and, when styled, marks the action point and highlights the target element
      video-hide-actions          stop annotating actions performed on the page
      show                        show playwright dashboard
      pause-at <location>         run the test up to a specific location and pause there
      resume                      resume the test execution
      step-over                   step over the next call in the test
      generate-locator <target>   generate a playwright locator for the given element
      highlight [target]          show (or with --hide, remove) a highlight overlay for an element; `--hide` without a target hides all page highlights.
    
    WebMCP:
      webmcp-list                 list the webmcp tools registered by the page
      webmcp-call <name>          call a webmcp tool registered by the page
    
    Install:
      install                     initialize workspace
      install-browser [browser]   install browser
    
    Browser sessions:
      list                        list browser sessions
      close-all                   close all browser sessions
      kill-all                    forcefully kill all browser sessions (for stale/zombie processes)
    
    Global options:
      --help [command]            print help
      --json                      output response as JSON
      --raw                       output only the result value, without status and code
      --version                   print version
    ✓ • 4.91s

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh open https://testsheepnz.github.io/BasicCalculator.html
    ### Browser `default` opened with pid 40159.
    ### Ran Playwright code
    ```js
    await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
    ```
    ### Page
    - Page URL: https://testsheepnz.github.io/BasicCalculator.html
    - Page Title: Basic Calculator
    ### Snapshot
    - [Snapshot](.playwright-cli/page-2026-09-28T08-07-20-969Z.yml)
    ✓ • 18.94s

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh snapshot
    ### Page
    - Page URL: https://testsheepnz.github.io/BasicCalculator.html
    - Page Title: Basic Calculator
    ### Snapshot
    ```yaml
    - generic [active] [ref=e1]:
      - navigation [ref=e2]:
        - navigation [ref=e3]:
          - generic [ref=e4]:
            - link "TestSheepNZ" [ref=e5] [cursor=pointer]:
              - /url: ./index.html#page-top
            - text: 
            - list [ref=e7]:
              - listitem [ref=e8]:
                - link "Number Game" [ref=e9] [cursor=pointer]:
                  - /url: ./index.html#the-number-game
              - listitem [ref=e10]:
                - link "Automation Kata" [ref=e11] [cursor=pointer]:
                  - /url: ./index.html#test-automation-resources
              - listitem [ref=e12]:
                - link "Workshops" [ref=e13] [cursor=pointer]:
                  - /url: ./index.html#workshop-material
              - listitem [ref=e14]:
                - link "Media" [ref=e15] [cursor=pointer]:
                  - /url: ./index.html#media
              - listitem [ref=e16]:
                - link "Mike Talks" [ref=e17] [cursor=pointer]:
                  - /url: ./index.html#mike-talks
      - banner [ref=e18]:
        - generic [ref=e20]:
          - generic [ref=e21]: Basic Calculator
          - generic [ref=e22]: Selenium Object
      - generic [ref=e26]:
        - heading "Instructions" [level=1] [ref=e27]
        - paragraph
        - paragraph [ref=e28]: The following page is a very basic calculator - I know you have one on your phone, so why do you need another one?
        - paragraph [ref=e29]: The purpose of this page is to provide an object with basic functionality for you to try your first attempt to use a test tool on.
        - paragraph [ref=e30]: You can add/subtract/divide/multiply - all mathematical functions. When chosen, the page checks that you've entered numerical values. You can also toggle whether you want your answer as an integer value.
        - paragraph [ref=e31]: If you choose to concatonate, the system treats the inputs as strings, and won't check numerical values. You'll also not be able to select to get an integer value answer.
        - paragraph
        - paragraph [ref=e32]:
          - generic [ref=e33]: There are multiple builds available. Prototype works perfectly, whereas builds 1-8 have problems. A good set of tests should help identify what the problems are.
        - generic [ref=e34]:
          - generic [ref=e35]: Build
          - combobox [ref=e38]:
            - option "Prototype" [selected]
            - option "1"
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
        - heading [level=3] [ref=e41]
        - generic [ref=e42]:
          - heading "Calculate" [level=2] [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]: First number
            - textbox [ref=e48]
          - generic [ref=e50]:
            - generic [ref=e51]: Second number
            - textbox [ref=e54]
          - generic [ref=e56]:
            - generic [ref=e57]: Operation
            - combobox [ref=e60]:
              - option "Add" [selected]
              - option "Subtract"
              - option "Multiply"
              - option "Divide"
              - option "Concatenate"
          - generic [ref=e64]:
            - button "Calculate" [ref=e65] [cursor=pointer]
            - paragraph
        - generic [ref=e67]:
          - generic [ref=e68]:
            - generic [ref=e69]: Answer
            - textbox [ref=e72]
          - generic [ref=e74]:
            - generic [ref=e75]: Integers only
            - checkbox [ref=e79]
        - paragraph
        - generic [ref=e81]:
          - button "Clear" [ref=e85] [cursor=pointer]
          - paragraph
        - paragraph
      - text:  
      - contentinfo [ref=e87]:
        - generic [ref=e89]:
          - generic [ref=e90]: Copyright © Mike Talks 2020
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "" [ref=e94] [cursor=pointer]:
                - /url: https://twitter.com/TestSheepNZ
            - text: 
            - listitem [ref=e96]:
              - link "" [ref=e97] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/mike-talks-3423348/
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "About" [ref=e102] [cursor=pointer]:
                - /url: "#aboutModal"
            - listitem [ref=e103]:
              - link "Terms of Use" [ref=e104] [cursor=pointer]:
                - /url: "#termsModal"
    ```
    ✓ • 617ms

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh --version; npm list -g --depth=0 | rg -i 'playwright|npm|node'
    0.1.21
    /home/pham-quang-vinh/.nvm/versions/node/v24.18.0/lib
    └── npm@11.16.0
    ✓ • 776ms

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh select e38 1
    ### Ran Playwright code
    ```js
    await page.getByTestId('selectBuild').selectOption('1');
    ```
    ### Page
    - Page URL: https://testsheepnz.github.io/BasicCalculator.html
    - Page Title: Basic Calculator
    ### Snapshot
    - [Snapshot](.playwright-cli/page-2026-09-28T08-07-41-333Z.yml)
    ### Events
    - New console entries: .playwright-cli/console-2026-09-28T08-07-03-624Z.log#L1
    ✓ • 851ms

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh snapshot
    ### Page
    - Page URL: https://testsheepnz.github.io/BasicCalculator.html
    - Page Title: Basic Calculator
    ### Snapshot
    ```yaml
    - generic [active] [ref=e1]:
      - navigation [ref=e2]:
        - navigation [ref=e3]:
          - generic [ref=e4]:
            - link "TestSheepNZ" [ref=e5] [cursor=pointer]:
              - /url: ./index.html#page-top
            - text: 
            - list [ref=e7]:
              - listitem [ref=e8]:
                - link "Number Game" [ref=e9] [cursor=pointer]:
                  - /url: ./index.html#the-number-game
              - listitem [ref=e10]:
                - link "Automation Kata" [ref=e11] [cursor=pointer]:
                  - /url: ./index.html#test-automation-resources
              - listitem [ref=e12]:
                - link "Workshops" [ref=e13] [cursor=pointer]:
                  - /url: ./index.html#workshop-material
              - listitem [ref=e14]:
                - link "Media" [ref=e15] [cursor=pointer]:
                  - /url: ./index.html#media
              - listitem [ref=e16]:
                - link "Mike Talks" [ref=e17] [cursor=pointer]:
                  - /url: ./index.html#mike-talks
      - banner [ref=e18]:
        - generic [ref=e20]:
          - generic [ref=e21]: Basic Calculator
          - generic [ref=e22]: Selenium Object
      - generic [ref=e26]:
        - heading "Instructions" [level=1] [ref=e27]
        - paragraph
        - paragraph [ref=e28]: The following page is a very basic calculator - I know you have one on your phone, so why do you need another one?
        - paragraph [ref=e29]: The purpose of this page is to provide an object with basic functionality for you to try your first attempt to use a test tool on.
        - paragraph [ref=e30]: You can add/subtract/divide/multiply - all mathematical functions. When chosen, the page checks that you've entered numerical values. You can also toggle whether you want your answer as an integer value.
        - paragraph [ref=e31]: If you choose to concatonate, the system treats the inputs as strings, and won't check numerical values. You'll also not be able to select to get an integer value answer.
        - paragraph
        - paragraph [ref=e32]:
          - generic [ref=e33]: There are multiple builds available. Prototype works perfectly, whereas builds 1-8 have problems. A good set of tests should help identify what the problems are.
        - generic [ref=e34]:
          - generic [ref=e35]: Build
          - combobox [ref=e38]:
            - option "Prototype"
            - option "1" [selected]
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
        - heading [level=3] [ref=e41]
        - generic [ref=e42]:
          - heading "Calculate" [level=2] [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]: First number
            - textbox [ref=e48]
          - generic [ref=e50]:
            - generic [ref=e51]: Second number
            - textbox [ref=e54]
          - generic [ref=e56]:
            - generic [ref=e57]: Operation
            - combobox [ref=e60]:
              - option "Add" [selected]
              - option "Subtract"
              - option "Multiply"
              - option "Divide"
              - option "Concatenate"
          - generic [ref=e64]:
            - button "Calculate" [ref=e65] [cursor=pointer]
            - paragraph
        - generic [ref=e67]:
          - generic [ref=e68]:
            - generic [ref=e69]: Answer
            - textbox [ref=e72]
          - generic [ref=e74]:
            - generic [ref=e75]: Integers only
            - checkbox [ref=e79]
        - paragraph
        - generic [ref=e81]:
          - button "Clear" [ref=e85] [cursor=pointer]
          - paragraph
        - paragraph
      - text:  
      - contentinfo [ref=e87]:
        - generic [ref=e89]:
          - generic [ref=e90]: Copyright © Mike Talks 2020
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "" [ref=e94] [cursor=pointer]:
                - /url: https://twitter.com/TestSheepNZ
            - text: 
            - listitem [ref=e96]:
              - link "" [ref=e97] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/mike-talks-3423348/
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "About" [ref=e102] [cursor=pointer]:
                - /url: "#aboutModal"
            - listitem [ref=e103]:
              - link "Terms of Use" [ref=e104] [cursor=pointer]:
                - /url: "#termsModal"
    ```
    ✓ • 620ms

## Activity

    $ git status --short; find /home/pham-quang-vinh/.npm/_npx -path '*/node_modules/@playwright/cli/package.json' | head -3
    /home/pham-quang-vinh/.npm/_npx/31e32ef8478fbf80/node_modules/@playwright/cli/package.json
    ✓ • 0ms

## Activity

    $ bash /home/pham-quang-vinh/.codex/skills/playwright/scripts/playwright_cli.sh close
    Browser 'default' closed
    
    ✓ • 514ms

## Assistant — 2026-09-28 15:07:58 (UTC+07:00)

Máy **đã sẵn sàng chạy Playwright qua CLI**. Node `v24.18.0` và npm `11.16.0` hoạt động; Playwright CLI `0.1.21` khởi động được trình duyệt, mở [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html), lấy snapshot và chọn được Build 1. Mình đã đóng phiên kiểm tra; repository không có file thay đổi.

Dự án hiện chưa có `@playwright/test` hoặc cấu hình để chạy một bộ test tự động bằng `npm test`. Nếu bước tiếp theo là thực thi các test case qua CLI, công cụ đã đủ.

## User — 2026-09-28 15:18:05 (UTC+07:00)

hãy plan để thực hiện test run chia thành các sprint giúp tôi

## Assistant — 2026-09-28 15:18:24 (UTC+07:00)

Mình sẽ dựa trên số test case hiện có và cách nhóm đã chia module để lập các sprint theo Build, kèm khối lượng chạy và mẫu ghi kết quả cho mỗi đợt.

## Activity

    $ find tests/test-runs -maxdepth 2 -type f -print -exec sed -n '1,70p' {} \;
    tests/test-runs/sprint-2-regression.md
    # 🔄 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN KIỂM THỬ: SPRINT 2 (BUG HUNTING BUILDS 1-9)
    
    ---
    
    ## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)
    
    | Mục | Thông tin chi tiết |
    | :--- | :--- |
    | **Mã Test Run** | `TR-SPRINT-02-BUILDS` |
    | **Tên đợt kiểm thử** | Sprint 2 - Bug Hunting Across Builds 1 to 9 & Regression |
    | **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
    | **Các phiên bản kiểm thử** | `Build 1` đến `Build 9` |
    | **Thời gian thực hiện** | 2026-10-05 đến 2026-10-09 |
    | **Người thực hiện** | Nhóm 4 thành viên |
    
    ---
    
    ## 🎯 CHIẾN LƯỢC KIỂM THỬ (TEST STRATEGY)
    1. Chạy lại bộ kịch bản kiểm thử cốt lõi (Regression Suite) trên từng bản Build từ 1 đến 9.
    2. Đối chiếu kết quả thực tế trên từng Build với kết quả chuẩn trên bản Prototype.
    3. Ghi nhận lỗi đặc thù của từng bản Build vào bảng ma trận phát hiện lỗi.
    
    ---
    
    ## 🐛 MA TRẬN BẮT LỖI TRÊN CÁC BẢN BUILD (BUG HUNTING MATRIX)
    
    | Mã Build | Module ảnh hưởng | Mã Test Case | Hiện tượng lỗi thực tế phát hiện | Đánh giá lỗi |
    | :---: | :--- | :---: | :--- | :---: |
    | **Build 1** | Module 1 (Arithmetic) | `TC-ARI-001` | Phép trừ bị tính sai kết quả hoặc phép cộng cộng chuỗi | Có lỗi |
    | **Build 2** | Module 2 (Division) | `TC-DIV-002` | Chia cho 0 không báo lỗi mà trả về giá trị bất thường | Có lỗi |
    | **Build 3** | Module 3 (Concatenate) | `TC-CON-001` | Ghép chuỗi bị chèn ký tự lạ hoặc lỗi hiển thị | Có lỗi |
    | **Build 4** | Module 4 (Formatting) | `TC-FMT-001` | Checkbox "Integers only" không làm tròn số | Có lỗi |
    
    ---
    
    ## 🚀 KẾT LUẬN
    - Ma trận bắt lỗi giúp sinh viên đối sánh chính xác hành vi sai lệch giữa phiên bản lỗi và phiên bản chuẩn Prototype theo đúng mục tiêu môn học Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM).
    tests/test-runs/sprint-1-test-run.md
    # 📋 KẾ HOẠCH & KẾT QUẢ THỰC HIỆN TEST RUN: SPRINT 1 (PROTOTYPE)
    
    ---
    
    ## 📌 THÔNG TIN ĐỢT KIỂM THỬ (TEST RUN METADATA)
    
    | Mục | Thông tin chi tiết |
    | :--- | :--- |
    | **Mã Test Run** | `TR-SPRINT-01` |
    | **Tên đợt kiểm thử** | Sprint 1 Test Execution - Basic Calculator Prototype & Baseline Testing |
    | **Môi trường thử nghiệm** | Web: `https://testsheepnz.github.io/BasicCalculator.html` |
    | **Phiên bản ứng dụng (Build)** | `Build 0 (Prototype)` |
    | **Trình duyệt / Hệ điều hành** | Chrome 122, Edge, Firefox trên macOS / Windows 11 |
    | **Thời gian thực hiện** | 2026-09-28 đến 2026-10-02 |
    | **Trưởng nhóm QA** | QA Lead |
    | **Người thực hiện** | Nhóm 4 thành viên (Thành viên 1, 2, 3, 4) |
    
    ---
    
    ## 📊 TỔNG KẾT KẾT QUẢ (EXECUTIVE SUMMARY)
    
    | Chỉ số | Số lượng | Tỷ lệ (%) |
    | :--- | :---: | :---: |
    | **Tổng số Test Cases** | 8 | 100% |
    | 🟢 **Đạt (Passed)** | 8 | 100% |
    | 🔴 **Thất bại (Failed)** | 0 | 0% |
    | 🟡 **Bị chặn (Blocked)** | 0 | 0% |
    | ⚪ **Chưa chạy (Untested)** | 0 | 0% |
    | **Tỷ lệ Pass / Executed** | **8 / 8** | **100%** |
    
    ---
    
    ## 📝 BẢNG CHI TIẾT THỰC THI TEST CASES (EXECUTION DETAILS)
    
    | STT | Mã Test Case | Module | Tên Test Case | Kết quả | Người test | Ngày test | Ghi chú |
    | :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
    | 1 | `TC-ARI-001` | Module 1 | Phép cộng hai số nguyên dương | `PASS` | Thành viên 1 | 2026-09-28 | Kết quả chính xác |
    | 2 | `TC-ARI-002` | Module 1 | Kiểm tra biên độ dài 10 chữ số | `PASS` | Thành viên 1 | 2026-09-28 | maxlength=10 hoạt động |
    | 3 | `TC-DIV-001` | Module 2 | Phép chia hết hai số nguyên | `PASS` | Thành viên 2 | 2026-09-28 | Kết quả chính xác |
    | 4 | `TC-DIV-002` | Module 2 | Bắt lỗi ngoại lệ chia cho 0 | `PASS` | Thành viên 2 | 2026-09-28 | Bắt đúng "Divide by zero error!" |
    | 5 | `TC-CON-001` | Module 3 | Phép ghép chuỗi hai số hợp lệ | `PASS` | Thành viên 3 | 2026-09-28 | Nối chuỗi đúng |
    | 6 | `TC-CON-002` | Module 3 | Bắt lỗi nhập chữ vào phép toán | `PASS` | Thành viên 3 | 2026-09-28 | Bắt đúng "is not a number" |
    | 7 | `TC-FMT-001` | Module 4 | Làm tròn số nguyên Integers only | `PASS` | Thành viên 4 | 2026-09-28 | Làm tròn đúng |
    | 8 | `TC-FMT-002` | Module 4 | Nút Clear xóa kết quả | `PASS` | Thành viên 4 | 2026-09-28 | Reset thành công |
    
    ---
    
    ## 🎯 ĐÁNH GIÁ & KẾT LUẬN (CONCLUSION)
    - **Đánh giá chung**: Trên phiên bản chuẩn **Prototype**, toàn bộ 4 Module đều hoạt động chính xác theo đặc tả toán học và yêu cầu giao diện.
    - **Kế hoạch tiếp theo**: Tiến hành Sprint 2 kiểm thử đối sánh (Bug Hunting Matrix) trên các bản build lỗi từ **Build 1 đến Build 9** để bắt các lỗi có chủ đích.
    ✓ • 0ms

## Activity

    $ rg -n 'Sprint|test run|Test Run|Module 1|Module 2|Module 3|Module 4|Build 1|Build 9' README.md docs tests/test-runs tests/test-summary 2>/dev/null | head -120
    README.md:21:| **Thành viên 1** | **Module 1**: Phép tính Số học Cơ bản & Kiểm thử Biên | - Phép toán Cộng (`Add`), Trừ (`Subtract`), Nhân (`Multiply`).<br>- Phân tích giá trị biên (độ dài 10 ký tự, số âm, số 0, số thập phân). | [Xem Module 1](docs/02_thiet_ke_test_cases.md#-module-1-phép-tính-số-học-cơ-bản--kiểm-thử-biên) |
    README.md:22:| **Thành viên 2** | **Module 2**: Phép Chia & Ngoại lệ Toán học | - Phép Chia (`Divide`) số nguyên, số thực, số tuần hoàn.<br>- Bắt lỗi chia cho 0 (`Divide by zero error!`).<br>- Thứ tự toán hạng. | [Xem Module 2](docs/02_thiet_ke_test_cases.md#-module-2-phép-chia--xử-lý-ngoại-lệ-toán-học) |
    README.md:23:| **Thành viên 3** | **Module 3**: Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | - Phép Ghép chuỗi (`Concatenate`) chuỗi chữ, chuỗi số, ký tự đặc biệt.<br>- Bắt lỗi nhập liệu không phải số (`is not a number`).<br>- Trạng thái ẩn/hiện của checkbox Integers only. | [Xem Module 3](docs/02_thiet_ke_test_cases.md#-module-3-ghép-chuỗi--kiểm-tra-hợp-lệ-dữ-liệu-đầu-vào) |
    README.md:24:| **Thành viên 4** | **Module 4**: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản | - Tính năng làm tròn số nguyên (*Integers only*).<br>- Nút `Calculate` (loading effect), nút `Clear` (reset dữ liệu).<br>- Ma trận bắt lỗi trên 9 bản build lỗi (`Build 1` đến `Build 9`). | [Xem Module 4](docs/02_thiet_ke_test_cases.md#-module-4-định-dạng-kết-quả-điều-khiển--kiểm-thử-đa-phiên-bản-builds) |
    tests/test-summary/traceability-matrix.md:14:| **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 18 | Chưa đối chiếu báo cáo với testcase |
    tests/test-summary/traceability-matrix.md:15:| **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 13 | Chưa đối chiếu báo cáo với testcase |
    tests/test-summary/traceability-matrix.md:16:| **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 22 | Chưa đối chiếu báo cáo với testcase |
    tests/test-summary/traceability-matrix.md:17:| **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 16 | Testcase mới: Not Run |
    tests/test-summary/traceability-matrix.md:25:| **FR-CALC-01** | Module 1 (Arithmetic) | Thực hiện chính xác các phép toán Cộng, Trừ, Nhân và ràng buộc biên độ dài tối đa 10 ký tự. | `TC-ARI-001` → `TC-ARI-018` | Functional<br>Boundary | Phân vùng tương đương (EP)<br>Phân tích giá trị biên (BVA) |
    tests/test-summary/traceability-matrix.md:26:| **FR-CALC-02** | Module 2 (Division) | Thực hiện phép chia theo thứ tự Number 1 / Number 2 với số nguyên, số thực và số âm; xử lý mọi trường hợp mẫu số bằng 0 bằng thông báo "Divide by zero error!"; xóa lỗi sau một phép tính hợp lệ. | `TC-DIV-001` đến `TC-DIV-013` | Functional<br>Negative<br>Boundary<br>State Transition | Phân vùng tương đương (EP)<br>Đoán lỗi (Error Guessing)<br>Phân tích giá trị biên (BVA)<br>Bảng quyết định<br>State Transition |
    tests/test-summary/traceability-matrix.md:27:| **FR-CALC-03** | Module 3 (Concatenate) | Ghép chuỗi văn bản và số; kiểm tra validation bắt lỗi nhập ký tự không phải số ("is not a number"). | `TC-CON-001`–`TC-CON-022` | Functional<br>Validation | Phân vùng tương đương (EP)<br>Negative Testing |
    tests/test-summary/traceability-matrix.md:28:| **FR-CALC-04** | Module 4 (Formatting & Builds) | Integers only, Clear, trạng thái Calculate và đối sánh Prototype với Build 1–9. | `TC-FMT-001`–`TC-FMT-007`<br>`TC-BLD-001`–`TC-BLD-009` | Functional<br>UI / State<br>Regression | State Transition<br>Bug Hunting Matrix |
    tests/test-summary/traceability-matrix.md:30:Các testcase Module 4 mới chỉ được thiết kế (`Not Run`); tỷ lệ bao phủ thực thi chỉ được cập nhật sau khi chạy và ghi bằng chứng. Báo cáo test run cũ chưa được sửa hoặc dùng làm kết quả thực thi cho các case mới.
    docs/01_phan_chia_module.md:30:| **Thành viên 1** | **Module 1: Phép tính Số học Cơ bản & Kiểm thử Biên** | - Phép Cộng (`Add`), Trừ (`Subtract`), Nhân (`Multiply`).<br>- Kiểm thử biên độ dài (10 ký tự).<br>- Giá trị cực trị, số âm, số 0, số thập phân. | - Phân vùng tương đương (EP)<br>- Phân tích giá trị biên (BVA) |
    docs/01_phan_chia_module.md:31:| **Thành viên 2** | **Module 2: Phép Chia & Xử lý Ngoại lệ Toán học** | - Phép Chia (`Divide`) số nguyên, số thập phân, tuần hoàn.<br>- Xử lý ngoại lệ Chia cho 0 (`Divide by zero error!`).<br>- Kiểm tra thứ tự toán hạng (Number 1 / Number 2). | - Đoán lỗi (Error Guessing)<br>- Bảng quyết định (Decision Table)<br>- Negative Testing |
    docs/01_phan_chia_module.md:32:| **Thành viên 3** | **Module 3: Ghép Chuỗi & Kiểm thử Tính hợp lệ Dữ liệu (Validation)** | - Phép Ghép chuỗi (`Concatenate`) với số, chữ, ký tự đặc biệt, chuỗi rỗng.<br>- Bắt lỗi không phải số (`is not a number`) trên các phép toán số học.<br>- Trạng thái ẩn/hiện của checkbox *Integers only*. | - Phân vùng tương đương (Valid/Invalid)<br>- Kiểm thử trạng thái giao diện (UI State) |
    docs/01_phan_chia_module.md:33:| **Thành viên 4** | **Module 4: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản (Builds)** | - Tùy chọn *Integers only* (làm tròn số nguyên, chuyển đổi tức thì).<br>- Nút `Calculate` (loading state), nút `Clear` (reset dữ liệu).<br>- Phát hiện bug trên 9 phiên bản lỗi (`Build 1` đến `Build 9`). | - State Transition Testing<br>- Mutation / Regression Testing<br>- Bug Hunting Matrix |
    docs/01_phan_chia_module.md:39:### 👤 Module 1: Phép tính Số học Cơ bản (Add, Subtract, Multiply) & Kiểm thử Biên
    docs/01_phan_chia_module.md:63:### 👤 Module 2: Phép Chia (Divide) & Xử lý Ngoại lệ Toán học (Error Handling)
    docs/01_phan_chia_module.md:81:### 👤 Module 3: Ghép Chuỗi (Concatenate) & Kiểm thử Hợp lệ Dữ liệu Đầu vào (Validation)
    docs/01_phan_chia_module.md:103:### 👤 Module 4: Định dạng Kết quả, Điều khiển Giao diện & Kiểm thử Đa phiên bản (Builds 1–9)
    docs/01_phan_chia_module.md:114:  3. Kiểm thử **Ma trận Phát hiện Lỗi trên các Build (Build 1 đến 9)**:
    docs/01_phan_chia_module.md:115:     - *Build 1*: Không kiểm tra tính hợp lệ của số.
    docs/01_phan_chia_module.md:123:     - *Build 9*: Các phần tử giao diện bị biến mất (Number 2 và nút Calculate).
    tests/test-runs/sprint-1-test-run.md:9:| **Mã Test Run** | `TR-SPRINT-01` |
    tests/test-runs/sprint-1-test-run.md:10:| **Tên đợt kiểm thử** | Sprint 1 Test Execution - Basic Calculator Prototype & Baseline Testing |
    tests/test-runs/sprint-1-test-run.md:37:| 1 | `TC-ARI-001` | Module 1 | Phép cộng hai số nguyên dương | `PASS` | Thành viên 1 | 2026-09-28 | Kết quả chính xác |
    tests/test-runs/sprint-1-test-run.md:38:| 2 | `TC-ARI-002` | Module 1 | Kiểm tra biên độ dài 10 chữ số | `PASS` | Thành viên 1 | 2026-09-28 | maxlength=10 hoạt động |
    tests/test-runs/sprint-1-test-run.md:39:| 3 | `TC-DIV-001` | Module 2 | Phép chia hết hai số nguyên | `PASS` | Thành viên 2 | 2026-09-28 | Kết quả chính xác |
    tests/test-runs/sprint-1-test-run.md:40:| 4 | `TC-DIV-002` | Module 2 | Bắt lỗi ngoại lệ chia cho 0 | `PASS` | Thành viên 2 | 2026-09-28 | Bắt đúng "Divide by zero error!" |
    tests/test-runs/sprint-1-test-run.md:41:| 5 | `TC-CON-001` | Module 3 | Phép ghép chuỗi hai số hợp lệ | `PASS` | Thành viên 3 | 2026-09-28 | Nối chuỗi đúng |
    tests/test-runs/sprint-1-test-run.md:42:| 6 | `TC-CON-002` | Module 3 | Bắt lỗi nhập chữ vào phép toán | `PASS` | Thành viên 3 | 2026-09-28 | Bắt đúng "is not a number" |
    tests/test-runs/sprint-1-test-run.md:43:| 7 | `TC-FMT-001` | Module 4 | Làm tròn số nguyên Integers only | `PASS` | Thành viên 4 | 2026-09-28 | Làm tròn đúng |
    tests/test-runs/sprint-1-test-run.md:44:| 8 | `TC-FMT-002` | Module 4 | Nút Clear xóa kết quả | `PASS` | Thành viên 4 | 2026-09-28 | Reset thành công |
    tests/test-runs/sprint-1-test-run.md:50:- **Kế hoạch tiếp theo**: Tiến hành Sprint 2 kiểm thử đối sánh (Bug Hunting Matrix) trên các bản build lỗi từ **Build 1 đến Build 9** để bắt các lỗi có chủ đích.
    tests/test-runs/sprint-2-regression.md:9:| **Mã Test Run** | `TR-SPRINT-02-BUILDS` |
    tests/test-runs/sprint-2-regression.md:10:| **Tên đợt kiểm thử** | Sprint 2 - Bug Hunting Across Builds 1 to 9 & Regression |
    tests/test-runs/sprint-2-regression.md:12:| **Các phiên bản kiểm thử** | `Build 1` đến `Build 9` |
    tests/test-runs/sprint-2-regression.md:29:| **Build 1** | Module 1 (Arithmetic) | `TC-ARI-001` | Phép trừ bị tính sai kết quả hoặc phép cộng cộng chuỗi | Có lỗi |
    tests/test-runs/sprint-2-regression.md:30:| **Build 2** | Module 2 (Division) | `TC-DIV-002` | Chia cho 0 không báo lỗi mà trả về giá trị bất thường | Có lỗi |
    tests/test-runs/sprint-2-regression.md:31:| **Build 3** | Module 3 (Concatenate) | `TC-CON-001` | Ghép chuỗi bị chèn ký tự lạ hoặc lỗi hiển thị | Có lỗi |
    tests/test-runs/sprint-2-regression.md:32:| **Build 4** | Module 4 (Formatting) | `TC-FMT-001` | Checkbox "Integers only" không làm tròn số | Có lỗi |
    ✓ • 0ms

## Activity

    $ find tests -maxdepth 3 -type f | sort | tail -100; git status --short; git log -1 --format='%h %s'
    tests/test-cases/module-1-arithmetic/TC-ARI-001.md
    tests/test-cases/module-1-arithmetic/TC-ARI-002.md
    tests/test-cases/module-1-arithmetic/TC-ARI-003.md
    tests/test-cases/module-1-arithmetic/TC-ARI-004.md
    tests/test-cases/module-1-arithmetic/TC-ARI-005.md
    tests/test-cases/module-1-arithmetic/TC-ARI-006.md
    tests/test-cases/module-1-arithmetic/TC-ARI-007.md
    tests/test-cases/module-1-arithmetic/TC-ARI-008.md
    tests/test-cases/module-1-arithmetic/TC-ARI-009.md
    tests/test-cases/module-1-arithmetic/TC-ARI-010.md
    tests/test-cases/module-1-arithmetic/TC-ARI-011.md
    tests/test-cases/module-1-arithmetic/TC-ARI-012.md
    tests/test-cases/module-1-arithmetic/TC-ARI-013.md
    tests/test-cases/module-1-arithmetic/TC-ARI-014.md
    tests/test-cases/module-1-arithmetic/TC-ARI-015.md
    tests/test-cases/module-1-arithmetic/TC-ARI-016.md
    tests/test-cases/module-1-arithmetic/TC-ARI-017.md
    tests/test-cases/module-1-arithmetic/TC-ARI-018.md
    tests/test-cases/module-2-division/TC-DIV-001.md
    tests/test-cases/module-2-division/TC-DIV-002.md
    tests/test-cases/module-2-division/TC-DIV-003.md
    tests/test-cases/module-2-division/TC-DIV-004.md
    tests/test-cases/module-2-division/TC-DIV-005.md
    tests/test-cases/module-2-division/TC-DIV-006.md
    tests/test-cases/module-2-division/TC-DIV-007.md
    tests/test-cases/module-2-division/TC-DIV-008.md
    tests/test-cases/module-2-division/TC-DIV-009.md
    tests/test-cases/module-2-division/TC-DIV-010.md
    tests/test-cases/module-2-division/TC-DIV-011.md
    tests/test-cases/module-2-division/TC-DIV-012.md
    tests/test-cases/module-2-division/TC-DIV-013.md
    tests/test-cases/module-3-concatenate/TC-CON-001.md
    tests/test-cases/module-3-concatenate/TC-CON-002.md
    tests/test-cases/module-3-concatenate/TC-CON-003.md
    tests/test-cases/module-3-concatenate/TC-CON-004.md
    tests/test-cases/module-3-concatenate/TC-CON-005.md
    tests/test-cases/module-3-concatenate/TC-CON-006.md
    tests/test-cases/module-3-concatenate/TC-CON-007.md
    tests/test-cases/module-3-concatenate/TC-CON-008.md
    tests/test-cases/module-3-concatenate/TC-CON-009.md
    tests/test-cases/module-3-concatenate/TC-CON-010.md
    tests/test-cases/module-3-concatenate/TC-CON-011.md
    tests/test-cases/module-3-concatenate/TC-CON-012.md
    tests/test-cases/module-3-concatenate/TC-CON-013.md
    tests/test-cases/module-3-concatenate/TC-CON-014.md
    tests/test-cases/module-3-concatenate/TC-CON-015.md
    tests/test-cases/module-3-concatenate/TC-CON-016.md
    tests/test-cases/module-3-concatenate/TC-CON-017.md
    tests/test-cases/module-3-concatenate/TC-CON-018.md
    tests/test-cases/module-3-concatenate/TC-CON-019.md
    tests/test-cases/module-3-concatenate/TC-CON-020.md
    tests/test-cases/module-3-concatenate/TC-CON-021.md
    tests/test-cases/module-3-concatenate/TC-CON-022.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-001.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-002.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-003.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-004.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-005.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-006.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-007.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-008.md
    tests/test-cases/module-4-formatting-builds/TC-BLD-009.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-001.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-002.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-003.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-004.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-005.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-006.md
    tests/test-cases/module-4-formatting-builds/TC-FMT-007.md
    tests/test-runs/sprint-1-test-run.md
    tests/test-runs/sprint-2-regression.md
    tests/test-summary/traceability-matrix.md
    6c29796 test: parameterize test cases for builds 1 through 9
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        for d in sorted(Path('tests/test-cases').iterdir()):
         if d.is_dir(): print(d.name,len(list(d.glob('TC-*.md'))))
        PY
    module-1-arithmetic 18
    module-2-division 13
    module-3-concatenate 22
    module-4-formatting-builds 16
    ✓ • 0ms

## Assistant — 2026-09-28 15:19:09 (UTC+07:00)

Mình đề xuất **3 sprint chạy test**, mỗi sprint kiểm tra toàn bộ 69 test case trên 3 Build. Như vậy kế hoạch có **621 lượt theo cặp test case–Build**; các case có nhiều dòng dữ liệu sẽ cần nhiều lần thao tác hơn.

| Giai đoạn | Build | Khối lượng | Kết quả cần có |
|---|---|---:|---|
| Chuẩn bị | Prototype để đối chiếu các expected result chưa rõ | Chạy thử có chọn lọc | Chốt môi trường, Playwright và mẫu ghi kết quả |
| Sprint 1 | 1–3 | 207 lượt | Test run, bằng chứng, bug liên quan |
| Sprint 2 | 4–6 | 207 lượt | Test run, bằng chứng, bug liên quan |
| Sprint 3 | 7–9 | 207 lượt | Test run, bằng chứng, tổng hợp cuối đợt |

Mỗi thành viên chạy module mình phụ trách trên **từng Build**: Module 1 có 18 case, Module 2 có 13, Module 3 của bạn có 22, Module 4 có 16. Riêng Module 3 là **66 lượt mỗi sprint**. Nên chạy ca kiểm tra các điều khiển chính trước; nếu một Build thiếu điều khiển khiến ca khác không thể thực hiện, ghi rõ `Blocked` cùng ảnh và lý do, không đánh `Pass`.

Mỗi dòng test run cần ghi tối thiểu: **Sprint, Build, Test Case ID, người chạy, thời điểm, Pass/Fail/Blocked, actual result, đường dẫn bằng chứng Playwright và bug Issue**. Một lỗi ảnh hưởng nhiều case có thể dùng một Issue, nhưng phải liên kết đủ các case bị ảnh hưởng. Chỉ kết thúc sprint khi mọi cặp case–Build đã có kết quả hoặc lý do chưa chạy rõ ràng.

Hai file [Sprint 1](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-1-test-run.md) và [Sprint 2](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-2-regression.md) hiện mô tả kế hoạch cũ và có sẵn kết quả `PASS`; **không nên dùng các dòng đó làm bằng chứng cho đợt chạy mới**.

## User — 2026-09-28 15:20:02 (UTC+07:00)

ok hãy sửa lại giúp tôi

## Assistant — 2026-09-28 15:21:01 (UTC+07:00)

Mình sẽ thay hai test run cũ bằng biểu mẫu chưa thực thi, thêm Sprint 3, và tạo sẵn 69 dòng test case cho mỗi Build. Các dòng sẽ bắt đầu ở `Not Run`; mình sẽ bỏ những kết quả `PASS` cũ chưa có bằng chứng chạy trong đợt này.

## Activity

    $ sed -n '1,80p' tests/test-summary/traceability-matrix.md; sed -n '1,80p' .github/ISSUE_TEMPLATE/bug_report.md
    # 📊 MA TRẬN TRUY XUẤT NGUỒN GỐC YÊU CẦU (REQUIREMENTS TRACEABILITY MATRIX - RTM)
    
    ---
    
    ## 📌 1. TỔNG QUAN & MỤC TIÊU
    Ma trận Truy xuất Nguồn gốc Yêu cầu (RTM) đối với ứng dụng **Basic Calculator** nhằm đảm bảo toàn bộ 4 Module chức năng của hệ thống được bao phủ đầy đủ bởi các kịch bản kiểm thử (Test Cases), phục vụ kiểm thử đối sánh giữa bản **Prototype** và **Builds 1 - 9**.
    
    ---
    
    ## 📈 2. THỐNG KÊ TESTCASE THEO 4 MODULE
    
    | Module | Tên Module | Người phụ trách | Số Test Cases | Trạng thái thực thi |
    | :---: | :--- | :--- | :---: | :---: |
    | **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 18 | Chưa đối chiếu báo cáo với testcase |
    | **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 13 | Chưa đối chiếu báo cáo với testcase |
    | **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 22 | Chưa đối chiếu báo cáo với testcase |
    | **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 16 | Testcase mới: Not Run |
    
    ---
    
    ## 🗺️ 3. BẢNG MA TRẬN TRUY XUẤT (TRACEABILITY MATRIX)
    
    | Mã Yêu cầu (Req ID) | Module | Mô tả Yêu cầu Chức năng | Mã Test Case | Loại kiểm thử | Kỹ thuật áp dụng |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | **FR-CALC-01** | Module 1 (Arithmetic) | Thực hiện chính xác các phép toán Cộng, Trừ, Nhân và ràng buộc biên độ dài tối đa 10 ký tự. | `TC-ARI-001` → `TC-ARI-018` | Functional<br>Boundary | Phân vùng tương đương (EP)<br>Phân tích giá trị biên (BVA) |
    | **FR-CALC-02** | Module 2 (Division) | Thực hiện phép chia theo thứ tự Number 1 / Number 2 với số nguyên, số thực và số âm; xử lý mọi trường hợp mẫu số bằng 0 bằng thông báo "Divide by zero error!"; xóa lỗi sau một phép tính hợp lệ. | `TC-DIV-001` đến `TC-DIV-013` | Functional<br>Negative<br>Boundary<br>State Transition | Phân vùng tương đương (EP)<br>Đoán lỗi (Error Guessing)<br>Phân tích giá trị biên (BVA)<br>Bảng quyết định<br>State Transition |
    | **FR-CALC-03** | Module 3 (Concatenate) | Ghép chuỗi văn bản và số; kiểm tra validation bắt lỗi nhập ký tự không phải số ("is not a number"). | `TC-CON-001`–`TC-CON-022` | Functional<br>Validation | Phân vùng tương đương (EP)<br>Negative Testing |
    | **FR-CALC-04** | Module 4 (Formatting & Builds) | Integers only, Clear, trạng thái Calculate và đối sánh Prototype với Build 1–9. | `TC-FMT-001`–`TC-FMT-007`<br>`TC-BLD-001`–`TC-BLD-009` | Functional<br>UI / State<br>Regression | State Transition<br>Bug Hunting Matrix |
    
    Các testcase Module 4 mới chỉ được thiết kế (`Not Run`); tỷ lệ bao phủ thực thi chỉ được cập nhật sau khi chạy và ghi bằng chứng. Báo cáo test run cũ chưa được sửa hoặc dùng làm kết quả thực thi cho các case mới.
    ---
    name: 🐛 Bug Report
    about: Báo cáo lỗi phần mềm được phát hiện trong quá trình kiểm thử
    title: "[BUG] <Mô tả ngắn gọn về lỗi>"
    labels: ["bug", "qa"]
    assignees: ""
    ---
    
    ## 📌 THÔNG TIN LỖI (DEFECT INFORMATION)
    - **Mã Bug ID**: `BUG-XXX`
    - **Mã Test Case liên quan**: `TC-XXX-XXX`
    - **Module / Chức năng bị ảnh hưởng**: [ví dụ: Login / Checkout / Arithmetic]
    - **Môi trường (Environment)**: [ví dụ: Staging / Prototype / Build 1]
    - **Trình duyệt / Thiết bị (Browser / OS)**: [ví dụ: Chrome 122 trên macOS]
    - **Mức độ nghiêm trọng (Severity)**: [Trivial / Minor / Major / Critical / Blocker]
    - **Mức độ ưu tiên (Priority)**: [Low / Medium / High / Urgent]
    
    ---
    
    ## 📝 MÔ TẢ LỖI (DESCRIPTION)
    Mô tả rõ ràng và ngắn gọn về lỗi xảy ra.
    
    ---
    
    ## 👣 CÁC BƯỚC TÁI HIỆN LỖI (STEPS TO REPRODUCE)
    1. Truy cập vào trang `...`
    2. Nhập dữ liệu `...` vào trường `...`
    3. Nhấn vào nút `...`
    4. Quan sát kết quả hiển thị trên màn hình.
    
    ---
    
    ## 🎯 KẾT QUẢ MONG ĐỢI (EXPECTED BEHAVIOR)
    Hệ thống phải hoạt động như thế nào theo tài liệu đặc tả / test case.
    
    ---
    
    ## 💥 KẾT QUẢ THỰC TẾ (ACTUAL BEHAVIOR)
    Hệ thống thực tế phản hồi như thế nào (kèm thông báo lỗi hoặc hành vi sai lệch).
    
    ---
    
    ## 📸 HÌNH ẢNH / LOG MINH CHỨNG (SCREENSHOTS & LOGS)
    *Chèn ảnh chụp màn hình, ảnh GIF hoặc log console/network tại đây nếu có.*
    ✓ • 0ms

## Activity

    $ git status --short --branch; find tests/test-runs -maxdepth 2 -type f -print | sort; git log -1 --format='%h %s'
    ## main...origin/main
    tests/test-runs/sprint-1-test-run.md
    tests/test-runs/sprint-2-regression.md
    6c29796 test: parameterize test cases for builds 1 through 9
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        from collections import Counter
        files=sorted(Path('tests/test-cases').glob('**/TC-*.md'))
        print('total',len(files))
        print(Counter(p.parent.name for p in files))
        for p in files:
         if not p.read_text().startswith(f'# {p.stem}:'):
          print('title mismatch',p)
        PY
    total 69
    Counter({'module-3-concatenate': 22, 'module-1-arithmetic': 18, 'module-4-formatting-builds': 16, 'module-2-division': 13})
    ✓ • 0ms

## Activity

    file changes: Completed · 1 changes
    Add: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/README.md
    # Kế hoạch thực hiện test run — Basic Calculator
    
    ## Phạm vi
    
    Bộ kiểm thử hiện có 69 test case: Module 1 có 18, Module 2 có 13, Module 3 có 22 và Module 4 có 16. Mỗi test case được chạy riêng trên từng Build từ 1 đến 9. Tổng cộng có 621 cặp **Test Case ID × Build** cần ghi kết quả; một test case có nhiều dòng dữ liệu chỉ được đánh Pass khi tất cả các dòng đều đạt.
    
    | Sprint | Build | Số lượt dự kiến | File kết quả |
    | :--- | :--- | ---: | :--- |
    | 1 | 1, 2, 3 | 207 | [sprint-1-test-run.md](sprint-1-test-run.md) |
    | 2 | 4, 5, 6 | 207 | [sprint-2-regression.md](sprint-2-regression.md) |
    | 3 | 7, 8, 9 | 207 | [sprint-3-regression.md](sprint-3-regression.md) |
    
    Prototype chỉ dùng để đối chiếu khi expected result chưa rõ; không thay thế kết quả chạy trên Build 1–9. Không điền trước kết quả thực thi hoặc ngày chạy.
    
    ## Phân công
    
    | Thành viên | Phạm vi | Số case mỗi Build | Số lượt mỗi sprint |
    | :--- | :--- | ---: | ---: |
    | Thành viên 1 | `TC-ARI-001` đến `TC-ARI-018` | 18 | 54 |
    | Thành viên 2 | `TC-DIV-001` đến `TC-DIV-013` | 13 | 39 |
    | Thành viên 3 | `TC-CON-001` đến `TC-CON-022` | 22 | 66 |
    | Thành viên 4 | `TC-FMT-001` đến `TC-FMT-007`; `TC-BLD-001` đến `TC-BLD-009` | 16 | 48 |
    
    ## Cách chạy và ghi kết quả
    
    1. Trước mỗi Build, ghi ngày giờ, trình duyệt, hệ điều hành, phiên bản Playwright và commit của bộ test case vào file sprint. Chạy kiểm tra giao diện bằng `TC-BLD-009` trước để biết các điều khiển cần thiết có sẵn hay không.
    2. Mở lại trang hoặc đặt lại trạng thái theo preconditions của từng test case. Chạy từng ca trên Build được chỉ định và lưu ảnh, log hoặc trace phù hợp tại `output/playwright/sprint-N/build-N/TC-ID/`.
    3. Mỗi dòng trong bảng kết quả ứng với một cặp Test Case ID × Build. Ghi **Actual result**, thời điểm chạy, người chạy và đường dẫn bằng chứng. Với ca có nhiều bộ dữ liệu, ghi rõ dòng nào sai trong Actual result.
    4. Chỉ dùng `Pass` khi tất cả expected result đạt. Dùng `Fail` khi ứng dụng cho kết quả khác mong đợi. Dùng `Blocked` khi không thể thực hiện ca do thiếu điều kiện hoặc điều khiển; ghi rõ lý do. Chưa chạy thì giữ `Not Run`.
    5. Một lỗi sản phẩm có thể liên quan nhiều test case; tạo một Bug Issue đủ bước tái hiện và liên kết Issue ở mọi dòng bị ảnh hưởng. Nếu Build 9 thiếu điều khiển, đánh `Fail` cho ca kiểm tra điều khiển và `Blocked` cho các ca phụ thuộc không thể thao tác.
    6. Sau mỗi sprint, cập nhật số lượng Pass/Fail/Blocked/Not Run theo từng Build. Sprint hoàn tất khi cả 207 dòng có kết quả hoặc lý do chưa chạy được chấp nhận; mọi Fail và Blocked có bằng chứng, lý do và liên kết bug khi phù hợp.
    
    Retest chỉ được thêm khi có bản sửa hoặc thay đổi môi trường; ghi lần chạy mới và liên kết bug/PR, không ghi đè bằng chứng của lần chạy trước.

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        root=Path('tests/test-cases')
        runs=Path('tests/test-runs')
        modules=[('module-1-arithmetic','M1','Thành viên 1'),('module-2-division','M2','Thành viên 2'),('module-3-concatenate','M3','Thành viên 3'),('module-4-formatting-builds','M4','Thành viên 4')]
        cases=[]
        for folder,code,tester in modules:
         for path in sorted((root/folder).glob('TC-*.md')):
          cases.append((path,code,tester))
        assert len(cases)==69
        configs=[(1,[1,2,3],'sprint-1-test-run.md'),(2,[4,5,6],'sprint-2-regression.md'),(3,[7,8,9],'sprint-3-regression.md')]
        for sprint,builds,name in configs:
         lines=[
          f'# Test Run Sprint {sprint} — Builds {builds[0]}–{builds[-1]}',
          '',
          '> Trạng thái: Kế hoạch; chưa có test case nào được thực thi trong sprint này.',
          '',
          '## Thông tin đợt kiểm thử',
          '',
          '| Mục | Giá trị |',
          '| :--- | :--- |',
          f'| Test Run ID | `TR-SPRINT-{sprint:02}` |',
          f'| Build | {", ".join(f"Build {b}" for b in builds)} |',
          '| Ứng dụng | https://testsheepnz.github.io/BasicCalculator.html |',
          '| Ngày thực hiện | Chưa ghi |',
          '| Trình duyệt / Hệ điều hành | Chưa ghi |',
          '| Phiên bản Playwright / commit test case | Chưa ghi |',
          '| Người thực hiện | Thành viên 1–4 theo module |',
          '',
          '## Mục tiêu và điều kiện hoàn tất',
          '',
          f'- Chạy toàn bộ 69 test case trên từng Build {builds[0]}–{builds[-1]}, tổng cộng 207 cặp Test Case ID × Build.',
          '- Chạy `TC-BLD-009` trước trên mỗi Build; sau đó chạy các case theo module. Ghi Actual result, bằng chứng, Bug Issue và thời điểm chạy cho từng dòng.',
          '- Sprint hoàn tất khi 207 dòng được đối chiếu; mọi Fail hoặc Blocked có lý do và bằng chứng. Quy tắc trạng thái và thư mục lưu bằng chứng nằm trong [kế hoạch chung](README.md).',
          '',
          '## Tổng hợp kết quả',
          '',
          '| Build | Tổng | Pass | Fail | Blocked | Not Run |',
          '| :--- | ---: | ---: | ---: | ---: | ---: |',
         ]
         for build in builds:
          lines.append(f'| Build {build} | 69 | 0 | 0 | 0 | 69 |')
         lines.extend(['| **Tổng sprint** | **207** | **0** | **0** | **0** | **207** |','','## Kết quả chi tiết',''])
         for build in builds:
          lines.extend([f'### Build {build}','','| Test Case ID | Module | Người test | Thời điểm | Kết quả | Actual result / lý do Blocked | Bằng chứng | Bug Issue |','| :--- | :---: | :--- | :--- | :---: | :--- | :--- | :--- |'])
          for path,code,tester in cases:
           link=f'../test-cases/{path.parent.name}/{path.name}'
           lines.append(f'| [{path.stem}]({link}) | {code} | {tester} | — | Not Run | — | — | — |')
          lines.append('')
         lines.extend(['## Retest','','Chưa có lần retest. Khi có bản sửa hoặc thay đổi môi trường, thêm lần chạy mới với Build, Test Case ID, Bug Issue, kết quả, thời điểm và bằng chứng; giữ nguyên kết quả lần chạy trước.',''])
         (runs/name).write_text('\n'.join(lines))
         print(name, 'rows', len(cases)*len(builds))
        PY
    sprint-1-test-run.md rows 207
    sprint-2-regression.md rows 207
    sprint-3-regression.md rows 207
    ✓ • 0ms

## Activity

    file changes: Completed · 1 changes
    Update { move_path: None }: /home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-summary/traceability-matrix.md
    @@ -13,6 +13,6 @@
     | :---: | :--- | :--- | :---: | :---: |
    -| **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 18 | Chưa đối chiếu báo cáo với testcase |
    -| **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 13 | Chưa đối chiếu báo cáo với testcase |
    -| **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 22 | Chưa đối chiếu báo cáo với testcase |
    -| **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 16 | Testcase mới: Not Run |
    +| **Module 1** | Phép tính Số học Cơ bản & Kiểm thử Biên | Thành viên 1 | 18 | Not Run trong Sprint 1–3 |
    +| **Module 2** | Phép Chia & Ngoại lệ Toán học | Thành viên 2 | 13 | Not Run trong Sprint 1–3 |
    +| **Module 3** | Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | Thành viên 3 | 22 | Not Run trong Sprint 1–3 |
    +| **Module 4** | Định dạng Kết quả, Điều khiển & Đa phiên bản | Thành viên 4 | 16 | Not Run trong Sprint 1–3 |
     
    @@ -29,2 +29,2 @@
     
    -Các testcase Module 4 mới chỉ được thiết kế (`Not Run`); tỷ lệ bao phủ thực thi chỉ được cập nhật sau khi chạy và ghi bằng chứng. Báo cáo test run cũ chưa được sửa hoặc dùng làm kết quả thực thi cho các case mới.
    +Ba file test run trong `tests/test-runs/` đã được khởi tạo theo Build 1–9, mỗi cặp Test Case ID × Build đều ở trạng thái `Not Run`. Chỉ cập nhật tỷ lệ bao phủ thực thi sau khi chạy và ghi bằng chứng; không dùng số liệu trong bản test run cũ làm kết quả cho đợt mới.

## Assistant — 2026-09-28 15:22:52 (UTC+07:00)

Ba file sprint đã có 207 dòng mỗi file, tất cả bắt đầu ở `Not Run`; ma trận truy vết cũng đã được cập nhật cho khớp. Mình đang kiểm tra số dòng, liên kết test case và bảo đảm không còn kết quả hoặc ngày chạy cũ trong biểu mẫu mới.

## Activity

    $ rg -n 'PASS|2026-|Chrome 122|Build 0|8 / 8|100%' tests/test-runs tests/test-summary/traceability-matrix.md
    ✗ (1) • 0ms

## Activity

    $ git diff --check; git status --short; git diff --stat; sed -n '1,65p' tests/test-runs/sprint-1-test-run.md; tail -8 tests/test-runs/sprint-3-regression.md
     M tests/test-runs/sprint-1-test-run.md
     M tests/test-runs/sprint-2-regression.md
     M tests/test-summary/traceability-matrix.md
    ?? tests/test-runs/README.md
    ?? tests/test-runs/sprint-3-regression.md
     tests/test-runs/sprint-1-test-run.md      | 300 +++++++++++++++++++++++++-----
     tests/test-runs/sprint-2-regression.md    | 273 ++++++++++++++++++++++++---
     tests/test-summary/traceability-matrix.md |  10 +-
     3 files changed, 506 insertions(+), 77 deletions(-)
    # Test Run Sprint 1 — Builds 1–3
    
    > Trạng thái: Kế hoạch; chưa có test case nào được thực thi trong sprint này.
    
    ## Thông tin đợt kiểm thử
    
    | Mục | Giá trị |
    | :--- | :--- |
    | Test Run ID | `TR-SPRINT-01` |
    | Build | Build 1, Build 2, Build 3 |
    | Ứng dụng | https://testsheepnz.github.io/BasicCalculator.html |
    | Ngày thực hiện | Chưa ghi |
    | Trình duyệt / Hệ điều hành | Chưa ghi |
    | Phiên bản Playwright / commit test case | Chưa ghi |
    | Người thực hiện | Thành viên 1–4 theo module |
    
    ## Mục tiêu và điều kiện hoàn tất
    
    - Chạy toàn bộ 69 test case trên từng Build 1–3, tổng cộng 207 cặp Test Case ID × Build.
    - Chạy `TC-BLD-009` trước trên mỗi Build; sau đó chạy các case theo module. Ghi Actual result, bằng chứng, Bug Issue và thời điểm chạy cho từng dòng.
    - Sprint hoàn tất khi 207 dòng được đối chiếu; mọi Fail hoặc Blocked có lý do và bằng chứng. Quy tắc trạng thái và thư mục lưu bằng chứng nằm trong [kế hoạch chung](README.md).
    
    ## Tổng hợp kết quả
    
    | Build | Tổng | Pass | Fail | Blocked | Not Run |
    | :--- | ---: | ---: | ---: | ---: | ---: |
    | Build 1 | 69 | 0 | 0 | 0 | 69 |
    | Build 2 | 69 | 0 | 0 | 0 | 69 |
    | Build 3 | 69 | 0 | 0 | 0 | 69 |
    | **Tổng sprint** | **207** | **0** | **0** | **0** | **207** |
    
    ## Kết quả chi tiết
    
    ### Build 1
    
    | Test Case ID | Module | Người test | Thời điểm | Kết quả | Actual result / lý do Blocked | Bằng chứng | Bug Issue |
    | :--- | :---: | :--- | :--- | :---: | :--- | :--- | :--- |
    | [TC-ARI-001](../test-cases/module-1-arithmetic/TC-ARI-001.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-002](../test-cases/module-1-arithmetic/TC-ARI-002.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-003](../test-cases/module-1-arithmetic/TC-ARI-003.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-004](../test-cases/module-1-arithmetic/TC-ARI-004.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-005](../test-cases/module-1-arithmetic/TC-ARI-005.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-006](../test-cases/module-1-arithmetic/TC-ARI-006.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-007](../test-cases/module-1-arithmetic/TC-ARI-007.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-008](../test-cases/module-1-arithmetic/TC-ARI-008.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-009](../test-cases/module-1-arithmetic/TC-ARI-009.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-010](../test-cases/module-1-arithmetic/TC-ARI-010.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-011](../test-cases/module-1-arithmetic/TC-ARI-011.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-012](../test-cases/module-1-arithmetic/TC-ARI-012.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-013](../test-cases/module-1-arithmetic/TC-ARI-013.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-014](../test-cases/module-1-arithmetic/TC-ARI-014.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-015](../test-cases/module-1-arithmetic/TC-ARI-015.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-016](../test-cases/module-1-arithmetic/TC-ARI-016.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-017](../test-cases/module-1-arithmetic/TC-ARI-017.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-ARI-018](../test-cases/module-1-arithmetic/TC-ARI-018.md) | M1 | Thành viên 1 | — | Not Run | — | — | — |
    | [TC-DIV-001](../test-cases/module-2-division/TC-DIV-001.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-002](../test-cases/module-2-division/TC-DIV-002.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-003](../test-cases/module-2-division/TC-DIV-003.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-004](../test-cases/module-2-division/TC-DIV-004.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-005](../test-cases/module-2-division/TC-DIV-005.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-006](../test-cases/module-2-division/TC-DIV-006.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-007](../test-cases/module-2-division/TC-DIV-007.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-008](../test-cases/module-2-division/TC-DIV-008.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-009](../test-cases/module-2-division/TC-DIV-009.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-DIV-010](../test-cases/module-2-division/TC-DIV-010.md) | M2 | Thành viên 2 | — | Not Run | — | — | — |
    | [TC-FMT-004](../test-cases/module-4-formatting-builds/TC-FMT-004.md) | M4 | Thành viên 4 | — | Not Run | — | — | — |
    | [TC-FMT-005](../test-cases/module-4-formatting-builds/TC-FMT-005.md) | M4 | Thành viên 4 | — | Not Run | — | — | — |
    | [TC-FMT-006](../test-cases/module-4-formatting-builds/TC-FMT-006.md) | M4 | Thành viên 4 | — | Not Run | — | — | — |
    | [TC-FMT-007](../test-cases/module-4-formatting-builds/TC-FMT-007.md) | M4 | Thành viên 4 | — | Not Run | — | — | — |
    
    ## Retest
    
    Chưa có lần retest. Khi có bản sửa hoặc thay đổi môi trường, thêm lần chạy mới với Build, Test Case ID, Bug Issue, kết quả, thời điểm và bằng chứng; giữ nguyên kết quả lần chạy trước.
    ✓ • 0ms

## Activity

    $ python3 - <<'PY'
        from pathlib import Path
        import re
        runs=Path('tests/test-runs')
        for n,name in enumerate(['sprint-1-test-run.md','sprint-2-regression.md','sprint-3-regression.md'],1):
         p=runs/name;s=p.read_text();links=re.findall(r'\| \[(TC-[A-Z]+-\d{3})\]\(([^)]+)\)',s)
         ids=[x for x,_ in links]
         bad=[target for _,target in links if not (runs/target).exists()]
         expected_builds=list(range(3*n-2,3*n+1))
         actual_builds=[int(x) for x in re.findall(r'^### Build (\d+)$',s,re.M)]
         assert len(links)==207 and not bad and actual_builds==expected_builds,(p,len(links),bad,actual_builds)
         assert all(ids.count(x)==3 for x in set(ids)) and len(set(ids))==69
         assert s.count('Not Run | — | — | — |')==207
         assert 'PASS' not in s and '2026-' not in s
         print(name,'builds',actual_builds,'unique TC',len(set(ids)),'rows',len(links),'broken links',len(bad))
        print('plan present:',(runs/'README.md').exists())
        PY
    sprint-1-test-run.md builds [1, 2, 3] unique TC 69 rows 207 broken links 0
    sprint-2-regression.md builds [4, 5, 6] unique TC 69 rows 207 broken links 0
    sprint-3-regression.md builds [7, 8, 9] unique TC 69 rows 207 broken links 0
    plan present: True
    ✓ • 0ms

## Assistant — 2026-09-28 15:23:22 (UTC+07:00)

Mình đã sửa lại kế hoạch test run thành **3 sprint**: Build 1–3, 4–6 và 7–9. Mỗi sprint có 207 dòng kết quả cho 69 test case; tổng cộng **621 cặp test case–Build**.

Hai file [Sprint 1](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-1-test-run.md) và [Sprint 2](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-2-regression.md) đã được viết lại; mình thêm [Sprint 3](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/sprint-3-regression.md), [quy trình ghi kết quả](/home/pham-quang-vinh/School/HK1_NAM4/TESTING/BTTL/TUAN03/calculator-test/tests/test-runs/README.md) và cập nhật ma trận truy vết.

Tất cả dòng bắt đầu ở `Not Run`; các kết quả `PASS` cũ không được dùng làm bằng chứng cho đợt mới. Mình đã kiểm tra đủ 207 dòng mỗi sprint và mọi liên kết tới test case đều hợp lệ.

</details>
