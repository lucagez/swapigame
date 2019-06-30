import assert from 'assert';

describe('Index page', () => {
  it('Renders correctly', () => {
    cy.visit('http://localhost:8000');

    cy.contains('Star Wars Game');
    cy.contains('Play with:');
  });

  it('Displays links', () => {
    cy
      .get('a')
      .should('have.length', 2);
  });

  it('Redirects to HUMAN war', () => {
    cy
      .get('a')
      .first()
      .click()
      .wait(100)
      .window()
      .then((win) => {
        assert(win.location.search === '?human');
      });
  });

  it('Redirects to Index', () => {
    cy
      .get('.Home')
      .click();

    cy.contains('Star Wars Game');
  });

  it('Redirects to STARSHIP war', () => {
    cy
      .get('a')
      .last()
      .click()
      .window()
      .then((win) => {
        assert(win.location.search === '?starship');
      });
  });
});
