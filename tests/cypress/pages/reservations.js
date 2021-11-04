/// <reference types="cypress" />

//Elements

const createReservationsButton = 'h2 > .btn'
const threeDotsButton = ':nth-child(2) > .action > img'
const clickOnDeleteButton = '.menu > :nth-child(2)'
const clickOnEditButton = '.menu > :nth-child(1)'


//Funciton
function clickOnCreateReservation(cy) {
    cy.get(createReservationsButton).click()

}
function deleteReservation(cy) {
    cy.get(threeDotsButton).click()
    cy.get(clickOnDeleteButton).click()

}
function editReservation(cy) {
    cy.get(threeDotsButton).click()
    cy.get(clickOnEditButton).click()
    
}


//Exports

module.exports = {
    clickOnCreateReservation,
    deleteReservation,
    editReservation




}