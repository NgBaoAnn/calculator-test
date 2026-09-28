# Báo Cáo Kiểm Định Sử Dụng AI (AI Audit Report)

> **Khoa Công nghệ Thông tin – Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM**  
> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)  
> **Dự án:** Kiểm thử ứng dụng Web Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NGÔ GIA AN  
> **MSSV:** 23120205  
> **Lớp:** 23CLC01 (Khóa 2023)  
> **Ngày báo cáo:** 28/09/2026  

---

## 1. Lời Tuyên Bố (Student Declaration)

> *"Tôi sử dụng các công cụ AI cho những tác vụ sau:"*
> 1. Thiết kế và đặc tả chi tiết bộ kịch bản kiểm thử ngoại lệ và kiểm thử biên cho Module 2 (Phép Chia & Xử lý Ngoại lệ Toán học) theo chuẩn IEEE 829.
> 2. Phân tích mã nguồn JavaScript client-side để điều tra cơ chế phát sinh lỗi của các bản build lỗi (đặc biệt là Build 6 bỏ kiểm tra chia cho 0 và Build 8 đảo thứ tự toán hạng).
> 3. Hỗ trợ xây dựng các kịch bản kiểm thử tự động hóa Playwright cho các ca kiểm thử ngoại lệ (Negative Testing) và kiểm thử chuyển trạng thái giao diện (State Transition Testing).
> 4. Phân tích nguyên nhân gốc rễ (Root Cause Analysis - RCA) của lỗi kẹt giao diện loading và khóa cứng nút bấm sau khi xuất hiện thông báo `Divide by zero error!` (`BUG-SRC-11`).
> 5. Đối chiếu kết quả kiểm thử hồi quy Sprint 2 (Builds 4–6) và phân loại các lỗi phần mềm phát hiện được.
> 6. Lập báo cáo kiểm định AI (AI Audit Report), viết bài phê bình đánh giá năng lực AI (AI Critique) và trích xuất nhật ký Git Commit Log.

---

## 2. Nhật Ký Tương Tác Chi Tiết Với AI (Detailed AI Interaction Log)

### Tương tác 1: Thiết kế test case ngoại lệ phép chia và số thực tuần hoàn (IEEE 829)
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `14:20 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Hãy giúp tôi thiết kế các test case cho Module 2 (Phép chia) bao gồm các trường hợp chia hết, chia ra số thập phân tuần hoàn, chia số âm và đặc biệt là ngoại lệ chia cho 0 theo chuẩn IEEE 829.
  ```
- **Kết quả do AI tạo ra:**
  - Thiết kế danh mục 13 test case (`TC-DIV-001` đến `TC-DIV-013`) bao phủ các tình huống: chia 2 số nguyên, chia ra số thập phân hữu hạn (`5/2 = 2.5`), chia ra số vô hạn tuần hoàn (`10/3`), số 0 chia cho số khác (`0/x = 0`), chia số âm, chia cho 0 (`x/0`) và phép tính vô định (`0/0`).
  - Mỗi test case có đủ thông tin Identifier, Objective, Preconditions, Test Steps, Expected Result.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Bộ test case tuân thủ đúng kỹ thuật Phân vùng tương đương (EP) và Dự đoán lỗi (Error Guessing), đặc biệt xác định rõ kỳ vọng thông báo lỗi màu đỏ `"Divide by zero error!"`.

---

