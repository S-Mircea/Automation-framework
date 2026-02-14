# 🧪 E2E Automation Testing Framework

[![Tests](https://img.shields.io/badge/tests-6%20passing-brightgreen)](https://github.com/S-Mircea/automation-framework)
[![Framework](https://img.shields.io/badge/framework-Playwright-45ba4b)](https://playwright.dev/)
[![Language](https://img.shields.io/badge/language-TypeScript-3178C6)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> A professional end-to-end automation testing framework built with **Playwright** and **TypeScript**, demonstrating industry-standard practices in test automation and quality assurance.

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Test Coverage](#-test-coverage)
- [Running Tests](#-running-tests)
- [Test Results](#-test-results)
- [What I Learned](#-what-i-learned)
- [Roadmap](#-roadmap)
- [Contact](#-contact)

## 🎯 About The Project

This is my first automation testing framework, built to demonstrate proficiency in modern test automation practices. The framework implements the **Page Object Model (POM)** design pattern and tests the [Automation Bookstore](https://automationbookstore.dev) web application.

**Why This Project?**
- Demonstrates understanding of software testing principles
- Shows ability to write maintainable, scalable test automation code
- Proves hands-on experience with industry-standard tools (Playwright, TypeScript)
- Highlights problem-solving and technical learning abilities

## ✨ Key Features

### 🏗️ Architecture & Design
- **Page Object Model (POM)** - Clean separation between test logic and page interactions
- **TypeScript** - Type-safe code with IntelliSense support
- **Modular Design** - Reusable components and base classes
- **DRY Principles** - Don't Repeat Yourself methodology throughout

### 🧪 Testing Capabilities
- **Cross-browser Support** - Chrome, Firefox, Safari, Edge
- **Parallel Execution** - Faster test runs with concurrent workers
- **Smart Waits** - Network idle and dynamic content handling
- **Detailed Assertions** - Comprehensive validation of UI elements and data
- **Screenshot on Failure** - Automatic visual debugging aid

### 📊 Reporting & CI/CD
- **HTML Reports** - Beautiful, interactive test reports
- **Test Artifacts** - Screenshots and traces for debugging
- **CI/CD Ready** - Can be integrated with GitHub Actions, Jenkins, etc.
- **Console Logging** - Detailed execution information

## 🛠️ Technologies

| Technology | Purpose |
|------------|---------|
| **[Playwright](https://playwright.dev/)** | Modern, reliable E2E testing framework with cross-browser support |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe JavaScript for better code quality and maintainability |
| **[Node.js](https://nodejs.org/)** | JavaScript runtime environment |
| **[Git](https://git-scm.com/)** | Version control for tracking changes and collaboration |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/S-Mircea/automation-framework.git
   cd automation-framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Run the tests**
   ```bash
   npm test
   ```

## 📁 Project Structure

```
automation-framework/
├── src/
│   └── pages/                    # Page Object Models
│       ├── BasePage.ts          # Base class with common methods
│       └── HomePage.ts          # Home page specific interactions
├── tests/
│   ├── e2e/                     # End-to-end test suites
│   │   ├── homepage.spec.ts    # Homepage validation tests
│   │   └── search.spec.ts      # Search functionality tests
│   └── api/                     # API tests (future expansion)
├── test-results/                # Test execution artifacts
├── playwright-report/           # HTML test reports
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

### 🏛️ Page Object Model Structure

**BasePage.ts** - Contains reusable methods:
- Navigation helpers
- Element interaction utilities
- Wait strategies
- Common assertions

**HomePage.ts** - Encapsulates homepage functionality:
- Book listing interactions
- Search functionality
- Element locators
- Page-specific methods

## 🧪 Test Coverage

### Homepage Validation Tests (`homepage.spec.ts`)

| Test Case | Description | Key Validations |
|-----------|-------------|----------------|
| **Page Load Verification** | Ensures homepage loads correctly | ✓ Page title contains "Automation"<br>✓ Main heading is visible<br>✓ Network resources loaded |
| **Book Display Validation** | Verifies books are rendered on page | ✓ Book count > 0<br>✓ Elements are visible |
| **Book Titles Extraction** | Tests ability to retrieve book information | ✓ All titles extracted successfully<br>✓ No empty titles<br>✓ Data integrity checks |
| **Book Interaction** | Validates clickability and navigation | ✓ Book elements are clickable<br>✓ Navigation works correctly |

### Search Functionality Tests (`search.spec.ts`)

| Test Case | Description | Key Validations |
|-----------|-------------|----------------|
| **Search Filtering** | Tests search functionality with keyword "Java" | ✓ Results filtered correctly<br>✓ Displayed count ≤ initial count<br>✓ All results contain search term |
| **Search Reset** | Verifies clearing search restores all items | ✓ All books displayed after clear<br>✓ Count matches initial state |

## 🎮 Running Tests

### Basic Commands

```bash
# Run all tests (headless)
npm test

# Run tests with visible browser
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# Run specific test suite
npm run test:homepage
npm run test:search

# Debug mode
npm run test:debug

# View HTML report
npm run report
```

### Advanced Options

```bash
# Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run tests with specific number of workers
npx playwright test --workers=2

# Run specific test file
npx playwright test tests/e2e/homepage.spec.ts

# Run tests in headed mode with slowmo
npx playwright test --headed --slow-mo=1000
```

## 📈 Test Results

```
Running 6 tests using 3 workers

✓ [chromium] › homepage.spec.ts:6:3 › should load homepage successfully (2.1s)
✓ [chromium] › homepage.spec.ts:21:3 › should display books on homepage (1.8s)
✓ [chromium] › homepage.spec.ts:32:3 › should get all book titles (1.9s)
✓ [chromium] › homepage.spec.ts:48:3 › should click on first book (2.3s)
✓ [chromium] › search.spec.ts:6:3 › should filter books by search term (2.7s)
✓ [chromium] › search.spec.ts:33:3 › should show all books when search is cleared (2.4s)

  6 passed (13.2s)
```

### Test Execution Benefits

| Metric | Manual Testing | Automated Testing | Improvement |
|--------|---------------|-------------------|-------------|
| **Execution Time** | ~15 minutes | ~13 seconds | **~69x faster** |
| **Consistency** | Variable | 100% consistent | Eliminates human error |
| **Repeatability** | Tedious | Instant | Can run unlimited times |
| **Regression Testing** | Time-consuming | Automated | Continuous validation |

## 🎓 What I Learned

Through building this framework, I gained practical experience in:

### Testing Concepts
- ✅ **Test Automation Fundamentals** - Understanding when and what to automate
- ✅ **Page Object Model (POM)** - Industry-standard design pattern for test maintainability
- ✅ **Test Case Design** - Writing effective, focused test scenarios
- ✅ **Assertion Strategies** - Comprehensive validation techniques
- ✅ **Test Data Management** - Handling dynamic content and data extraction

### Technical Skills
- ✅ **Playwright Framework** - Modern E2E testing with auto-waiting and reliable locators
- ✅ **TypeScript** - Type-safe programming for robust test code
- ✅ **Asynchronous JavaScript** - Handling promises and async/await patterns
- ✅ **CSS Selectors & XPath** - Effective element location strategies
- ✅ **Version Control (Git)** - Code management and collaboration basics

### Software Development Practices
- ✅ **Clean Code Principles** - Writing readable, maintainable code
- ✅ **DRY Methodology** - Avoiding code duplication through reusable components
- ✅ **Documentation** - Creating clear, professional project documentation
- ✅ **Problem-Solving** - Debugging test failures and handling edge cases

### Professional Skills
- ✅ **Self-Learning** - Independently researching and implementing new technologies
- ✅ **Attention to Detail** - Identifying edge cases and potential issues
- ✅ **Project Organization** - Structuring projects for scalability and maintainability

## 🔮 Roadmap

Future enhancements planned for this framework:

- [ ] **API Testing Integration** - Add REST API test examples using Playwright's API testing features
- [ ] **Visual Regression Testing** - Implement screenshot comparison for UI changes
- [ ] **CI/CD Pipeline** - Set up GitHub Actions for automated test execution
- [ ] **Test Data Factory** - Create dynamic test data generation utilities
- [ ] **Cross-browser Screenshots** - Capture and compare across different browsers
- [ ] **Mobile Testing** - Add mobile device emulation tests
- [ ] **Performance Testing** - Integrate basic performance metrics
- [ ] **Accessibility Testing** - Add a11y checks using axe-core
- [ ] **Code Coverage** - Implement E2E code coverage reporting
- [ ] **Docker Support** - Containerize test execution environment
- [ ] **Advanced Reporting** - Integrate with Allure or ReportPortal
- [ ] **Database Validation** - Add database testing capabilities

## 📫 Contact

**Mircea Serban**

- 📧 Email: [mirceaserban1981@gmail.com](mailto:mirceaserban1981@gmail.com)
- 💼 GitHub: [@S-Mircea](https://github.com/S-Mircea)
- 🔗 LinkedIn: [Connect with me](https://www.linkedin.com/in/mircea-serban) *(Add your LinkedIn if available)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Automation Bookstore](https://automationbookstore.dev) - Practice website for test automation
- [Playwright Documentation](https://playwright.dev/docs/intro) - Excellent learning resources
- Testing community for best practices and guidance

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star! ⭐**

*This project demonstrates my commitment to learning modern test automation practices and building quality software.*

</div>
