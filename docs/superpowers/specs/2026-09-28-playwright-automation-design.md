# Thiết kế Hệ thống Kiểm thử Tự động Playwright cho Basic Calculator

> **Dự án**: Kiểm thử tự động ứng dụng Basic Calculator (TestSheepNZ)  
> **Target URL**: [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)  
> **Công nghệ**: Playwright, TypeScript, Node.js  
> **Ngày lập**: 2026-09-28  
> **Trạng thái**: Chờ duyệt (Pending Review)

---

## 1. Mục tiêu & Yêu cầu hệ thống

1. **Tự động hóa toàn diện**: Chuyển hóa toàn bộ các test cases thủ công từ 4 module (`module-1-arithmetic`, `module-2-division`, `module-3-concatenate`, `module-4-formatting-builds`) thành các automated test scripts sử dụng Playwright.
2. **Hỗ trợ chạy 2 Build một lần (Build 1–9)**:
   - Cho phép chỉ định linh hoạt bất kỳ cặp 2 build nào để so sánh đối soát: ví dụ Build 1 & Build 2, Build 3 & Build 4,...
   - Cung cấp chế độ chạy hàng loạt (Batch Execution) tự động chia 9 build thành các cặp 2 build chạy song song (2 workers).
3. **Mô hình Page Object Model (POM)**: Đảm bảo mã kiểm thử rõ ràng, cô lập logic tương tác DOM và dễ bảo trì khi UI thay đổi.
4. **Báo cáo trực quan**: Sinh báo cáo kiểm thử Playwright HTML Report và xuất kết quả tóm tắt console cho từng build run.

---

## 2. Kiến trúc & Cấu trúc thư mục `test-scripts/`

```text
calculator-test/
├── test-scripts/
│   ├── pages/
│   │   └── calculator.page.ts          # Page Object Model đóng gói tương tác DOM
│   ├── fixtures/
│   │   └── base-test.ts                # Custom Playwright fixture truyền ngữ cảnh và build
│   ├── data/
│   │   ├── module-1-arithmetic.data.ts # Data test cho TC-ARI-001 -> TC-ARI-018
│   │   ├── module-2-division.data.ts   # Data test cho TC-DIV-001 -> TC-DIV-013
│   │   ├── module-3-concatenate.data.ts# Data test cho TC-CON-001 -> TC-CON-022
│   │   └── module-4-formatting.data.ts # Data test cho TC-FMT-001->007 & TC-BLD-001->009
│   ├── specs/
│   │   ├── module-1-arithmetic.spec.ts # Kịch bản kiểm thử Phép tính Số học & Biên
│   │   ├── module-2-division.spec.ts   # Kịch bản kiểm thử Phép Chia & Ngoại lệ
│   │   ├── module-3-concatenate.spec.ts# Kịch bản kiểm thử Ghép Chuỗi & Validation
│   │   └── module-4-formatting.spec.ts # Kịch bản kiểm thử Integers only & Bug hunting 9 builds
│   ├── runners/
│   │   └── build-pair-runner.ts        # Script điều phối chạy 2 build 1 lần
│   ├── playwright.config.ts            # Cấu hình Playwright (workers, timeout, reporter)
│   └── tsconfig.json                   # Cấu hình TypeScript cho test-scripts
├── package.json                        # Khai báo scripts và dependencies
```

---

## 3. Thiết kế chi tiết từng thành phần

### 3.1. Page Object Model (`calculator.page.ts`)
Đóng gói các phần tử và hành vi trên trang `https://testsheepnz.github.io/BasicCalculator.html`:

