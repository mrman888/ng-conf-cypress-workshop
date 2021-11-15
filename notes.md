# Questions

# Notes
- documentation
- You can tweak the resolution in cypress.json
- .should == assert is doing assertions
- https://www.chaijs.com/api/bdd/
- you can pin a step and checking out the current state of the page. Basically you are pausing the dom at that specific step
- cypress created snapshots of the dom. That why you can have a time machine and go back and forth
- when you open up a console you can see debug information when it's running the test. But you need to click on a step to see console messages
- cypress is using jquery
- When cypress needs to check a test. It will do a poll all the time.
- .contain
- use intelli sense when you care on the should method to see the rest of the have.
- every commands (chainable) is getting queued by cypress. Cypress commands is asynchronous. Then Cypress will then executes the queue of commands.
- If you use cy.pause(); then you need to click on the pause line in the cypress browser session
- You can have different cypress.json files and access different environment variables within the cypress.json env: {} section

```javascript
cy.get('h1').should('have.text', 'Tour of Heroes');
cy.get('h1').should('contain', 'Tour of Heroe');
```

# IDE
- Click on the spec file when it fails to see the underlying code



# Commands
npx cypress open
