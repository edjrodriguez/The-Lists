import listStub from "../fixtures/listStub"

describe('the lists', () => {
  beforeEach(()=>{
    cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", listStub);
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

  it('Visits the grocery page, can view the list, and can return home', () => {
  cy.get('.grocery-btn').contains('Grocery List').click()
    .location('pathname').should('eq', '/groceries')
    .get('.card').contains('green apples')
    .get('.card').contains('QTY')
    .get('.card').contains('NOT organic')
    .get('.card').contains('🗑')
    .get('.home-button').contains('Home').click()
    .location('pathname').should('eq', '/')
  })
  
  it('Visits Whitneys page, can view the list, and can return home', () => {
    cy.get('.w-wishList-btn').contains('Whitney').click()
      .location('pathname').should('eq', '/whitneys-wish-list')
      .get('.card').contains('Bike Lights')
      .get('.card').contains('Link')
      .get('.card').contains('Notes: 1')
      .get('.card').contains('🗑')
      .get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
  })

  it('Visits Eddies page, can view the list, and can return home', () => {
    cy.get('.e-wishList-btn').contains('Eddie').click()
      .location('pathname').should('eq', '/eddies-wish-list')
      .get('.card').contains('Rollerblades')
      .get('.card').contains('Link')
      .get('.card').contains('Notes: 1, size 10')
      .get('.card').contains('🗑')
      .get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
  })
})