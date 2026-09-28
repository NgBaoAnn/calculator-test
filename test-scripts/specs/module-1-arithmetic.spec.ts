import { test, expect } from '../fixtures/base-test';
import { arithmeticTestCases } from '../data/module-1-arithmetic.data';

test.describe('Module 1: Phép tính Số học Cơ bản & Kiểm thử Biên', () => {
  for (const tc of arithmeticTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      // Build 9: Elements vanish (number2Field and calculateButton hidden)
      if (build === '9') {
        const isCalculateVisible = await calculator.isCalculateVisible();
        const isNumber2Visible = await calculator.isNumber2Visible();
        expect(isCalculateVisible).toBe(false);
        expect(isNumber2Visible).toBe(false);
        return;
      }

      await calculator.setNumbers(tc.firstNumber, tc.secondNumber);
      await calculator.setOperation(tc.operation);

      if (tc.integersOnly !== undefined) {
        await calculator.toggleIntegersOnly(tc.integersOnly);
      }

      await calculator.clickCalculate();

      // Check results with respect to build mutations
      if (build === '2' && tc.operation === 'Add') {
        // Build 2 bug: Add performs Concatenate
        const expectedConcatenation = `${tc.firstNumber}${tc.secondNumber}`;
        const answer = await calculator.getAnswer();
        expect(answer).toBe(expectedConcatenation);
        return;
      }

      if (build === '8' && tc.operation === 'Subtract') {
        // Build 8 bug: Operands are swapped (num2 - num1)
        const swappedAnswer = (+tc.secondNumber! - +tc.firstNumber).toString();
        const answer = await calculator.getAnswer();
        expect(answer).toBe(swappedAnswer);
        return;
      }

      if (build === '4') {
        // Build 4 bug: Locked on integers only
        const answer = await calculator.getAnswer();
        const expected = parseInt(tc.expectedAnswer!).toString();
        expect(answer).toBe(expected);
        return;
      }

      // Default assertion
      if (tc.expectedAnswer !== undefined) {
        const answer = await calculator.getAnswer();
        expect(answer).toBe(tc.expectedAnswer);
      }

      const error = await calculator.getErrorMessage();
      expect(error).toBe('');
    });
  }
});
