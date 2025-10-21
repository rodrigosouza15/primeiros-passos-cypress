import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()

describe('Orange HRM - Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nationalityaButton: ".oxd-select-text--arrow"

  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-10-16')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.nationalityaButton).eq(0).click()
    cy.contains('Brazilian').click()
    cy.get(selectorsList.nationalityaButton).eq(1).click()
    cy.contains('Married').click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2025-09-11')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})