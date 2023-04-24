describe('Pagination', () => {
  beforeEach(() => {
    cy.visit('/characters');
  });

  it('should display pagination', () => {
    cy.get('[data-cy=pagination]').should('be.visible');
  });

  it('should navigate to the next page', () => {
    cy.get('[data-cy=pagination-next]').click();
    cy.url().should('include', '/characters?page=2');
  });

  it('should navigate to the previous page', () => {
    cy.get('[data-cy=pagination-next]').click();
    cy.get('[data-cy=pagination-prev]').click();
    cy.url().should('include', '/characters?page=1');
  });
});
