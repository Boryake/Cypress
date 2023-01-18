describe('Login Axia', { testIsolation: false }, () => {
	it.skip('Test Login ok', () => {
		cy.visit('https://axia2-ui-dev.santextest.com/login')
		cy.get('#email').clear()
		cy.get('#email').type('dylanedmunds@axia.com')
		cy.get('#password').clear()
		cy.get('#password').type('123')
		cy.contains('Login').click()
		cy.wait(3000)

	})
	it.skip('Capital Structure', () => {
		cy.get('a').contains('Amoco.').click()
		cy.get('a').contains('Capitalization').click()
		cy.get('span').contains('Capital structure').click()
	})
	it.skip('Create New Cs with data wrong', () => {
		cy.get('span').contains('Manage').click()
		cy.get('span').contains('New').click()
        cy.get('span').contains('Save').click()
        cy.contains('Required field.')
		cy.get('#name').clear().type('Test Cypress')
        cy.get('span').contains('Save').click()
        cy.get('.MuiBox-root').contains('Required field.')
		cy.get('#date').clear().type('12/12/2023')
        cy.get('span').contains('Save').click()
        cy.get('#comments').clear().type('Lorem ipsum')
        cy.get('span').contains('Save').click()
        cy.wait(2000)
		cy.get('button').contains('Cancel').click({force:true})

		
	})
	it("Complete Sipmle Cs",()=>{
		cy.visit("https://axia2-ui-dev.santextest.com/investments/companies/40f1d75f-2817-4e46-b02e-5133199f392b/capitalization/capital-structure")
		// cy.get('button').contains('Cancel').click({force:true})
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').clear({force:true})
		// cy.get('#mnuSave').click({force:true})
		// cy.get('#btnSave > .MuiButton-label').click({force:true})
		// cy.contains('Group Common Total authorized: Required field.')
		// cy.get('.MuiBox-root > #button-button > .MuiButton-label').click({force:true})
		cy.get('.MuiList-root > .MuiButtonBase-root').click({force:true})
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').type("#$%1" , {force:true})
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').clear({force:true}).type("asd" , {force:true})
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').clear({force:true}).type("2000" , {force:true})
		cy.get('#btnAddGroup > .MuiButton-label > .MuiBox-root').click({force:true})
		cy.get('span').contains("Equity").click({force:true})
		cy.get('#name').type('Grupo A',{force:true})
		cy.get('#submit-button').click({force:true})
		cy.get('#btnAddGroup1').click({force:true})
		cy.get("#name").type('Share A',{force:true})
		cy.get('#submit-button').click({force:true})
		cy.focused().type("aasd",{force:true})
		cy.focused().clear().type("#!#%&23",{force:true})
		cy.focused().clear().type("99999999999999.99999", {force:true})
		//Click en el body 
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains("Numbers must have 13 integer digits or less.")
		cy.get('input[name="groups[1].shares[0].totalAuthorized-mask"]').clear().type('999.999999')
		cy.get('span').contains('Numbers must have 5 decimal digits or less.')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('asd')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('$"#%23%&')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('123123123123123123123')
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains("Numbers must have 13 integer digits or less.")
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('999.9999999')
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains('Numbers must have 5 decimal digits or less.')
		// cy.get('#mnuSave').click({force:true})
		// cy.get('#btnSave > .MuiButton-label').click({force:true})
		
	})
	
	})
	

