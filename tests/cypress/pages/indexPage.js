/// <reference types="cypress" />

// elements
const containsInIndexPage = 'Login'

const loginUsername = ':nth-child(1) > input'
const loginPassword = ':nth-child(2) > input'
const loginButton = '.btn'

// functions

function containsInIndex(cy) {
    cy.contains(containsInIndexPage)
}

function validLogin(cy, username, password) {
    cy.get(loginUsername).type(username)
    cy.get(loginPassword).type(password)
    cy.get(loginButton).click()

}
// exports

module.exports = {
    containsInIndex,
    validLogin

}

