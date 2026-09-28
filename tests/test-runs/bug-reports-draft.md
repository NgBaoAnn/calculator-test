# Bug reports — bản nháp từ kết quả Sprint

## Trạng thái và nguồn dữ liệu

Các report dưới đây được tổng hợp từ `sprint-1-test-run.md`, `sprint-2-regression.md`, `sprint-3-regression.md` và `source-findings.md`. Các bảng sprint ghi kết quả là **suy luận từ mã nguồn, chưa chạy test thực tế**. Vì vậy trạng thái trong tài liệu này là `Draft — source-inferred`, không phải bug đã xác nhận khi chạy tự động.

Tổng trong ba bảng hiện có: 621 lượt Test Case × Build, 357 Pass, 196 Fail và 68 Blocked (đều là nhãn suy luận). Mã HTML dùng đối chiếu: `475f650ab2607d77620ac20269f95b845d7c210209542ecd492bd4cdc551d099`. Browser/OS, thời điểm chạy, screenshot, video, trace và console log chưa được ghi nhận.

Severity/Priority bên dưới là đề xuất ban đầu để phân loại, cần xác nhận lại khi tái hiện trên website. Mỗi BUG-SRC là một mã tham chiếu nội bộ, không phải GitHub Issue ID.

---

## BUG-SRC-01 — Build 1 không validation đầu vào số

**Found by Test Case:** `TC-BLD-001`; các ca validation tương ứng gồm `TC-CON-002`, `TC-CON-010` đến `TC-CON-013`, `TC-CON-016`, `TC-CON-022`.

**Requirement liên quan:** `FR-CALC-03`, `FR-CALC-04`  
**Build:** Build 1  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Build 1 bỏ qua kiểm tra `isNaN` cho phép toán số học. Đầu vào chữ hoặc ký tự không hợp lệ có thể được tính thành `NaN` thay vì bị từ chối bằng thông báo validation.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 1.
2. Nhập `abc` vào First number và `2` vào Second number.
3. Chọn Add rồi bấm Calculate.

**Kết quả mong đợi:** Không tính toán; hiển thị `Number 1 is not a number`.  
**Kết quả theo mã nguồn:** Build 1 bỏ qua validation; giá trị Answer có thể thành `NaN`. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-01`.

---

## BUG-SRC-02 — Build 2 hoán đổi Add và Concatenate

**Found by Test Case:** `TC-BLD-002`  
**Requirement liên quan:** `FR-CALC-01`, `FR-CALC-03`, `FR-CALC-04`  
**Build:** Build 2  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Chọn Add nhưng ứng dụng thực hiện ghép chuỗi; chọn Concatenate nhưng ứng dụng thực hiện phép cộng. Hai thao tác trả kết quả sai với ý nghĩa được chọn.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 2.
2. Nhập `12` và `34`.
3. Chọn Add, bấm Calculate và ghi Answer.
4. Chọn Concatenate, bấm Calculate và ghi Answer.

**Kết quả mong đợi:** Add trả `46`; Concatenate trả `1234`.  
**Kết quả theo mã nguồn:** Hai nhánh Add/Concatenate bị đảo. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-02`.

---

## BUG-SRC-03 — Build 3 validation từ chối chuỗi trong Concatenate

**Found by Test Case:** `TC-BLD-003`, `TC-CON-018`  
**Requirement liên quan:** `FR-CALC-03`, `FR-CALC-04`  
**Build:** Build 3  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Build 3 luôn xử lý đầu vào như số, kể cả khi chọn Concatenate. Ghép chuỗi chữ hợp lệ bị báo lỗi kiểu số; trạng thái Integers only cũng có thể không đúng.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 3.
2. Nhập `hello` và `world`.
3. Chọn Concatenate rồi bấm Calculate.

