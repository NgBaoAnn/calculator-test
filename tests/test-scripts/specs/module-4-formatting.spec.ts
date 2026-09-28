import { test, expect } from '../fixtures/base-test';
import { CalculatorPage } from '../pages/calculator.page';

function requireCalculator(build: string) {
  test.skip(build === '9', 'Blocked: Build 9 ẩn Second number và Calculate');
}

async function expectAnswer(calculator: CalculatorPage, answer: string) {
  expect(await calculator.getAnswer()).toBe(answer);
  expect(await calculator.getErrorMessage()).toBe('');
}

test.describe('Module 4: Định dạng Kết quả, Điều khiển & Builds', () => {
  test('TC-FMT-001: Integers only cắt phần thập phân khi được chọn trước Calculate', async ({ calculator, build }) => {
    requireCalculator(build);
    for (const [first, answer] of [['5', '2'], ['-5', '-2']]) {
      await calculator.setNumbers(first, '2');
      await calculator.setOperation('Divide');
      await calculator.toggleIntegersOnly(true);
      await calculator.clickCalculate();
      await expectAnswer(calculator, answer);
      await calculator.clickClear();
    }
  });

  test('TC-FMT-002: Clear đặt lại Answer và tùy chọn định dạng', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('5', '2');
    await calculator.setOperation('Divide');
    await calculator.toggleIntegersOnly(true);
    await calculator.clickCalculate();
    await expectAnswer(calculator, '2');
    await calculator.clickClear();
    await expectAnswer(calculator, '');
    await expect(calculator.integersOnlyCheckbox).not.toBeChecked();
    await expect(calculator.number1Input).toHaveValue('5');
    await expect(calculator.number2Input).toHaveValue('2');
    await expect(calculator.operationDropdown).toHaveValue('3');
  });

  test('TC-FMT-003: Bật và tắt Integers only sau khi đã có kết quả', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('5', '2');
    await calculator.setOperation('Divide');
    await calculator.clickCalculate();
    await expectAnswer(calculator, '2.5');
    await calculator.toggleIntegersOnly(true);
    await expectAnswer(calculator, '2');
    await calculator.toggleIntegersOnly(false);
    await expectAnswer(calculator, '2.5');
    await expect(calculator.number1Input).toHaveValue('5');
    await expect(calculator.number2Input).toHaveValue('2');
    await expect(calculator.operationDropdown).toHaveValue('3');
  });

  test('TC-FMT-004: Calculate hiển thị trạng thái xử lý và khóa nút trong lúc tính', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('20', '30');
    await calculator.setOperation('Add');
    // Read the transient state in the same browser task as the real click.
    const during = await calculator.page.evaluate(() => {
      const calculate = document.getElementById('calculateButton') as HTMLInputElement;
      const clear = document.getElementById('clearButton') as HTMLInputElement;
      calculate.click();
      const waiting = document.getElementById('calculatingForm') as HTMLElement;
      const answer = document.getElementById('answerForm') as HTMLElement;
      return {
        waiting: !waiting.hidden,
        text: waiting.textContent ?? '',
        graphic: !!waiting.querySelector('img') && !(waiting.querySelector('img') as HTMLImageElement).hidden,
        answerHidden: answer.hidden,
        calculateDisabled: calculate.disabled,
        clearDisabled: clear.disabled,
      };
    });
    expect(during.waiting).toBe(true);
    expect(during.text).toContain('Calculating');
    expect(during.graphic).toBe(true);
    expect(during.answerHidden).toBe(true);
    expect(during.calculateDisabled).toBe(true);
    expect(during.clearDisabled).toBe(true);
    await expect(calculator.calculatingSpinner).toBeHidden();
    await expect(calculator.answerField).toBeVisible();
    await expect(calculator.calculateBtn).toBeEnabled();
    await expect(calculator.clearBtn).toBeEnabled();
    await expectAnswer(calculator, '50');
  });

  test('TC-FMT-005: Clear xóa thông báo lỗi sau đầu vào không hợp lệ', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('abc', '10');
    await calculator.setOperation('Add');
    await calculator.clickCalculate();
    expect(await calculator.getErrorMessage()).toBe('Number 1 is not a number');
    await calculator.clickClear();
    await expectAnswer(calculator, '');
    await expect(calculator.number1Input).toHaveValue('abc');
    await expect(calculator.number2Input).toHaveValue('10');
    await expect(calculator.calculateBtn).toBeEnabled();
  });

  test('TC-FMT-006: Trạng thái chờ kết thúc khi phép chia cho 0 báo lỗi', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('5', '0');
    await calculator.setOperation('Divide');
    await calculator.clickCalculate();
    expect(await calculator.getErrorMessage()).toBe('Divide by zero error!');
    expect(await calculator.getAnswer()).toBe('');
    await expect(calculator.calculatingSpinner).toBeHidden();
    await expect(calculator.answerField).toBeVisible();
    await expect(calculator.calculateBtn).toBeEnabled();
    await expect(calculator.clearBtn).toBeEnabled();
    await calculator.clickClear();
    expect(await calculator.getErrorMessage()).toBe('');
  });

  test('TC-FMT-007: Chuyển giữa phép số và Concatenate cập nhật Integers only', async ({ calculator, build }) => {
    requireCalculator(build);
    await calculator.setNumbers('5', '2');
    await calculator.setOperation('Divide');
    await calculator.toggleIntegersOnly(true);
    await calculator.setOperation('Concatenate');
    await expect(calculator.integersOnlyLabel).toBeHidden();
    await expect(calculator.integersOnlyCheckbox).toBeHidden();
    await expect(calculator.integersOnlyCheckbox).toBeDisabled();
    await expect(calculator.integersOnlyCheckbox).not.toBeChecked();
    await calculator.setOperation('Divide');
    await expect(calculator.integersOnlyLabel).toBeVisible();
    await expect(calculator.integersOnlyCheckbox).toBeVisible();
    await expect(calculator.integersOnlyCheckbox).toBeEnabled();
    await expect(calculator.integersOnlyCheckbox).not.toBeChecked();
    await calculator.clickCalculate();
    await expectAnswer(calculator, '2.5');
  });

  test.describe('Bug Hunting Matrix (Builds 1 - 9)', () => {
    test('TC-BLD-001: Kiểm tra từ chối đầu vào không phải số', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('abc', '2');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      expect(await calculator.getErrorMessage()).toBe('Number 1 is not a number');
      expect(await calculator.getAnswer()).toBe('');
    });

    test('TC-BLD-002: Kiểm tra Add và Concatenate giữ đúng ý nghĩa', async ({ calculator, build }) => {
      requireCalculator(build);
      for (const [operation, answer] of [['Add', '46'], ['Concatenate', '1234']] as const) {
        await calculator.setNumbers('12', '34');
        await calculator.setOperation(operation);
        await calculator.clickCalculate();
        await expectAnswer(calculator, answer);
        await calculator.clickClear();
      }
    });

    test('TC-BLD-003: Kiểm tra Concatenate không yêu cầu dữ liệu số', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('abc', 'xyz');
      await calculator.setOperation('Concatenate');
      await calculator.clickCalculate();
      await expectAnswer(calculator, 'abcxyz');
      await expect(calculator.integersOnlyLabel).toBeHidden();
      await expect(calculator.integersOnlyCheckbox).toBeHidden();
      await expect(calculator.integersOnlyCheckbox).toBeDisabled();
    });

    test('TC-BLD-004: Kiểm tra có thể bỏ chọn Integers only', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setOperation('Divide');
      await expect(calculator.integersOnlyCheckbox).toBeEnabled();
      await calculator.toggleIntegersOnly(true);
      await calculator.toggleIntegersOnly(false);
      await calculator.setNumbers('5', '2');
      await calculator.clickCalculate();
      await expectAnswer(calculator, '2.5');
    });

    test('TC-BLD-005: Kiểm tra Clear hoạt động trước lần Calculate đầu tiên', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('5', '2');
      await calculator.setOperation('Divide');
      await calculator.toggleIntegersOnly(true);
      await expect(calculator.clearBtn).toBeEnabled();
      await calculator.clickClear();
      await expect(calculator.integersOnlyCheckbox).not.toBeChecked();
      expect(await calculator.getAnswer()).toBe('');
    });

    test('TC-BLD-006: Kiểm tra chặn phép chia cho 0', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('5', '0');
      await calculator.setOperation('Divide');
      await calculator.clickCalculate();
      expect(await calculator.getErrorMessage()).toBe('Divide by zero error!');
      expect(await calculator.getAnswer()).toBe('');
    });

    test('TC-BLD-007: Kiểm tra phép tính mới dùng First number được nhập', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('10', '2');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      await expectAnswer(calculator, '12');
      await calculator.setNumbers('20', '3');
      await calculator.clickCalculate();
      await expectAnswer(calculator, '23');
    });

    test('TC-BLD-008: Kiểm tra đúng thứ tự hai toán hạng', async ({ calculator, build }) => {
      requireCalculator(build);
      await calculator.setNumbers('9', '4');
      await calculator.setOperation('Subtract');
      await calculator.clickCalculate();
      await expectAnswer(calculator, '5');
    });

    test('TC-BLD-009: Kiểm tra các phần tử chính hiển thị và sử dụng được', async ({ calculator }) => {
      for (const field of [calculator.number1Input, calculator.number2Input, calculator.operationDropdown, calculator.calculateBtn]) {
        await expect(field).toBeVisible();
        await expect(field).toBeEnabled();
      }
      await calculator.setNumbers('2', '3');
      await calculator.setOperation('Add');
      await calculator.clickCalculate();
      await expectAnswer(calculator, '5');
    });
  });
});
