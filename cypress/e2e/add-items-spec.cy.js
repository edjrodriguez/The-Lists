import listStub from "../fixtures/listStub"
import postStub from "../fixtures/postStub"

describe('the lists', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", listStub);
    cy.intercept("POST", "https://pure-sands-51403.herokuapp.com/lists/", postStub);
    cy.visit('http://localhost:3000/')

  });
  
  it('Loads the main page', () => {
    cy.get('.header').contains('The Lists')
      .get('.grocery-btn').contains('Grocery List')
      .get('.e-wishList-btn').contains('Wish List')
      .get('.e-wishList-btn').contains('Eddie')
      .get('.w-wishList-btn').contains('Whitney')
      .get('.w-wishList-btn').contains('Wish List')
  })
  
  it('Visits the grocery page, can view the list, can add an item, and can return home', () => {
    cy.get('.grocery-btn').contains('Grocery List').click()
      .location('pathname').should('eq', '/groceries')
      .get('.card').contains('green apples')
      .get('.card').contains('QTY')
      .get('.card').contains('NOT organic')
      .get('.card').contains('🗑')
      .get('.item-container').should('contain', 'apples')
      .get('.item-container').should('not.contain', 'Sausage')
      .get('.grocery-item-input').type('sausage')
      .get('.grocery-qty-input').type('1 pack')
      .get('.grocery-notes-input').type('Kroger')
    cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", postStub);
    cy.get('.add-grocery').click()
    cy.get('.item-container').contains('sausage')
    cy.get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
  })
  
  it('Visits Whitneys page, can view the list, can add an item, and can return home', () => {
    cy.get('.w-wishList-btn').contains('Wish List').click()
      .location('pathname').should('eq', '/whitneys-wish-list')
      .get('.card').contains('Bike Lights')
      .get('.card').contains('Link')
      .get('.card').contains('Notes: 1')
      .get('.card').contains('🗑')
      .get('.item-container').should('contain', 'Bike')
      .get('.item-container').should('not.contain', 'watch')
      .get('.whit-item-input').type('Apple watch')
      .get('.whit-link-input').type('apple.com')
      .get('.whit-notes-input').type('starlight. 41mm case')
    cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", postStub);
    cy.get('.add-whitney').click()
    cy.get('.item-container').contains('apple watch')
    cy.get('.item-container').contains('starlight')
    cy.get('.item-container').contains('41mm')
      .get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
  })

  it('Visits Eddies page, can view the list, can add an item, and can return home', () => {
    cy.get('.e-wishList-btn').contains('Wish List').click()
      .location('pathname').should('eq', '/eddies-wish-list')
      .get('.card').contains('Rollerblades')
      .get('.card').contains('Link')
      .get('.card').contains('Notes: 1, size 10')
      .get('.card').contains('🗑')
      .get('.item-container').should('contain', 'Rollerblades')
      .get('.item-container').should('not.contain', 'watch')
      .get('.eddie-item-input').type('Apple watch')
      .get('.eddie-link-input').type('apple.com')
      .get('.eddie-notes-input').type('midnight.  45mm case')
    cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", postStub);
    cy.get('.add-eddie').click()
    cy.get('.item-container').contains('Apple watch')
    cy.get('.item-container').contains('45mm')
    cy.get('.item-container').contains('midnight')
      .get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
  })
})