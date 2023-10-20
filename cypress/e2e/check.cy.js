
describe ('test me',()=>{
  let userData;
  before(()=>{
    cy.fixture("data_driven").then((data)=>{
      userData=data;
  });
  })
  it ('test_1',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.password)
})
})