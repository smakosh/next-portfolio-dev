import { Utility } from '../support/utility';

// Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    console.log(`This is the url ${url}`);
    cy.visit(url);
    cy.get('[data-cy="intro"]').should('be.visible');
    cy.get('[data-cy="projects"]').should('be.visible');
    cy.get('[data-cy="about"]').should('be.visible');
    cy.get('[data-cy="contact"]').should('be.visible');
  });
});
