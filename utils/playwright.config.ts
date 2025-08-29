import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://the-internet.herokuapp.com',
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
});
