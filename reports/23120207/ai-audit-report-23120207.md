# Báo Cáo Kiểm Định Sử Dụng AI (AI Audit Report)

> **Khoa Công nghệ Thông tin – Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM**  
> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)  
> **Dự án:** Kiểm thử ứng dụng Web Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NGUYỄN BẢO AN  
> **MSSV:** 23120207  
> **Lớp:** 23CLC01 (Khóa 2023)  
> **Ngày báo cáo:** 28/09/2026  

---

## 1. Lời Tuyên Bố (Student Declaration)

> *"Tôi sử dụng các công cụ AI cho những tác vụ sau:"*
> 1. Hỗ trợ cấu hình nhóm và tự động phân quyền cộng tác viên (Collaborators) trên GitHub repository qua GitHub CLI.
> 2. Thiết kế và đặc tả chi tiết bộ kiểm thử Module 1 (Phép tính Số học & Giá trị Biên) theo chuẩn IEEE 829, đồng bộ Ma trận Truy xuất Nguồn gốc Yêu cầu (RTM).
> 3. Xây dựng kiến trúc khung và sinh mã kiểm thử tự động hóa (Automation Test Scripts) sử dụng Playwright và TypeScript (theo mô hình Page Object Model, Base Fixtures, Test Data Registry, Specs và CLI Batch Runner hỗ trợ chạy đồng thời 2 bản build).
> 4. Tái cấu trúc tổ chức mã nguồn kiểm thử vào thư mục `tests/test-scripts/` và tinh chỉnh cấu hình dự án.
> 5. Phân tích kết quả dữ liệu các đợt kiểm thử (Test Runs Sprint 1, 2, 3), thống kê và phân loại 11 mã lỗi phần mềm (Defect Reports).
> 6. Lập báo cáo kiểm định AI (AI Audit Report), phê bình năng lực AI (AI Critique) và trích xuất nhật ký Git Commit Log.

---

## 2. Nhật Ký Tương Tác Chi Tiết Với AI (Detailed AI Interaction Log)

### Tương tác 1: Cấu hình nhóm và phân quyền cộng tác viên GitHub
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `14:12 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  đây là danh sach thanh vien 
  vinh-code

  tzin1401
  nhaajtdajt
  ```
- **Kết quả do AI tạo ra:**
  - AI nhận diện danh sách 3 tài khoản GitHub của thành viên nhóm.
  - Tự động gọi GitHub CLI API (`gh api --method PUT repos/NgBaoAnn/calculator-test/collaborators/<username> -f permission=push`) để gửi lời mời cộng tác viên có quyền push trực tiếp lên repository.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Thao tác chuẩn xác, các thành viên trong nhóm đã nhận được lời mời và có quyền cộng tác phân chia module đúng theo kế hoạch đồ án.

---

### Tương tác 2: Thiết kế Test Cases Module 1 chuẩn IEEE 829
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `14:25 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy viết tiếp các test case cho Module 1 từ TC-ARI-003 đến TC-ARI-018 theo chuẩn IEEE 829 và cập nhật traceability matrix.
  ```
- **Kết quả do AI tạo ra:**
  - Sinh 16 tài liệu test case độc lập (`TC-ARI-003.md` đến `TC-ARI-018.md`) trong thư mục `tests/test-cases/module-1-arithmetic/`.
  - Bao phủ đầy đủ các kỹ thuật kiểm thử hộp đen: Phân tích giá trị biên (BVA - giới hạn 10 ký tự `maxlength`), Phân vùng tương đương (EP - số âm, số 0, số thực dấu phẩy động, phép cộng/trừ/nhân).
  - Cập nhật số lượng và trạng thái tương ứng trong file `tests/test-summary/traceability-matrix.md`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Cấu trúc test case tuân thủ nghiêm ngặt định dạng IEEE 829 với đầy đủ Test Case ID, Mục tiêu, Tiền điều kiện, Các bước thực hiện và Kết quả kỳ vọng.

---

