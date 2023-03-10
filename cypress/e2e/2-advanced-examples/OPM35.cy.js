describe('Complete OPM 35', { testIsolation: false }, () => {
    it('Test Login ok', () => {
        cy.visit('https://axia2-ui-dev.santextest.com/login')
        cy.get('#email').clear()
        cy.get('#email').type('alisonbaker@axia.com')
        cy.get('#password').clear()
        cy.get('#password').type('123')
        cy.contains('Login').click()
        cy.wait(1000)
    })
    // it('Select Company', () => {
    //     cy.get('a').contains('Amoco.').click()
    //     cy.get('a').contains('Capitalization').click()
    //     cy.get('span').contains('Capital structure').click()
    // })
    // it('Create New Cs', () => {
    //     cy.get('span').contains('Manage').click()
    //     cy.get('span').contains('New').click()
    //     cy.get('span').contains('Save').click()
    //     cy.contains('Required field.')
    //     cy.get('#name').clear().type('OPM 35')
    //     cy.get('span').contains('Save').click()
    //     cy.get('.MuiBox-root').contains('Required field.')
    //     cy.get('#date').clear().type('01/18/2023')
    //     cy.get('span').contains('Save').click()
    //     cy.get('#comments').clear().type('Lorem ipsum')
    //     cy.get('span').contains('Save').click()
    //     cy.wait(400)
    //     cy.get('#btnSaveAs').click()
    //     cy.get('.MuiBox-root > #button-button').click()
    //     cy.get('#btnCancel').click({ force: true })

    // })

    // it("Check Common stock", () => {
    //     cy.get('.MuiGrid-justify-content-xs-flex-end > #button-button > .MuiButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
    //     cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
    //     cy.get('span').contains('Common stock').click()
    //     cy.focused().type('1600000')

    // })

    // it('Create Share F-1', () => {
    //     cy.get('#btnAddGroup').click()
    //     cy.get('span').contains('Equity').click()
    //     cy.focused().type('PREF')
    //     cy.get('#submit-button').click()
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie F-1')
    //     cy.get('#submit-button').click()
    //     cy.focused().type("783248")
    //     cy.get('input[name="groups[1].shares[0].originalPriceIssue-mask"]').clear().type('5.8208')
    //     cy.get('input[name="groups[1].shares[0].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     cy.get('input[name="groups[1].shares[0].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[0].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    //     cy.get('[data-cy="groups[1].shares[0].dividends.dividendRateSchedule[0].type"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Compounded').click()
    //     cy.get('[data-cy="groups[1].shares[0].dividends.dividendRateSchedule[0].frequencyType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Quarterly').click()
    //     cy.get('[data-cy="groups[1].shares[0].dividends.dividendRateSchedule[0].daysYearsType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('365 days').click()
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[0].conversionRights.participating"]').click()
    //     cy.get('input[name="groups[1].shares[0].conversionRights.participationCap"]').click()
    //     cy.get('input[name="groups[1].shares[0].conversionRights.participationCap.capValue-mask"]').clear().type('3')
    // })

    // it('Create Share F-2', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie F-2')
    //     cy.get('#submit-button').click()
    //     cy.focused().type("940605")
    //     cy.get('input[name="groups[1].shares[1].originalPriceIssue-mask"]').clear().type('5.8208')
    //     cy.get('input[name="groups[1].shares[1].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     cy.get('input[name="groups[1].shares[1].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[1].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    //     cy.get('[data-cy="groups[1].shares[1].dividends.dividendRateSchedule[0].type"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Compounded').click()
    //     cy.get('[data-cy="groups[1].shares[1].dividends.dividendRateSchedule[0].frequencyType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Quarterly').click()
    //     cy.get('[data-cy="groups[1].shares[1].dividends.dividendRateSchedule[0].daysYearsType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('365 days').click()
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[1].conversionRights.participating"]').click()
    //     cy.get('input[name="groups[1].shares[1].conversionRights.participationCap"]').click()
    //     cy.get('input[name="groups[1].shares[1].conversionRights.participationCap.capValue-mask"]').clear().type('3')

    // })


    // it('Create Share F-3', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie F-3')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("3010760")
    //     cy.get('input[name="groups[1].shares[2].originalPriceIssue-mask"]').clear().type('5.8208')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[2].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[2].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[2].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    //     cy.get('[data-cy="groups[1].shares[2].dividends.dividendRateSchedule[0].type"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Compounded').click()
    //     cy.get('[data-cy="groups[1].shares[2].dividends.dividendRateSchedule[0].frequencyType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Quarterly').click()
    //     cy.get('[data-cy="groups[1].shares[2].dividends.dividendRateSchedule[0].daysYearsType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('365 days').click()
    //     //Conversion
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[2].conversionRights.participating"]').click()
    //     cy.get('input[name="groups[1].shares[2].conversionRights.participationCap"]').click()
    //     cy.get('input[name="groups[1].shares[2].conversionRights.participationCap.capValue-mask"]').clear().type('3')
    // })

    // it('Create Share E-3', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie E-3')
    //     cy.get('#submit-button').click()
    //     cy.focused().type("830534")
    //     cy.get('input[name="groups[1].shares[3].originalPriceIssue-mask"]').clear().type('5.3405')
    //     cy.get('input[name="groups[1].shares[3].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('2')
    // })

    // it('Create Share E-2A', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie E-2A')
    //     cy.get('#submit-button').click()
    //     cy.focused().type("27306")
    //     cy.get('input[name="groups[1].shares[4].originalPriceIssue-mask"]').clear().type('4.5776')
    //     cy.get('input[name="groups[1].shares[4].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[4].conversionRights.participating"]').click()
    //     cy.get('input[name="groups[1].shares[4].conversionRights.participationCap"]').click()
    //     cy.get('input[name="groups[1].shares[4].conversionRights.participationCap.capValue-mask"]').clear().type('2')
    // })

    // it('Create Share E-2', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie E-2')
    //     cy.get('#submit-button').click()

    //     //Total Authorized & Original price
    //     cy.focused().type("449725")
    //     cy.get('input[name="groups[1].shares[5].originalPriceIssue-mask"]').clear().type('4.5776')

    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[5].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')

    //     //Conversion
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[5].conversionRights.participating"]').click()
    // })

    // it('Create Share E-2(2)', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie E-2(2)')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("500000")
    //     cy.get('input[name="groups[1].shares[6].originalPriceIssue-mask"]').clear().type('4.5776')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[6].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Conversion
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[6].conversionRights.participating"]').click()
    // })

    // it('Create Share E-1', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie E-1')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("842641")
    //     cy.get('input[name="groups[1].shares[7].originalPriceIssue-mask"]').clear().type('3.77')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[7].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('2')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[7].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[7].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')

    //     //Conversion
    //     cy.get('span').contains('Conversion rights').click()
    //     cy.get('input[name="groups[1].shares[7].conversionRights.participating"]').click()
    //     cy.get('input[name="groups[1].shares[7].conversionRights.participationCap"]').click()
        
    //     cy.get('input[name="groups[1].shares[7].conversionRights.participationCap.capValue-mask"]').clear().type('5')
    // })

    // it('Create Share D', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie D')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("756416")
    //     cy.get('input[name="groups[1].shares[8].originalPriceIssue-mask"]').clear().type('3.77')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[8].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[8].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[8].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    // })

    // it('Create Share C', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie C')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("503056")
    //     cy.get('input[name="groups[1].shares[9].originalPriceIssue-mask"]').clear().type('3.48')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[9].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[9].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[9].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')

    // })

    // it('Create Share B', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie B')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("816654")
    //     cy.get('input[name="groups[1].shares[10].originalPriceIssue-mask"]').clear().type('2')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[10].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[10].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[10].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    // })

    // it('Create Share A', () => {
    //     cy.get('#btnAddGroup1').click()
    //     cy.get("#name").type('Serie A')
    //     cy.get('#submit-button').click()
    //     //Total Authorized & Original price
    //     cy.focused().type("533711")
    //     cy.get('input[name="groups[1].shares[11].originalPriceIssue-mask"]').clear().type('2.14')
    //     //Liquidation Multiple
    //     cy.get('input[name="groups[1].shares[11].liquidations.intialLiquidationMultipleValue-mask"]').clear().type('1')
    //     //Dividends
    //     cy.get('input[name="groups[1].shares[11].dividends"]').click()
    //     cy.get('input[name="groups[1].shares[11].dividends.dividendRateSchedule[0].rateXShareValue-mask"]').clear().type('8')
    //     cy.get('[data-cy="groups[1].shares[11].dividends.dividendRateSchedule[0].type"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Compounded').click()
    //     cy.get('[data-cy="groups[1].shares[11].dividends.dividendRateSchedule[0].frequencyType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('Anual').click()
    //     cy.get('[data-cy="groups[1].shares[11].dividends.dividendRateSchedule[0].daysYearsType"] > .MuiFormControl-root > .MuiInputBase-root').click()
    //     cy.contains('365 days').click()
    //         // cy.get('#mnuSave').click()
    //         // cy.get('#btnSave').click()
        
    // })

    // it.skip('Seniorities',()=>{
    //     cy.get('span').contains('Seniorities').click()
    //     cy.get('input[name="shares[0].seniority-mask"]').clear().type('7')
    //     cy.get('input[name="shares[1].seniority-mask"]').clear().type('3')
    //     cy.get('input[name="shares[2].seniority-mask"]').clear().type('5')
    //     cy.get('input[name="shares[3].seniority-mask"]').clear().type('1')
    //     cy.get('input[name="shares[4].seniority-mask"]').clear().type('6')
    //     cy.get('input[name="shares[5].seniority-mask"]').clear().type('4')
    //     cy.get('input[name="shares[6].seniority-mask"]').clear().type('1')
    //     cy.get('input[name="shares[7].seniority-mask"]').clear().type('1')
    //     cy.get('input[name="shares[8].seniority-mask"]').clear().type('2')
    //     cy.get('input[name="shares[9].seniority-mask"]').clear().type('2')
    //     cy.get('input[name="shares[10].seniority-mask"]').clear().type('2')
    //     cy.get('input[name="shares[11].seniority-mask"]').clear().type('2')
    //     cy.get('#mnuSave').click()
	// 	cy.get('#btnSave').click()
    // })

    it('Cap table',()=>{
        cy.visit('https://axia2-ui-dev.santextest.com/investments/companies/40f1d75f-2817-4e46-b02e-5133199f392b/capitalization/capital-structure')
        cy.wait(2000)
        cy.get('a').contains('Capitalization').click()
        cy.get('span').contains('Capitalization table').click()
        cy.get('.MuiButton-label > .MuiBox-root').click()
        cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('#name').type('Cap Table OPM35')
        cy.get('#capitalStructureId').click()
        cy.contains('OPM 35').click()
        cy.get('#date').type('12/31/2026')
        cy.get('#submit-button > .MuiButton-label').click()
        cy.get('.MuiButton-label > .MuiBox-root').click()
        cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click()
        //E-1
        cy.get('#txtShareQuantity0').clear().type('842641')
        cy.get('#txtShareIssueDate0').clear().type('05/01/14')
        //E-2(2)
        cy.get('.MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('#txtShareQuantity0').clear().type('500000')
        cy.get('#txtShareIssueDate0').clear().type('05/01/14')
        //E-3
        cy.get('.MuiList-root > :nth-child(3)').click()
        cy.get('#txtShareQuantity0').clear().type('830554')
        cy.get('#txtShareIssueDate0').clear().type('10/01/15')
        //A
        cy.get('.MuiList-root > :nth-child(4)').click()
        cy.get('#txtShareQuantity0').clear().type('533711')
        cy.get('#txtShareIssueDate0').clear().type('10/01/08')
        //B
        cy.get('.MuiList-root > :nth-child(5)').click()
        cy.get('#txtShareQuantity0').clear().type('816654')
        cy.get('#txtShareIssueDate0').clear().type('10/01/10')
        //C
        cy.get('.MuiList-root > :nth-child(6)').click()
        cy.get('#txtShareQuantity0').clear().type('503056')
        cy.get('#txtShareIssueDate0').clear().type('06/01/12')
        //D
        cy.get('.MuiList-root > :nth-child(7)').click()
        cy.get('#txtShareQuantity0').clear().type('756416')
        cy.get('#txtShareIssueDate0').clear().type('10/01/13')
        //F-2
        cy.get('.MuiList-root > :nth-child(8)').click()
        cy.get('#txtShareQuantity0').clear().type('940605')
        cy.get('#txtShareIssueDate0').clear().type('01/01/18')
        //E-2
        cy.get('.MuiList-root > :nth-child(9)').click()
        cy.get('#txtShareQuantity0').clear().type('449725')
        cy.get('#txtShareIssueDate0').clear().type('10/01/14')
        //F-3
        cy.get('.MuiList-root > :nth-child(10)').click()
        cy.get('#txtShareQuantity0').clear().type('3010760')
        cy.get('#txtShareIssueDate0').clear().type('10/01/16')
        //E-2A
        cy.get('.MuiList-root > :nth-child(11)').click()
        cy.get('#txtShareQuantity0').clear().type('27306')
        cy.get('#txtShareIssueDate0').clear().type('03/01/15')
        //F-1
        cy.get('.MuiList-root > :nth-child(12)').click()
        cy.get('#txtShareQuantity0').clear().type('783248')
        cy.get('#txtShareIssueDate0').clear().type('05/01/18')
        //Common Stock
        cy.get('.MuiBox-root > :nth-child(3)').click()
        cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]').type("2000000000")

    })


})