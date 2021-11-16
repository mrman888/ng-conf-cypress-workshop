beforeEach(() => {
	cy.visit('/dashboard');
});

describe("First page Test, ()", () => {
    it('has an H1 with "Tour of Heroes" text inside of it', () => {
        cy.get('h1').should('have.text', 'Tour of Heroes');
        cy.get('h1').should('contain', 'Tour of Heroe');
        cy.contains('Tour of Heroe');
        cy.url().should('include','dashboard');
    })

    it('Test other stuff', () => {
        cy.get('h3').should('be.visible', 'Top Heroes');
        cy.get('h3').should('contain', 'Top Heroes');
        cy.contains('Tour of Heroes');
        cy.get('#search-component > h4').should('contain', "Hero Search");
        cy.get('#search-component').get('h4');
        cy.get('nav');
        cy.get('app-messages').get('div');


        cy.get('#search-component').then(element => {
            // expect is not using moccha (chai syntax)
           //expect(element.height()).to.equal(22); 
        });

        //$$ exposes jquery 
        //cy.$$. 
        //Cypress.$

    });

    it('Title test', () => {
        cy.get('head').get('title').should('have.text', 'Tour of Heroes');
        cy.get('title').should('have.text', 'Tour of Heroes');
        cy.get('head > title').should('have.text', 'Tour of Heroes'
        );

        // title is not returning an element so that's why you cannot use should. have.text
        //Cypress.Chainable<string>
        cy.title().should('eq', 'Tour of Heroes');
    });

    it('debug example', () => {
        //cy.pause();
        cy.log('message', 35, 55);
       // cy.get('app-messages').debug().get('div');
        cy.log(Cypress.env("bestDad"));
    });

    it('Dashboard links', () => {
        // the get just yield and return it as an element or as an array of elementss
        cy.get('nav a').as('navLinks'); // cool let's create an alias and it gives back a reference back
        cy.get('nav a').first().as('dashboardNav');

        // you can navigate back to the parent
        //cy.get('nav a').first().as('dashboardNav').parent().last().as('');
        cy.get('nav a').last().as('heroesNav');
        cy.get('@dashboardNav').first().should('have.text', "Dashboard");
        cy.get('@heroesNav').last().should('have.text', "Heroes");
        //cy.get('@navLinks').first().should('have.text', "Dashboard");
        //cy.get('@navLinks').last().should('have.text', "Heroes");
    });

    it('Check if all the navigations exists', () => {
        cy.get('.grid-pad > a').as('menuItems');
        cy.get('div.module.hero').as('menuItems2');
        cy.get('@menuItems').should('have.length', 4);
        cy.get('@menuItems').children().should('have.length', 4);
        cy.get('@menuItems').first().should('have.text','Mr. Nice')
                                .next().should('have.text','Bombasto')
                                .next().should('have.text','Celeritas')
                                .next().should('have.text','Magneta');
        
        cy.get('@menuItems').eq(0).should('have.text','Mr. Nice');
        cy.get('@menuItems').eq(1).should('have.text','Bombasto');
    });

    it('Interacting the page check if there are any messages after clear', () => {
        // cy.get('app-messages').contains('HeroService').should('have.length.gt', 0);
        // cy.get('app-messages').as('appMessages');
        // cy.get('@appMessages').get('button').click();
        // //cy.get('app-messages').get('div').should('have.length', 0);
        // cy.contains('clear').parent().find('div').as('messageDivs').should('have.length.at.least', 1);
        // cy.get('messageDivs').parent().find('div').should('have.length.at.least', 1);

        //First solution
        // cy.contains('clear').click();
        // cy.get('app-messages div div').should('have.length', 0)

        //Second solution
        cy.get('app-messages div div').as('messageDivs').should('have.length.at.least', 1);
        cy.get('button').click();
        cy.get('@messageDivs').should('have.length',0);
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('xzsdad', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#search-component').click();
        cy.get('[ng-reflect-router-link="/detail/13"] > .module > h4').click();
        cy.get('app-hero-detail > :nth-child(1) > :nth-child(4)').click();
        cy.get('[ng-reflect-router-link="/detail/11"] > .module > h4').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    
describe('Intercept' , () => {
    it('verify interception', () => {
        cy.intercept("GET", `/api/heroes`), [{id:1, name:'Super Man'}];

    });
});
});