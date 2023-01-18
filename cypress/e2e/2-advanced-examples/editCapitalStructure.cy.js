describe('Login Axia', { testIsolation: false }, () => {
	it('Login', () => {
		cy.visit('https://axia2-ui-dev.santextest.com/login')
		cy.url().should('include', 'santextest.com/login')
		cy.get('#email').clear()
		cy.get('#email').type('dylanedmunds@axia.com')
		cy.get('#password').clear()
		cy.get('#password').type('123')
		cy.contains('Login').click()
		cy.wait(5000)
		cy.contains('Credant International')
	})
    
	it('Complete Common stock and create a group', () => {
		cy.visit(
			'https://axia2-ui-dev.santextest.com/investments/companies/7567bb5e-cdc9-4720-82ae-dc6c9a6a4cd5/capitalization/capital-structure'
		)
		cy.wait(3000)
		cy.get(
			'.jss126 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root'
		).click()
		cy.contains('Test Cypress').click()
		cy.get(
			'.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root'
		).click()
		cy.get(
			'.MuiList-root > :nth-child(1) > .MuiButtonBase-root > :nth-child(1)'
		).click()
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root > .MuiBox-root').click()
		cy.focused()
			.clear()
			.type('200000')
        
        cy.get('#btnAddGroup > .MuiButton-label').click()
		cy.focused().type('Group A')
		cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
		cy.get('#btnAddGroup1').click()
		cy.focused().type('Share A')
		cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
		cy.focused().clear().type('9999999.99999')
		cy.get('input[name="groups[1].shares[1].originalPriceIssue-mask"]').clear().type(
			'20000'
		)
		// cy.get(
		// 	'.MuiList-root > :nth-child(2) > .MuiFormControl-root > .MuiFormControlLabel-root'
		// ).click()
		// cy.get(
		// 	':nth-child(1) > .jss178 > :nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root > .MuiFormControlLabel-root'
		// ).click()
		// cy.get(
		// 	':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root > .MuiFormControlLabel-root'
		// ).click()
		// cy.get(
		// 	':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root > .MuiFormControlLabel-root'
		// ).click()
		// cy.get(
		// 	':nth-child(2) > .jss178 > :nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root'
		// ).click()
		// cy.get(
		// 	':nth-child(3) > .jss178 > :nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root'
		// ).click()
		// cy.get(
		// 	':nth-child(4) > .jss178 > :nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-3 > .MuiFormControl-root > .MuiFormControlLabel-root'
		// ).click()
		// cy.get(
		// 	'input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].stopDate"'
		// )
		// cy.get('span').contains('Liquidation multiple').click()
		// cy.get('span').contains('Conversion rights').click()
		cy.get('#mnuSave').click()
		cy.get('#btnSave > .MuiButton-label').click()

		// cy.get('.jss320 > #button-button').as("save-button")
		// cy.get("@save-button").click()

		// cy.get('.jss35 > :nth-child(1) > :nth-child(1)').click()
	})
})
