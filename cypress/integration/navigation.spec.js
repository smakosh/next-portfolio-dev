describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="intro"]').should('be.visible');
    cy.get('[data-cy="projects"]').should('be.visible');
    cy.get('[data-cy="about"]').should('be.visible');
    cy.get('[data-cy="contact"]').should('be.visible');
  });
});
