import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './specs',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 2,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: '../playwright-report' }]
  ],
  use: {
    baseURL: 'https://testsheepnz.github.io/BasicCalculator.html',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
