/// <reference types="cypress" /> 

describe('',()=>{
    it("GET call",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);
    })

    it("POST check",()=>{
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "Test Post",
                body: "This is post method test",
                userId : 1
            }
        })
        .its('status')
        .should('equal',201);
    })
})