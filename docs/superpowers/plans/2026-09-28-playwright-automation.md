# Playwright Test Automation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Playwright automated testing framework under `test-scripts/` derived from the markdown test cases in `tests/test-cases/`, with dedicated support for running 2 builds per test run across Builds 1–9.

**Architecture:** Page Object Model (`CalculatorPage`) isolates DOM interactions and the asynchronous `calculatingForm` spinner. Test data is mapped from all 4 test case modules into strongly-typed datasets. Spec suites test functional operations and bug manifestations. A custom CLI runner (`build-pair-runner.ts`) enables testing any 2 specified builds or batching all 9 builds in pairs using 2 parallel workers.

**Tech Stack:** Node.js, `@playwright/test`, TypeScript, `ts-node`.

**Spec:** [docs/superpowers/specs/2026-09-28-playwright-automation-design.md](file:///Users/nguyenbaoan/codeLab/kcpm/calculator-test/docs/superpowers/specs/2026-09-28-playwright-automation-design.md)

## Global Constraints

- Root target directory for test scripts is `test-scripts/`.
- Target application URL is `https://testsheepnz.github.io/BasicCalculator.html`.
- Must support running 2 builds per run across Builds 1 to 9 (e.g. `npm run test:pair -- 1 2` and `npm run test:all-pairs`).
- DOM elements must account for the random timeout `setTimeout` in the web app (up to 1000ms) with proper wait mechanisms.
- All code must be in TypeScript with full strict type checking.

## Review Focus

- The random `setTimeout(unlockCalculate, randomTimeout)` (up to 1000ms) in `calculate()` causes tests to fail if they assert `answer` before the spinner disappears; `waitForCalculation()` must explicitly wait for `form#calculatingForm` to be hidden.
- In Build 2, `Add` and `Concatenate` operations are reversed by the app; test assertions must verify this bug behavior on Build 2 and standard behavior on other builds.
- In Build 6, dividing by 0 does not trigger an error; test assertions must expect `Infinity` or missing error instead of failing the test harness.
- In Build 9, `number2Field` and `calculateButton` are hidden and disabled; tests must verify visibility rather than timing out attempting to click hidden elements.
- The `integerSelect` checkbox is disabled and hidden when `Concatenate` is active (except in Build 4 where it is permanently locked); tests must assert correct UI state visibility.

---

### Task 1: Initialize Project & Playwright Configuration

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `test-scripts/playwright.config.ts`

**Interfaces:**
- Consumes: Node.js runtime, npm
- Produces: Playwright test runner environment configured for headless execution and custom projects

- [ ] **Step 1: Create package.json with dependencies and npm scripts**
- [ ] **Step 2: Create tsconfig.json configured for Node and Playwright**
- [ ] **Step 3: Create test-scripts/playwright.config.ts with base URL and project profiles**
- [ ] **Step 4: Install dependencies using npm install**
- [ ] **Step 5: Run `npx playwright --version` to verify setup**
- [ ] **Step 6: Commit initialization files**

---

### Task 2: Implement Page Object Model & Base Fixture

**Files:**
- Create: `test-scripts/pages/calculator.page.ts`
- Create: `test-scripts/fixtures/base-test.ts`

**Interfaces:**
- Consumes: `@playwright/test`
- Produces: `CalculatorPage` class and extended `test` fixture with `calculatorPage` and dynamic `buildNumber`

- [ ] **Step 1: Write CalculatorPage with locators and interaction methods**
  - Locators: `#selectBuild`, `#number1Field`, `#number2Field`, `#selectOperationDropdown`, `#calculateButton`, `#clearButton`, `#integerSelect`, `#intSelectionLabel`, `#numberAnswerField`, `#errorMsgField`, `#calculatingForm`.
  - Methods: `goto()`, `selectBuild()`, `setNumbers()`, `setOperation()`, `toggleIntegersOnly()`, `calculate()`, `waitForCalculation()`, `getAnswer()`, `getErrorMessage()`, `clear()`, `isCalculateButtonVisible()`.
- [ ] **Step 2: Create test-scripts/fixtures/base-test.ts providing configured page fixture**
- [ ] **Step 3: Write a smoke test in `test-scripts/specs/smoke.spec.ts` to verify page interaction**
- [ ] **Step 4: Run smoke test against `https://testsheepnz.github.io/BasicCalculator.html`**
- [ ] **Step 5: Remove smoke test and commit Page Object & fixture**

---

### Task 3: Extract and Implement Test Data Registry

**Files:**
- Create: `test-scripts/data/types.ts`
- Create: `test-scripts/data/module-1-arithmetic.data.ts`
- Create: `test-scripts/data/module-2-division.data.ts`
- Create: `test-scripts/data/module-3-concatenate.data.ts`
- Create: `test-scripts/data/module-4-formatting.data.ts`

**Interfaces:**
- Consumes: Markdown test cases in `tests/test-cases/`
- Produces: Strongly typed data arrays: `arithmeticTestCases`, `divisionTestCases`, `concatenateTestCases`, `formattingTestCases`, `buildRegressionTestCases`

- [ ] **Step 1: Define `TestCaseData` and `BuildBugExpectation` interfaces in `types.ts`**
- [ ] **Step 2: Populate `module-1-arithmetic.data.ts` with TC-ARI-001 to TC-ARI-018**
- [ ] **Step 3: Populate `module-2-division.data.ts` with TC-DIV-001 to TC-DIV-013**
- [ ] **Step 4: Populate `module-3-concatenate.data.ts` with TC-CON-001 to TC-CON-022**
- [ ] **Step 5: Populate `module-4-formatting.data.ts` with TC-FMT-001 to 007 and TC-BLD-001 to 009**
- [ ] **Step 6: Commit test data files**

---

### Task 4: Implement Playwright Test Suites for Modules 1 & 2

**Files:**
- Create: `test-scripts/specs/module-1-arithmetic.spec.ts`
- Create: `test-scripts/specs/module-2-division.spec.ts`

**Interfaces:**
- Consumes: `CalculatorPage`, `base-test.ts`, `arithmeticTestCases`, `divisionTestCases`
- Produces: Playwright test suites for Arithmetic and Division operations supporting Build 1–9

- [ ] **Step 1: Write `module-1-arithmetic.spec.ts` with data-driven tests**
  - Handles regular arithmetic validation and accounts for Build 2 (Add swapped with Concatenate) and Build 8 (operands swapped).
- [ ] **Step 2: Write `module-2-division.spec.ts` with data-driven tests**
  - Handles normal division, precision, and zero-division error handling (accounting for Build 6 where divide by zero is not caught).
- [ ] **Step 3: Run specs on Prototype build to verify baseline accuracy**
- [ ] **Step 4: Commit Module 1 & 2 test suites**

---

### Task 5: Implement Playwright Test Suites for Modules 3 & 4

**Files:**
- Create: `test-scripts/specs/module-3-concatenate.spec.ts`
- Create: `test-scripts/specs/module-4-formatting.spec.ts`

**Interfaces:**
- Consumes: `CalculatorPage`, `base-test.ts`, `concatenateTestCases`, `formattingTestCases`, `buildRegressionTestCases`
- Produces: Playwright test suites for Concatenate, Input Validation, Integers only, and Build 1-9 bug detection

- [ ] **Step 1: Write `module-3-concatenate.spec.ts` covering string concatenation and number validation**
  - Tests invalid characters ("is not a number") and UI state of Integers only checkbox.
- [ ] **Step 2: Write `module-4-formatting.spec.ts` covering Integers only and Build 1–9 bug hunting**
  - Tests instant rounding, Clear button, and dedicated TC-BLD-001 through TC-BLD-009 regression tests.
- [ ] **Step 3: Run specs on Prototype build to verify baseline pass**
- [ ] **Step 4: Commit Module 3 & 4 test suites**

---

### Task 6: Implement 2-Build Batch Runner & NPM Scripts

**Files:**
- Create: `test-scripts/runners/build-pair-runner.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: Playwright CLI, process environment variables
- Produces: CLI commands `npm run test:pair -- <buildA> <buildB>` and `npm run test:all-pairs`

- [ ] **Step 1: Write `build-pair-runner.ts` to parse CLI arguments or default to batch pairs**
  - Accepts two builds from args (e.g. `1 2`).
  - Supports `--all-pairs` mode running pairs: `[1, 2]`, `[3, 4]`, `[5, 6]`, `[7, 8]`, `[9]`.
  - Spawns Playwright with 2 parallel workers, setting `TARGET_BUILDS` environment variable.
  - Aggregates and prints execution summary table showing pass/fail status per build.
- [ ] **Step 2: Update `package.json` with scripts: `test:pair`, `test:all-pairs`, `test:report`**
- [ ] **Step 3: Test running a pair: `npm run test:pair -- 1 2`**
- [ ] **Step 4: Verify console output summary and exit code**
- [ ] **Step 5: Commit runner and package.json updates**

---

### Task 7: End-to-End Verification & Documentation

**Files:**
- Create: `test-scripts/README.md`
- Modify: `README.md` (root)

**Interfaces:**
- Consumes: Completed test framework
- Produces: Execution evidence, documentation on how to run tests

- [ ] **Step 1: Run end-to-end verification for pair 1 and 2: `npm run test:pair -- 1 2`**
- [ ] **Step 2: Verify HTML test report generation via `npx playwright show-report --help`**
- [ ] **Step 3: Write `test-scripts/README.md` with instructions on running tests and architecture overview**
- [ ] **Step 4: Update root `README.md` to reference `test-scripts/`**
- [ ] **Step 5: Commit documentation and verify git status is clean**
