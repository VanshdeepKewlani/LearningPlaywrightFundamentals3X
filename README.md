# Learning Playwright Fundamentals 3X

A basic Playwright and TypeScript test project for learning browser automation with the Playwright Test runner.

## Prerequisites

- Node.js 18 or newer
- npm

## Install and set up

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/VanshdeepKewlani/LearningPlaywrightFundamentals3X.git
cd LearningPlaywrightFundamentals3X
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Run tests

Run all tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/ttacartlogin.spec.ts
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Generate tests with Codegen

Playwright Codegen opens a browser and records actions as Playwright code. Start it with:

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

You can also generate tests for the TTACart example:

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/ttacart/
```

Copy the generated test code into a file under `tests/`, then run it with `npx playwright test`.

## Project structure

```text
playwright.config.ts       Playwright Test configuration
tests/                     Test specifications
  example.spec.ts          Playwright website examples
  logintest.spec.ts        Login example
  ttacartlogin.spec.ts     TTACart login example
```

Test reports and results are generated locally and excluded from Git.