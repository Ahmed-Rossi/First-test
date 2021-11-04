/// <reference types="cypress" />

// Elements
const fillCategory = ':nth-child(1) > select'
const fillNumber = ':nth-child(2) > input'
const fillFloor =':nth-child(3) > input'
const clickAvailable ='.checkbox'
const fillPrice =':nth-child(5) > input'
const selectFeature =':nth-child(6) > select'
const clickSave = '.blue'


// funcitons

function choseObjectsInRoom(cy, category,number,floor,price,feature){
cy.get(fillCategory).select(category)
cy.get(fillNumber).type(number)
cy.get(fillFloor).type(floor)
cy.get(clickAvailable).click()
cy.get(fillPrice).type(price)
cy.get(selectFeature).select(feature)
cy.get(clickSave).click()

}

// exports
module.exports = {

    choseObjectsInRoom
}