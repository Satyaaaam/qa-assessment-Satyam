# 🧪 QA Assessment - Satyam

### Automated Testing Suite for **GoQuant (GoTrade Platform)**  
Developed using **Playwright** and **TypeScript**, this project validates core platform functionalities such as login, venue connection, trading workflows, and logout.  
It follows the **Page Object Model (POM)** design pattern for maintainable, scalable, and reusable test automation.

---

## 📘 Overview

This QA Assessment project automates functional testing of the **GoQuant Trading Platform**.  
The suite includes test cases covering:
- **Login / Logout**
- **Account and Venue Connections**
- **Trading Actions**
- **Order Management**
- **Page Navigation and UI Validation**

---

## ⚙️ Tech Stack

| Category | Tool / Framework |
|-----------|------------------|
| Language | TypeScript |
| Framework | Playwright |
| Design Pattern | Page Object Model (POM) |
| OS | macOS |
| Browsers Tested | Chromium, Firefox, WebKit |
| Reporting | Playwright HTML Reporter |

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Satyaaaam/qa-assessment-Satyam.git
cd qa-assessment-Satyam
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

---

## ⚙️ Configuration

Edit your credentials and base URL inside **`utils/testData.ts`**  
Example:
```ts
export const testData = {
  user: {
    email: "your_email@example.com",
    password: "your_password",
  },
  urls: {
    base: "http://test1.gotrade.goquant.io/",
  },
};
```

---

## 🧩 Project Structure

```


---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test
```bash
npx playwright test tests/login.spec.ts
```

### Run in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run in UI mode (debug visually)
```bash
npx playwright test --ui
```

---

## 📊 Generate and View Reports

After test execution, generate and open the report:
```bash
npx playwright show-report
```

Reports are automatically saved inside the **`reports/`** folder.

---

## 🧠 Design Pattern

This project follows the **Page Object Model (POM)** structure for clean separation of concerns:
- Each page (e.g., `Login`, `GoTrade`, `Admin`) has its own class inside the `utils/` folder.
- Each class defines:
  - **Locators** (UI elements)
  - **Actions** (reusable functions)
- Test files in the `tests/` folder import and use these classes for modular, readable scripts.

---

## 👨‍💻 Author

**Satyam Raina**  
QA Engineer | Playwright Automation  
GitHub: [@Satyaaaam](https://github.com/Satyaaaam)  
Project: **Playwright QA Assessment - GoQuant**  


---

> *This project demonstrates structured Playwright automation using POM for a complex trading platform, ensuring modularity, maintainability, and cross-browser reliability.*
