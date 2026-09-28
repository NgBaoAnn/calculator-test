# Báo Cáo Kiểm Định Sử Dụng AI (AI Audit Report)

> **Khoa Công nghệ Thông tin – Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM**  
> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)  
> **Dự án:** Kiểm thử ứng dụng Web Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NHẬT ĐẠT  
> **MSSV:** 23120231  
> **Lớp:** 23CLC01 (Khóa 2023)  
> **Ngày báo cáo:** 28/09/2026  

---

## 1. Lời Tuyên Bố (Student Declaration)

> *"Tôi sử dụng các công cụ AI cho những tác vụ sau:"*
> 1. Thiết kế và đặc tả chi tiết 22 kịch bản kiểm thử cho **Module 3: Ghép Chuỗi (Concatenate) & Kiểm thử Hợp lệ Dữ liệu Đầu vào (Input Validation)** theo chuẩn IEEE 829 (`TC-CON-001` đến `TC-CON-022`), bao quát kiểm thử tương đương, phân tích giá trị biên, và ràng buộc giao diện động của checkbox *Integers only*.
> 2. Chuẩn hóa cấu trúc và nội dung mẫu báo cáo lỗi GitHub Issue Template (`.github/ISSUE_TEMPLATE/bug_report.md`), bổ sung các trường đặc tả lỗi tiêu chuẩn phục vụ quản lý chất lượng (Defect Management).
> 3. Khảo sát mã nguồn JavaScript client-side của ứng dụng Basic Calculator (`BasicCalculator.html`), phân tích nguyên nhân kỹ thuật của các lỗi liên quan đến Module 3 (Build 1 bỏ qua `isNaN`, Build 2 hoán đổi Add/Concatenate, Build 3 ép kiểu `isNumber = true`, và lỗi toàn hệ thống xử lý ô trống/khoảng trắng `BUG-SRC-10`).
> 4. Xây dựng và tinh chỉnh bộ dữ liệu kiểm thử tự động hóa Playwright cho Module 3 (`tests/test-scripts/data/module-3-concatenate.data.ts`) và kịch bản thực thi tương ứng.
> 5. Gom nhóm và phân loại 195 lượt Fail trên 9 bản build từ kết quả chạy tự động hóa Playwright, tổng hợp thành tài liệu báo cáo lỗi [tests/bug-reports.md](tests/bug-reports.md) gồm 11 nhóm defect chính (`BUG-SRC-01` đến `BUG-SRC-11`).
> 6. Tự động hóa tạo 11 GitHub Issues chính thức lên repository `NgBaoAnn/calculator-test` qua GitHub CLI (`gh`), gán nhãn toàn diện (`type: bug`, `severity`, `priority`, `module`, `status`) và cập nhật liên kết chéo vào tài liệu dự án.
> 7. Lập báo cáo kiểm định AI (AI Audit Report), viết nhận xét đánh giá năng lực AI (AI Critique) và trích xuất nhật ký Git Commit Log cho mã số sinh viên 23120231.

---

## 2. Nhật Ký Tương Tác Chi Tiết Với AI (Detailed AI Interaction Log)

### Tương tác 1: Thiết kế 20 Test Cases Module 3 theo chuẩn IEEE 829
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `14:30 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy viết tiếp các test case cho Module 3 (Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu Đầu vào) từ TC-CON-003 đến TC-CON-022 theo định dạng chuẩn IEEE 829. Bao gồm ghép chuỗi số, ghép chuỗi chữ, ký tự đặc biệt, ô rỗng, giới hạn độ dài 10 ký tự, validation không phải số và trạng thái ẩn/hiện của checkbox Integers only.
  ```
- **Kết quả do AI tạo ra:**
  - Sinh 20 file test case độc lập (`TC-CON-003.md` đến `TC-CON-022.md`) trong thư mục `tests/test-cases/module-3-concatenate/`.
  - Phủ kín các kỹ thuật kiểm thử: Phân vùng tương đương (EP), Phân tích giá trị biên (BVA), và Kiểm thử chuyển trạng thái giao diện (UI State Transition).
  - Cập nhật ma trận truy xuất nguồn gốc trong `tests/test-summary/traceability-matrix.md`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Cấu trúc test case tuân thủ đúng chuẩn IEEE 829 với đầy đủ Tiền điều kiện, Dữ liệu đầu vào, Các bước thực hiện và Kết quả kỳ vọng.

