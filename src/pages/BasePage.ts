import { Page } from '@playwright/test';

/**
 * BasePage - Base class for all page objects
 * Contains common methods used across all pages
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a URL (without waiting for networkidle)
   */
  async goto(url: string) {
    try {
      await this.page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
    } catch (error) {
      console.log('⚠️ Navigation timeout, continuing anyway...');
    }
  }

  /**
   * Wait for page to load (short wait only)
   */
  async waitForPageLoad() {
    await this.page.waitForTimeout(2000);
  }

  /**
   * Fill input field
   */
  async fillInput(selector: string, text: string) {
    try {
      const element = await this.page.$(selector);
      if (element) {
        await element.fill(text);
      }
    } catch (error) {
      console.log(`⚠️ Could not fill: ${selector}`);
    }
  }

  /**
   * Click on an element
   */
  async click(selector: string) {
    try {
      const element = await this.page.$(selector);
      if (element) {
        await element.click();
      }
    } catch (error) {
      console.log(`⚠️ Could not click: ${selector}`);
    }
  }

  /**
   * Get text content
   */
  async getText(selector: string): Promise<string> {
    try {
      return (await this.page.textContent(selector)) || '';
    } catch (error) {
      return '';
    }
  }

  /**
   * Get all text contents matching selector
   */
  async getAllText(selector: string): Promise<string[]> {
    try {
      return await this.page.locator(selector).allTextContents();
    } catch (error) {
      return [];
    }
  }

  /**
   * Check if element is visible
   */
  async isVisible(selector: string): Promise<boolean> {
    try {
      return await this.page.isVisible(selector);
    } catch (error) {
      return false;
    }
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(selector: string, timeout = 5000) {
    try {
      await this.page.waitForSelector(selector, { timeout });
    } catch (error) {
      console.log(`⚠️ Element not found: ${selector}`);
    }
  }

  /**
   * Get element count
   */
  async getElementCount(selector: string): Promise<number> {
    try {
      return await this.page.locator(selector).count();
    } catch (error) {
      return 0;
    }
  }

  /**
   * Clear text input
   */
  async clearInput(selector: string) {
    try {
      const element = await this.page.$(selector);
      if (element) {
        await element.clear();
      }
    } catch (error) {
      console.log(`⚠️ Could not clear input: ${selector}`);
    }
  }

  /**
   * Take screenshot
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  /**
   * Wait for specific time
   */
  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }
}
