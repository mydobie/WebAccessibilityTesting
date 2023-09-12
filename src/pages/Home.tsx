import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ExternalLink from '../components/ExternalLink';
import Crowd from '../images/noun-crowd';

import Gears from '../images/noun-gears';

const CardHeader = styled(Card.Header).attrs(() => ({
  as: 'h2',
  className: 'card-header h6',
}))`
  /* background-color: #f9d7e3f5; */
  background-color: #000;
  color: #f9d7e3f5;
  font-weight: bold;
`;

import ROUTES from '../AppRouteNames';
import Wrench from '../images/noun-wrench';

// *** Main component ***
const Home = (): ReactElement => (
  <>
    <Row className='mb-5'>
      <Col>
        <Card text='white' className='home-intro-card'>
          <Card.Body>
            <p className='h1'>You Can Do This.</p>
            <h1 className='h5'>Web Accessibility Testing for Everyone.</h1>
            <p>Making testing easier so everyone can participate.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={4}>
        <Card>
          <CardHeader>Grace Hopper Session</CardHeader>
          <Card.Body>
            <Row className='mb-4'>
              <Col lg={4}>
                <Crowd />
              </Col>
              <Col>
                <Card.Text>
                  No One Left Behind: Easy and Engaging Web Accessibility
                  Testing for All
                </Card.Text>
                <Card.Text>
                  <ExternalLink href='https://gracehoppercelebration.com/embed/'>
                    Full conference agenda
                  </ExternalLink>
                </Card.Text>
              </Col>
            </Row>
            <Card.Text>
              <Link
                to={ROUTES.GRACE_HOPPER_HOME.path}
                className='btn btn-primary'
              >
                Session materials
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card>
          <CardHeader>Tools and Resources</CardHeader>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <Wrench />
              </Col>
              <Col>
                <Card.Text>
                  There are numerous tools you can use to make testing for
                  accessibility easier.
                </Card.Text>
                <Card.Text>
                  <Link to={ROUTES.TOOLS.path} className='btn btn-secondary'>
                    Tools
                  </Link>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card>
          <CardHeader>Sample website</CardHeader>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <Gears />
              </Col>
              <Col>
                <Card.Text>
                  Sample website to practice your web accessibility testing
                  skills. Errors are clearly marked.
                </Card.Text>

                <Card.Text>
                  <Link to={ROUTES.SAMPLE.path} className='btn btn-secondary'>
                    Sample site
                  </Link>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
);

export default Home;
