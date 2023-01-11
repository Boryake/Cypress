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
    
it('Complete Common stock and create a group', () => {
    cy.visit("https://axia2-ui-qa.santextest.com/investments/companies/a3d27a5f-3d1c-4b65-8c20-f1499c2c82b5/capitalization/capital-structure")
    cy.wait(3000)
    cy.get('.jss126 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.contains('Test Cypress').click()
    cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root').click()
    cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root > :nth-child(1)').click()
    cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').clear().type('200000')
    cy.get('span').contains('+ Group').click()
    cy.focused().type('Group A')
    cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('.jss363 > #icon-button').click()
    cy.focused().type('Share A')
    cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
    cy.focused().type('9999999.9999')
    cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').type("20000")
    cy.get('.jss320 > #button-button').as("save-button")
    cy.get("@save-button").click()
    cy.get('.jss35 > :nth-child(1) > :nth-child(1)').click()
})


})