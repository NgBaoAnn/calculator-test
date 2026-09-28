import { test, expect } from '../fixtures/base-test';
import { formattingTestCases, buildBugTestCases } from '../data/module-4-formatting.data';

test.describe('Module 4: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản (Builds)', () => {
  // Functional Formatting Tests
  for (const tc of formattingTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      if (build === '9') return;
      await calculator.setNumbers(tc.firstNumber, tc.secondNumber);
      await calculator.setOperation(tc.operation);
      if (tc.integersOnly !== undefined) {
        await calculator.toggleIntegersOnly(tc.integersOnly);
      }
      await calculator.clickCalculate();

      if (tc.expectedAnswer !== undefined) {
        const answer = await calculator.getAnswer();
        expect(answer).toBe(tc.expectedAnswer);
      }
    });
  }

  test('TC-FMT-002: Nút Clear xóa sạch kết quả trong ô Answer', async ({ calculator, build }) => {
    if (build === '9') return;
    if (build === '5') {
      // Build 5 bug: Clear button is disabled
      const isClearEnabled = await calculator.isClearEnabled();
      expect(isClearEnabled).toBe(false);
      return;
    }
    await calculator.setNumbers('10', '20');
    await calculator.setOperation('Add');
    await calculator.clickCalculate();

    await calculator.clickClear();
    const answer = await calculator.getAnswer();
    expect(answer).toBe('');
  });

  test('TC-FMT-003: Tích chọn Integers only sau khi có kết quả cập nhật tức thì', async ({ calculator, build }) => {
    if (build === '9' || build === '4') return;
    await calculator.setNumbers('7', '2');
    await calculator.setOperation('Divide');
    await calculator.clickCalculate();

    const initialAnswer = await calculator.getAnswer();
    expect(initialAnswer).toBe('3.5');

    // Toggle integers only without clicking calculate again
    await calculator.toggleIntegersOnly(true);
    const roundedAnswer = await calculator.getAnswer();
    expect(roundedAnswer).toBe('3');
  });

  test('TC-FMT-004: Bỏ tích Integers only khôi phục lại giá trị thập phân', async ({ calculator, build }) => {
    if (build === '9' || build === '4') return;
    await calculator.setNumbers('7', '2');
    await calculator.setOperation('Divide');
    await calculator.toggleIntegersOnly(true);
    await calculator.clickCalculate();

    const intAnswer = await calculator.getAnswer();
    expect(intAnswer).toBe('3');

    // Uncheck integers only
    await calculator.toggleIntegersOnly(false);
    const restoredAnswer = await calculator.getAnswer();
    expect(restoredAnswer).toBe('3.5');
  });

  test('TC-FMT-006: Nút Clear reset trạng thái checkbox Integers only', async ({ calculator, build }) => {
    if (build === '9' || build === '4' || build === '5') return;
    await calculator.page.check('#integerSelect');
    await calculator.page.click('#clearButton');
    const isChecked = await calculator.page.isChecked('#integerSelect');
    expect(isChecked).toBe(false);
  });

  test('TC-FMT-007: Nút Clear xóa thông báo lỗi đỏ', async ({ calculator, build }) => {
    if (build === '9' || build === '5') return;
    await calculator.setNumbers('abc', '10');
    await calculator.setOperation('Add');
    await calculator.clickCalculate();

    await calculator.clickClear();
    const error = await calculator.getErrorMessage();
    expect(error).toBe('');
  });

  // Dedicated Bug Hunting Tests for Builds 1 through 9
  test.describe('Bug Hunting Matrix (Builds 1 - 9)', () => {
    test('TC-BLD-001: Bắt lỗi Build 1 - Không kiểm tra số hợp lệ', async ({ calculator, build }) => {
      if (build !== '1') return;
      await calculator.setNumbers('abc', 'def');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      const error = await calculator.getErrorMessage();
      // Bug detected: error is NOT shown on Build 1
      expect(error).toBe('');
    });

    test('TC-BLD-002: Bắt lỗi Build 2 - Đảo ngược Add và Concatenate', async ({ calculator, build }) => {
      if (build !== '2') return;
      await calculator.setNumbers('10', '20');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      const answer = await calculator.getAnswer();
      // Bug detected: Add performs concatenate resulting in 1020
      expect(answer).toBe('1020');
    });

    test('TC-BLD-003: Bắt lỗi Build 3 - Luôn ép kiểm tra kiểu số cho Concatenate', async ({ calculator, build }) => {
      if (build !== '3') return;
      await calculator.setNumbers('hello', 'world');
      await calculator.setOperation('Concatenate');
      await calculator.clickCalculate();
      const error = await calculator.getErrorMessage();
      // Bug detected: Concatenate raises number error
      expect(error).toBe('Number 1 is not a number');
    });

    test('TC-BLD-004: Bắt lỗi Build 4 - Khóa cứng ở chế độ Integers only', async ({ calculator, build }) => {
      if (build !== '4') return;
      const isDisabled = await calculator.isIntegersOnlyDisabled();
      const isChecked = await calculator.isIntegersOnlyChecked();
      // Bug detected: Checkbox is permanently checked and disabled
      expect(isDisabled).toBe(true);
      expect(isChecked).toBe(true);
    });

    test('TC-BLD-005: Bắt lỗi Build 5 - Nút Clear bị vô hiệu hóa', async ({ calculator, build }) => {
      if (build !== '5') return;
      const isEnabled = await calculator.isClearEnabled();
      // Bug detected: Clear button is disabled
      expect(isEnabled).toBe(false);
    });

    test('TC-BLD-006: Bắt lỗi Build 6 - Không bắt lỗi chia cho 0', async ({ calculator, build }) => {
      if (build !== '6') return;
      await calculator.setNumbers('10', '0');
      await calculator.setOperation('Divide');
      await calculator.clickCalculate();
      const answer = await calculator.getAnswer();
      // Bug detected: Returns Infinity instead of Divide by zero error!
      expect(answer).toBe('Infinity');
    });

    test('TC-BLD-007: Bắt lỗi Build 7 - Sử dụng Answer cũ làm Number 1', async ({ calculator, build }) => {
      if (build !== '7') return;
      // Step 1: Calculate 2 + 3 = 5
      await calculator.setNumbers('2', '3');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      expect(await calculator.getAnswer()).toBe('5');

      // Step 2: Change number 1 to 10, calculate again -> should be 10 + 3 = 13, but Build 7 computes 5 + 3 = 8
      await calculator.setNumbers('10', '3');
      await calculator.clickCalculate();
      const answer = await calculator.getAnswer();
      expect(answer).toBe('8');
    });

    test('TC-BLD-008: Bắt lỗi Build 8 - Đảo ngược vị trí Number 1 và Number 2', async ({ calculator, build }) => {
      if (build !== '8') return;
      await calculator.setNumbers('10', '2');
      await calculator.setOperation('Subtract');
      await calculator.clickCalculate();
      const answer = await calculator.getAnswer();
      // Bug detected: 2 - 10 = -8 instead of 10 - 2 = 8
      expect(answer).toBe('-8');
    });

    test('TC-BLD-009: Bắt lỗi Build 9 - Number 2 và nút Calculate biến mất', async ({ calculator, build }) => {
      if (build !== '9') return;
      const isNumber2Visible = await calculator.isNumber2Visible();
      const isCalculateVisible = await calculator.isCalculateVisible();
      // Bug detected: Both elements are hidden
      expect(isNumber2Visible).toBe(false);
      expect(isCalculateVisible).toBe(false);
    });
  });
});
