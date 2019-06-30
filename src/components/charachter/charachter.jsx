import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { poke } from 'bazar';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardGroup,
  Badge,
} from 'reactstrap';

import Placeholder from '../placeholder';
import props from './constants';

/**
 *
 * @param {string} is - One of `human` or `starship`
 * => used to load the correct set of props to keep
 * the `Charachter` component reusable.
 *
 * @param {bool} winner - State that the current entity
 * has won a battle or not.
 *
 * @param {...any} entity - the remaining props are the
 * ones describing the current human or starship
 */
const Charachter = ({ is, winner, ...entity }) => {
  const { info, fight } = props[is];

  // ANIMATION PROPERTIES
  const [rotation, setRotation] = useState(true);

  const { transform } = useSpring({
    transform: `rotateY(${rotation ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // Hook adaptation of `componentDidUpdate`
  // Triggering animation (rotation) whenever
  // a card receives a new name
  useEffect(() => {
    setRotation(true);
  }, [entity.name]);

  setTimeout(() => setRotation(false), 200);

  // Sending a `poke` notification to Game component
  // whenever a card is clicked
  const onClick = () => entity.name !== '' && poke('Game', entity);

  return (
    <animated.div
      style={{
        width: '300px',
        margin: '10px',
        cursor: 'pointer',
        transform: transform.interpolate(t => `${t} rotateY(0deg)`),
      }}
    >
      <Card
        onClick={onClick}
      >
        {
          entity.name === ''
            ? <Placeholder />
            : (
              <>
                <CardHeader tag="h3">
                  {entity.name}
                </CardHeader>
                <CardBody>
                  {info.map((prop, id) => (
                    <CardGroup key={id} tag="p">
                      <span>{prop}</span>
                      {`:  ${entity[prop]}`}
                    </CardGroup>
                  ))}
                </CardBody>
                <CardFooter tag="h4">
                  <span>{`${fight}: `}</span>
                  <Badge
                    color={winner ? 'primary' : 'secondary'}
                  >
                    {entity[fight]}
                  </Badge>
                </CardFooter>
              </>
            )
        }
      </Card>
    </animated.div>
  );
};


Charachter.propTypes = {
  // COMMON PROPS
  name: PropTypes.string,
  winner: PropTypes.bool,
  is: PropTypes.string.isRequired,

  // HUMAN PROPS
  // hairColor: PropTypes.array,
  // skinColor: PropTypes.array,
  // eyeColor: PropTypes.array,
  gender: PropTypes.string,
  mass: PropTypes.number,
  species: PropTypes.array,
  height: PropTypes.number,
  birthYear: PropTypes.string,

  // STARSHIP PROPS
  crew: PropTypes.number,
  class: PropTypes.string,
  consumables: PropTypes.string,
  passengers: PropTypes.number,
  cargoCapacity: PropTypes.number,
};

Charachter.defaultProps = {
  // COMMON DEFAULTS
  name: '',
  winner: false,

  // HUMAN DEFAULT PROPS
  // hairColor: [],
  // skinColor: [],
  // eyeColor: [],
  gender: 'UNKNOWN',
  species: [{ name: 'UNKNOWN' }],
  mass: Math.floor((Math.random() + 0.5) * 100),
  height: 0,
  birthYear: 'UNKNOWN',

  // STARSHIP DEFAULT PROPS
  crew: Math.floor((Math.random() + 0.5) * 10000),
  class: 'UNKNOWN',
  consumables: 'UNKNOWN',
  passengers: 0,
  cargoCapacity: 0,
};

export default Charachter;
