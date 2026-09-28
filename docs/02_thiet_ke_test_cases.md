# TÀI LIỆU THIẾT KẾ TEST CASE CHI TIẾT (TEST SPECIFICATION)

> **Dự án**: Kiểm thử Ứng dụng Basic Calculator  
> **Môi trường thử nghiệm**: [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)  
> **Tiêu chuẩn tài liệu**: Mẫu Test Case chuẩn IEEE 829  

---

## 📌 QUY ƯỚC ĐẶT MÃ TEST CASE (ID CONVENTION)
- `TC_ADD_xx`: Test case phép Cộng
- `TC_SUB_xx`: Test case phép Trừ
- `TC_MUL_xx`: Test case phép Nhân
- `TC_DIV_xx`: Test case phép Chia & Ngoại lệ
- `TC_CAT_xx`: Test case phép Ghép Chuỗi (Concatenate)
- `TC_VAL_xx`: Test case Kiểm tra Hợp lệ Dữ liệu Đầu vào (Validation)
- `TC_INT_xx`: Test case Định dạng Số nguyên (Integers Only)
- `TC_UI_xx`: Test case Nút bấm và Trạng thái Giao diện
- `TC_BLD_xx`: Test case Kiểm tra Lỗi trên các phiên bản Build (1 đến 9)

---

## 👤 MODULE 1: PHÉP TÍNH SỐ HỌC CƠ BẢN & KIỂM THỬ BIÊN
*(Phụ trách: Thành viên 1)*

| Mã Test Case | Tên ca kiểm thử | Pre-condition | Các bước thực hiện | Dữ liệu đầu vào (Input) | Kết quả mong đợi (Expected Result) | Loại Test |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_ADD_01** | Cộng 2 số nguyên dương | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `15`<br>Number 2: `25` | Answer hiển thị `40`. Không có lỗi. | Functional (Positive) |
| **TC_ADD_02** | Cộng số âm và số dương | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `-10`<br>Number 2: `30` | Answer hiển thị `20`. | Functional (Positive) |
| **TC_ADD_03** | Cộng 2 số âm | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `-15`<br>Number 2: `-35` | Answer hiển thị `-50`. | Functional (Positive) |
| **TC_ADD_04** | Cộng với số 0 | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là 0<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `42`<br>Number 2: `0` | Answer hiển thị `42`. | Functional (Positive) |
| **TC_ADD_05** | Cộng 2 số thập phân | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `3.14`<br>Number 2: `2.86` | Answer hiển thị `6`. | Functional (Positive) |
| **TC_ADD_06** | Kiểm thử biên: Nhập 10 chữ số cực đại | Build: Prototype | 1. Nhập 10 số 9 vào 2 ô<br>2. Chọn Add<br>3. Nhấn Calculate | Number 1: `9999999999`<br>Number 2: `1` | Answer hiển thị `10000000000`. | Boundary (BVA) |
| **TC_ADD_07** | Kiểm thử giới hạn độ dài `maxlength=10` | Build: Prototype | 1. Thử nhập 11 ký tự vào Number 1 | Input: `12345678901` | Ô nhập liệu chỉ cho phép hiển thị tối đa 10 ký tự `1234567890`. | Boundary (BVA) |
| **TC_SUB_01** | Trừ 2 số nguyên dương ra kết quả dương | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `50`<br>Number 2: `20` | Answer hiển thị `30`. | Functional (Positive) |
| **TC_SUB_02** | Trừ 2 số nguyên ra kết quả âm | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `15`<br>Number 2: `40` | Answer hiển thị `-25`. | Functional (Positive) |
| **TC_SUB_03** | Trừ cho số 0 | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là 0<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `25`<br>Number 2: `0` | Answer hiển thị `25`. | Functional (Positive) |
| **TC_SUB_04** | Trừ cho số âm (Trừ số âm = Cộng) | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là số âm<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `20`<br>Number 2: `-10` | Answer hiển thị `30`. | Functional (Positive) |
| **TC_SUB_05** | Trừ 2 số thập phân | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `10.5`<br>Number 2: `4.2` | Answer hiển thị `6.3`. | Functional (Positive) |
| **TC_MUL_01** | Nhân 2 số nguyên dương | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Multiply<br>4. Nhấn Calculate | Number 1: `8`<br>Number 2: `7` | Answer hiển thị `56`. | Functional (Positive) |
| **TC_MUL_02** | Nhân với số 0 | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là 0<br>3. Chọn Multiply<br>4. Nhấn Calculate | Number 1: `99`<br>Number 2: `0` | Answer hiển thị `0`. | Functional (Positive) |
| **TC_MUL_03** | Nhân số dương với số âm | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Multiply<br>4. Nhấn Calculate | Number 1: `6`<br>Number 2: `-5` | Answer hiển thị `-30`. | Functional (Positive) |
| **TC_MUL_04** | Nhân 2 số âm | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Multiply<br>4. Nhấn Calculate | Number 1: `-4`<br>Number 2: `-8` | Answer hiển thị `32`. | Functional (Positive) |
| **TC_MUL_05** | Nhân 2 số thập phân | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Multiply<br>4. Nhấn Calculate | Number 1: `2.5`<br>Number 2: `4.2` | Answer hiển thị `10.5`. | Functional (Positive) |

