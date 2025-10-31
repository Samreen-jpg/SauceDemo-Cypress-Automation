import ProductsPage from '../pages/productsPage'

describe('Product Navigation and Cart Operations', () => {
  const productsPage = new ProductsPage()

  beforeEach(() => cy.login('standard_user','secret_sauce'))

  it('Validate products, navigate details, add/remove from cart, return to products', () => {
    // Validate products list and details
    productsPage.getTitle().should('contain.text','Products')
    productsPage.getAllProducts().should('have.length',6)
    productsPage.getProductNameByIndex(0).should('contain.text','Sauce Labs Backpack')
    productsPage.getProductPriceByIndex(0).should('contain.text','$29.99')

    // Navigate to product details and back
    productsPage.clickProductByIndex(0)
    cy.url().should('include','inventory-item.html')
    productsPage.clickBackToProducts()
    productsPage.getTitle().should('contain.text','Products')

    // Add two products to cart
    productsPage.addProductToCartByIndex(0)
    productsPage.addProductToCartByIndex(1)
    cy.get('.shopping_cart_badge').should('contain.text','2')

    // Go to cart page
    cy.get('.shopping_cart_link').click()
    cy.url().should('include','cart.html')

    // Remove one product from cart
    cy.get('.cart_item').first().find('button').contains('Remove').click()
    cy.get('.cart_item').should('have.length',1)
    cy.get('.shopping_cart_badge').should('contain.text','1')

    // Go back to product list
    cy.get('[data-test="continue-shopping"]').click()
    productsPage.getTitle().should('contain.text','Products')
  })
})
