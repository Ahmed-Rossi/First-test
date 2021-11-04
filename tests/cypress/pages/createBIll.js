/// <reference types="cypress" />


//Elements

const inputValueBill = 'input'
const createButton = '.blue'


//Function
function createBill(cy, bills) {
    cy.get(inputValueBill).type(bills)
    cy.get(createButton).click()

}


//exports
module.exports = {

    createBill
}