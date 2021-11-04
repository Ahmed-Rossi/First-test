/// <reference types="cypress" />


//Elements
const containsInRoomsPage ='Rooms'
const createRoomButton ='h2 > .btn'
const threeDotsButton = ':nth-child(3) > .action > img'
const clickOnDeleteButton = '.menu > :nth-child(2)'
const clickOnEditButton = '.menu > :nth-child(1)'

//Functions

function containsInRooms(cy){

    cy.contains(containsInRoomsPage)
}
function clickOnCreateRoom(cy){
    cy.get(createRoomButton).click()

}
function deleteRoom(cy){

    cy.get(threeDotsButton).click()
    cy.get(clickOnDeleteButton).click()
}
function editRoom(cy) {
    cy.get(threeDotsButton).click()
    cy.get(clickOnEditButton).click()
    
}

//ExportsS

module.exports = {
    containsInRooms,
    clickOnCreateRoom,
    deleteRoom,
    editRoom
}