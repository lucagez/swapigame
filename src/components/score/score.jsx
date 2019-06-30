import React, { useState } from 'react';
import { register } from 'bazar';
import {
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap';

/**
 * The `Score` component receives pokes from
 * the `Game` component and updates the
 * displayed score (opponent and player) accordingly
 */
const Score = () => {
  const initial = { opponent: 0, player: 0 };
  const [score, setScore] = useState(initial);

  register({
    id: 'Score',
    onPoke: who => setScore({
      ...score,
      [who]: score[who] + 1,
    }),
    willRerender: true,
  });

  const { opponent, player } = score;

  return (
    <div>
      <Container
        className="score"
        style={{ padding: '10px', backgroundColor: '#edf2f7' }}
      >
        <h3>Score</h3>
        <Row>
          <Col>
            <p>
              <span>opponent: </span>
              <Badge color="secondary">{opponent}</Badge>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <span>you: </span>
              <Badge color="secondary">{player}</Badge>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Score;
