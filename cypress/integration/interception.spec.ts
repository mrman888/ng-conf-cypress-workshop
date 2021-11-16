beforeEach(() => {
    
});
    
describe('Intercept' , () => {
    it('should show 1 hero when only 1 hero is returned from the server', () => {
    //    cy.intercept({
    //        method:'GET',
    //        path: '/api/heroes',
    //    },
    //      [{"id": 1, name: 'Superman'}])

    cy.intercept({
               method:'GET',
               path: '/api/heroes',
           },
            {fixture: 'only-one-hero'})

         cy.visit('dashboard');
         cy.get('div.module.hero').should('have.length', 1);
    });
});
