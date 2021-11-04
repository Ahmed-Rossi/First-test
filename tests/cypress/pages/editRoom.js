/// <reference types="cypress" />



//Elements

const fillCategory = ':nth-child(3) > select'
const fillNumber = ':nth-child(4) > input'
const fillFloor = ':nth-child(5) > input'
const fillPrice = ':nth-child(7) > input'
const selectFeature = ':nth-child(8) > select'
const clickSave = '.blue'
//Function
function editRoom(cy, category, number, floor, price, feature) {

    cy.get(fillCategory).select(category)
    cy.get(':nth-child(4) > input').clear()
    cy.get(fillNumber).type(number)
    cy.get(':nth-child(5) > input').clear()
    cy.get(fillFloor).type(floor)
    cy.get(':nth-child(7) > input').clear()
    cy.get(fillPrice).type(price)
    cy.get(selectFeature).select(feature)
    cy.get('.blue').click()
}



//Exports
module.exports = {

    editRoom
}

