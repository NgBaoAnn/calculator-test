# 🧪 BỘ TEST SCRIPTS TỰ ĐỘNG PLAYWRIGHT (BASIC CALCULATOR)

Hệ thống kiểm thử tự động toàn diện cho ứng dụng [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html) được xây dựng bằng **Playwright** và **TypeScript** theo mô hình **Page Object Model (POM)**.

---

## 📂 CẤU TRÚC THƯ MỤC `test-scripts/`

```text
test-scripts/
├── pages/
│   └── calculator.page.ts          # Page Object Model đóng gói tương tác DOM
├── fixtures/
│   └── base-test.ts                # Custom Playwright fixture inject build & page
├── data/
│   ├── types.ts                    # TypeScript types
│   ├── module-1-arithmetic.data.ts # Data test cho TC-ARI-001 -> TC-ARI-018
│   ├── module-2-division.data.ts   # Data test cho TC-DIV-001 -> TC-DIV-013
│   ├── module-3-concatenate.data.ts# Data test cho TC-CON-001 -> TC-CON-022
│   └── module-4-formatting.data.ts # Data test cho TC-FMT & TC-BLD-001 -> 009
├── specs/
│   ├── module-1-arithmetic.spec.ts # Test script Phép tính Số học & Biên (Module 1)
│   ├── module-2-division.spec.ts   # Test script Phép Chia & Ngoại lệ (Module 2)
│   ├── module-3-concatenate.spec.ts# Test script Ghép Chuỗi & Validation (Module 3)
│   └── module-4-formatting.spec.ts # Test script Integers only & Bug hunting 9 builds (Module 4)
├── runners/
│   └── build-pair-runner.ts        # Script điều phối chạy 2 build một lần
└── playwright.config.ts            # Cấu hình Playwright
```

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT & CHẠY TEST

### 1. Cài đặt dependencies & trình duyệt
```bash
npm install
npx playwright install chromium
```

### 2. Chạy 2 Build một lần (Hỗ trợ Build 1 đến 9)

#### a. Chỉ định 2 Build cụ thể để so sánh (Ví dụ: Build 1 và Build 2)
```bash
npm run test:pair -- 1 2
```
Hoặc chỉ định Build 3 và Build 4:
```bash
npm run test:pair -- 3 4
```

#### b. Chạy toàn bộ 9 Build theo từng cặp 2 Build (Batch Execution)
```bash
npm run test:all-pairs
```
*(Chạy tuần tự 5 lượt: [1, 2] → [3, 4] → [5, 6] → [7, 8] → [9, Prototype], tự động in bảng tổng kết trạng thái sau mỗi lượt)*

### 3. Chạy test thủ công theo từng module
```bash
TARGET_BUILD=0 npx playwright test test-scripts/specs/module-1-arithmetic.spec.ts
TARGET_BUILD=1 npx playwright test test-scripts/specs/module-4-formatting.spec.ts
```

### 4. Xem báo cáo HTML Playwright Report
```bash
npm run test:report
```
