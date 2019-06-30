import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { register, poke } from 'bazar';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Charachter from '../charachter';
import GameButton from '../gameButton';
import YouWL from '../youWL';
import props from '../charachter/constants';

import { nullToUndefined, selectStrongest, selectSix } from './utils';

/**
 * The `Game` component stores the logic of the game.
 *
 * Six random charachters are selected from the provided
 * dataset (humans or starships) and then displayed as the
 * player's deck.
 *
 * Six random charachters are selected from the opponent (computer)
 * and the strongest one is selected.
 *
 * When the `fight` button is clicked, there is a comparison
 * between the fighting properties (mass for humans and crew for starships)
 *
 * When a winner is selected the UI gets updated to reflect the changes
 * accordingly.
 *
 * You can restart the game by clicking the same button as before.
 *
 * @param {string} is - one of `human` or `starship`
 * @param {array} cards - dataset containing charachters data
 */
const Game = ({ is, cards }) => {
  const { fight: fightProp } = props[is];
  const strongest = selectStrongest[is];

  // Subset of `data`
  // 6 random elements:
  // => 5 cards that user can choose from
  // => 1 opponent card
  const [winner, setWinner] = useState();
  const [player, setPlayer] = useState(selectSix(cards));
  const [opponent, setOpponent] = useState({});

  const [choosen, setChoosen] = useState({});

  const [msg, setMsg] = useState();

  const fight = () => {
    setOpponent(strongest(selectSix(cards)));
  };

  const playAgain = () => {
    setPlayer(selectSix(cards));
    setOpponent({});
    setChoosen({});
    setMsg();
    setWinner();
  };

  useEffect(() => {
    const { name } = opponent;
    if (name) {
      const tmpWinner = opponent[fightProp] < choosen[fightProp]
        ? 'player'
        : 'opponent';

      setMsg(tmpWinner === 'player' ? 'You Won!' : 'You Loose!');
      poke('Score', tmpWinner);
      setWinner(tmpWinner);
    }
  }, [opponent]);

  register({
    id: 'Game',
    onPoke: arg => setChoosen(arg),
    willRerender: true,
  });

  return (
    <Container>
      <Row>
        <Col className="opponent-card">
          <h1>Opponent card:</h1>
          <Charachter
            is={is}
            winner={winner === 'opponent'}
            {...nullToUndefined(opponent)}
          />
        </Col>
        <Col className="player-card">
          <h1>Choosen card:</h1>
          <Charachter
            is={is}
            winner={winner === 'player'}
            {...nullToUndefined(choosen)}
          />
        </Col>
      </Row>

      <Row style={{ margin: '20px' }}>
        <GameButton
          fight={fight}
          playAgain={playAgain}
          msg={msg}
          disabled={typeof choosen.name === 'undefined'}
        />
        {msg && (
          <YouWL
            msg={msg}
            winner={winner === 'player'}
          />
        )}
      </Row>

      <h1>Your deck:</h1>
      <Row className="player-deck">
        {player.map((person, id) => (
          <Col key={id}>
            <Charachter is={is} {...nullToUndefined(person)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Game;

Game.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  is: PropTypes.string.isRequired,
};