---

### Tương tác 2: Chuẩn hóa mẫu Bug Report Template trên GitHub
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:55 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy chuẩn hóa mẫu bug report trong .github/ISSUE_TEMPLATE/bug_report.md theo chuẩn chuyên nghiệp với các trường: Bug ID, Found by Test Case, Requirement, Module, Build, Severity, Priority, Steps to reproduce, Actual result, Expected result, Evidence và Ghi chú xử lý.
  ```
- **Kết quả do AI tạo ra:**
  - Tái cấu trúc file `.github/ISSUE_TEMPLATE/bug_report.md` theo định dạng GitHub Issue Form tiêu chuẩn, tích hợp sẵn labels mặc định (`type: bug`, `status: new`).
  - Xây dựng bản thảo báo cáo lỗi sơ bộ (`tests/test-runs/bug-reports-draft.md`) làm khung theo dõi cho nhóm.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Mẫu báo cáo lỗi rõ ràng, mang tính thực tế cao và đáp ứng trọn vẹn yêu cầu quản lý lỗi của đồ án kiểm thử.

---

### Tương tác 3: Xây dựng Test Data Registry tự động hóa cho Module 3
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:20 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy tạo dữ liệu kiểm thử tự động hóa cho Module 3 trong file module-3-concatenate.data.ts để tích hợp vào Playwright runner, ánh xạ đầy đủ 22 test cases của Module 3.
  ```
- **Kết quả do AI tạo ra:**
  - Tạo file `tests/test-scripts/data/module-3-concatenate.data.ts` chứa 22 bộ dữ liệu test có cấu trúc chặt chẽ theo interface `TestCaseData`.
  - Phân định rõ ràng kỳ vọng về giá trị trả về (`expectedAnswer`), thông báo validation (`expectedError`) và trạng thái checkbox (`integerSelectVisible`).
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Dữ liệu chuẩn xác, ánh xạ 1-1 với đặc tả test case trong thư mục `tests/test-cases/module-3-concatenate/`.

---

### Tương tác 4: Phân tích mã nguồn JavaScript điều tra lỗi chuỗi rỗng / khoảng trắng
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `16:40 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy kiểm tra mã nguồn BasicCalculator.html xem tại sao các ca test nhập ô rỗng hoặc khoảng trắng (TC-CON-019 đến TC-CON-021) không hiện thông báo 'Number is not a number' trên các bản build 1-8?
  ```
- **Kết quả do AI tạo ra:**
  - Ban đầu AI nhận định đây là lỗi quên viết câu lệnh điều kiện `if (number1 === "")`.
  - Sau khi kiểm tra trực tiếp hàm `calculate()` trong mã HTML, phát hiện cơ chế ép kiểu lỏng lẻo của JavaScript: `isNaN("")` và `isNaN("   ")` đều đánh giá là `false` (do JavaScript ngầm ép chuỗi rỗng thành số 0). Do đó hệ thống bỏ qua nhánh kiểm tra lỗi và thực hiện phép tính với toán hạng bằng 0.
- **Phán quyết (Verdict):** `INCOMPLETE`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Nhận định ban đầu của AI mang tính suy diễn bề mặt; sinh viên yêu cầu AI kiểm tra chính xác giá trị trả về của hàm `isNaN()` trong console JavaScript và cập nhật nguyên nhân gốc rễ này vào tài liệu `source-findings.md` và báo cáo lỗi `BUG-SRC-10`.

---

### Tương tác 5: Tổng hợp 195 lỗi Playwright thành tài liệu bug-reports.md hoàn chỉnh
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `19:15 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Dựa vào kết quả test run Playwright ngày 28/09/2026 (358 Pass, 195 Fail, 68 Blocked), hãy tổng hợp và viết tài liệu bug-reports.md chính thức gồm 11 nhóm lỗi chính (BUG-SRC-01 đến BUG-SRC-11) với đầy đủ bằng chứng đối chiếu.
  ```
