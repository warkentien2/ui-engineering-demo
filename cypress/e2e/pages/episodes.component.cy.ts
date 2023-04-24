describe('Episodes Page', () => {
  beforeEach(() => {
    cy.visit('/episodes');
  });

  it('should display episode list', () => {
    cy.get('.episodes__list tbody tr').should('have.length.greaterThan', 0);
  });

  it('should display episode name and code', () => {
    cy.get('.episodes__list tbody tr').first().within(() => {
      cy.get('td.cell--grow').should('contain.text', 'Pilot');
      cy.get('td.cell--shrink').should('contain.text', 'S01E01');
    });
  });

  it('should display and interact with pagination', () => {
    cy.get('.episodes__pagination').should('be.visible');

    cy.get('.episodes__pagination .pagination__button').first().should('have.attr', 'disabled');
    cy.get('.episodes__pagination .pagination__button').last().click();

    cy.get('.episodes__pagination .pagination__button').first().click();

    cy.get('.episodes__pagination .pagination__input').clear().type('3{enter}');

    cy.url().should('include', '?page=3');
  });
});
