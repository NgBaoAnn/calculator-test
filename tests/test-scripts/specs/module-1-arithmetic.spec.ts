import { test, expect } from '../fixtures/base-test';
import { arithmeticTestCases } from '../data/module-1-arithmetic.data';

test.describe('Module 1: Phép tính Số học Cơ bản & Kiểm thử Biên', () => {
  for (const tc of arithmeticTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');

      await calculator.setNumbers(tc.firstNumber, tc.secondNumber);
      if (tc.id === 'TC-ARI-002' || tc.id === 'TC-ARI-017') {
        await calculator.number1Input.press('End');
        await calculator.number1Input.press('1');
        await expect(calculator.number1Input).toHaveValue(tc.firstNumber);
      }
      await calculator.setOperation(tc.operation);

      if (tc.integersOnly !== undefined) {
        await calculator.toggleIntegersOnly(tc.integersOnly);
      }

      await calculator.clickCalculate();

      if (tc.expectedAnswer !== undefined) {
        const answer = await calculator.getAnswer();
        expect(answer).toBe(tc.expectedAnswer);
      }

      const error = await calculator.getErrorMessage();
      expect(error).toBe('');
    });
  }
});