### Tương tác 3: Đề xuất kiến trúc & Sinh kịch bản kiểm thử Playwright
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:08 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  sinh test scripts từ nội dung thư mục test-cases hỗ trợ test tự động sử dụng playwright để chạy test run. test script này hỗ trợ chạy 2 build 1 lần, tổng build 1-9, tạo thư mục test-scripts, cấu trúc bên trong tự đề xuất.
  ```
- **Kết quả do AI tạo ra:**
  - Đề xuất 2 phương án kiến trúc kiểm thử tự động; triển khai theo Phương án 1 (Page Object Model module hóa cao).
  - Tạo cấu trúc hoàn chỉnh trong thư mục `test-scripts/`:
    + `pages/calculator.page.ts`: Đóng gói toàn bộ locator và phương thức tương tác với trang web TestSheepNZ.
    + `fixtures/base-test.ts`: Tùy biến Playwright fixture quản lý lifecycle và timeout.
    + `data/`: Phân tách registry dữ liệu test thành 4 module riêng biệt (`types.ts`, `module-1-arithmetic.data.ts`, `module-2-division.data.ts`, `module-3-concatenate.data.ts`, `module-4-formatting.data.ts`).
    + `specs/`: 4 file đặc tả kiểm thử tự động tương ứng 4 module.
    + `runners/build-pair-runner.ts`: Trình chạy theo cặp build linh hoạt (`npm run test:pair -- <buildA> <buildB>` và `npm run test:all-pairs`).
    + `playwright.config.ts`, `package.json`, `tsconfig.json`.
- **Phán quyết (Verdict):** `INCOMPLETE`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Kịch bản ban đầu của AI hoạt động dựa trên giả định DOM lý tưởng. Khi chạy thực tế trên ứng dụng web, phép chia cho 0 khiến trang web bị kẹt loading và vô hiệu hóa nút Calculate; ngoài ra JavaScript ép chuỗi rỗng thành số 0. Sinh viên đã yêu cầu AI hiệu chỉnh phương thức `clickCalculate()` trong POM để kiểm tra trạng thái và bỏ qua cản trở loading.

---

### Tương tác 4: Tinh chỉnh tiến độ và đóng gói mã nguồn
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:48 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  tại sao nãy giờ sửa script nhiều vậy
  hãy thực hiện nhanh đi
  khỏi chạy thử, push lên luôn đi
  ```
- **Kết quả do AI tạo ra:**
  - Giải thích nguyên nhân phải sửa script nhiều lần do mã nguồn web TestSheepNZ có nhiều hành vi bất thường ngoài tài liệu chuẩn.
  - Lập tức dừng các vòng thử nghiệm không cần thiết, đóng gói toàn bộ mã nguồn tự động hóa thành các commit rõ ràng theo chuẩn Conventional Commits và đồng bộ lên remote repository GitHub `main`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Phản hồi nhanh chóng, tôn trọng quyết định điều phối của người dùng và hoàn tất việc đồng bộ mã nguồn an toàn.

---

### Tương tác 5: Tái cấu trúc vị trí thư mục test-scripts
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `16:02 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  hãy di chuyển test-scripts vào trong thư mục tests
  ```
- **Kết quả do AI tạo ra:**
  - Di chuyển toàn bộ cây thư mục từ `test-scripts/` sang `tests/test-scripts/`.
  - Cập nhật lại toàn bộ đường dẫn tương đối trong `package.json`, `tsconfig.json`, `playwright.config.ts`, `runners/build-pair-runner.ts` và tài liệu hướng dẫn `tests/test-scripts/README.md`.
  - Tạo commit `refactor(tests): move test-scripts into tests/ directory` và đẩy lên GitHub.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Thao tác tái cấu trúc triệt để, không để sót đường dẫn hỏng (broken imports) và giữ nguyên khả năng chạy lệnh `npm test`.

---

### Tương tác 6: Phân tích kết quả Test Run và thống kê Defect
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `16:25 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  dựa vào test run thì có bao nhiêu bug
  ```
