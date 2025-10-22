class MyInfoPage{

    selectorsList(){
        const selectors ={
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            nationalityaButton: ".oxd-select-text--arrow"
        }

        return selectors

    }
    
    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(EmployeeId, OtherId, DriverLicenseNumber, ExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(ExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
    
    fillStatus(){
        cy.get(this.selectorsList().nationalityaButton).eq(0).click()
        cy.contains('Brazilian').click()
        cy.get(this.selectorsList().nationalityaButton).eq(1).click()
        cy.contains('Married').click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2025-09-11')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

}

export default MyInfoPage