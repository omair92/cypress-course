/// <reference types="cypress" /> 

describe('Tutorialspoint Test', function () {
   // test case
   it('Test Case6', function (){
      //file to be uploaded path in project folder
      const p = 'codingpixel.jpg';
      // launch URL
      cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
      cy.get('body > form > input[type=file]:nth-child(1)').attachFile('codingpixel.jpg')
      cy.get('[type="text"]').type('file upload')
      cy.get('[type="submit"]').click()
      cy.get('blockquote').should('have.text',"file upload")
   });
});