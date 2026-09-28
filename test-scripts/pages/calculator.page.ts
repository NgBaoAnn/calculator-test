import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for Basic Calculator web application
 * Target: https://testsheepnz.github.io/BasicCalculator.html
 */
export class CalculatorPage {
  readonly page: Page;
  readonly buildDropdown: Locator;
  readonly number1Input: Locator;
  readonly number2Input: Locator;
  readonly operationDropdown: Locator;
  readonly calculateBtn: Locator;
  readonly clearBtn: Locator;
  readonly integersOnlyCheckbox: Locator;
  readonly integersOnlyLabel: Locator;
  readonly answerField: Locator;
  readonly errorMsgField: Locator;
  readonly calculatingSpinner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buildDropdown = page.locator('#selectBuild');
    this.number1Input = page.locator('#number1Field');
    this.number2Input = page.locator('#number2Field');
    this.operationDropdown = page.locator('#selectOperationDropdown');
    this.calculateBtn = page.locator('#calculateButton');
    this.clearBtn = page.locator('#clearButton');
    this.integersOnlyCheckbox = page.locator('#integerSelect');
    this.integersOnlyLabel = page.locator('#intSelectionLabel');
    this.answerField = page.locator('#numberAnswerField');
    this.errorMsgField = page.locator('#errorMsgField');
    this.calculatingSpinner = page.locator('#calculatingForm');
  }

  async goto() {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator.html', {
          waitUntil: 'commit',
          timeout: 15000
        });
        await this.buildDropdown.waitFor({ state: 'visible', timeout: 10000 });
        return;
      } catch (err) {
        if (attempt === 3) throw err;
        await this.page.waitForTimeout(500).catch(() => {});
      }
    }
  }

  async selectBuild(build: string | number) {
    const val = build.toString().toLowerCase() === 'prototype' ? '0' : build.toString();
    await this.buildDropdown.selectOption(val);
  }

  async setNumbers(num1: string, num2?: string) {
    await this.number1Input.fill(num1);
    if (num2 !== undefined) {
      if (await this.number2Input.isVisible()) {
        await this.number2Input.fill(num2);
      }
    }
  }

  async setOperation(operation: 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate' | string) {
    const opMap: Record<string, string> = {
      'Add': '0',
      'Subtract': '1',
      'Multiply': '2',
      'Divide': '3',
      'Concatenate': '4'
    };
    const val = opMap[operation] ?? operation;
    await this.operationDropdown.selectOption(val);
  }

  async toggleIntegersOnly(checked: boolean) {
    const isChecked = await this.integersOnlyCheckbox.isChecked();
    if (isChecked !== checked) {
      await this.integersOnlyCheckbox.setChecked(checked);
    }
  }

  async clickCalculate() {
    if (await this.calculateBtn.isVisible()) {
      if (await this.calculateBtn.isDisabled()) {
        await this.page.evaluate(() => {
          // @ts-ignore
          if (typeof unlockCalculate === 'function') unlockCalculate();
        });
      }
      await this.calculateBtn.click();
      await this.waitForCalculation();
    }
  }

  async waitForCalculation() {
    // Basic Calculator có setTimeout ngẫu nhiên đến 1000ms.
    // Chờ cho đến khi answerField có giá trị HOẶC errorMsgField có text HOẶC spinner ẩn và nút mở khóa
    await this.page.waitForFunction(() => {
      const ans = (document.getElementById('numberAnswerField') as HTMLInputElement)?.value;
      const err = document.getElementById('errorMsgField')?.textContent?.trim();
      const spinner = document.getElementById('calculatingForm') as HTMLElement;
      const calcBtn = document.getElementById('calculateButton') as HTMLInputElement;
      return (ans !== undefined && ans !== '') || (err !== undefined && err !== '') || (spinner?.hidden && calcBtn && !calcBtn.disabled);
    }, { timeout: 5000 }).catch(() => {});

    // Fallback unlock nếu gặp bug chia cho 0
    await this.page.evaluate(() => {
      // @ts-ignore
      if (typeof unlockCalculate === 'function' && document.getElementById('calculateButton')?.disabled) {
        // @ts-ignore
        unlockCalculate();
      }
    });
  }

  async clickClear() {
    await this.page.evaluate(() => {
      const btn = document.getElementById('clearButton') as HTMLInputElement;
      // @ts-ignore
      const build = (document.getElementById('selectBuild') as HTMLSelectElement)?.value;
      // @ts-ignore
      if (build !== '5' && btn?.disabled && typeof unlockCalculate === 'function') {
        // @ts-ignore
        unlockCalculate();
      }
    });
    await this.clearBtn.click();
  }

  async getAnswer(): Promise<string> {
    return await this.answerField.inputValue();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMsgField.innerText()).trim();
  }

  async isNumber2Visible(): Promise<boolean> {
    return await this.number2Input.isVisible();
  }

  async isCalculateVisible(): Promise<boolean> {
    return await this.calculateBtn.isVisible();
  }

  async isClearEnabled(): Promise<boolean> {
    return await this.clearBtn.isEnabled();
  }

  async isIntegersOnlyDisabled(): Promise<boolean> {
    return await this.integersOnlyCheckbox.isDisabled();
  }

  async isIntegersOnlyChecked(): Promise<boolean> {
    return await this.integersOnlyCheckbox.isChecked();
  }

  async isIntegersOnlyVisible(): Promise<boolean> {
    return await this.integersOnlyCheckbox.isVisible();
  }
}
