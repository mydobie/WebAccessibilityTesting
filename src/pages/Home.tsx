// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import AppNavBar from '../AppNavBar';

// import ROUTES from '../AppRouteNames';

// *** Main component ***
const Home = (): ReactElement => (
  <Row>
    <Col>
      <Card text='white' className='home-intro-card'>
        <Card.Body>
          <p className='h1'>You Can Do This.</p>
          <h1 className='h5'>Web Accessibility Testing for Everyone.</h1>
          <p>Making testing easier so everyone can participate.</p>
        </Card.Body>
      </Card>

      <AppNavBar />
    </Col>
  </Row>
);

export default Home;
