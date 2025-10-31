class CheckoutPage {
  enterFirstName(firstName) { cy.get('[data-test="firstName"]').type(firstName) }
  enterLastName(lastName) { cy.get('[data-test="lastName"]').type(lastName) }
  enterPostalCode(postalCode) { cy.get('[data-test="postalCode"]').type(postalCode) }
  clickContinue() { cy.get('[data-test="continue"]').click() }
  clickFinish() { cy.get('[data-test="finish"]').click() }
  getConfirmationMessage() { return cy.get('h2.complete-header') }
  clickBackHome() { cy.get('[data-test="back-to-products"]').click() }
}
export default CheckoutPage
