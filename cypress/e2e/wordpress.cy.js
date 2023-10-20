/// <reference types="cypress" /> 

describe('',()=>{
    it('',()=>{
        cy.visit( 'http://localhost/learning/wp-admin/edit.php?post_type=post')
        cy.get('#user_login').type('root')
        cy.get('#user_pass').type('Root')
        cy.get('#wp-submit').click()
        cy.get('#post-6 > .title > strong > .row-title').click()
        //cy.get('#block-7a590d3b-d6dc-4836-a200-4008e630ae77').type('Hello')
        //cy.get('body > div.edit-post-visual-editor__post-title-wrapper.has-global-padding > h1').type('Learning')
        //cy.get('iframe').iframe('body > div.edit-post-visual-editor__post-title-wrapper.has-global-padding > h1').type('Hello')
    
    //     cy.get('iframe')
    //     .should('be.visible')
    //     .then(($iframe) => {
    //         const $body = $iframe.contents().find('body')
   
    // cy.wrap($body)
    //     .get('body > div.edit-post-visual-editor__post-title-wrapper.has-global-padding > h1 > span')
    //     .type('Cypress{enter}')
    // })
    // cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).get('body > div.edit-post-visual-editor__post-title-wrapper.has-global-padding > h1').find('span').type("some sample comment");
    // });
    //-----------------------------------------------------------------
    // cy.get('iframe').its('wp-block.wp-block-post-title').then($iframe => {
    //     //const $body = $iframe.get('contentDocument').its('body').contents();
    //     cy.wrap($iframe).find('h1').should('exist').type("some sample comment");

    cy.getIframe().find("h1").type("saim")
})
})

