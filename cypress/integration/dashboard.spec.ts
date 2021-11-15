beforeEach(() => {
	cy.visit('http://localhost:4200/dashboard');
});

describe("First page Test, ()", () => {

    it('has an H1 with "Tour of Heroes" text inside of it', () => {
        cy.get('h1').should('have.text', 'Tour of Heroes');
        cy.get('h1').should('contain', 'Tour of Heroe');
        cy.contains('Tour of Heroe');
        //cy.get('h1').contains('Tour of Heroes1');
    })

    it('Test other stuff', () => {
        cy.get('h3').should('be.visible', 'Top Heroes');
        cy.get('h3').should('contain', 'Top Heroes');
        cy.contains('Tour of Heroes');
        cy.get('#search-component > h4').should('contain', "Hero Search");
        cy.get('#search-component').get('h4');
        cy.get('nav');
        cy.get('app-messages').get('div');

       
    });

    it('Title test', () => {
        cy.get('head').get('title').should('have.text', 'Tour of Heroes');
        cy.get('title').should('have.text', 'Tour of Heroes');
        cy.get('head > title').should('have.text', 'Tour of Heroes');

        // title is not returning an element so that's why you cannot use should. have.text
        cy.title().should('eq', 'Tour of Heroes');
    });
});