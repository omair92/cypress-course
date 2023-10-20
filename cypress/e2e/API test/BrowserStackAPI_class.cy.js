/// <reference types="cypress" /> 

describe('template spec', () => {
it('passes', () => {
//Getting response from BrowserStack demo website
cy.request('GET','https://www.bstackdemo.com/')
});

it ("Passes",()=>{
    cy.request('GET','https://www.bstackdemo.com/').then((Response)=>{
        expect(Response.status).to.eq(200   )
    })
})

//This block inserts the data which is mentioned in the body of the request
it('POST request', () => {

    cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
    "name": "Bingo",
    "job": "Team lead"
    }}).then((response) =>{
    //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(201)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Bingo")
    //Asserting the status text to confirm whether it is created
    expect(response.statusText).to.eq("Created")
    })
    })
    
    //This block will execute PUT request
    it('PUT request', () => {
    
    cy.request({method: 'PUT', url: 'https://reqres.in/api/users/2', body: {
    "name": "Angel",
    "job": "zion resident"
    }}).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    expect(response.status).to.eq(200)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Angel")
    })
    })
    
    //This block will execute the PATCH request and update the record
    it('PATCH request', () => {
    
    cy.request({method: 'PATCH', url: 'https://reqres.in/api/users/2', body: {
    "name": "Angel",
    "job": "zion resident"
    }}).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    expect(response.status).to.eq(200)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Angel")
    })
    })
    
    //This block will delete the user which exist
    it('DELETE request', () => {
    
    cy.request({method: 'DELETE', url: 'https://reqres.in/api/users/2'}).then((response) =>{
    //Asserting the status code to be 204 for successful execution
    expect(response.status).to.eq(204)
    })
    })

    //Custom Command use for API testing 
    it('Cutom Commands use for API testing', () => {
        //Get the API request with URL and user details arguments and store response in a variable named details
        cy.GETrequest('myURL',"api/users/2").as('details')
        //With cy.get() validating the status code of response
        cy.get('@details').its('status').should('eq',200)
        
        })
    
})