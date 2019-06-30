import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';

import Score from '../score';

/**
 *
 * @param {string} siteTitle - Site name to display in header
 * @param {string} is - One of `human` or `starship`
 */
const Header = ({ siteTitle, is }) => {
  const [gaming, setGaming] = useState(false);

  // Using `useEffect` as `componentDidMount`
  // to assign current path after component mount
  // => Gatsby generates the final bundle server side.
  // So, the `window` object is not existent.
  useEffect(() => {
    const { pathname } = window.location;
    const isGame = pathname.match('game');
    setGaming(isGame !== null);
  }, []);

  return (
    <header style={{ marginBottom: '20px' }}>
      <Container>
        <Row>
          <Col xs={2}>
            {gaming && (
              <h1 style={{ margin: 0 }}>
                <Link
                  className="Home"
                  to="/"
                >
                  {siteTitle}
                </Link>
              </h1>
            )}

            {/* Conditionally rendering what kind
          of war you are fighting at the moment */}
            {is !== '' && <i>{`A ${is}s' War..`}</i>}

          </Col>
          <Col xs={3} />
          <Col>
            {gaming && <Score />}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  is: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  is: '',
};

export default Header;
