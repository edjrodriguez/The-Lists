const listStub = {
    groceries: [
      {
      id: "1",
      groceryItem: "green apples",
      quantity: "10",
      description: "NOT organic"
      }
    ],
    whitWishList: [
      {
      id: "7",
      whitneyItem: "Bike Lights",
      description: "1",
      link: "https://www.amazon.com/dp/B08LGLF969/ref=cm_sw_r_api_i_P77G55N2JFG7JCGPCT3Y_0"
      } 
    ],
    eddieWishList: [
      {
      id: "10",
      eddieItem: "Rollerblades",
      description: "1, size 10 ",
      link: "https://www.amazon.com/dp/B09KC3LHYN/ref=cm_sw_r_api_i_1T25820AGZN9YRVKHF12_0?_encoding=UTF8&psc=1"
      }
    ]
  }
  
  describe('the lists', () => {
    beforeEach(()=>{
      cy.intercept("GET", "https://pure-sands-51403.herokuapp.com/lists/", listStub);
      cy.intercept("DELETE", "https://pure-sands-51403.herokuapp.com/lists/1", listStub);
      cy.intercept("DELETE", "https://pure-sands-51403.herokuapp.com/lists/7", listStub);
      cy.intercept("DELETE", "https://pure-sands-51403.herokuapp.com/lists/10", listStub);

    });
    
    it('Loads the main page', () => {
      cy.visit('http://localhost:3000/')
        .get('.header').contains('The Lists')
        .get('.grocery-btn').contains('Grocery List')
        .get('.e-wishList-btn').contains('Wish List')
        .get('.e-wishList-btn').contains('Eddie')
        .get('.w-wishList-btn').contains('Whitney')
        .get('.w-wishList-btn').contains('Wish List')
    })
  
    it('Visits the grocery page, can view the list, and can return home', () => {
      cy.visit('http://localhost:3000/')
      .get('.grocery-btn').contains('Grocery List').click()
      .location('pathname').should('eq', '/groceries')
      .get('.card').contains('green apples')
      .get('.card').contains('QTY')
      .get('.card').contains('NOT organic')
      .get('.card').contains('🗑')
      .get('.home-button').contains('Home').click()
      .location('pathname').should('eq', '/')
    })
    
    it('Visits Whitneys page, can view the list, and can return home', () => {
      cy.visit('http://localhost:3000/')
        .get('.w-wishList-btn').contains('Wish List').click()
        .location('pathname').should('eq', '/whitneys-wish-list')
        .get('.card').contains('Bike Lights')
        .get('.card').contains('Link')
        .get('.card').contains('Notes: 1')
        .get('.card').contains('🗑')
        .get('.home-button').contains('Home').click()
        .location('pathname').should('eq', '/')
    })
  
    it('Visits Eddies page, can view the list, and can return home', () => {
      cy.visit('http://localhost:3000/')
        .get('.e-wishList-btn').contains('Wish List').click()
        .location('pathname').should('eq', '/eddies-wish-list')
        .get('.card').contains('Rollerblades')
        .get('.card').contains('Link')
        .get('.card').contains('Notes: 1, size 10')
        .get('.card').contains('🗑')
        .get('.home-button').contains('Home').click()
        .location('pathname').should('eq', '/')
    })
  })