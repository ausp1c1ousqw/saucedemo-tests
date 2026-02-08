# SauceDemo Autotests Project

This project is a project with autotests for the SauceDemo e-commerce website using WebdriverIO, Cucumber BDD, and Allure reporting.

## Project Structure

- `features/` - Cucumber feature files and step definitions
- `pages/` - Page Object Model classes
- `businessClasses/` - Reusable business logic (Actions, Assertions, Auth)
- `hooks/` - Test hooks for setup and teardown
- `utils/` - Utility functions
- `artifacts/` - Test reports and results (generated)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with your test environment variables:

```env
# Add your environment variables here
```

### Test Configuration

- `local.wdio.conf.js` - Configuration for local test execution
- `ci.wdio.conf.js` - Configuration for CI/CD pipeline execution

## Running Tests

### Local Tests

Run tests locally with Chrome:

```bash
npm test
```

### CI Tests

Run tests in CI environment:

```bash
npm run test-ci
```

## Test Reporting

### Allure Reports

Generate and view Allure test reports:

```bash
# Run tests and generate report
npm run test-and-allure

# Or run separately:
npm run test
npm run allure:generate
npm run allure:open
```

### Clean Artifacts

Clean up test artifacts:

```bash
npm run artifacts:clean
npm run allure:clean
```

## Features

- **Login/Logout**: User authentication tests
- **Product Cart**: Add/remove products from cart
- **Checkout**: Complete purchase flow
- **Cart Badge**: Cart item count verification

## Writing Tests

### Feature Files

Add new features in `features/steps/` directory with `.feature` extension using Gherkin syntax.

### Step Definitions

Implement step definitions in `features/step-definitions/` directory.

### Page Objects

Add page object classes in `pages/` directory for new pages.

## CI/CD

The project includes GitHub Actions workflow (`.github/workflows/ci.yml`) for automated testing in CI/CD pipelines.

## GitHub Page with report

https://ausp1c1ousqw.github.io/saucedemo-tests/
