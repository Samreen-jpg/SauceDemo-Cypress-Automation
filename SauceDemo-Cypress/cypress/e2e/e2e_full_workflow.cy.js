import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutPage'
import ProductsPage from '../pages/productsPage'

describe('Full E2E Workflow', () => {
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()
  const productsPage = new ProductsPage()

  it('Login → Add 2 Products → Remove 1 → Checkout → Back Home → Logout', () => {
    cy.login('standard_user','secret_sauce')
    productsPage.getTitle().should('contain.text','Products')

    // Add 2 products
    cy.addProductsToCart(2)

    // Remove 1 product
    cartPage.goToCart()
    cartPage.getCartItems().should('have.length',2)
    cartPage.removeProductByIndex(0)
    cartPage.getCartItems().should('have.length',1)

    // Checkout
    cartPage.clickCheckout()
    checkoutPage.enterFirstName('John')
    checkoutPage.enterLastName('Doe')
    checkoutPage.enterPostalCode('12345')
    checkoutPage.clickContinue()
    checkoutPage.clickFinish()
    checkoutPage.getConfirmationMessage().invoke('text')
      .then(text=>expect(text.toLowerCase()).to.contain('thank you for your order'))

    // Back Home
    checkoutPage.clickBackHome()
    cy.get('.title').should('contain.text','Products')

    // Logout
    cartPage.logout()
    cy.url().should('include','/')
  })
})
