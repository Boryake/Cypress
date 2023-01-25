describe('Login Axia', { testIsolation: false }, () => {
	it('Test Login ok', () => {
		cy.visit('https://axia2-ui-dev.santextest.com/login')
		cy.get('#email').clear()
		cy.get('#email').type('dylanedmunds@axia.com')
		cy.get('#password').clear()
		cy.get('#password').type('123')
		cy.contains('Login').click()
		cy.wait(3000)

	})
	it('Capital Structure', () => {
		cy.get('a').contains('ACME Corporation').click()
		cy.get('a').contains('Capitalization').click()
		cy.get('span').contains('Capital structure').click()
	})
	it('Create New Cs', () => {
		cy.get('span').contains('Manage').click()
		cy.get('span').contains('New').click()
		cy.get('#name').clear()
		cy.get('#name').type('Test Cypress')
		cy.get('#date').clear()
		cy.get('#date').type('12/12/2023')
		cy.get('#comments').clear()
		cy.get('#comments').type('Lorem ipsum')
		cy.get('span').contains('Save').click()
	})

	it("Complete Sipmle Cs",()=>{
		cy.focused()
			.clear()
			.type('200000')
        
       	cy.get('#btnAddGroup').click()
        cy.get('span').contains('Equity').click()
        cy.focused().type('PREF')
        cy.get('#submit-button').click()
        cy.get('#btnAddGroup1').click()
        cy.get("#name").type('Serie F-1')
        cy.get('#submit-button').click()
        cy.focused().type("783248")
        cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('5.8208')
        cy.get('input[name="groups[1].shares[0].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
	})
	
	})
	

