describe ('testCase',()=>{
    it('seniro 1',()=>{
        cy.visit('https://demo.nopcommerce.com/')
       cy.LinkClick("Apple MacBook Pro 13-inch")
       cy.get('#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name > h1').should('have.text','Apple MacBook Pro 13-inch')
    })
});