**Kết quả mong đợi:** Answer là `helloworld`, không có lỗi validation; Integers only bị ẩn và vô hiệu hóa.  
**Kết quả theo mã nguồn:** Build 3 luôn bật validation số nên đầu vào chữ bị từ chối. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-03`.

---

## BUG-SRC-04 — Build 4 khóa Integers only

**Found by Test Case:** `TC-BLD-004`  
**Requirement liên quan:** `FR-CALC-04`  
**Build:** Build 4  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Với phép toán số, Build 4 tự tích chọn và vô hiệu hóa Integers only. Người dùng không thể chọn kết quả thập phân.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 4.
2. Chọn Divide và nhập `5` cùng `2`.
3. Thử bỏ chọn Integers only rồi bấm Calculate.

**Kết quả mong đợi:** Checkbox có thể bật/tắt; khi bỏ chọn, Answer là `2.5`.  
**Kết quả theo mã nguồn:** Checkbox bị khóa ở trạng thái đã chọn; kết quả bị cắt thành số nguyên. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-04`.

---

## BUG-SRC-05 — Build 5 vô hiệu hóa Clear

**Found by Test Case:** `TC-BLD-005`  
**Requirement liên quan:** `FR-CALC-04`  
**Build:** Build 5  
**Severity / Priority đề xuất:** Minor / P2  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Sau khi chọn Build 5, nút Clear bị disabled trước khi Calculate. Người dùng không thể xóa Answer/checkbox theo chức năng Clear trong trạng thái này.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 5.
2. Nhập dữ liệu và tích Integers only.
3. Trước khi Calculate, thử bấm Clear.

**Kết quả mong đợi:** Clear khả dụng và xóa Answer, bỏ chọn Integers only.  
**Kết quả theo mã nguồn:** Clear bị vô hiệu hóa khi đổi sang Build 5. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-05`.

---

## BUG-SRC-06 — Build 6 không chặn chia cho 0

**Found by Test Case:** `TC-BLD-006`  
**Requirement liên quan:** `FR-CALC-02`, `FR-CALC-04`  
**Build:** Build 6  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Build 6 bỏ qua kiểm tra mẫu số bằng 0. Phép chia có thể hiển thị `Infinity` hoặc `NaN` thay vì thông báo lỗi.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 6.
2. Nhập `10` và `0`.
3. Chọn Divide rồi bấm Calculate.

**Kết quả mong đợi:** Hiển thị `Divide by zero error!`; Answer không chứa `Infinity` hoặc `NaN`.  
**Kết quả theo mã nguồn:** Nhánh chia cho 0 không bị chặn trên Build 6. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-06`.

---

## BUG-SRC-07 — Build 7 dùng Answer cũ làm First number

**Found by Test Case:** `TC-BLD-007`  
**Requirement liên quan:** `FR-CALC-01`, `FR-CALC-02`, `FR-CALC-03`  
**Build:** Build 7  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Build 7 lấy giá trị Answer hiện tại làm toán hạng thứ nhất thay vì giá trị trong First number. Kết quả phụ thuộc phép tính trước hoặc Answer đang rỗng.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 7.
2. Nhập `2` và `3`, chọn Add, Calculate; kết quả lượt đầu là `5`.
3. Đổi First number thành `10`, Second number thành `3`, không Clear, rồi Calculate lần nữa.

**Kết quả mong đợi:** Lượt thứ hai dùng `10 + 3` và trả `13`.  
**Kết quả theo mã nguồn:** Lượt thứ hai dùng Answer cũ làm toán hạng đầu; với dữ liệu trên kết quả là `8`. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-07`.

---

## BUG-SRC-08 — Build 8 đảo First number và Second number

**Found by Test Case:** `TC-BLD-008`  
**Requirement liên quan:** `FR-CALC-01`, `FR-CALC-02`  
**Build:** Build 8  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Build 8 hoán đổi hai toán hạng trước khi tính. Các phép toán không giao hoán như trừ/chia cho kết quả sai.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 8.
2. Nhập `9` vào First number và `4` vào Second number.
3. Chọn Subtract rồi bấm Calculate.

**Kết quả mong đợi:** Answer là `5`.  
**Kết quả theo mã nguồn:** Hai toán hạng bị đảo, dự kiến Answer là `-5`. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-08`.

---

## BUG-SRC-09 — Build 9 ẩn Second number và Calculate

