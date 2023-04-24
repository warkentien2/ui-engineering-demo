describe('Characters Page', () => {
  beforeEach(() => {
    cy.visit('/characters');
  });

  it('should load and display the list of characters', () => {
    cy.get('.characters__list tbody tr').should('have.length.greaterThan', 0);
  });

  it('should filter the list of characters when searching', () => {
    cy.get('.characters__filter-input').type('Rick');
    cy.get('.characters__filter-submit').click();
    cy.get('.characters__list tbody tr').each(($row) => {
      cy.wrap($row).contains('Rick');
    });
  });

  it('should update the list of characters and URL when navigating through pagination', () => {
    cy.get('.characters__pagination button').contains('2').click();
    cy.get('.characters__list tbody tr').should('have.length.greaterThan', 0);
    cy.url().should('include', '/characters?fromPage=2');
  });
});
