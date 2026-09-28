import { test as baseTest, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator.page';

export type TestOptions = {
  build: string;
};

export type TestFixtures = {
  calculator: CalculatorPage;
};

export const test = baseTest.extend<TestOptions & TestFixtures>({
  build: [process.env.TARGET_BUILD || '1', { option: true }],

  calculator: async ({ page, build }, use) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(build);
    await use(calc);
  },
});

export { expect };
