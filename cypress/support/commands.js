import "cypress-file-upload"



Cypress.Commands.add('LinkClick',(lable)=>{
cy.get('a').contains(lable).click();

})
Cypress.Commands.add('getIframe', (iframe) => {
     cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//We are creating a custom command named GETrequest which has URL and userDataLink as argument 
Cypress.Commands.add('GETrequest', (url,userDataLink) =>{
        //Usual GET request command
        cy.request('GET',`${Cypress.env(url)+userDataLink}`)
        })


Cypress.Commands.add("GETrequest",(url,userDataLink)=>{
        cy.request('GET',`${Cypress.env(url)+userDataLink}`)
})