describe('Testing search for products', ()=> {

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for elements with multiple results', ()=> {
        cy.search('dress');

        cy.fixture("searchResults").then((results) =>{
            cy.get(results.resultsLabel).should('contain','dress');
        });
    });

    it('Search for elements with no results', ()=>{
        cy.search('Hola!');

        cy.fixture("searchResults").then((results) =>{
            cy.get(results.noResultsLabel).should('contain','No results were found for your search');
        });
    });

    it('Search for elements with special code', ()=>{
        cy.readFile('cypress/support/text/search.txt').then((text)=>{
            cy.search(text);
        });

        cy.fixture("searchResults").then((results) =>{
            cy.get(results.noResultsLabel).should('contain','No results were found for your search');
        });
    });

});