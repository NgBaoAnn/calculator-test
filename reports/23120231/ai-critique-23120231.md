# Đánh Giá & Phê Bình AI (AI Critique)

> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (FIT@HCMUS)  
> **Dự án:** Kiểm thử ứng dụng Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NHẬT ĐẠT  
> **MSSV:** 23120231  
> **Yêu cầu:** Viết một đoạn văn dài 200–300 từ nhận xét, đánh giá về AI: AI đã mắc lỗi/thiên kiến/chưa đầy đủ ở đâu? Tại sao không phát hiện ra? Bài học rút ra về nguyên tắc hợp tác với AI.

---

### Phê bình chuyên môn: Năng lực & Giới hạn của AI trong Kiểm thử Chuỗi & Validation (290 từ)

Trong quá trình thiết kế test case và phân tích lỗi cho Module 3 (Ghép chuỗi & Validation), sự cộng tác cùng AI đã làm sáng tỏ nhiều khía cạnh về năng lực lẫn giới hạn của mô hình. Điểm yếu rõ nhất của AI là thiên kiến giả định hệ thống lý tưởng (Ideal Specification Bias) và đưa ra nhận định chưa đầy đủ về hành vi biên. Cụ thể, khi xử lý trường hợp ô nhập để trống hoặc chứa toàn khoảng trắng, AI mặc định hệ thống sẽ kích hoạt thông báo validation yêu cầu nhập số. Tuy nhiên, trên mã nguồn thực tế của Basic Calculator, hàm isNaN("") và isNaN("   ") trong JavaScript đều trả về false, khiến trình duyệt âm thầm ép chuỗi rỗng thành số 0 và tiếp tục tính toán thay vì báo lỗi. Nguyên nhân AI không nhận diện được vấn đề này là do mô hình chỉ suy luận theo logic nghiệp vụ thông thường từ tài liệu, thiếu ngữ cảnh thực thi động (runtime context) và không tự lường trước các cơ chế ép kiểu lỏng lẻo (type coercion) của JavaScript nếu chưa đọc mã nguồn thực tế. Từ trải nghiệm này, tôi rút ra bài học sâu sắc về nguyên tắc "Hợp tác có phản biện" (Critical Collaboration). AI là trợ thủ đắc lực giúp tăng tốc sinh test case, viết script Playwright và tạo GitHub Issues hàng loạt, nhưng kỹ sư QA con người luôn phải là người kiểm chứng cuối cùng. Chúng ta phải chủ động phân tích mã nguồn thực tế, kiểm tra kỹ lưỡng các ca phủ định và đối chiếu execution log để kịp thời phát hiện những giả định phiến diện của AI.

---

### Thống kê & Xác nhận
- **Số lượng từ của đoạn văn:** 290 từ (thỏa mãn tiêu chí 200–300 từ).
- **Phạm vi phản ánh:** Thiết kế kiểm thử Module 3 (Concatenate & Validation), phân tích mã nguồn JavaScript client-side và tự động hóa GitHub Issues.
