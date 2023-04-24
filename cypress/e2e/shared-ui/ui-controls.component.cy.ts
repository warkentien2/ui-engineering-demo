describe('UI Controls Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle form visibility on button click', () => {
    cy.get('.ui-controls__form-container').should('not.be.visible');
    cy.get('.ui-controls__open').click();
    cy.get('.ui-controls__form-container').should('be.visible');
  });

  it('should apply changes and update the UI settings', () => {
    cy.get('.ui-controls__open').click();

    cy.get('input[type="checkbox"]').first().uncheck();
    cy.get('input[type="number"]').clear().type('20');
    cy.get('input[type="checkbox"]').last().check();

    cy.get('.ui-controls__submit').click();

    cy.get('html').should('have.attr', 'light-mode');
    cy.get('html').should('have.attr', 'ltr');
    cy.get('html').should('have.attr', 'reduced-motion');
    cy.get('html').should('have.css', 'font-size', '125%');
  });
});
