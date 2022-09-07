describe('Login test cases', ()=>{

    beforeEach(()=>{
        cy.visit('/');
    });

    it('Login with incorrect email',()=>{
        cy.fixture("index").then((index) =>{
            cy.get(index.loginLabel).click();
        });

        cy.loginForm('hola!','holacompa');
        cy.assertLogin('Invalid email address');
    });

});