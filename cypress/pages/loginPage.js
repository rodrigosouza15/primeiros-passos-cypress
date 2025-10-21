class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button",
            wrongCredentialAlert: ".oxd-alert",
        }

        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage