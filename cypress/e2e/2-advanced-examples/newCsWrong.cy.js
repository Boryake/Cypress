

describe('Create Cs with validations', { testIsolation: false }, () => {

	it('Test Login ok', () => {
		cy.visit('https://axia2-ui-dev.santextest.com/login')
		cy.clearCookies()
		cy.get('#email').clear()
		cy.get('#email').type('alisonbaker@axia.com')
		cy.get('#password').clear()
		cy.get('#password').type('123')
		cy.contains('Login').click()
		cy.wait(3000)

	})
	it('Select Company', () => {
		cy.get('a').contains('Amoco.').click()
		cy.get('a').contains('Capitalization').click()
		cy.get('span').contains('Capital structure').click()
	})
	it('Create New Cs', () => {
		cy.get('span').contains('Manage').click()
		cy.get('span').contains('New').click()
        cy.get('span').contains('Save').click()
        cy.contains('Required field.')
		cy.get('#name').clear().type('Test cypress PDP')
        cy.get('span').contains('Save').click()
        cy.get('.MuiBox-root').contains('Required field.')
		cy.get('#date').clear().type('12/12/2023')
        cy.get('span').contains('Save').click()
        cy.get('#comments').clear().type('Lorem ipsum')
        cy.get('span').contains('Save').click()
        cy.wait(400)
		cy.get('#btnSaveAs').click()
		cy.get('.MuiBox-root > #button-button').click()
		cy.get('#btnCancel').click({force:true})
		

		
	})
	it("Check Common stock",()=>{
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('span').contains('Common stock').click()
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		cy.contains('Group Common Total authorized: Required field.')
		cy.get('.MuiBox-root > #button-button').click()
		cy.get('body').dblclick()
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').type('@#ad@%')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		cy.contains('Group Common Total authorized: Required field.')
		cy.get('.MuiBox-root > #button-button').click()
		cy.get('input[name="groups[0].shares[0].totalAuthorized-mask"]').type('123.232', {force:true})
		cy.get('.MuiGrid-grid-sm-2').click({force:true})
		cy.get('#btnSave').click({force:true})
	})



	it('Create and complete simple share',()=>{
		
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('#btnAddGroup').click()
		cy.get('span').contains('Equity').click()
		cy.focused().type('Grupo A-1!')
		cy.get('#submit-button').click()
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		cy.contains('Group Grupo A-1!: Must have at least one security')
		cy.get('.MuiBox-root > #button-button').click()
		cy.get('body').dblclick()
		cy.get('#btnAddGroup1').click()
		cy.get("#name").type('Share A-1!')
		cy.get('#submit-button').click()
		cy.focused().type("aasd").invoke('scrollTop',0)
		cy.focused().clear().type("#!#%&23").invoke('scrollTop',0)
		cy.focused().clear().type("99999999999999.99999").invoke('scrollTop',0)
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains("Numbers must have 13 integer digits or less.")
		cy.get('input[name="groups[1].shares[0].totalAuthorized-mask"]').clear().type('999.999999').invoke('scrollTop',0)
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains('Numbers must have 5 decimal digits or less.')
		cy.get('input[name="groups[1].shares[0].totalAuthorized-mask"]').clear().type('999.999').invoke('scrollTop',0)
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('asd')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('$"#%23%&')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('123123123123123123123')
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains("Numbers must have 13 integer digits or less.")
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('999.9999999')
		cy.get('.MuiGrid-grid-sm-2').click()
		cy.get('span').contains('Numbers must have 5 decimal digits or less.')
		cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('999.999')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		

	})
	it("Dividend Rights",()=>{
		//Prende dividend e intenta guardar sin carga de datos. 
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends"]').click()
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		cy.contains('Group Grupo A-1! - Share A-1! - Dividends - Dividend rate schedule - 1 - Rate x share value: Required field.')
		cy.get('.MuiBox-root > #button-button > .MuiButton-label').click()
		cy.get('body').click()
		//
		//Apagar todos los buttons del dividens y validar  carga de %
		cy.get('input[name="groups[1].shares[0].dividends.cumulative"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.paidUponLiquidation"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('ased')
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('#$^%')
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('12.23')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()

		//Prende Cumulative y guarda
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '12.23')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.cumulative"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('9.33')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()

		//Enciende Paid upon y guarda. 
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '9.33')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.paidUponLiquidation"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('11.23')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()

		//Apaga Cumulative y guarda
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '11.23')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.cumulative"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('10.23')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()



		//Prende todos los switch
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '10.23')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.cumulative"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.paidUponConversion"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('9.23')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()

		//Apaga Paid Upon L
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '9.23')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.paidUponLiquidation"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8.33')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()

		//Apaga Cumulative
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '8.33')
		cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
		cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
		cy.get('input[name="groups[1].shares[0].dividends.cumulative"]').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('7.33')
		cy.get('#mnuSave').click()
		cy.get('#btnSave').click()
		cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').should('have.value', '7.33')
		


	})
	
	})
