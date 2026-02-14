import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly pageTitle: Locator;
  readonly bookCards: Locator;
  readonly productList: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h1#page-title');
    this.productList = page.locator('ul#productList');
    // Books are li elements inside the productList
    this.bookCards = page.locator('ul#productList > li');
  }

  async navigateToHome(): Promise<void> {
    await this.goto('/');
    await this.page.waitForLoadState('networkidle');
    // Wait for JavaScript to generate the book list
    await this.page.waitForSelector('ul#productList > li', { timeout: 10000 });
  }

  async getBookCount(): Promise<number> {
    // Wait for books to be generated
    await this.page.waitForSelector('ul#productList > li', { timeout: 10000 });
    const count = await this.bookCards.count();
    console.log(`Found ${count} books`);
    return count;
  }

  async getAllBookTitles(): Promise<string[]> {
    await this.page.waitForSelector('ul#productList > li', { timeout: 10000 });
    
    const books = await this.bookCards.all();
    const titles: string[] = [];
    
    for (const book of books) {
      // Book titles are in h2 elements
      const titleElement = book.locator('h2');
      const title = await titleElement.textContent();
      if (title) {
        titles.push(title.trim());
      }
    }
    
    return titles;
  }

  async getBookDetails(index: number): Promise<{
    title: string;
    author: string;
    price?: string;
  }> {
    const book = this.bookCards.nth(index);
    
    const title = await book.locator('h2').textContent() || '';
    const author = await book.locator('p').first().textContent() || '';
    
    let price: string | undefined;
    const priceElement = book.locator('p.ui-li-aside');
    if (await priceElement.count() > 0) {
      price = await priceElement.textContent() || undefined;
    }
    
    return { title, author, price };
  }

  async clickBookByIndex(index: number): Promise<void> {
    await this.bookCards.nth(index).click();
  }

  async searchForBook(searchTerm: string): Promise<void> {
    const searchInput = this.page.locator('#searchBar');
    await searchInput.fill(searchTerm);
  }

  async verifyPageLoaded(): Promise<void> {
    await this.verifyVisible(this.pageTitle);
  }
}