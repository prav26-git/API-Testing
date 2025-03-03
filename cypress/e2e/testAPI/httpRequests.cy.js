/// <reference types="cypress"/>

describe('HTTP Requests', () => {

it('GET - Read', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('eq',200)
    });

    it('Post call',()=>{
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "Test post call",
                body:"This is a sample post call",
                userID:1
            }
        }).its('status').should('eq',201)
    })

    it('PUT call',()=>{
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test post call-UPDATED",
                body:"This is a sample post call",
                userID:1 ,
                id:1
            }
        }).its('status').should('eq',200)
    })

    it('DELETE call',()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        }).its('status').should('eq',200)
    })
});