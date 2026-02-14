import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Automation Bookstore - Homepage Tests', () => {
  
  test('should load homepage successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    const title = await homePage.getTitle();
    console.log('Page title:', title);
    expect(title).toContain('Automation');
    
    // Verify the main heading is visible
    await expect(page.locator('h1.ui-title').first()).toBeVisible();
  });

  test('should display books on homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const bookCount = await homePage.getBookCount();
    console.log('Number of books:', bookCount);
    
    // The site should have books
    expect(bookCount).toBeGreaterThan(0);
  });

  test('should get all book titles', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const bookTitles = await homePage.getAllBookTitles();
    console.log('Book titles:', bookTitles);
    
    expect(bookTitles.length).toBeGreaterThan(0);
    
    // Verify each title exists
    bookTitles.forEach(title => {
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    });
  });

  test('should click on first book', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const bookCount = await homePage.getBookCount();
    
    if (bookCount > 0) {
      await homePage.clickBookByIndex(0);
      await page.waitForTimeout(1000);
      
      console.log('Clicked on first book');
      console.log('Current URL:', page.url());
    }
  });
});