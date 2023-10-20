/// <reference types="cypress" /> 
describe('test suite', () => {

    it('Type Username And Password', () => {
        cy.visit("https://register.rediff.com/register/register.php")

        cy.contains('Full Name').should('be.visible')
        cy.get('[width="200"] > input').type('M Numan')

        cy.contains('Choose a Rediffmail ID').should('be.visible')
        cy.get('[valign="bottom"] > [type="text"]').type('m.numan')

        cy.get('.btn_checkavail').click()

        cy.contains("Yippie! The ID you've chosen is available.").should('be.visible')

        cy.contains('Password').should('be.visible')
        cy.get('#newpasswd').type('pakistan92')
        cy.get('#eyeiconNew').click().wait(3000).click()


        cy.contains('Retype password').should('be.visible')
        cy.get('#newpasswd1').type('pakistan92').get('#eyeiconRe').click().wait(2000).click()

        cy.contains('Alternate Email Address').should('be.visible')
            .get(':nth-child(1) > [width="185"] > input').type('umair@gmail.com')

        cy.contains('Mobile No.').should('be.visible')
        cy.get('#div_mob > table > tbody > tr > td:nth-child(3) > div:nth-child(2)').click()
        cy.get('#country_id > ul > li:nth-child(3)').click()
        cy.get('#mobno').type('345634822')

        cy.contains('Date of Birth').should('be.visible')
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select("06")
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select("JUN")
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select('1997')

        //Radio Button Selection 
        cy.get('[value="f"]').check('f').wait(1000).get('[value="m"]').check('m')


        cy.get('select[id="country"]').select('99').should('have.value', '99')
        cy.get(':nth-child(1) > [colspan="3"] > select').select('Cochin').should('have.value', 'Cochin')


    })
})