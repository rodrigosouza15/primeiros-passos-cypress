class MenuPage{

    selectorsList(){
        const selectors ={
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item > .oxd-text",

        }

        return selectors

    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

}

export default MenuPage