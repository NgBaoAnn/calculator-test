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
