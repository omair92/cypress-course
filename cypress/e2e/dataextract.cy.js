/// <reference types="cypress" /> 
describe('Scraping', () => {
    it('test_check', () => {
      cy.visit('https://kids.nationalgeographic.com/animals/mammals/facts/giant-panda');

      const extractedData = [];

      cy.get('p').each(($p, index) => {

        const text = $p.text();

        extractedData.push({ index: index + 1, text });
      }).then(() => {
        
        cy.writeFile('cypress\\fixtures\\extract-data.json', extractedData);
      });

    });

   
  });

  