import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

  const Chance = require('chance');

  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()
  const myInfoPage = new MyInfoPage()
  const chance = new Chance()

describe('User Orange HRM - Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmployeeDetails(chance.word(),chance.second(),'111','2025-10-24')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })
  
})