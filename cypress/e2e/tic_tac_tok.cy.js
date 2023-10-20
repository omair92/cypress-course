
// describe('Tic Tac Toe Automation', () => {
//     it('Plays a game of Tic Tac Toe', () => {
//       cy.visit('https://playtictactoe.org/')
  
//       cy.get('body > div.game > div.board').as('boardSquares')
  
//       for (let i = 0; i < 9; i++) {
//         cy.get('@boardSquares').eq(i).click()
//         //cy.get('@boardSquares').eq((i + 1) % 9).click()
//       }
//       if (cy.get('.player1 > .score') == 1){
//         console.log("P1 win");
//       }
//       else if (cy.get('.player2 > .score') == 1){
//             console.log("computer win");
//       }
//       else{
//       cy.get('.status').should('contain', 'Tie')
//       }
//     })
//   })

describe('Tic Tac Toe Automation', () => {
    it('Plays a game of Tic Tac Toe', () => {
      cy.visit('https://playtictactoe.org/')
  
      cy.get('.board .square').as('boardSquares')
  
      for (let i = 0; i < 9; i++) {
        cy.get('@boardSquares').eq(i).click()
       // cy.get('@boardSquares').eq((i + 1) % 9).click()
      }
      //cy.get('.status').should('contain', 'Draw!')
    })
  })