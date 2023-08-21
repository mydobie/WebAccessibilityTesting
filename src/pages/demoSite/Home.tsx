import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppNavBar from '../../AppNavBar';

import ROUTES from '../../AppRouteNames';

// *** Main component ***
const Home = (): ReactElement => (
  <Row>
    <Col>
      <h1>DEMO site!</h1>

      <AppNavBar asList parentPath={ROUTES.DEMO.path} hideParent />

      <p>TEMP - on order:</p>
      <ul>
        <li>Automated checkers</li>
        <li>Images</li>
        <li>Keyboard navigation</li>
        <li>Forms</li>
        <li>Headings / landmarks</li>
        <li>Zoom and resize</li>
        <li>Text</li>
        <li>Color</li>
      </ul>
    </Col>
  </Row>
);

export default Home;