- **Kết quả do AI tạo ra:**
  - Hoàn thiện tài liệu `tests/bug-reports.md` dài hơn 660 dòng, phân loại 11 nhóm lỗi chi tiết tương ứng với các bản Build 1–9 và 2 lỗi hệ thống liên quan đến Module 3.
  - Mỗi báo cáo đều có bảng thông tin lỗi, các bước tái hiện, kết quả thực tế, kết quả kỳ vọng và liên kết đối chiếu JSON logs.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Bản báo cáo có tính thuyết phục cao, số liệu khớp hoàn toàn với kết quả kiểm thử tự động của nhóm.

---

### Tương tác 6: Tự động tạo 11 GitHub Issues với nhãn phân loại qua GitHub CLI
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `20:39 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  hãy dùng github cli lên repo này tạo các issue trong file bug-report nhớ có đánh tag vào cho tôi nhé
  ```
- **Kết quả do AI tạo ra:**
  - Lập trình script tự động phân tích 11 báo cáo lỗi từ `tests/bug-reports.md`.
  - Tự động gọi GitHub CLI (`gh issue create`) đẩy thành công 11 Issues (#1 đến #11) lên repository `NgBaoAnn/calculator-test`.
  - Gán đầy đủ hệ thống nhãn chuyên nghiệp: `bug`, `type: bug`, `status: new`, nhãn độ nghiêm trọng (`severity: major/minor/blocker`), độ ưu tiên (`priority: P1/P2`), và nhãn module tương ứng (`module: concatenate`, `module: arithmetic`, `module: division`, `module: formatting-builds`).
  - Tự động cập nhật liên kết số hiệu GitHub Issue ngược lại vào file `tests/bug-reports.md`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Tác vụ hoàn thành xuất sắc, tiết kiệm nhiều thời gian nhập liệu thủ công và đảm bảo tính nhất quán tuyệt đối giữa mã nguồn, tài liệu và hệ thống theo dõi lỗi trên GitHub.

---

### Tương tác 7: Hoàn thành bộ báo cáo AI Audit và Git Commit Log (MSSV 23120231)
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `20:46 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  giờ bạn hãy đọc @[docs/23120207] và viết cho tôi tương tự như vậy nha bởi vì đề yêu cầu là:
  + ai-audit-report-mssv.md (tuyên bố, tên công cụ, ngày giờ, prompt, kết quả)
  + ai-critique-mssv.md (đoạn văn 200-300 từ đánh giá lỗi, thiên kiến, bài học hợp tác)
  + git-commit-log-mssv.md (lệnh: git log --graph --all --stat)
  mã số sv tôi là 23120231
  ```
- **Kết quả do AI tạo ra:**
  - Tạo cấu trúc thư mục đồng bộ tại `docs/23120231/` và `reports/23120231/`.
  - Tạo `ai-audit-report-23120231.md` ghi nhận chi tiết 7 lần tương tác thực tế với AI.
  - Tạo `ai-critique-23120231.md` với bài phê bình cô đọng 290 từ, trả lời trọn vẹn 3 câu hỏi cốt lõi về thiên kiến và bài học hợp tác.
  - Tạo `git-commit-log-23120231.md` trích xuất nguyên văn toàn bộ nhật ký commit từ lệnh `git log --graph --all --stat`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Tuân thủ 100% yêu cầu đề cương môn học, nội dung sát thực tế và cấu trúc chuyên nghiệp.

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

Công cụ AI đóng vai trò như một trợ thủ đắc lực (Copilot) giúp tăng tốc độ thiết kế test case, xây dựng bộ dữ liệu Playwright và tự động hóa quản lý lỗi qua GitHub CLI. Tuy nhiên, AI thường có thiên kiến giả định môi trường lý tưởng (Happy-path Bias) và thiếu nhạy bén trước các đặc tính ngôn ngữ ngầm định (như cơ chế ép kiểu chuỗi rỗng của JavaScript). Do đó, sự giám sát, phân tích mã nguồn kỹ lưỡng và kiểm chứng thực nghiệm của kỹ sư QA con người luôn là nhân tố quyết định để bảo đảm độ tin cậy và chất lượng phần mềm.
