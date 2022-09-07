Cypress.Commands.add('loginForm', (user,password) => {
    cy.fixture("login").then((login) =>{
        cy.get(login.emailInput).type(user);
        cy.get(login.passwordInput).type(password);
        cy.get(login.loginButton).click();
    });
});

Cypress.Commands.add('assertLogin', (text)=>{
    cy.fixture("login").then((login) => {
        cy.get(login.loginErrorLabel).should('contain',text)
    })
});