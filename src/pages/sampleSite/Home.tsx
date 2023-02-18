// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppNavBar from '../../AppNavBar';

import ROUTES from '../../AppRouteNames';

// *** Main component ***
const Home = (): ReactElement => (
  <Row>
    <Col>
      <h1>Sample site!</h1>

      <AppNavBar asList parentPath={ROUTES.SAMPLE.path} hideParent />
    </Col>
  </Row>
);

export default Home;
