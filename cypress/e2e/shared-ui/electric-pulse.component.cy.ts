describe('ElectricPulse', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the characters', () => {
    cy.get('app-characters').should('contain.text', 'Characters');
  });
});
