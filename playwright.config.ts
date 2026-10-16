import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Run tests sequentially to avoid rate limiting
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: process.env['CI'] ? 1 : 1, // Single worker to avoid blocking
  reporter: [['html'], ['list'], ['junit', { outputFile: 'test-results/junit.xml' }]],
  use: {
    baseURL: 'https://www.booking.com/flights/index.en-gb.html',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 30000,
    actionTimeout: 15000,
  },

  webServer: undefined,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  globalSetup: undefined,
  globalTeardown: undefined,

  timeout: 120000, // Increase to 2 minutes per test
  expect: {
    timeout: 10000, // Increase assertion timeout
  },
});
