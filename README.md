# SauceDemo-Cypress-Automation
Automates the SauceDemo website using Cypress with a full end-to-end workflow, including login, product validation, add/remove from cart, checkout, back-home navigation, and logout using Page Object Model and reusable commands.
SauceDemo-Cypress/
├─ cypress/
│  ├─ e2e/
│  │  ├─ 1_login.cy.js
│  │  ├─ 2_products.cy.js
│  │  ├─ 3_cart_checkout.cy.js
│  │  ├─ 5_logout.cy.js
│  │  ├─ e2e_full_workflow.cy.js
│  ├─ pages/
│  │  ├─ loginPage.js
│  │  ├─ productsPage.js
│  │  ├─ cartPage.js
│  │  └─ checkoutPage.js
│  ├─ support/
│  │  ├─ commands.js
│  │  └─ e2e.js
├─ cypress.config.js
├─ package.json
