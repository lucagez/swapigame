import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';

import Sky from '../components/sky';
import Layout from '../components/layout';

const IndexPage = () => (
  <Sky>
    <Layout>
      <Container>
        <Row>
          <Col xs={0} sm={3} />
          <Col>
            <h1>Star Wars Game</h1>
            <i>Play with:</i>
            <ul>
              <li><Link to="/game?human">Humans</Link></li>
              <li><Link to="/game?starship">Starships</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  </Sky>
);

export default IndexPage;
