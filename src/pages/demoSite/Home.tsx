import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from '../sampleSite/Template';
import AppNavBar from '../../AppNavBar';
import { routerArray } from '../../App';
import ROUTES from '../../AppRouteNames';
import { Link } from 'react-router-dom';
import ExternalLink from '../../components/ExternalLink';

import teacher from '../../images/noun-teacher.svg';

const FirstPage = () => {
  const samplePageRoute = routerArray[0].children.find(
    (route) => route.path === ROUTES.DEMO.path
  );
  let path = '';
  let label = 'Get started';

  if (samplePageRoute?.children && samplePageRoute?.children[1]) {
    path = samplePageRoute?.children[1].path;
    label = `${label} with ${samplePageRoute?.children[1].handle?.label}`;
  }

  return (
    <Link to={path} className='btn btn-primary'>
      {label}
    </Link>
  );
};

// *** Main component ***
const Home = (): ReactElement => (
  <Row>
    <Col>
      <h1>Demonstration pages</h1>
      <Card>
        <Card.Body>
          <Row>
            <Col className='d-none d-sm-block' sm={2}>
              <img alt='' src={teacher} style={{ width: '90%' }} />
            </Col>
            <Col>
              <p>
                This mini-site contains pages for demonstrating how to find
                accessibility issues.
              </p>
              <p>
                Because this is a &quot;learning&quot; site, the pages are
                &quot;rough&quot;, have incomplete content, and purposely have
                accessibility errors.{' '}
              </p>
              <p>
                The{' '}
                <ExternalLink href='https://wave.webaim.org/extension/'>
                  WAVE plugin
                </ExternalLink>{' '}
                may be helpful for finding issues.
              </p>
              <p>
                <FirstPage />
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <h2 className='h4'>All demo pages</h2>
      <AppNavBar asList parentPath={ROUTES.DEMO.path} hideParent />
    </Col>
  </Row>
);

export default Home;
