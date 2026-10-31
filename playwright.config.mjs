import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 120_000,
  expect: { timeout: 15_000 },
  workers: 1,
  retries: 0,
  outputDir: ".tmp/playwright-results",
  reporter: [["list"], ["html", { outputFolder: ".tmp/playwright-report", open: "never" }]],
  use: {
    actionTimeout: 15_000,
    baseURL: "http://localhost:3000",
    channel: "chrome",
    headless: true,
    launchOptions: { slowMo: process.env.DEMO_RECORDING === "1" ? 120 : 0 },
    serviceWorkers: "block",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: { mode: "on", size: { width: 1440, height: 1000 } },
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    { name: "tablet", use: { viewport: { width: 768, height: 1024 }, hasTouch: true } },
    { name: "mobile", use: { viewport: { width: 360, height: 800 }, isMobile: true, hasTouch: true, video: { mode: "on", size: { width: 360, height: 800 } } } },
  ],
});
