import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async verifyVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async verifyContainsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toContainText(text);
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}