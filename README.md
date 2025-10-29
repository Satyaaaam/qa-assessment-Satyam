QA Assessment - Satyam
This project is an automated testing suite using Playwright and TypeScript for testing the GoQuant website.

It follows the Page Object Model (POM) pattern and includes test cases for login, logout, connecting venues, trading actions, and more.


Setup Instructions
Clone the repository
git clone https://github.com/Satyaaaam/qa-assessment-Satyam.git
cd qa-assessment-Satyam

Install dependencies
npm install

Install Playwright browsers
npx playwright install

Configuration

Edit credentials and base URL inside utils/testData.ts
Example:
export const testData = {
user: {
email: "your_email@example.com",
password: "your_password"
},
urls: {
base: "http://test1.gotrade.goquant.io/"
}
};

Run Tests

Run all tests
npx playwright test

Run specific test
npx playwright test tests/login.spec.ts

Run tests in headed mode
npx playwright test --headed

Run tests in UI mode (for debugging)
npx playwright test --ui

Generate and View Reports
After running tests:
npx playwright show-report

Reports are saved in the "reports" folder.

Design Pattern
This project uses the Page Object Model (POM).
Each page (Login, Logout, GoTrade, etc.) has its own class inside utils/.
Each class contains locators and actions for that page.
Tests in the tests/ folder use these reusable page objects.


Author
Satyam
Playwright QA Assessment - GoQuant
GitHub: https://github.com/Satyaaaam