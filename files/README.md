# Automation Testing Framework

A reusable, scalable automation testing framework built with **Playwright** and **TypeScript** for web application testing. This framework is designed to be used for https://automationbookstore.dev and can be easily adapted for future projects.

## 🚀 Features

- ✅ **Page Object Model (POM)** design pattern for maintainability
- ✅ **TypeScript** for type safety and better IDE support
- ✅ **Cross-browser testing** (Chrome, Firefox, Safari)
- ✅ **Mobile testing** support
- ✅ **API testing** capabilities
- ✅ **Parallel execution** for faster test runs
- ✅ **Custom fixtures** for reusable test setup
- ✅ **Multiple reporters** (HTML, JSON, JUnit)
- ✅ **Screenshots and videos** on test failure
- ✅ **Utilities** for test data generation, logging, and helpers
- ✅ **Environment configuration** support (dev, staging, prod)
- ✅ **Retry mechanism** for flaky tests
- ✅ **CI/CD ready**

## 📁 Project Structure

```
automation-framework/
├── src/
│   ├── pages/              # Page Object Models
│   │   ├── BasePage.ts     # Base page with common methods
│   │   └── HomePage.ts     # Home page object
│   ├── utils/              # Utility functions
│   │   ├── helpers.ts      # Common helper functions
│   │   ├── logger.ts       # Logging utility
│   │   ├── testDataFactory.ts  # Test data generator
│   │   └── envConfig.ts    # Environment configuration
│   └── fixtures/           # Custom test fixtures
│       └── fixtures.ts     # Extended Playwright test
├── tests/
│   ├── e2e/               # End-to-end tests
│   │   └── homepage.spec.ts
│   └── api/               # API tests
│       └── api-example.spec.ts
├── test-results/          # Test execution results
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
├── .env.example          # Environment variables template
└── README.md             # This file
```

## 🛠️ Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

## 📦 Installation

1. **Clone or download the framework**

2. **Install dependencies**
```bash
npm install
```

3. **Install Playwright browsers**
```bash
npm run install:browsers
```

4. **Create environment file**
```bash
cp .env.example .env
```

Edit `.env` file to configure your test environment.

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run E2E tests only
```bash
npm run test:e2e
```

### Run API tests only
```bash
npm run test:api
```

### Run tests on specific browser
```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Run mobile tests
```bash
npm run test:mobile
```

### Run tests in parallel
```bash
npm run test:parallel
```

### Run tests serially (one at a time)
```bash
npm run test:serial
```

## 📊 Viewing Test Reports

### View HTML report
```bash
npm run report
```

This will open an interactive HTML report with detailed test results, screenshots, and videos.

### View specific HTML report
```bash
npm run report:html
```

## 🎯 Writing Tests

### Example E2E Test

```typescript
import { test, expect } from '../../src/fixtures/fixtures';

test.describe('My Test Suite', () => {
  
  test('should perform an action', async ({ homePage }) => {
    // Navigate to home page
    await homePage.navigateToHome();
    
    // Perform actions
    await homePage.verifyPageLoaded();
    
    // Assertions
    const bookCount = await homePage.getBookCount();
    expect(bookCount).toBeGreaterThan(0);
  });
});
```

### Example API Test

```typescript
import { test, expect } from '@playwright/test';

test('should get data from API', async ({ request }) => {
  const response = await request.get('https://api.example.com/data');
  
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(data).toBeTruthy();
});
```

## 🏗️ Creating Page Objects

1. Create a new file in `src/pages/`
2. Extend `BasePage` class
3. Define locators and methods

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyPage extends BasePage {
  readonly myElement: Locator;

  constructor(page: Page) {
    super(page);
    this.myElement = page.locator('#my-element');
  }

  async myAction(): Promise<void> {
    await this.click(this.myElement);
  }
}
```

## 🔧 Configuration

### Environment Configuration

Edit `src/utils/envConfig.ts` to add or modify environments:

```typescript
export const environments = {
  dev: {
    baseUrl: 'https://dev.example.com',
    // ... other settings
  },
  staging: {
    baseUrl: 'https://staging.example.com',
    // ... other settings
  },
};
```

### Playwright Configuration

Modify `playwright.config.ts` to adjust:
- Browsers to test
- Timeouts
- Retries
- Reporters
- Viewport sizes
- And more

## 🔍 Code Generation

Use Playwright's code generator to record actions:

```bash
npm run codegen
```

This will open a browser and record your actions, generating test code automatically.

## 🧹 Clean Test Results

```bash
npm run clean
```

## 📝 Best Practices

1. **Use Page Object Model** - Keep page logic separate from tests
2. **Write independent tests** - Each test should be able to run standalone
3. **Use descriptive test names** - Clearly describe what is being tested
4. **Handle waits properly** - Use Playwright's auto-waiting features
5. **Use fixtures** - Reuse common setup/teardown logic
6. **Generate test data dynamically** - Use TestDataFactory for random data
7. **Take screenshots on failure** - Already configured automatically
8. **Use environment variables** - Keep sensitive data out of code
9. **Run tests in parallel** - Speed up execution
10. **Review test reports** - Check HTML reports for detailed information

## 🔄 Adapting for New Projects

To use this framework for a different website:

1. **Update base URL** in `playwright.config.ts` or `.env`
2. **Create new page objects** in `src/pages/` for the new pages
3. **Write new tests** in `tests/e2e/` using the new page objects
4. **Update environment config** in `src/utils/envConfig.ts`
5. **Adjust timeouts and retries** in `playwright.config.ts` if needed

### Example: Quick Start for New Project

```bash
# 1. Update .env file
BASE_URL=https://your-new-website.com

# 2. Create new page object
# src/pages/LoginPage.ts

# 3. Create new test
# tests/e2e/login.spec.ts

# 4. Run tests
npm test
```

## 🐛 Debugging

### Debug specific test
```bash
npx playwright test tests/e2e/homepage.spec.ts --debug
```

### Debug with trace viewer
```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

## 📚 Utilities Available

### Helpers (`src/utils/helpers.ts`)
- `generateRandomString()` - Generate random strings
- `generateRandomEmail()` - Generate random emails
- `generateRandomNumber()` - Generate random numbers
- `formatCurrency()` - Format currency values
- `sleep()` - Async sleep
- `waitForCondition()` - Wait for custom conditions
- `retryWithBackoff()` - Retry with exponential backoff

### Test Data Factory (`src/utils/testDataFactory.ts`)
- `TestDataFactory.generateUser()` - Generate user data
- `TestDataFactory.generateBook()` - Generate book data
- `TestDataFactory.generateAddress()` - Generate address data
- `TestDataFactory.generateCreditCard()` - Generate test card data

### Logger (`src/utils/logger.ts`)
- `logger.debug()` - Debug level logs
- `logger.info()` - Info level logs
- `logger.warn()` - Warning level logs
- `logger.error()` - Error level logs

## 🤝 Contributing

1. Follow the existing code structure
2. Write clean, documented code
3. Add tests for new features
4. Update README if needed

## 📄 License

MIT

## 🆘 Support

For issues or questions:
1. Check Playwright documentation: https://playwright.dev/
2. Review test reports for detailed error information
3. Use debug mode to step through tests

## 🎓 Learning Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
