describe('DDT', () => {


    it('ts1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('datafile').then((eData) => {

            eData.forEach((userData) => {
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username)
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.password)
                cy.get('.oxd-button').click()

                if (userData.username == 'Admin' && userData.password == 'admin123') {
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userData.expected)

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userData.expected)
                }

            })

        });

    })

})