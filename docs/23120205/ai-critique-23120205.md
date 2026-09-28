# Đánh Giá & Phê Bình AI (AI Critique)

> **Môn học:** CS423 / CSC13003 – Kiểm thử và Đảm bảo Chất lượng Phần mềm (FIT@HCMUS)  
> **Dự án:** Kiểm thử ứng dụng Basic Calculator (TestSheepNZ)  
> **Sinh viên thực hiện:** NGÔ GIA AN  
> **MSSV:** 23120205  
> **Yêu cầu:** Viết một đoạn văn dài 200–300 từ nhận xét, đánh giá về AI: AI đã mắc lỗi/thiên kiến/chưa đầy đủ ở đâu? Tại sao không phát hiện ra? Bài học rút ra về nguyên tắc hợp tác với AI.

---

### Phê bình chuyên môn: Góc nhìn Kiểm thử Ngoại lệ & Đối sánh Đa phiên bản (283 từ)

Trong quá trình kiểm thử ứng dụng Basic Calculator, đặc biệt ở module xử lý ngoại lệ phép chia và đối chiếu các bản build, việc áp dụng AI đã bộc lộ rõ ranh giới giữa năng lực hỗ trợ và các hạn chế cố hữu.

Điểm yếu lớn nhất của AI là thiên kiến giả định luồng xử lý lý tưởng (Happy Path) và thiếu năng lực dự báo lỗi rò rỉ trạng thái giao diện. Khi viết kịch bản kiểm thử ngoại lệ chia cho 0, AI chỉ tập trung kiểm tra thông báo `Divide by zero error!` mà bỏ qua việc mã nguồn JavaScript thoát trước lệnh `unlockCalculate()`, khiến các nút bấm bị khóa vĩnh viễn và làm sụp đổ các ca kiểm thử hồi quy tiếp theo. Ngoài ra, trên Build 6, AI ban đầu có xu hướng xem kết quả `Infinity` của JavaScript là bình thường thay vì nhận diện đó là lỗi nghiêm trọng. Lý do AI không phát hiện ra là vì mô hình chỉ suy luận dựa trên xác suất văn bản tĩnh và cú pháp mã nguồn, hoàn toàn thiếu ngữ cảnh thực thi động trên trình duyệt và không có tư duy phản biện của kiểm thử phá hủy (destructive testing).

Bài học tôi rút ra là nguyên tắc *“Trust, but Actively Challenge”* (Tin tưởng nhưng phải luôn chất vấn). AI giúp tăng tốc viết boilerplate code và gợi ý dữ liệu biên rất tốt, nhưng kỹ sư QA con người bắt buộc phải giữ tư duy hoài nghi nghiệp vụ, tự tay kiểm tra mã nguồn thực tế và thực nghiệm trên môi trường thật để làm chủ chất lượng sản phẩm.

---

### Thống kê & Xác nhận
- **Số lượng từ của đoạn văn:** 283 từ (thỏa mãn tiêu chuẩn 200–300 từ).
- **Trọng tâm phản ánh:** Kiểm thử ngoại lệ phép chia, rò rỉ trạng thái UI (Divide by zero lock), kiểm thử đối sánh đa phiên bản (Build 6 Infinity).
