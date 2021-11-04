/// <reference types="cypress" />

//Elements
const inputUsername =':nth-child(1) > input'
const inputMail =':nth-child(2) > input'
const inputPhoneNumber =':nth-child(3) > input'
const clickCreate ='.blue'


//Function

function createCLient(cy,username,mail,phoneNumber) {

    cy.get(inputUsername).type('Ahmed Rossi')
            cy.get(inputMail).type('test@hotmail.com')
            cy.get(inputPhoneNumber).type('0731231212')
            cy.get(clickCreate).click()
    
}



//Exports
module.exports = {

createCLient
}