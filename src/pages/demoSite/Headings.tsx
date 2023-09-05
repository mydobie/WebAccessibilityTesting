import React, { ReactElement } from 'react';
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import { checks } from '../sampleSite/Headings';
import ROUTES from '../../AppRouteNames';

const Headings = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  /*


https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role

    */

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_HEADINGS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={5}
    >
      <Row>
        <Col>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The text "Tulips" acts as a page title and should be coded as an h1'
            }
          >
            <h2>Tulips</h2>
          </TestingAlert>
          <div className='clearfix'>
            <h2>Colors</h2>
            <img
              alt=''
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Yonina_Tulip.jpg/256px-Yonina_Tulip.jpg'
              className='float-end'
              style={{ paddingLeft: '15px', paddingBottom: '15px' }}
            />
            <p>
              Tulip flowers come in a wide variety of colours, except pure blue
              (several tulips with blue in the name have a faint violet hue)
            </p>
            <p>
              While tulips can be bred to display a wide variety of colours,
              black tulips have historically been difficult to achieve. The
              first truly black tulip was bred in 1986 by a Dutch flower grower
              in Bovenkarspel, Netherlands. The specimen was created by
              cross-breeding two deep purple tulips, the Queen of the Night and
              Wienerwald tulips.
            </p>
          </div>
          <h2>Cultivation</h2>

          <h3>Propagation</h3>
          <p>
            Tulips can be propagated through bulb offsets, seeds or
            micropropagation. Seeds are most often used to propagate species and
            subspecies or to create new hybrids.
          </p>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The "Planting" text as a heading, but is not coded as one.  It should be coded as an "h3"'
            }
          >
            <p className='h3'>Planting</p>
          </TestingAlert>
          <p>
            Tulip bulbs are typically planted around late summer and fall, in
            well-drained soils. Tulips should be planted 10 to 15 cm (4 to 6
            inches) apart from each other. The recommended hole depth is 10 to
            20 cm (4 to 8 inches) deep, and is measured from the top of the bulb
            to the surface. Therefore, larger tulip bulbs would require deeper
            holes. Species tulips are normally planted deeper.
          </p>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The "Pollination" heading skips levels - it should be coded as an "h3"'
            }
          >
            <h5 className='h3'>Pollination</h5>
          </TestingAlert>
          <p>
            Unlike many flower species, tulips do not produce nectar to entice
            insect pollination. Instead, tulips rely on wind and land animals to
            move their pollen between reproductive organs. Because they are
            self-pollinating, they do not need the pollen to move several feet
            to another plant but only within their blossoms.
          </p>
          <footer>
            <TestingAlert
              isBug
              show={showHints}
              popOver={
                'The "Consumption" section is marked as "footer" landmark'
              }
            >
              <h2>Consumption</h2>
            </TestingAlert>
            <p>
              Tulip petals are edible. The taste varies by variety and season,
              and is roughly similar to lettuce or other salad greens. Tulip
              bulbs look similar to onions, but should not generally be
              considered food. The toxicity of bulbs is not well-understood, nor
              is there an agreed-upon method of safely preparing them for human
              consumption.
            </p>
            <TestingAlert
              isBug
              show={showHints}
              popOver={
                'The red "Tulips are poisonous ..." text is coded as a heading but does not function as one.'
              }
            >
              <h2 className='text-danger'>
                Tulips are poisonous to domestic animals including horses, cats
                and dogs.
              </h2>
            </TestingAlert>
          </footer>
        </Col>
        <Col xs={4}>
          <Card role='search' style={{ marginBottom: '20px' }}>
            <Card.Body>
              <Form
                action='https://www.dutchbulbs.com/search'
                method='get'
                name='search'
                aria-role='search'
              >
                <TestingAlert
                  isCorrect
                  show={showHints}
                  popOver={
                    'The search section is correctly marked as a "search" landmark.'
                  }
                >
                  <h2 className='h5'>Search DutchBulbs.com</h2>
                </TestingAlert>
                <InputGroup>
                  <Form.Control
                    placeholder='Item Number of Keywords'
                    aria-label='Search'
                    name='keywrod'
                  />
                  <Button variant='primary' type='submit'>
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Tulip'>
          Wikipedia
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default Headings;
