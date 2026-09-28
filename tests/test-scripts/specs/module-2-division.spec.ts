import { test, expect } from '../fixtures/base-test';
import { divisionTestCases } from '../data/module-2-division.data';

test.describe('Module 2: Phép Chia & Xử lý Ngoại lệ Toán học', () => {
  for (const tc of divisionTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');

      // Special handling for TC-DIV-009: recovery from division by zero
      if (tc.id === 'TC-DIV-009') {
        // Step 1: trigger error with 50 / 0
        await calculator.setNumbers('50', '0');
        await calculator.setOperation('Divide');
        await calculator.clickCalculate();
        expect(await calculator.getErrorMessage()).toBe('Divide by zero error!');
        expect(await calculator.getAnswer()).toBe('');
        await expect(calculator.calculateBtn).toBeEnabled();

        // Step 2: recover with 50 / 5
        await calculator.setNumbers('50', '5');
        await calculator.clickCalculate();

        const answer = await calculator.getAnswer();
        expect(answer).toBe('10');

        const error = await calculator.getErrorMessage();
        expect(error).toBe('');
        return;
      }

      await calculator.setNumbers(tc.firstNumber, tc.secondNumber);
      await calculator.setOperation('Divide');
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
});
