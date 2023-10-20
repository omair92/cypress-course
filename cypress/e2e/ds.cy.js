// Assuming you're on a page with multiple <p> tags you want to extract data from
describe('Extract data from <p> tags', () => {
    it('should extract data from each <p> tag', () => {
      // Visit the page with the <p> tags
      cy.visit('https://kids.nationalgeographic.com/animals/mammals/facts/giant-panda');
  
      // Get all the <p> elements
      cy.get('p').each(($p, index, $pList) => {
        // Extract text from the current <p> tag
        const text = $p.text();
        
        // Perform actions with the extracted text
        cy.log(`Text from <p> tag ${index + 1}: ${text}`);
        // You can also perform other assertions or actions with the extracted data
      });
    });
  });
  