---

## 👤 MODULE 2: PHÉP CHIA & XỬ LÝ NGOẠI LỆ TOÁN HỌC
*(Phụ trách: Thành viên 2)*

| Mã Test Case | Tên ca kiểm thử | Pre-condition | Các bước thực hiện | Dữ liệu đầu vào (Input) | Kết quả mong đợi (Expected Result) | Loại Test |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_DIV_01** | Phép chia hết (ra số nguyên) | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `100`<br>Number 2: `4` | Answer hiển thị `25`. Không có lỗi. | Functional (Positive) |
| **TC_DIV_02** | Phép chia ra số thập phân hữu hạn | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `9`<br>Number 2: `2` | Answer hiển thị `4.5`. | Functional (Positive) |
| **TC_DIV_03** | Chia ra số thập phân tuần hoàn vô hạn | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `10`<br>Number 2: `3` | Answer hiển thị xấp xỉ `3.3333333333333335`. | Precision / Floating |
| **TC_DIV_04** | Số 0 chia cho một số khác | Build: Prototype | 1. Nhập Number 1 là 0<br>2. Nhập Number 2 khác 0<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `0`<br>Number 2: `8` | Answer hiển thị `0`. Không báo lỗi. | Functional (Positive) |
| **TC_DIV_05** | Chia số dương cho số âm | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là số âm<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `45`<br>Number 2: `-5` | Answer hiển thị `-9`. | Functional (Positive) |
| **TC_DIV_06** | Chia cho số 0 (Divide by zero) | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2 là 0<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `10`<br>Number 2: `0` | Nhãn lỗi màu đỏ hiển thị: **`Divide by zero error!`**. Không tính Answer. | Negative / Exception |
| **TC_DIV_07** | Phép chia `0 / 0` | Build: Prototype | 1. Nhập Number 1 là 0<br>2. Nhập Number 2 là 0<br>3. Chọn Divide<br>4. Nhấn Calculate | Number 1: `0`<br>Number 2: `0` | Nhãn lỗi màu đỏ hiển thị: **`Divide by zero error!`**. | Negative / Exception |
| **TC_DIV_08** | Kiểm tra đúng thứ tự toán hạng (Không bị đảo số) | Build: Prototype | 1. Nhập Number 1 nhỏ hơn Number 2<br>2. Chọn Divide<br>3. Nhấn Calculate | Number 1: `2`<br>Number 2: `10` | Answer hiển thị `0.2` (đúng `2/10`, không phải `10/2 = 5`). | Logical / Sequence |
| **TC_DIV_09** | Xóa thông báo lỗi khi thực hiện phép chia hợp lệ sau lỗi | Build: Prototype<br>(Đang có lỗi Divide by zero) | 1. Đổi Number 2 thành số khác 0<br>2. Nhấn Calculate | Number 1: `10`<br>Number 2: `2` | Thông báo lỗi đỏ biến mất, Answer cập nhật thành `5`. | UI State / Recovery |

---

## 👤 MODULE 3: GHÉP CHUỖI & KIỂM TRA HỢP LỆ DỮ LIỆU ĐẦU VÀO
*(Phụ trách: Thành viên 3)*