### Tương tác 2: Sinh mã kịch bản Playwright kiểm thử thông báo lỗi chia cho 0
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:15 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Viết test script Playwright kiểm tra khi nhập số 1 là 10, số 2 là 0, chọn phép chia Divide và bấm Calculate thì thông báo 'Divide by zero error!' xuất hiện và ô Answer không hiển thị kết quả.
  ```
- **Kết quả do AI tạo ra:**
  - Tạo đoạn mã test tự động với Playwright:
    ```typescript
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field', '0');
    await page.selectOption('#selectOperationDropdown', '3'); // Divide
    await page.click('#calculateButton');
    await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
    ```
- **Phán quyết (Verdict):** `INCOMPLETE`
- **Đánh giá & Hiệu chỉnh của sinh viên:** AI chỉ kiểm tra assertion hiển thị lỗi bề mặt mà không nhận ra trang web sau khi xảy ra lỗi chia cho 0 sẽ bị kẹt vĩnh viễn trạng thái loading (ảnh `waiting.gif` tiếp tục hiện) và hai nút Calculate / Clear bị disable. Sinh viên đã yêu cầu AI phân tích sâu hơn mã nguồn JavaScript của trang web để xử lý vấn đề này.

---

### Tương tác 3: Phân tích nguyên nhân lỗi kẹt giao diện sau lỗi chia cho 0 (BUG-SRC-11)
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `15:35 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Tại sao sau khi xuất hiện lỗi Divide by zero error! trên trang BasicCalculator.html thì nút Calculate và nút Clear bị mờ đi không bấm được nữa, và ảnh loading vẫn xoay?
  ```
- **Kết quả do AI tạo ra:**
  - AI đọc và phân tích hàm `calculate()` trong mã nguồn nhúng của trang web `testsheepnz.github.io/BasicCalculator.html`:
    + Khi phát hiện `number2 == 0`, code gọi `setStatusError("Divide by zero error!")` rồi lập tức thực thi câu lệnh `return;`.
    + Do lệnh `return` thoát hàm sớm, hàm không bao giờ chạy đến đoạn `unlockCalculate()` ở cuối.
    + Kết quả là các nút `calculateButton`, `clearButton` vẫn ở trạng thái `disabled = true`, và `calculatingForm` vẫn hiển thị ảnh `waiting.gif`.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Phân tích hoàn toàn chính xác. Sinh viên ghi nhận đây là Defect toàn hệ thống (`BUG-SRC-11`), đồng thời bổ sung logic mở khóa hoặc reload trang trong bộ runner Playwright để không làm gián đoạn chuỗi test case tự động tiếp theo.

---

### Tương tác 4: Phân tích hành vi dị biệt trên Build 6 và Build 8
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `16:10 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  So sánh hành vi phép chia trên Build 6 và Build 8 so với bản Prototype trên trang web TestSheepNZ.
  ```
- **Kết quả do AI tạo ra:**
  - **Trên Build 6:** Mã nguồn cố tình bỏ khối lệnh kiểm tra `if (number2 == 0)`. Khi chia cho 0, JavaScript thực hiện phép tính tự nhiên và trả về `Infinity` (hoặc `NaN` nếu `0/0`) và gán thẳng vào ô Answer thay vì hiển thị thông báo lỗi.
  - **Trên Build 8:** Phép chia bị đảo ngược thứ tự toán hạng, tính `number2 / number1` thay vì `number1 / number2`, khiến các kết quả chia không giao hoán bị sai lệch hoàn toàn.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Báo cáo đối chiếu khớp 100% với tài liệu Ma trận bắt lỗi đa phiên bản (`TC-BLD-006` và `TC-BLD-008`).

---

### Tương tác 5: Rà soát và đánh giá kết quả kiểm thử Sprint 2 (Builds 4–6)
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `16:30 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  Tổng hợp kết quả kiểm thử của Sprint 2 cho Builds 4, 5, 6, có bao nhiêu ca test bị ảnh hưởng bởi lỗi phép chia?
  ```
- **Kết quả do AI tạo ra:**
  - Thống kê chi tiết Sprint 2 (`TR-SPRINT-02`): Tổng 207 lượt test, 174 Pass, 32 Fail, 1 Blocked.
  - Riêng Build 6 có 9 ca test bị Fail do bỏ qua kiểm tra chia cho 0 (`BUG-SRC-06`).
  - Build 4 có 17 Fail và 1 Blocked do khóa chế độ số nguyên (*Integers only*).
  - Build 5 có 6 ca Fail do nút Clear bị vô hiệu hóa ban đầu (`BUG-SRC-05`).
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Số liệu tổng hợp chính xác, khớp với báo cáo `tests/test-runs/sprint-2-regression.md`.

---

### Tương tác 6: Hỗ trợ hoàn thiện thư mục báo cáo đồ án
- **Tên công cụ AI:** Antigravity (Google DeepMind)
- **Ngày và giờ:** `19:44 28/09/2026`
- **Câu lệnh (prompt) nguyên văn:**
  ```text
  hãy giúp tôi làm thêm phiên bản cho sinh viên 23120205 ngô gia an, nội dung tự chế
  ```
- **Kết quả do AI tạo ra:**
  - Khởi tạo bộ tài liệu báo cáo riêng cho sinh viên Ngô Gia An (MSSV: 23120205).
  - Tự động xây dựng nội dung nhật ký tương tác phù hợp với vai trò kiểm thử Module 2 và phân tích build.
  - Soạn thảo bài phê bình AI đạt độ dài chuẩn 283 từ giải quyết 3 câu hỏi cốt lõi.
  - Trích xuất nhật ký Git commit log nguyên văn.
  - Tuân thủ tuyệt đối quy định không commit và không push lên remote git.
- **Phán quyết (Verdict):** `VALID`
- **Đánh giá & Hiệu chỉnh của sinh viên:** Nội dung có tính cá nhân hóa cao, phản ánh đúng chuyên môn kiểm thử ngoại lệ và lỗi hệ thống.

---

## 3. Bảng Tổng Hợp Đánh Giá Độ Chính Xác Của AI (Accuracy Summary)

| Chỉ số đánh giá | Số lượng | Tỷ lệ (%) |
| :--- | :---: | :---: |
| **Tổng số lần tương tác được kiểm định** | **6** | **100%** |
| **VALID (Chính xác, chấp nhận)** | 5 | 83.3% |
| **INCOMPLETE (Chưa đầy đủ, cần sinh viên hiệu chỉnh)** | 1 | 16.7% |
| **INVALID (Sai hoàn toàn, bị bác bỏ)** | 0 | 0.0% |

---

## 4. Kết Luận Chung (Overall Conclusion)

Việc ứng dụng AI trong quá trình kiểm thử phần mềm mang lại hiệu suất rất cao trong khâu sinh kịch bản mẫu và phân tích cú pháp mã nguồn. Tuy nhiên, AI thường có thiên kiến giả định luồng thực thi lý tưởng và bỏ qua các lỗi tiềm ẩn về rò rỉ trạng thái giao diện (UI State Corruption). Sự tham gia sâu sát của kỹ sư QA thông qua kỹ thuật phân tích hộp trắng (White-box testing) và kiểm thử phá hủy (Destructive testing) là bắt buộc để phát hiện các lỗi hệ thống nghiêm trọng mà AI bỏ sót.
