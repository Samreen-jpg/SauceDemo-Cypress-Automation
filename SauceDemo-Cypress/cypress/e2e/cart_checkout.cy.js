import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'

describe('Cart & Checkout Workflow', () => {
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.login('standard_user','secret_sauce')
    cy.addProductsToCart(2)
    cartPage.goToCart()
  })

  it('Remove one product and checkout', () => {
    cartPage.getCartItems().should('have.length',2)
    cartPage.removeProductByIndex(0)
    cartPage.getCartItems().should('have.length',1)
    cartPage.clickCheckout()

    checkoutPage.enterFirstName('John')
    checkoutPage.enterLastName('Doe')
    checkoutPage.enterPostalCode('12345')
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()

    cy.url({timeout:10000}).should('include','/checkout-complete.html')
    checkoutPage.getConfirmationMessage().invoke('text')
      .then((text)=>expect(text.toLowerCase()).to.contain('thank you for your order'))

    checkoutPage.clickBackHome()
    cy.get('.title').should('contain.text','Products')
  })
})