* **Locators chính**:
  - `buildDropdown`: `select#selectBuild`
  - `number1Input`: `input#number1Field`
  - `number2Input`: `input#number2Field`
  - `operationDropdown`: `select#selectOperationDropdown` (Add: 0, Subtract: 1, Multiply: 2, Divide: 3, Concatenate: 4)
  - `calculateBtn`: `input#calculateButton`
  - `clearBtn`: `input#clearButton`
  - `integersOnlyCheckbox`: `input#integerSelect`
  - `integersOnlyLabel`: `label#intSelectionLabel`
  - `answerField`: `input#numberAnswerField`
  - `errorMsgField`: `font#errorMsgField` (hoặc `#errorMsgField`)
  - `calculatingSpinner`: `form#calculatingForm` (chứa `waiting.gif`)

* **Methods nghiệp vụ**:
  - `goto()`: Mở URL mục tiêu và chờ network idle.
  - `selectBuild(build: string | number)`: Chọn Build (`0` - Prototype, hoặc `1` đến `9`).
  - `calculate(num1: string, num2: string, operation: string, integersOnly?: boolean)`: Thực hiện toàn bộ quy trình tính toán.
  - `waitForCalculation()`: Chờ form spinner `calculatingForm` ẩn và các nút tính toán mở khóa (do ứng dụng có `setTimeout` ngẫu nhiên lên đến 1000ms).
  - `getAnswer()`: Lấy giá trị trong ô `numberAnswerField`.
  - `getErrorMessage()`: Lấy nội dung text trong `errorMsgField`.
  - `clear()`: Bấm nút Clear và xác nhận trạng thái reset.
  - `isElementVisible(elementName)`: Kiểm tra visibility (dùng cho TC-BLD-009 khi các nút bị ẩn).

### 3.2. Data Registry (`test-scripts/data/*.data.ts`)
Chuyển hóa dữ liệu từ các file markdown `tests/test-cases/` thành cấu trúc type-safe:
```typescript
export interface TestCaseData {
  id: string;
  name: string;
  firstNumber: string;
  secondNumber: string;
  operation: 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate';
  integersOnly?: boolean;
  expectedAnswer?: string;
  expectedError?: string;
  expectedStatus?: 'PASS' | 'FAIL'; // Đối soát bug trên builds
}
```

### 3.3. Test Specs (`test-scripts/specs/*.spec.ts`)
- Mỗi spec suite nhận cấu hình build động thông qua biến môi trường `TARGET_BUILD` hoặc fixture Playwright.
- Áp dụng kiểm thử đối sánh (Assertion):
  - Đối với bản Prototype / Build hợp lệ: Kết quả mong đợi trùng khớp với đặc tả chuẩn.
  - Đối với các Build có lỗi cố ý (Build 1 đến 9): Ghi nhận pass nếu bắt đúng hành vi bug được chỉ định trong TC-BLD.

### 3.4. Bộ điều phối chạy 2 Build một lần (`build-pair-runner.ts`)
* **Chế độ 1: Chạy 2 Build cụ thể**:
  - Cú pháp: `npm run test:pair -- 1 2`
  - Hoạt động: Truyền `TARGET_BUILDS="1,2"`, Playwright khởi tạo 2 worker song song, mỗi worker chạy toàn bộ test suite trên một Build riêng biệt.
* **Chế độ 2: Chạy toàn bộ 9 Build theo từng cặp**:
  - Cú pháp: `npm run test:all-pairs`
  - Hoạt động: Chạy tuần tự 5 lượt (Batch 1: 1 & 2 $\rightarrow$ Batch 2: 3 & 4 $\rightarrow$ Batch 3: 5 & 6 $\rightarrow$ Batch 4: 7 & 8 $\rightarrow$ Batch 5: 9), xuất bảng tổng hợp so sánh sau mỗi lượt.

---

## 4. Kế hoạch triển khai & Kiểm thử xác minh
1. Khởi tạo `package.json` với `@playwright/test`, `typescript`, `ts-node`.
2. Tạo cấu trúc thư mục `test-scripts/` và các file POM, Fixtures, Data, Specs.
3. Chạy xác minh thử nghiệm trên cặp Build 1 và Build 2:
   ```bash
   npm run test:pair -- 1 2
   ```
4. Kiểm tra báo cáo HTML Report sinh ra đầy đủ.
