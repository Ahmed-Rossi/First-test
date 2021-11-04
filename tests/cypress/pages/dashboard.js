/// <reference types="cypress" />


//elements

const containsInDashboardPage = 'Tester Hotel Overview'
const viewRoomButton =':nth-child(1) > .btn'
const viewCLientButton = '.blocks > :nth-child(2) > .btn'
const viewBillsButton = ':nth-child(3) > .btn'
const viewReservationsButton = ':nth-child(4) > .btn'



//functions

function containsInDashboard(cy) {
    cy.contains(containsInDashboardPage)
}

function clickOnViewRoomButton(cy) {
    cy.get(viewRoomButton).click()
}
function clickOnViewClientsButton(cy) {
    cy.get(viewCLientButton).click()
}

function clickOnViewBillsButton(cy) {
    cy.get(viewBillsButton).click()
}

function clickOnViewReservationsButton(cy) {
    cy.get(viewReservationsButton).click()
}




//exports
module.exports = {
    containsInDashboard,
    clickOnViewRoomButton,
    clickOnViewClientsButton,
    clickOnViewBillsButton,
    clickOnViewReservationsButton


}