| Mã Test Case | Tên ca kiểm thử | Pre-condition | Các bước thực hiện | Dữ liệu đầu vào (Input) | Kết quả mong đợi (Expected Result) | Loại Test |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_CAT_01** | Ghép 2 chuỗi ký tự số | Build: Prototype | 1. Nhập Number 1<br>2. Nhập Number 2<br>3. Chọn Concatenate<br>4. Nhấn Calculate | Number 1: `123`<br>Number 2: `456` | Answer hiển thị `"123456"`. | Functional (Positive) |
| **TC_CAT_02** | Ghép 2 chuỗi chữ | Build: Prototype | 1. Nhập Number 1 là chữ<br>2. Nhập Number 2 là chữ<br>3. Chọn Concatenate<br>4. Nhấn Calculate | Number 1: `Software`<br>Number 2: `Testing` | Answer hiển thị `"SoftwareTesting"`. Không báo lỗi number. | Functional (Positive) |
| **TC_CAT_03** | Ghép ký tự đặc biệt | Build: Prototype | 1. Nhập ký tự đặc biệt<br>2. Chọn Concatenate<br>3. Nhấn Calculate | Number 1: `Hello@`<br>Number 2: `World#` | Answer hiển thị `"Hello@World#"`. | Functional (Positive) |
| **TC_CAT_04** | Ghép với trường rỗng | Build: Prototype | 1. Nhập Number 1<br>2. Để trống Number 2<br>3. Chọn Concatenate<br>4. Nhấn Calculate | Number 1: `abc`<br>Number 2: `(trống)` | Answer hiển thị `"abc"`. Không báo lỗi. | Boundary / Empty |
| **TC_CAT_05** | Trạng thái UI: Checkbox "Integers only" khi chọn Concatenate | Build: Prototype | 1. Chọn Operation là "Concatenate" | Operation: `Concatenate` | Checkbox `Integers only` và nhãn tự động **ẩn đi (hidden) và vô hiệu hóa (disabled)**. | UI / State Check |
| **TC_CAT_06** | Trạng thái UI: Checkbox xuất hiện lại khi đổi về phép toán số học | Đang ở phép Concatenate | 1. Đổi Operation từ Concatenate sang Add | Operation: `Add` | Checkbox `Integers only` và nhãn tự động **hiển thị lại và kích hoạt bình thường**. | UI / State Check |
| **TC_VAL_01** | Nhập chữ cái vào Number 1 trong phép toán số | Build: Prototype | 1. Nhập chữ vào Number 1<br>2. Nhập số vào Number 2<br>3. Chọn Add<br>4. Nhấn Calculate | Number 1: `abc`<br>Number 2: `10` | Báo lỗi màu đỏ: **`Number 1 is not a number`**. Không hiển thị Answer. | Input Validation (Negative) |
| **TC_VAL_02** | Nhập chữ cái vào Number 2 trong phép toán số | Build: Prototype | 1. Nhập số vào Number 1<br>2. Nhập chữ vào Number 2<br>3. Chọn Subtract<br>4. Nhấn Calculate | Number 1: `20`<br>Number 2: `xyz` | Báo lỗi màu đỏ: **`Number 2 is not a number`**. Không hiển thị Answer. | Input Validation (Negative) |
| **TC_VAL_03** | Nhập ký tự đặc biệt vào ô số | Build: Prototype | 1. Nhập ký tự `@#$` vào Number 1<br>2. Chọn Multiply<br>3. Nhấn Calculate | Number 1: `@#$`<br>Number 2: `5` | Báo lỗi màu đỏ: **`Number 1 is not a number`**. | Input Validation (Negative) |
| **TC_VAL_04** | Nhập khoảng trắng (whitespace) | Build: Prototype | 1. Nhập dấu cách vào Number 1<br>2. Chọn Add<br>3. Nhấn Calculate | Number 1: `"   "`<br>Number 2: `10` | Báo lỗi màu đỏ hoặc xử lý kiểm tra chặt chẽ giá trị rỗng/khoảng trắng. | Input Validation (Negative) |

---

## 👤 MODULE 4: ĐỊNH DẠNG KẾT QUẢ, ĐIỀU KHIỂN & KIỂM THỬ ĐA PHIÊN BẢN (BUILDS)
*(Phụ trách: Thành viên 4)*

