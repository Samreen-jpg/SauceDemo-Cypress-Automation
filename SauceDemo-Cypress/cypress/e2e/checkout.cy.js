import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe('SauceDemo Checkout Tests', () => {
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.addProductsToCart(1)
    cartPage.goToCart()
    cartPage.getCartItems().should('have.length', 1)
  })

  it('Complete checkout and return home', () => {
    cartPage.clickCheckout()
    checkoutPage.enterFirstName('John')
    checkoutPage.enterLastName('Doe')
    checkoutPage.enterPostalCode('12345')
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()

    cy.url({ timeout: 10000 }).should('include', '/checkout-complete.html')
    checkoutPage.getConfirmationMessage({ timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.toLowerCase()).to.contain('thank you for your order')
      })

    checkoutPage.clickBackHome()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain.text', 'Products')
  })
})
