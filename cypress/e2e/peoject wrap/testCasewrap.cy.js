
describe('',()=>{
    before(() => {
        // Listen to the 'uncaught:exception' event
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Customize the behavior here
          // For example, you can choose not to fail the test
          // by preventing the default behavior
          return false;
        });
      });
    it('Find an element and Wrap previously yielded jQuery Objects',
    {baseUrl: 'https://console.asgardeo.io'}, () => {
    cy.visit('/');
    
    cy.get('#usernameUserInput').then($username => {
    // jQuery to set Value
    cy.wrap($username).type('omair@gmail.com')
    })

    cy.get('[data-testid="identifier-auth-continue-button"]').click()

    cy.get('#password').then($pass=>{
        cy.wrap($pass).type('123455ffff')
    })

    });
})