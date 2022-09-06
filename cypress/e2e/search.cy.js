describe('Testing search for products', ()=> {

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for elements with multiple results', ()=> {
        cy.fixture("index").then((index) => {
            cy.get(index.searchBarInput).type('Dress');
            cy.get(index.searchBarButton).click();
        });
        cy.fixture("searchResults").then((results) =>{
            cy.get(results.resultsLabel).should('contain','Dress');
        });
    });

    it('Search for elements with no results', ()=>{
        cy.fixture("index").then((index) => {
            cy.get(index.searchBarInput).type('Dressdsad');
            cy.get(index.searchBarButton).click();
        });
        cy.fixture("searchResults").then((results) =>{
            cy.get(results.noResultsLabel).should('contain','No results were found for your search');
        });
    });

});