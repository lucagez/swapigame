import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import Game from '../components/game/game';
import Intro from '../components/intro/intro';

/**
 * The `useEffect` hook is necessary as the window object
 * is non existent server side while Gatsby
 * generate the final bundle
 */

const GamePage = ({ data }) => {
  const [type, setType] = useState();
  const [usedData, setUsedData] = useState();

  useEffect(() => {
    // Defaulting to human if incorrect direct navigation
    const match = window.location.search.match(/[^?]+/) || [];
    const usedType = match[0] || 'human';
    setType(usedType);
    setUsedData(
      usedType === 'human'
        ? data.swapi.allPersons
        : data.swapi.allStarships,
    );
  }, []);

  return (
    <>
      {(type && usedData) && (
        <Layout is={type}>
          <Intro />
          <Game is={type} cards={usedData} />
        </Layout>
      )}
    </>
  );
};

GamePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GamePage;

// Querying SWAPI data before rendering.
// The SWAPI api is registered as a GraphQL endpoint
export const query = graphql`
  {
    swapi {
      allPersons {
        gender
        hairColor
        mass
        name
        skinColor
        eyeColor
        height
        birthYear
        species {
          name
        }
      }
      allStarships {
        cargoCapacity
        class
        consumables
        crew
        passengers
        name
        hyperdriveRating
      }
    }
  }
`;
