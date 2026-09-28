# Đánh Giá & Phê Bình AI (AI Critique)

> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (FIT@HCMUS)  
> **Dự án:** Kiểm thử ứng dụng Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NGUYỄN BẢO AN  
> **MSSV:** 23120207  
> **Yêu cầu:** Viết một đoạn văn dài 200–300 từ nhận xét, đánh giá về AI: AI đã mắc lỗi/thiên kiến/chưa đầy đủ ở đâu? Tại sao không phát hiện ra? Bài học rút ra về nguyên tắc hợp tác với AI.

---

### Phê bình chuyên môn: Năng lực & Giới hạn của AI trong Kiểm thử Tự động (291 từ)

Trong quá trình xây dựng bộ kịch bản kiểm thử tự động hóa cho ứng dụng Basic Calculator, sự cộng tác với AI đã bộc lộ rõ nét những ranh giới giữa suy luận lý thuyết và thực thi thực tế.

Trước hết, AI thể hiện thiên kiến giả định hệ thống hoàn hảo (Happy-path Bias) và cung cấp giải pháp chưa đầy đủ khi đối mặt với các hành vi dị biệt của mã nguồn. Điển hình là khi tự động hóa phép chia cho 0 (`Divide by zero error!`), mã nguồn JavaScript của ứng dụng thoát trước lệnh `unlockCalculate()`, làm kẹt trạng thái loading và khóa cứng nút bấm. AI ban đầu không lường trước điều này khiến kịch bản bị treo. Tương tự, với chuỗi rỗng và khoảng trắng, AI mặc định hệ thống sẽ báo lỗi validation, nhưng thực tế cơ chế ép kiểu lỏng lẻo của JavaScript (`isNaN("") === false`) lại tự tính chúng như số 0. Nguyên nhân AI không phát hiện ra là do mô hình ngôn ngữ chỉ suy luận trên văn bản tĩnh và logic toán học chuẩn mực, hoàn toàn thiếu ngữ cảnh thực thi động (runtime context) trên DOM thực tế nếu chưa chạy thử nghiệm.

Bài học sâu sắc rút ra là nguyên tắc *“Verification Before Trust”* (Kiểm chứng trước khi tin cậy). AI là một trợ thủ đắc lực giúp tăng tốc sinh mã khung và cấu trúc Page Object Model, nhưng kỹ sư QA con người bắt buộc phải giữ vai trò chốt chặn cuối cùng. Chúng ta cần đọc sâu mã nguồn thực tế, phân tích các ca biên và giám sát execution log để kịp thời hiệu chỉnh những giả định phiến diện của AI.

---

### Thống kê & Xác nhận
- **Số lượng từ của đoạn văn:** 291 từ (thỏa mãn tiêu chí 200–300 từ).
- **Phạm vi phản ánh:** Tự động hóa kiểm thử Playwright, phân tích lỗi mã nguồn Basic Calculator.
