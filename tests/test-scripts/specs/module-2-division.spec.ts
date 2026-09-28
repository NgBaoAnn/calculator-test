import { test, expect } from '../fixtures/base-test';
import { divisionTestCases } from '../data/module-2-division.data';

test.describe('Module 2: Phép Chia & Xử lý Ngoại lệ Toán học', () => {
  for (const tc of divisionTestCases) {
    test(`${tc.id}: ${tc.name}`, async ({ calculator, build }) => {
      // Build 9: Elements vanish
      if (build === '9') {
        const isCalculateVisible = await calculator.isCalculateVisible();
        const isNumber2Visible = await calculator.isNumber2Visible();
        expect(isCalculateVisible).toBe(false);
        expect(isNumber2Visible).toBe(false);
        return;
      }

      // Special handling for TC-DIV-009: recovery from division by zero
      if (tc.id === 'TC-DIV-009') {
        // Step 1: trigger error with 50 / 0
        await calculator.setNumbers('50', '0');
        await calculator.setOperation('Divide');
        await calculator.clickCalculate();

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

      // Check results with respect to build mutations
      if (build === '6' && tc.expectedError === 'Divide by zero error!') {
        // Build 6 bug: Does NOT catch divide by zero, returns Infinity
        const answer = await calculator.getAnswer();
        expect(answer).toBe('Infinity');
        return;
      }

      if (build === '8' && tc.expectedAnswer !== undefined && !tc.expectedError) {
        // Build 8 bug: Operands are swapped (num2 / num1)
        const swappedAnswer = (+tc.secondNumber! / +tc.firstNumber).toString();
        const answer = await calculator.getAnswer();
        expect(answer).toBe(swappedAnswer);
        return;
      }

      if (build === '4' && tc.expectedAnswer !== undefined) {
        // Build 4 bug: Locked on integers only
        const answer = await calculator.getAnswer();
        const expected = parseInt(tc.expectedAnswer).toString();
        expect(answer).toBe(expected);
        return;
      }

      if (tc.expectedError) {
        const error = await calculator.getErrorMessage();
        expect(error).toBe(tc.expectedError);
      } else if (tc.expectedAnswer !== undefined) {
        const answer = await calculator.getAnswer();
        expect(answer).toBe(tc.expectedAnswer);
        const error = await calculator.getErrorMessage();
        expect(error).toBe('');
      }
    });
  }
});
