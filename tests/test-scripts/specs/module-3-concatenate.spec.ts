import { test, expect } from '../fixtures/base-test';
import { concatenateTestCases } from '../data/module-3-concatenate.data';

test.describe('Module 3: Ghép Chuỗi & Kiểm thử Hợp lệ Dữ liệu (Validation)', () => {
  for (const tc of concatenateTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');

      await calculator.setNumbers(tc.firstNumber, tc.secondNumber);
      if (tc.id === 'TC-CON-008') {
        await calculator.number1Input.press('End');
        await calculator.number1Input.press('1');
        await calculator.number2Input.press('End');
        await calculator.number2Input.press('1');
        await expect(calculator.number1Input).toHaveValue(tc.firstNumber);
        await expect(calculator.number2Input).toHaveValue(tc.secondNumber!);
      }
      await calculator.setOperation(tc.operation);
      await calculator.clickCalculate();

      if (tc.expectedError) {
        const error = await calculator.getErrorMessage();
        expect(error).toBe(tc.expectedError);
        expect(await calculator.getAnswer()).toBe('');
      } else if (tc.expectedAnswer !== undefined) {
        const answer = await calculator.getAnswer();
        expect(answer).toBe(tc.expectedAnswer);
        const error = await calculator.getErrorMessage();
        expect(error).toBe('');
      }
    });
  }

  test('TC-CON-014: Checkbox Integers only tự động ẩn và vô hiệu hóa khi chọn Concatenate', async ({ calculator, build }) => {
    test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');
    await expect(calculator.integersOnlyCheckbox).toBeVisible();
    await expect(calculator.integersOnlyCheckbox).toBeEnabled();
    await calculator.toggleIntegersOnly(true);
    await calculator.setOperation('Concatenate');
    await expect(calculator.integersOnlyCheckbox).toBeHidden();
    await expect(calculator.integersOnlyLabel).toBeHidden();
    await expect(calculator.integersOnlyCheckbox).toBeDisabled();
    await expect(calculator.integersOnlyCheckbox).not.toBeChecked();
  });

  test('TC-CON-015: Checkbox Integers only tự động hiển thị và kích hoạt lại khi chọn Subtract', async ({ calculator, build }) => {
    test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');
    await calculator.setOperation('Concatenate');
    await calculator.setOperation('Subtract');
    await expect(calculator.integersOnlyCheckbox).toBeVisible();
    await expect(calculator.integersOnlyLabel).toBeVisible();
    await expect(calculator.integersOnlyCheckbox).toBeEnabled();
  });
});
