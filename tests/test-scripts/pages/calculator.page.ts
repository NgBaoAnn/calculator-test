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
          waitUntil: 'domcontentloaded',
          timeout: 15000
        });
        await this.buildDropdown.waitFor({ state: 'visible', timeout: 10000 });
        await this.page.waitForFunction(() => typeof (window as any).calculate === 'function');
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
      await this.number2Input.fill(num2);
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
    const previousError = await this.getErrorMessage();
    await this.calculateBtn.click();
    await this.waitForCalculation(previousError);
  }

  async waitForCalculation(previousError = '') {
    await this.page.waitForFunction((oldError) => {
      const err = document.getElementById('errorMsgField')?.textContent?.trim() ?? '';
      const spinner = document.getElementById('calculatingForm') as HTMLElement;
      return spinner.hidden || (err !== '' && err !== oldError);
    }, previousError, { timeout: 5000 });
  }

  async clickClear() {
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
