import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

/**
 * The `GameButton` component conditionally change
 * its behavior.
 * => fight or playAgain
 */
const GameButton = ({
  fight,
  playAgain,
  msg,
  disabled,
}) => (
  <Button
    className="game-button"
    size="lg"
    onClick={msg !== '' ? playAgain : fight}
    disabled={disabled}
  >
    {msg !== '' ? 'Play Again!' : 'Fight'}
  </Button>
);

export default GameButton;

GameButton.propTypes = {
  fight: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  msg: PropTypes.string,
};

GameButton.defaultProps = {
  msg: '',
};
