describe('Sky', () => {
  it('Index', () => {
    cy.visit('http://localhost:8000');
  });

  it('Displays starships', () => {
    cy
      .get('.follower')
      .should('have.length', 20);
  });

  it('Starships follow mouse movements', () => {
    const initPositions = [];
    const newPositions = [];

    cy
      .get('.follower')
      .each(e => initPositions.push(e[0].style.transform));

    cy.wait(100);

    cy
      .get('.Sky')
      .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 });

    cy
      .get('.follower')
      .each(e => newPositions.push(e[0].style.transform));

    initPositions
      .forEach((pos, i) => assert(pos !== newPositions[i]));
  });
});