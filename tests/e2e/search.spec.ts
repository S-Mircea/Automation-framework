import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Search Functionality Tests', () => {
  
  test('should filter books by search term', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const initialCount = await homePage.getBookCount();
    console.log('Initial book count:', initialCount);
    
    // Search for "Java"
    await homePage.searchForBook('Java');
    await page.waitForTimeout(500);
    
    const filteredCount = await homePage.getBookCount();
    console.log('Filtered book count:', filteredCount);
    
    // Should have fewer books after filtering
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
    
    // Get filtered book titles
    const titles = await homePage.getAllBookTitles();
    console.log('Filtered books:', titles);
    
    // All visible titles should contain "Java"
    titles.forEach(title => {
      expect(title.toLowerCase()).toContain('java');
    });
  });

  test('should show all books when search is cleared', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    
    const initialCount = await homePage.getBookCount();
    
    // Search for something
    await homePage.searchForBook('Test');
    await page.waitForTimeout(500);
    
    // Clear search
    await homePage.searchForBook('');
    await page.waitForTimeout(500);
    
    const finalCount = await homePage.getBookCount();
    
    // Should show all books again
    expect(finalCount).toBe(initialCount);
  });
});