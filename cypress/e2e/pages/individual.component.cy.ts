describe('Character Page', () => {
  beforeEach(() => {
    cy.visit('/character/265?fromPage=1&nameSearch=pickle');
  });

  it('should load and display the character information', () => {
    cy.get('.card__title').should('contain.text', 'Rick Sanchez');
    cy.get('.card__subtitle').should('contain.text', 'Male Human');
    cy.get('#character-portrait').should('be.visible');
  });
});
