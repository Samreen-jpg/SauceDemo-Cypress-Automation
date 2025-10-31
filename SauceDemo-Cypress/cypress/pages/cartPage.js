class CartPage {
  goToCart() { cy.get('.shopping_cart_link').click() }
  getCartItems() { return cy.get('.cart_item') }
  clickCheckout() { cy.get('[data-test="checkout"]').click() }
  removeProductByIndex(index = 0) { cy.get('.cart_item').eq(index).find('button').click() }
  logout() {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  }
}
export default CartPage
