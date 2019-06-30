
describe('Game page', () => {

  // Repeating the same set of tests on each resource
  ['human', 'starship']
    .forEach((type) => {

      /**
       * EMPTY STATE
       */

      it('Renders correctly', () => {
        cy.visit(`http://localhost:8000/game?${type}`);

        cy.contains(`A ${type}s\' War..`);
      });

      it('Score is initialized to empty state', () => {
        cy
          .get('.score')
          .find('.badge')
          .first()
          .contains('0');

        cy
          .get('.score')
          .find('.badge')
          .last()
          .contains('0');
      });

      it('Opponent\'s card is initialized to empty state', () => {
        cy
          .get('.opponent-card')
          .contains('?');
      });

      it('Player\'s card is initialized to empty state', () => {
        cy
          .get('.player-card')
          .contains('?');
      });

      it('Fight button is not clickable', () => {
        cy
          .get('.game-button')
          .should('be.disabled');
      });

      it('Selecting a card in deck trigger actions', () => {
        cy
          .get('.player-deck')
          .find('.card')
          .eq(1)
          .click();

        // Now the button is clickable
        cy
          .get('.game-button')
          .should('not.be.disabled');

        // And choosen card is rendered
        cy
          .get('.player-card')
          .contains(
            type === 'human'
              ? 'mass:'
              : 'crew:',
          );
      });


      /**
       * GAMING STATE
       */

      it('Starts the fight', () => {
        cy
          .get('.player-deck')
          .find('.card')
          .eq(1)
          .click();
      });

      it('Renders the winner', () => {
        cy
          .get('.game-button')
          .click();

        cy
          .get('.youWL')
          .contains('You');
      });

      it('Winning card has blue badge', () => {
        cy
          .get('.card-footer')
          .find('.badge-primary');
      });

      it('Score is updated', () => {
        cy
          .get('.score')
          .contains('1');
      });

      it('Fight button is now Play Again', () => {
        cy
          .get('.game-button')
          .contains('Play Again!');
      });

      it('Clicking Play Again initialize to empty', () => {
        cy
          .get('.game-button')
          .contains('Play Again!');
      });
    });
});
