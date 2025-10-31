Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
})

Cypress.Commands.add('addProductsToCart', (count = 2) => {
  cy.get('.inventory_item').each((item, index) => {
    if (index < count) {
      cy.wrap(item).find('button').click()
    }
  })
})
