/// <reference types="cypress" />

describe('Test suite', function () {

    it('Test Room', function () {

        cy.visit('http://localhost:3000')
        cy.contains('Tester')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('single')
        cy.get(':nth-child(2) > input').type('4')
        cy.get(':nth-child(3) > input').type('5')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1540')
        cy.get(':nth-child(6) > select').select('Ensuite')
        cy.get('.blue').click()
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()

        cy.get('.user > .btn').click()



    })







        it('Test CLients', function () {
            cy.visit('http://localhost:3000')
            cy.contains('Login')
            cy.get(':nth-child(1) > input').type('tester02')
            cy.get(':nth-child(2) > input').type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
            cy.get('.btn').click()
            cy.get(':nth-child(2) > h4').contains('Clients')
            cy.get('.blocks > :nth-child(2) > .btn').click()
            cy.get('.username').contains('tester02')
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(1) > input').type('Ahmed Rossi')
            cy.get(':nth-child(2) > input').type('test@hotmail.com')
            cy.get(':nth-child(3) > input').type('0731231212')
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get('header').contains('Logout')
            cy.get('.user > .btn').click()
        })


        it('Test Bills', function () {
            cy.visit('http://localhost:3000')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.get('.username').contains('tester01')
            cy.get(':nth-child(3) > .btn').click()
            cy.get('h2 > div').contains('Bills')
            cy.get('h2 > .btn').click()
            cy.get('input').type('264')
            cy.get('.blue').click()
            cy.get(':nth-child(2) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get('.user > .btn').click()







        })



        it('Test Reservation', function () {
            cy.visit('http://localhost:3000')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.get('.username').contains('Welcome tester01')
            cy.get(':nth-child(4) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.wait(500)
            cy.get(':nth-child(1) > input').type('2020-10-11')
            cy.get(':nth-child(2) > input').type('2021-11-01')
            cy.get(':nth-child(3) > select').select('1')
            cy.get(':nth-child(4) > select').select('2')
            cy.get(':nth-child(5) > select').select('1')
            cy.get('.blue').click()
            cy.get(':nth-child(2) > .action').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get('.user > .btn').click()




        })



        it('Test Editor', function () {
            cy.visit('http://localhost:3000')
            cy.get(':nth-child(1) > label')
            cy.get(':nth-child(1) > input').type('tester02')
            cy.get(':nth-child(2) > input').type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
            cy.get('.btn').click()
            cy.get(':nth-child(1) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(1) > select').select('single')
            cy.get(':nth-child(2) > input').type('4')
            cy.get(':nth-child(3) > input').type('5')
            cy.get('.checkbox').click()
            cy.get(':nth-child(5) > input').type('1540')
            cy.get(':nth-child(6) > select').select('Ensuite')
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .action > img').click()
            cy.get('.menu > :nth-child(1)').click()
            cy.get(':nth-child(3) > select').select('Twin')
            cy.get(':nth-child(4) > input').clear()
            cy.get(':nth-child(4) > input').type('1')
            cy.get(':nth-child(5) > input').clear()
            cy.get(':nth-child(5) > input').type('2')
            cy.get(':nth-child(7) > input').clear()
            cy.get(':nth-child(7) > input').type(200)
            cy.get(':nth-child(8) > select').select('Penthouse')
            cy.get('.blue').click()
            cy.get(':nth-child(3) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get('.user > .btn').click()



        })


    })

