class hoodi{
    visitweb(){
        cy.visit('https://wearwhatyoulove.com/')
    }
clickhoodi(){
    cy.get('.elementor-element-e8ec452 > .elementor-widget-container > .attachment-large').click()
    cy.get('.post-13430 > .product-wrapper > .product-element-top > .product-image-link > .attachment-woocommerce_thumbnail').click()
    cy.get('#lumise-customize-button').click()
}
clickonImageIcon(){
    cy.get('#lumise-left > div.lumise-left-nav-wrp > ul > li.active > i').contains('Images').click()
}
}

module.exports = new hoodi();

//*[@id="lumise-left"]/div[1]/ul/li[3]/text()