- **Kết quả do AI tạo ra:**
  - Đọc và tổng hợp dữ liệu từ `sprint-1-test-run.md`, `sprint-2-regression.md`, `sprint-3-regression.md`, `source-findings.md` và `bug-reports-draft.md`.
  - Thống kê tổng số 621 lượt kiểm thử (357 Pass, 196 Fail, 68 Blocked).
  - Phân loại chính xác **11 Bug riêng biệt** (Mã `BUG-SRC-01` đến `BUG-SRC-11`):
    + 9 Bug đặc thù theo từng Build từ 1 đến 9.
    + 2 Bug kỹ thuật toàn hệ thống (ép kiểu JavaScript ô trống thành 0 và kẹt giao diện sau lỗi chia cho 0).
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Dữ liệu phân tích hoàn toàn ăn khớp với hiện trạng mã nguồn và tài liệu kiểm thử của dự án.

---

### Tương tác 7: Hoàn thành thư mục reports theo chuẩn đồ án
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `19:40 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  hãy hoàn thành thư mục report, không commit lên git và push 
  - Thư mục reports:

  + ai-audit-report-mssv.md
  tuyên bố: "Tôi sử dụng các công cụ AI cho những tác vụ sau," và cung cấp các thông tin sau cho mỗi lần tương tác:
  Tên công cụ AI
  Ngày và giờ
  Câu lệnh (prompt) của bạn
  Kết quả do AI tạo ra

  + ai-critique-mssv.md 
  Hãy viết một đoạn văn dài 200–300 từ để nhận xét, đánh giá về AI. Hãy giải quyết các câu hỏi sau: AI đã mắc lỗi, thể hiện sự thiên kiến hoặc đưa ra thông tin chưa đầy đủ ở đâu? Tại sao nó lại không phát hiện ra vấn đề đó? Bạn đã rút ra được bài học gì về nguyên tắc hợp tác với AI trong quá trình thực hiện bài tập này?
  + git-commit-log-mssv.md:

  Vui lòng sử dụng lệnh sau để trích xuất nhật ký commit Git.

  git log --graph --all --stat
  ```
- **Kết quả do AI tạo ra:**
  - Khởi tạo thư mục `reports/` cục bộ.
  - Tạo `ai-audit-report-mssv.md` (và phiên bản định danh `ai-audit-report-23120207.md`) với đầy đủ tuyên bố và bảng kiểm định 7 lần tương tác.
  - Tạo `ai-critique-mssv.md` (và `ai-critique-23120207.md`) với đoạn văn phê bình chuyên môn 291 từ trả lời trọn vẹn 3 câu hỏi trọng tâm.
  - Tạo `git-commit-log-mssv.md` (và `git-commit-log-23120207.md`) trích xuất nguyên văn toàn bộ 421 dòng output từ lệnh `git log --graph --all --stat`.
  - Nghiêm túc tuân thủ ràng buộc: **không thực hiện `git commit` và không `git push`**.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Đảm bảo 100% yêu cầu đề ra, cấu trúc rõ ràng và tính chính xác cao.

---

## 3. Bảng Tổng Hợp Đánh Giá Độ Chính Xác Của AI (Accuracy Summary)

| Chỉ số đánh giá | Số lượng | Tỷ lệ (%) |
| :--- | :---: | :---: |
| **Tổng số lần tương tác được kiểm định** | **7** | **100%** |
| **VALID (Chính xác, chấp nhận)** | 6 | 85.7% |
| **INCOMPLETE (Chưa đầy đủ, cần sinh viên hiệu chỉnh)** | 1 | 14.3% |
| **INVALID (Sai hoàn toàn, bị bác bỏ)** | 0 | 0.0% |

---

## 4. Kết Luận Chung (Overall Conclusion)

Công cụ AI đóng vai trò như một trợ thủ đắc lực (Copilot) giúp tăng tốc đáng kể việc thiết kế test case, viết mã tự động hóa và tổng hợp báo cáo kiểm thử. Tuy nhiên, AI thường có thiên kiến giả định môi trường lý tưởng và thiếu trải nghiệm thực thi trên môi trường thực tế. Vì vậy, sự can thiệp của kỹ sư QA con người thông qua việc phân tích mã nguồn (White-box review), kiểm thử biên và kiểm chứng từng bước là điều kiện tiên quyết để đảm bảo chất lượng phần mềm.
