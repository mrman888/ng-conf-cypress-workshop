describe('Hero Detail Test' , () => {
    it('verify updated data', () => {
        cy.visit('/dashboard');
        cy.get('app-dashboard .grid-pad a').first().click();
        cy.get('input').clear().type('Mr. Mean');
        cy.contains('save').click();
        cy.contains('Dashboard').click();
        cy.url().should('contain','dashboard');
        cy.get('div.module.hero').first().should('have.text', 'Mr. Mean');

        //cy.exec()
        //cy.viewport()
        //cy.screenshot()
    });
});