| Mã Test Case | Tên ca kiểm thử | Pre-condition | Các bước thực hiện | Dữ liệu đầu vào (Input) | Kết quả mong đợi (Expected Result) | Loại Test |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_INT_01** | Tích chọn "Integers only" trước khi bấm Calculate | Build: Prototype | 1. Nhập dữ liệu chia ra số lẻ<br>2. Tích chọn "Integers only"<br>3. Nhấn Calculate | Number 1: `7`<br>Number 2: `2`<br>Operation: `Divide` | Answer hiển thị `3` (thay vì `3.5`). | Functional (Positive) |
| **TC_INT_02** | Tích chọn "Integers only" sau khi đã có kết quả hiển thị | Đã có kết quả `3.5` trong ô Answer | 1. Click vào checkbox "Integers only" | Checkbox: `Checked` | Ô Answer tự động làm tròn thành `3` ngay tức thì (không cần bấm Calculate lại). | Interactive / UI Event |
| **TC_INT_03** | Bỏ tích "Integers only" sau khi đã làm tròn | Đang hiển thị kết quả nguyên `3` từ `3.5` | 1. Bỏ tích chọn checkbox "Integers only" | Checkbox: `Unchecked` | Ô Answer khôi phục hiển thị `3.5`. | Interactive / UI Event |
| **TC_INT_04** | Làm tròn số âm với "Integers only" | Build: Prototype | 1. Nhập phép tính ra `-3.8`<br>2. Tích "Integers only"<br>3. Bấm Calculate | Number 1: `-19`<br>Number 2: `5`<br>Operation: `Divide` | Answer hiển thị `-3` (sử dụng hàm `parseInt`). | Functional (Edge Case) |
| **TC_UI_01** | Trạng thái nút Calculate và hoạt ảnh loading | Build: Prototype | 1. Nhập số hợp lệ<br>2. Bấm Calculate | Bấm Calculate | Form `calculatingForm` hiện ra với chữ *"Calculating ..."* & ảnh `waiting.gif`. Nút Calculate và Clear bị vô hiệu hóa tạm thời. | UI / Performance |
| **TC_UI_02** | Nút Clear: Xóa sạch dữ liệu ô kết quả và reset trạng thái | Đã có kết quả tính toán và tick chọn Integers only | 1. Nhấn nút "Clear" | Bấm nút "Clear" | Ô Answer trống rỗng, Checkbox "Integers only" bỏ tích, thông báo lỗi đỏ biến mất. | Functional / State Reset |
| **TC_BLD_01** | Bắt lỗi Build 1: Không kiểm tra số hợp lệ | Build: `1` | 1. Chọn Build 1<br>2. Nhập chữ vào ô số<br>3. Bấm Add | Number 1: `abc`<br>Number 2: `def` | **Phát hiện Bug**: Build 1 không báo lỗi `is not a number` mà ra `NaN` hoặc ghép sai. | Bug Hunting / Mutated |
| **TC_BLD_02** | Bắt lỗi Build 2: Đảo ngược Add và Concatenate | Build: `2` | 1. Chọn Build 2<br>2. Chọn phép Add với 2 số<br>3. Bấm Calculate | Number 1: `10`<br>Number 2: `20` | **Phát hiện Bug**: Phép Add lại ghép thành `1020` thay vì ra `30`. | Bug Hunting / Mutated |
| **TC_BLD_03** | Bắt lỗi Build 3: Luôn ép kiểm tra kiểu số cho Concatenate | Build: `3` | 1. Chọn Build 3<br>2. Chọn Concatenate<br>3. Nhập chữ cái | Number 1: `hello`<br>Number 2: `world` | **Phát hiện Bug**: Concatenate bị báo lỗi `Number is not a number`. | Bug Hunting / Mutated |
| **TC_BLD_04** | Bắt lỗi Build 4: Khóa cứng ở chế độ Integers only | Build: `4` | 1. Chọn Build 4<br>2. Kiểm tra ô checkbox Integers only | Dropdown: `Build 4` | **Phát hiện Bug**: Checkbox bị khóa `disabled` và luôn luôn `checked`. | Bug Hunting / Mutated |
| **TC_BLD_05** | Bắt lỗi Build 5: Nút Clear bị vô hiệu hóa | Build: `5` | 1. Chọn Build 5<br>2. Kiểm tra trạng thái nút Clear | Dropdown: `Build 5` | **Phát hiện Bug**: Nút `Clear` bị `disabled`, không thể nhấn được. | Bug Hunting / Mutated |
| **TC_BLD_06** | Bắt lỗi Build 6: Không bắt lỗi chia cho 0 | Build: `6` | 1. Chọn Build 6<br>2. Thực hiện `10 / 0` | Number 1: `10`<br>Number 2: `0`<br>Operation: `Divide` | **Phát hiện Bug**: Không báo lỗi `Divide by zero error!` mà ra `Infinity`. | Bug Hunting / Mutated |
| **TC_BLD_07** | Bắt lỗi Build 7: Sử dụng Answer cũ làm Number 1 | Build: `7` | 1. Chọn Build 7<br>2. Tính `2 + 3 = 5`<br>3. Đổi Number 1 thành `10`, bấm tính tiếp | Number 1: `10`<br>Number 2: `3` | **Phát hiện Bug**: Kết quả lấy `5 + 3 = 8` thay vì `10 + 3 = 13`. | Bug Hunting / Mutated |
| **TC_BLD_08** | Bắt lỗi Build 8: Đảo ngược vị trí Number 1 và Number 2 | Build: `8` | 1. Chọn Build 8<br>2. Thực hiện phép trừ `10 - 2` | Number 1: `10`<br>Number 2: `2`<br>Operation: `Subtract` | **Phát hiện Bug**: Kết quả ra `-8` (do hệ thống thực hiện `2 - 10`). | Bug Hunting / Mutated |
| **TC_BLD_09** | Bắt lỗi Build 9: Phần tử giao diện bị biến mất | Build: `9` | 1. Chọn Build 9 từ dropdown | Dropdown: `Build 9` | **Phát hiện Bug**: Ô `Number 2` và nút `Calculate` bị ẩn mất khỏi giao diện. | Bug Hunting / Mutated |
