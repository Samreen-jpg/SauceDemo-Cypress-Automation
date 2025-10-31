import LoginPage from '../pages/loginPage'
import ProductsPage from '../pages/productsPage'

describe('Login Tests', () => {
  const loginPage = new LoginPage()
  const productsPage = new ProductsPage()

  it('Login failure', () => {
    loginPage.visit()
    loginPage.enterUsername('wrong_user')
    loginPage.enterPassword('wrong_pass')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('contain.text','Username and password do not match')
  })

  it('Login success', () => {
    cy.login('standard_user','secret_sauce')
    productsPage.getTitle().should('contain.text','Products')
  })
})
