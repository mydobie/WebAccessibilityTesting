/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// import TestingAlert from '../../components/TestingAlert';
import { RoseImage } from '../../images/SampleSVGs';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import ROUTES from '../../AppRouteNames';
import { checks } from '../sampleSite/AutoCheckers';
import world from '../../images/noun-world.svg';

import GraceHopperHandout from '../../docs/GraceHopperHandout';

const AutoCheckers = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_AUTO.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.autoCheckers}
      noHints
    >
      <h1>Rose</h1>
      <Row>
        <Col>
          <div className='clearfix'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Rosa_Precious_platinum.jpg/256px-Rosa_Precious_platinum.jpg'
              className='float-end'
              style={{ paddingLeft: '15px', paddingBottom: '15px' }}
            />
            <p>
              A rose is either a woody perennial flowering plant of the genus
              Rosa in the family Rosaceae or the flower it bears. There are over
              three hundred species and tens of thousands of cultivars. They
              form a group of plants that can be erect shrubs, climbing, or
              trailing, with stems that are often armed with sharp prickles.
              Their flowers vary in size and shape and are usually large and
              showy, in colours ranging from white through yellows and reds.
            </p>
          </div>
          Learn more about Roses:
          <ul>
            <li>
              <ExternalLink
                href='https://www.almanac.com/plant/roses'
                noLogo
                // @ts-ignore
                style={{ textDecoration: 'none' }}
              >
                <RoseImage title='' />
              </ExternalLink>{' '}
              - Almanac
            </li>
            <li>
              <ExternalLink
                href='https://www.rose.org/'
                noLogo // @ts-ignore
                style={{ textDecoration: 'none' }}
              >
                <RoseImage title='' />
              </ExternalLink>{' '}
              - American Rose society
            </li>
          </ul>
        </Col>
        <Col sm={4}>
          <div role='complementary'>
            <Card>
              <Card.Body>
                <h2 className='h4'>{`How do you say "rose" in different languages?`}</h2>
                <Row>
                  <Col>
                    <ul>
                      <li>
                        <span lang='fr'>Rose</span> - French
                      </li>
                      <li>
                        <span lang='es'>Rosa</span> - Spanish
                      </li>
                      <li>
                        <span lang='german'>Rose</span> - German
                      </li>
                      <li>
                        <span lang='la'>Rose</span> - Latin
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <img src={world} alt='' style={{ width: '100%' }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div role='complementary'>
            <Card>
              <Card.Body>
                <h2 className='h4'>Rose hips</h2>
                <Row>
                  <Col>
                    <p>
                      Rose hips are used in bread and pies, jam, jelly,
                      marmalade, syrup, soup, tea, wine, and other beverages.
                      Rose hips can be eaten raw, like berries.
                    </p>
                  </Col>
                  <Col>
                    <img
                      style={{ width: '100%' }}
                      alt='Rosa rubiginosa hips'
                      src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Rosa_rubiginosa_hips.jpg'
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Credit>
        Information and images from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Rose'>
          Wikipedia
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default AutoCheckers;
