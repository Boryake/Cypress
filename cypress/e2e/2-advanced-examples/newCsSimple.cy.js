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
		cy.get('a').contains('ACME Corporattion').click()
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

	it.skip("Complete Cs", ()=>{
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').clear().type('200000')
		cy.get('span').contains('+ Group').click()
		cy.focused().type('Group A')
		cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
		cy.get('.jss1036 > #icon-button').click()
		cy.focused().type('Share A')
		cy.get('#submit-button > .MuiButton-label > .MuiSvgIcon-root').click()
		cy.focused().type('9999999.9999')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').type("20000")
		cy.get('.jss268 > #button-button').as("save-button")
		cy.get("@save-button").click()
		cy.get(':nth-child(1) > .MuiButton-label').click()
	})
	it("Complete Sipmle Cs",()=>{
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
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type(
			'20000')
		cy.get('#mnuSave').click()
		cy.get('#btnSave > .MuiButton-label').click()
	})
	
	})
	

