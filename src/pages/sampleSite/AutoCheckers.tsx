import React, { ReactElement } from 'react';
import { Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap';
// import styled from 'styled-components';
// import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import ROUTES from '../../AppRouteNames';

import GraceHopperHandout from '../../docs/GraceHopperHandout';

export const checks = ['Run against 2 automated checkers'];

const AutoCheckers = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <Template
      showHints={showHints}
      title={ROUTES.AUTO.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.autoCheckers}
      bugTotal={5}
      noHints
    >
      <h2></h2>

      <h1>Minnesota</h1>
      <Row>
        <Col>
          <Row>
            <Col role='not_a_real_role'>
              <p>
                Minnesota is a state in the Upper Midwestern region of the
                United States. It is the 12th largest U.S. state in area and the
                22nd most populous, with over 5.75 million residents.
              </p>
              <p>
                More than 60% of Minnesotans live in the Minneapolis–Saint Paul
                metropolitan area, known as the &quot;Twin Cities&quot;, the
                state&apos;s main political, economic, and cultural hub. With a
                population of about 3.7 million, the Twin Cities is the 16th
                largest metropolitan area in the U.S. Other minor metropolitan
                and micropolitan statistical areas in the state include Duluth,
                Mankato, Moorhead, Rochester, and St. Cloud.
              </p>
            </Col>
            <Col md={3}>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/8/81/Minnesota_in_United_States.svg'
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/StLouisRiver_JayCooke.JPG/512px-StLouisRiver_JayCooke.JPG'
                style={{ width: '100%' }}
              />
            </Col>
            <Col>
              <p>
                Minnesota is the second northernmost U.S. state (after Alaska)
                and northernmost contiguous state, as the isolated Northwest
                Angle in Lake of the Woods County is the only part of the 48
                contiguous states north of the 49th parallel.
              </p>
              <p>
                Minnesota has some of the earth&apos;s oldest rocks, gneisses
                that are about 3.6 billion years old (80% as old as the planet).
                About 2.7 billion years ago basaltic lava poured out of cracks
                in the floor of the primordial ocean; the remains of this
                volcanic rock formed the Canadian Shield in northeast Minnesota.
                The roots of these volcanic mountains and the action of
                Precambrian seas formed the Iron Range of northern Minnesota.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='mb-4'>
            <Card.Body>
              <Form.Label htmlFor='explore'>
                Search Explore Minnesota
              </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder='Search Explore Minnesota'
                  aria-label='Search for'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  id='explore'
                />
                <Button
                  variant='outline-secondary'
                  id='searchBttn'
                  onClick={() => {
                    window.open(
                      `https://www.exploreminnesota.com/search?keys=${searchValue}`,
                      '_blank',
                      'noreferrer'
                    );
                  }}
                  disabled={!searchValue}
                >
                  Search
                </Button>
              </InputGroup>
              <label htmlFor='explore' className='text-muted'>
                To limit the results to exact matches, add “double quotes”
                around your search phrase
              </label>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div lang='fr' style={{ color: '#A3A3FF', fontSize: '2em' }}>
                L&apos;Étoile du Nord
              </div>
              Minnesota state motto
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p className='mt-4  text-center'>
        <ExternalLink href='https://www.exploreminnesota.com/' noLogo>
          <img
            src='https://www.exploreminnesota.com/themes/custom/exploremn_theme/images/logo.png'
            alt='Explore Minnesota'
            style={{ width: '250px' }}
          />
        </ExternalLink>
      </p>

      <Credit>
        Information and images from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Minnesota'>
          Wikipedia
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://www.exploreminnesota.com/'>
          Explore Minnesota
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default AutoCheckers;
