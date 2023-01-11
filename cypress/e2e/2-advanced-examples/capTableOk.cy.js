describe('Login Axia', { testIsolation: false }, () => {

    it("Test Login ok", ()=> {
        cy.visit('https://axia2-ui-qa.santextest.com/login',{failOnStatusCode: false})
        cy.url().should('include', 'antextest.com/login')
        cy.log('Website Charged')
        cy.get('#email').clear()
        cy.get('#email').type('alisonbaker@axia.com')
        cy.get('#password').clear()
        cy.get('#password').type('123')
        cy.contains("Login").click()
        cy.wait(5000)
        cy.contains("Credant International")
    }) 
    it("Create cap table", ()=> {
        cy.visit('https://axia2-ui-qa.santextest.com/investments/companies/a3d27a5f-3d1c-4b65-8c20-f1499c2c82b5/capitalization/capitalization-table')
        cy.get('.MuiButton-label > .MuiBox-root').click()
        cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('#name').type('Test Cypress')
        cy.get('#capitalStructureId').click()
        cy.contains('Test Cypress').click()
        cy.get('#date').type("12/12/2023")
        cy.get('#submit-button').click()
    })

})
