class ProductsPage {
  getTitle() { return cy.get('.title') }
  getAllProducts() { return cy.get('.inventory_item') }
  getProductNameByIndex(index) { return cy.get('.inventory_item_name').eq(index) }
  getProductPriceByIndex(index) { return cy.get('.inventory_item_price').eq(index) }
  clickProductByIndex(index) { cy.get('.inventory_item_name').eq(index).click() }
  clickBackToProducts() { cy.get('#back-to-products').click() }
  addProductToCartByIndex(index) { cy.get('.inventory_item').eq(index).find('button').click() }
  removeProductFromCartByIndex(index) { cy.get('.inventory_item').eq(index).find('button').click() }
}
export default ProductsPage
