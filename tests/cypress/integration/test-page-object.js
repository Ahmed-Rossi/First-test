/// <reference types="cypress" />

import * as indexFunction from '../pages/indexPage'
import * as dashboardFunction from '../pages/dashboard'
import * as roomsFunction from '../pages/rooms'
import * as createRoomFunction from '../pages/createRoom'
import * as clientsFunction from '../pages/clients'
import * as createClientFunction from '../pages/createClient'
import * as billsFunction from '../pages/bills'
import * as createBillsFunction from '../pages/createBIll'
import * as reservationsFunction from '../pages/reservations'
import * as createReservationsFunction from '../pages/createReservation'
import * as editRoomFunction from '../pages/editRoom'

// Test Suite

describe('Test suite Page Object', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        indexFunction.containsInIndex(cy)

    })
    afterEach(() => {

        cy.get('.user > .btn').click()

    }) 

    // Test one
    
        it('Test Room', function () {
            indexFunction.validLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            dashboardFunction.containsInDashboard(cy)
            dashboardFunction.clickOnViewRoomButton(cy)
            roomsFunction.containsInRooms(cy)
            roomsFunction.clickOnCreateRoom(cy)
            createRoomFunction.choseObjectsInRoom(cy, 'single', '3', '2', '850', 'Ensuite')
            roomsFunction.deleteRoom(cy)
        })
    
    
    //Test two
    it('Test Clients', function () {
        indexFunction.validLogin(cy, 'tester02', 'sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
        dashboardFunction.containsInDashboard(cy,)
        dashboardFunction.clickOnViewClientsButton(cy)
        clientsFunction.containsInClient(cy)
        clientsFunction.clickOnCreateClient(cy)
        createClientFunction.createCLient(cy, 'Ahmed Rossi', 'test@mail.com', '0704540011')
        clientsFunction.deleteCLient(cy)
    })
    

    //Test Three

    it('Test Bills', function () {
        indexFunction.validLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        dashboardFunction.containsInDashboard(cy)
        dashboardFunction.clickOnViewBillsButton(cy)
        billsFunction.containsInBills(cy)
        billsFunction.clickOnCreateBill(cy)
        createBillsFunction.createBill(cy,450)
        billsFunction.deleteBill(cy)
    })

    // Test four

    it('Test Reservations', function () {
        indexFunction.validLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        dashboardFunction.containsInDashboard(cy)
        dashboardFunction.clickOnViewReservationsButton(cy)
        reservationsFunction.clickOnCreateReservation(cy)
        createReservationsFunction.fillObjectsInReservation(cy, '2020-11-12', '2020-11-15', '1', '2', '1')
        reservationsFunction.deleteReservation(cy)
    })

     // Test five
     it('Test Editor Room', function () {
        indexFunction.validLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        dashboardFunction.containsInDashboard(cy)
        dashboardFunction.clickOnViewRoomButton(cy)
        roomsFunction.containsInRooms(cy)
        roomsFunction.clickOnCreateRoom(cy)
        createRoomFunction.choseObjectsInRoom(cy, 'single', '3', '2', '850', 'Ensuite')
        roomsFunction.editRoom(cy)
        editRoomFunction.editRoom(cy,'Twin','1','2','200','Penthouse')
        roomsFunction.deleteRoom(cy)

     



    })
})