/// <reference types="cypress" />


//Elements

const containsInClientPage ='Clients'
const clickCreateClient ='h2 > .btn'
const threeDotsButton = ':nth-child(3) > .action > img'
const clickOnDeleteButton = '.menu > :nth-child(2)'


//Functions

function containsInClient(cy){

    cy.contains(containsInClientPage)
}
function clickOnCreateClient (cy) {

    cy.get(clickCreateClient).click()
}
function deleteCLient(cy) {
    cy.get(threeDotsButton).click()
    cy.get(clickOnDeleteButton ).click()
    
}


//Exports

module.exports = {
    containsInClient,
    clickOnCreateClient,
    deleteCLient

}