**Found by Test Case:** `TC-BLD-009`  
**Requirement liên quan:** `FR-CALC-04`  
**Build:** Build 9  
**Severity / Priority đề xuất:** Blocker / P1  
**Test run:** Các ca bị ảnh hưởng được ghi Blocked theo quy ước sprint; trạng thái suy luận từ mã nguồn.

**Mô tả:** Build 9 ẩn và vô hiệu hóa trường Second number cùng nút Calculate, khiến phép tính thông thường không thể thực hiện.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Build 9.
2. Quan sát Second number và Calculate.
3. Thử nhập đủ hai toán hạng và thực hiện Add.

**Kết quả mong đợi:** Second number và Calculate hiện, hoạt động; `2 + 3` trả `5`.  
**Kết quả theo mã nguồn:** Hai phần tử bị ẩn và disabled; ca tính toán không thể hoàn tất. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-09`.

---

## BUG-SRC-10 — Ô trống hoặc chỉ có khoảng trắng được chấp nhận như số 0

**Found by Test Case:** `TC-CON-019`, `TC-CON-020`, `TC-CON-021`  
**Requirement liên quan:** `FR-CALC-03`  
**Build:** Prototype  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn.

**Mô tả:** Validation dùng `isNaN` trực tiếp. JavaScript coi chuỗi rỗng và chuỗi chỉ chứa dấu cách là giá trị số hợp lệ khi ép kiểu, nên ứng dụng tính chúng như `0` thay vì báo trường dữ liệu không hợp lệ.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Prototype và phép Add.
2. Nhập `10` vào First number.
3. Để Second number rỗng hoặc nhập ba dấu cách.
4. Bấm Calculate.

**Kết quả mong đợi:** Hiển thị `Number 2 is not a number`; không thực hiện phép tính.  
**Kết quả theo mã nguồn:** Không có thông báo validation; chuỗi rỗng/khoảng trắng được ép thành `0`, nên phép tính chạy. Chưa xác minh bằng lần chạy tự động.  
**Evidence:** Chưa có screenshot/log runtime; đối chiếu `source-findings.md#bug-src-10`.

---

## BUG-SRC-11 — Màn hình và nút bị khóa sau lỗi chia cho 0

**Found by Test Case:** `TC-DIV-009`, `TC-FMT-006`  
**Requirement liên quan:** `FR-CALC-02`, `FR-CALC-04`  
**Build:** Prototype  
**Severity / Priority đề xuất:** Major / P1  
**Test run:** Fail theo suy luận từ mã nguồn; đã có quan sát UI trực tiếp trong phiên kiểm tra, nhưng chưa có log/trace lưu trong repo.

**Mô tả:** Khi mẫu số bằng 0, ứng dụng hiển thị lỗi rồi thoát khỏi `calculate()` trước khi gọi `unlockCalculate()`. Trạng thái chờ tiếp tục hiện, Answer bị ẩn, Calculate và Clear bị khóa.

**Môi trường:** URL `https://testsheepnz.github.io/BasicCalculator.html`; HTML SHA-256 ở trên. Browser/OS và thời điểm chạy chưa được ghi nhận.

**Các bước tái hiện:**
1. Chọn Prototype.
2. Nhập `50` và `0`, chọn Divide, rồi bấm Calculate.
3. Quan sát trạng thái sau khi `Divide by zero error!` xuất hiện.
4. Thử tính `50 / 5` hoặc bấm Clear để khôi phục.

**Kết quả mong đợi:** Lỗi được hiển thị; trạng thái chờ kết thúc, Answer và các nút được mở khóa; phép tính hợp lệ tiếp theo trả `10` và xóa lỗi cũ.  
**Kết quả theo mã nguồn:** Nhánh lỗi return trước `unlockCalculate()`, khiến giao diện bị kẹt và không thể phục hồi bằng Calculate/Clear. Quan sát trực tiếp đã thấy lỗi cùng loading và nút bị khóa tại thời điểm chụp; chưa lưu evidence vào repo.  
**Evidence:** Ảnh chụp được tạo trong phiên kiểm tra nhưng chưa được lưu làm evidence trong repo; đối chiếu `source-findings.md#bug-src-11`.

