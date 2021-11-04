/// <reference types="cypress" />


//Elements

const containsInBillsPage ='Bills'
const createBillButton ='h2 > .btn'
const threeDotsButton = ':nth-child(2) > .action > img'
const clickOnDeleteButton = '.menu > :nth-child(2)'


//Functions

function containsInBills(cy){

    cy.contains(containsInBillsPage)
}

function clickOnCreateBill(cy){
    cy.get(createBillButton).click()

}
function deleteBill(cy){

    cy.get(threeDotsButton).click()
    cy.get(clickOnDeleteButton).click()
}

module.exports ={

    containsInBills,
    clickOnCreateBill,
    deleteBill
}