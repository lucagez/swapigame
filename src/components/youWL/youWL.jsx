import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

/**
 *
 * @param {string} msg - Message to display
 * @param {bool} winner - Display a green or red `Badge`
 */
const YouWL = ({ msg, winner }) => (
  <div
    className="youWL"
    style={{ marginLeft: '20px' }}
  >
    <h4>
      <Badge color={winner ? 'success' : 'danger'}>
        {msg}
      </Badge>
    </h4>
  </div>
);

export default YouWL;

YouWL.propTypes = {
  msg: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
};
