# Quick Start Guide

This guide will help you get started with the automation framework in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

## 2. Install Browsers

```bash
npm run install:browsers
```

## 3. Run Your First Test

```bash
npm test
```

That's it! The framework will run all tests and generate a report.

## 4. View Test Report

```bash
npm run report
```

This opens an interactive HTML report showing test results.

## 5. Common Commands

```bash
# Run tests in headed mode (see the browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run tests with UI (interactive mode)
npm run test:ui

# Run only E2E tests
npm run test:e2e

# Run only API tests
npm run test:api

# Run tests on Chrome only
npm run test:chrome
```

## 6. Writing Your First Test

Create a new test file in `tests/e2e/mytest.spec.ts`:

```typescript
import { test, expect } from '../../src/fixtures/fixtures';

test.describe('My First Test Suite', () => {
  
  test('should load the homepage', async ({ homePage }) => {
    // Navigate to the home page
    await homePage.navigateToHome();
    
    // Verify page loaded
    await homePage.verifyPageLoaded();
    
    // Get and verify book count
    const bookCount = await homePage.getBookCount();
    expect(bookCount).toBeGreaterThan(0);
  });
});
```

Run your test:

```bash
npx playwright test tests/e2e/mytest.spec.ts
```

## 7. Generate Code Automatically

Playwright can record your actions and generate test code:

```bash
npm run codegen
```

This opens a browser where you can:
1. Navigate and interact with the website
2. Playwright records your actions
3. Copy the generated code into your test

## 8. Debug a Failing Test

```bash
# Run specific test with debugging
npx playwright test tests/e2e/homepage.spec.ts --debug

# Or use the UI mode for easier debugging
npm run test:ui
```

## 9. Configure for Your Project

To use this framework for a different website:

1. **Update `.env` file:**
```bash
BASE_URL=https://your-website.com
```

2. **Create page objects** for your pages in `src/pages/`

3. **Write tests** using your page objects

## 10. Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore existing tests in `tests/` directory
- Check out page objects in `src/pages/`
- Review utilities in `src/utils/`
- Customize `playwright.config.ts` for your needs

## Need Help?

- Check test reports for detailed errors
- Use `--debug` flag to step through tests
- Review Playwright docs: https://playwright.dev/
- Look at example tests in the `tests/` folder

## Pro Tips

1. **Use Page Objects** - Keep your test code clean and maintainable
2. **Run in parallel** - Speed up test execution with `npm run test:parallel`
3. **Use fixtures** - Reuse common setup code
4. **Generate test data** - Use `TestDataFactory` for dynamic data
5. **Check reports** - Always review HTML reports after test runs

Happy Testing! 🚀
