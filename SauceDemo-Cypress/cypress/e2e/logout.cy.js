import CartPage from '../pages/cartPage'

describe('Logout Test', () => {
  const cartPage = new CartPage()

  it('Logout from application', () => {
    cy.login('standard_user','secret_sauce')
    cartPage.logout()
    cy.url().should('include','/')
  })
})
