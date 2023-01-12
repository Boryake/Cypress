describe ("Login Axia",() =>{
    it("Test Login ok", ()=> {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://axia2-ui-qa.santextest.com/login',{failOnStatusCode: false})
        cy.url().should('include', 'santextest.com/login')
        cy.log('Website Charged')
        cy.get('#email').clear()
        cy.get('#email').type('alisonbaker@axia.com')
        cy.get('#password').clear()
        cy.get('#password').type('123')
        cy.get("#submit-button").click()
        cy.wait(1000)
        cy.contains("Credant International")
        cy.get('.MuiToolbar-root').click()
        cy.get('[href="/dashboard"] > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root').click()
        
    })
})

