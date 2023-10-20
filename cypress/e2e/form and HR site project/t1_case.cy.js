/// <reference types="cypress" /> 

describe('template spec', () => {
  beforeEach(() => {
    // Navigate to the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  it('passes', () => {
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');

    // cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.contains('Admin').should('be.visible')
    cy.contains('Add').should('be.visible')
    cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.contains('User Role').should('be.visible')
    cy.contains('Employee Name').should('be.visible')
    cy.contains('Status').should('be.visible')
    cy.contains('Username').should('be.visible')
    cy.contains('Password').should('be.visible')
    cy.contains('Confirm Password').should('be.visible')

    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()  
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()  
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.contains('Employee Full Name').should('be.visible')
    cy.contains('Employee Id').should('be.visible')
    cy.contains('Save').should('be.visible')
    cy.contains('Cancel').should('be.visible')

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Ali')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Ahmed')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(1205)
    cy.get('.oxd-button--secondary').click()

  })

  // it('fail',()=>{
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  //   cy.get('.oxd-button').click()
  //   cy.contains('Invalid credentials').should('be.visible');
  // })

})

