/// <reference types="cypress" />


//Elements

const fillStartDate = ':nth-child(1) > input'
const fillEndDate = ':nth-child(2) > input'
const selectClient =':nth-child(3) > select'
const selectRoom =':nth-child(4) > select'
const selectBill =':nth-child(5) > select'
const clickSave = '.blue'

//Funcitons
function fillObjectsInReservation(cy,startDate,endDate,client,room,bill) {

    cy.get(fillStartDate).type(startDate)
    cy.get(fillEndDate).type(endDate)
    cy.get(selectClient).select(client)
    cy.get(selectRoom).select(room)
    cy.get(selectBill).select(bill)
    cy.get(clickSave).click()
    
}

//Exports
module.exports = {
    fillObjectsInReservation
}