# Flight Search Automation

Playwright and TypeScript end-to-end tests for flight searches on the Booking.com flights website. The current suite exercises searches between Delhi (DEL) and Mumbai (BOM), including date changes and basic validation scenarios.

## Prerequisites

- Node.js (LTS recommended) and npm
- Internet access to reach Booking.com

## Setup

From the repository root, install the project dependencies and the Chromium browser used by the tests:

```bash
npm ci
npx playwright install chromium
```

## Running the tests

Run all tests:

```bash
npm test
```

Run the tagged smoke or regression tests:

```bash
npm run test:smoke
npm run test:regression
```

Run the Chromium project explicitly, or run tests with a visible browser:

```bash
npm run test:chrome
npm run test:headed
```

Open Playwright's interactive test UI or debug mode:

```bash
npm run test:ui
npm run test:debug
```

The Playwright configuration currently defines only the Chromium project. The tests navigate to the live Booking.com flights page, so results can vary with site availability, network conditions, or changes to the site's UI.

## Test reports

The test run produces an HTML report, a console list, and a JUnit report at `test-results/junit.xml`. Open the HTML report after a test run with:

```bash
npm run report
```

The configured HTML report is written to `playwright-report/`. Screenshots and videos are retained for failed tests, and a trace is recorded on the first retry. Playwright output directories are excluded from Git.

## Other project commands

```bash
npm run lint
npm run format
```

`lint` runs ESLint on TypeScript files. `format` formats the project files with Prettier.

## Project structure

```text
src/
  pages/
    BasePage.ts          Shared Playwright page helpers
    FlightSearchPage.ts  Flight-search page object and interactions
  test-data/
    testData.ts          Airport and scenario test data
  utils/
    dateUtils.ts         Date helpers used by tests
tests/
  flight-search/
    flightSearch.spec.ts Flight-search scenarios
specs/
  README.md              Specs directory note
playwright.config.ts     Playwright test, browser, and reporter configuration
```

## Test scenarios

The flight-search suite includes valid DEL-to-BOM searches, searches for different dates, modified searches, flight-detail checks, missing departure or destination checks, past-date handling, and a loading-state check. Tests are tagged `@smoke` or `@regression` for filtering.
