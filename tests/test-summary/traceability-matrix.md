# 📊 MA TRẬN TRUY XUẤT NGUỒN GỐC YÊU CẦU (REQUIREMENTS TRACEABILITY MATRIX - RTM)

---

## 📌 1. TỔNG QUAN & MỤC TIÊU
Tài liệu **Ma trận Truy xuất Nguồn gốc (RTM)** được xây dựng nhằm:
- Đảm bảo 100% các yêu cầu nghiệp vụ và yêu cầu chức năng (SRS) đều được bao phủ bởi các kịch bản kiểm thử (Test Cases).
- Theo dõi trạng thái kiểm thử hai chiều (Bi-directional Traceability): Từ Yêu cầu $\leftrightarrow$ Test Cases $\leftrightarrow$ Lỗi phát sinh (Defects).
- Hỗ trợ đánh giá tác động khi có thay đổi yêu cầu hoặc khi phát hành phiên bản mới.

---

## 📈 2. THỐNG KÊ TỶ LỆ BAO PHỦ (COVERAGE METRICS)

| Chỉ số | Giá trị | Ghi chú |
| :--- | :---: | :--- |
| **Tổng số Yêu cầu chức năng (Requirements)** | 12 | Đã chuẩn hóa từ đặc tả nghiệp vụ |
| **Số Yêu cầu đã có Test Cases bao phủ** | 12 | **Tỷ lệ bao phủ yêu cầu: 100%** |
| **Tổng số Test Cases đã thiết kế** | 25 | Bao gồm kiểm thử chức năng, biên và ngoại lệ |
| **Số Test Cases đã thực thi (Executed)** | 25 | 100% |
| **Số Test Cases Đạt (Passed)** | 22 | 88% |
| **Số Lỗi liên quan (Defects Logged)** | 3 | Đã được xử lý trong Sprint 2 |

---

## 🗺️ 3. BẢNG MA TRẬN TRUY XUẤT (TRACEABILITY MATRIX)

| Mã Yêu cầu (Req ID) | Mô tả Yêu cầu Chức năng | Mức ưu tiên | Mã Test Case | Loại kiểm thử | Trạng thái Test | Mã Bug liên kết |
| :--- | :--- | :---: | :--- | :--- | :---: | :---: |
| **FR-LOGIN-01** | Đăng nhập thành công với tài khoản và mật khẩu chính xác | High | `TC-LOGIN-001`, `TC-LOGIN-002` | Functional / EP & Error Guessing | `Passed` | - |
| **FR-LOGIN-02** | Khóa tài khoản tạm thời sau 5 lần đăng nhập thất bại | Medium | `TC-LOGIN-005` | Security / Boundary | `Passed` (Retest) | `BUG-001` |
| **FR-REG-01** | Cho phép đăng ký tài khoản mới với email và mật khẩu hợp lệ | High | `TC-REG-001` | Functional / EP | `Passed` | - |
| **FR-REG-02** | Ngăn chặn đăng ký trùng lặp địa chỉ email đã tồn tại | High | `TC-REG-002` | Negative | `Passed` | - |
| **FR-REG-03** | Ràng buộc độ mạnh mật khẩu (tối thiểu 8 ký tự, có số và ký tự đặc biệt) | Medium | `TC-REG-003` | Validation | `Passed` (Retest) | `BUG-002` |
| **FR-CHK-01** | Cho phép thanh toán giỏ hàng qua thẻ tín dụng hợp lệ | Critical | `TC-CHK-001` | Functional / End-to-End | `Passed` | - |
| **FR-CHK-02** | Xử lý và hiển thị thông báo lỗi khi thẻ tín dụng hết hạn hoặc không đủ số dư | Critical | `TC-CHK-002` | Negative / E2E | `Passed` (Retest) | `BUG-003` |
| **FR-CHK-03** | Tự động tính toán phí vận chuyển và áp dụng mã giảm giá | High | `TC-CHK-003` | Calculation / Business | `Passed` | - |

---

## 🔄 4. TRUY XUẤT NGƯỢC TỪ LỖI (DEFECT TRACEABILITY)

| Mã Bug | Tên Bug | Test Case phát hiện | Thuộc Yêu cầu | Trạng thái hiện tại |
| :---: | :--- | :---: | :---: | :---: |
| `BUG-001` | Không khóa tài khoản sau 5 lần thử sai | `TC-LOGIN-005` | `FR-LOGIN-02` | `Closed` |
| `BUG-002` | Mật khẩu ngắn dưới 8 ký tự vẫn được chấp nhận | `TC-REG-003` | `FR-REG-03` | `Closed` |
| `BUG-003` | Timeout khi xử lý thanh toán với thẻ hết hạn | `TC-CHK-002` | `FR-CHK-02` | `Closed` |
