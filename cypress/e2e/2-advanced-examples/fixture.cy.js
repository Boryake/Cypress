describe("login with fixtures data",()=>{
    
    it("should try to login", ()=> {
        cy.visit("https://axia2-ui-dev.santextest.com/login")
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.get("#email").type(username)
            cy.get("#password").type(password)
            cy.contains("Login").click()
        })
    })

})
