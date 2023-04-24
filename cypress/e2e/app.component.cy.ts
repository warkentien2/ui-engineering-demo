describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the welcome message', () => {
    cy.get('h1').should('contain.text', 'TheRickandMorty');
  });

  it('should display characters page', () => {
    cy.get('[data-cy=nav-characters]').click();
    cy.url().should('include', '/characters');
    cy.contains('Characters');
  });

  it('should display episodes page', () => {
    cy.get('[data-cy=nav-episodes]').click();
    cy.url().should('include', '/episodes');
    cy.contains('Episodes');
  });

  it('should display individual character page', () => {
    cy.get('[data-cy=nav-characters]').click();
    cy.get('[data-cy=character-link]').first().click();
    cy.url().should('include', '/character/');
  });
});
