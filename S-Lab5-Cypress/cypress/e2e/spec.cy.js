describe('App loads', () => {
  it('When initialized, the User should see the log in application', () => {
    cy.visit('./S-Lab-2-codestandards.html')
  })
})

describe('Entering credentials', () => {
  it('should be able to enter a username and password', () => {
    cy.get('.login__user').type('Irina').should('have.value', "Irina")
    cy.get('.login__password').type('ASDqwe123$').should('have.value', "ASDqwe123$")
  })
})

describe('Login & submitting the form', () => {
  it('clicking on “log in” should submit the form', () => {
    // cy.get('form[name="my-form"]').submit()
    cy.get('.login__button').click()
  })
})

describe('Hidden div and input values', () => {
  it('should see the values entered for username & password in the output div', () => {
    cy.get('.output__user').should('contain', "Irina")
    cy.get('.output__pass').should('contain', "ASDqwe123$")   
    cy.get('.output').should('be.visible')   
  })
})

describe('Username box is empty', () => {
  it('should see the username background turn red and that the focus is set there', () => {
    cy.visit('./S-Lab-2-codestandards.html')
    cy.get('.login__button').click()
    cy.get('.login__user').should('have.value', "").should('have.class', "login__txtbox_error").should('have.focus')
  })
})

describe('Password box is empty', () => {
  it('should see the password background turn red and that the focus is set there', () => {
    cy.visit('./S-Lab-2-codestandards.html')
    cy.get('.login__user').type('Irina').should('have.value', "Irina")
    cy.get('.login__button').click()
    cy.get('.login__password').should('have.value', "").should('have.class', "login__txtbox_error").should('have.focus')
  })
})