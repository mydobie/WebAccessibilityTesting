/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import {
  Form,
  Accordion,
  Card,
  useAccordionButton,
  Row,
  Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import { checks } from '../sampleSite/KeyboardNav';
import { SneakyLink, SectionDivider } from '../../components/Styled';
import Credit from '../../components/Credit';
import Template, { useHints } from '../sampleSite/Template';
import Iris from '../../images/iris.svg';
import Daisy from '../../images/daisy.svg';
import Orchid from '../../images/noun-orchid.png';
import Tulip from '../../images/noun-tulip.svg';
import Rose from '../../images/rose.svg';

import ROUTES from '../../AppRouteNames';
import ExternalLink from '../../components/ExternalLink';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

const Img = styled.img`
  width: 50px;
`;
const BigImg = styled.img`
  width: 150px;
`;

const ToggleButton = styled.button`
  background: none !important;
  box-shadow: none;
`;

const CustomToggle = ({
  text,
  eventKey,
  initialExpand,
  mouseOnly,
  noTab,
}: {
  text: string;
  eventKey: string;
  initialExpand?: boolean;
  mouseOnly?: boolean;
  noTab?: boolean;
}): ReactElement => {
  const [expand, setExpand] = React.useState(initialExpand);
  const onClick = useAccordionButton(eventKey, () => {
    setExpand(!expand);
  });

  const props = {
    className: `accordion-button ${!expand ? 'collapsed' : ''}`,
    'aria-expanded': expand,
    id: `toggle${eventKey}`,
    'aria-controls': `card${eventKey}`,
    tabIndex: noTab ? -1 : undefined,
  };
  if (mouseOnly) {
    return (
      <ToggleButton {...props} onMouseDown={onClick}>
        {text}
      </ToggleButton>
    );
  }
  return (
    <ToggleButton {...props} onClick={onClick}>
      {text}
    </ToggleButton>
  );
};

const KeyboardNavigation = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.KEYBOARD.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.keyboard}
      bugTotal={6}
      sampleRoute={ROUTES.KEYBOARD}
    >
      <h2>Keyboard navigation</h2>

      <ul>
        <li>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={`The daisy link, looks like a link. Is descriptive.  The tab order follows the flow of the page.   Notice that the alt text of the image is empty so the word "daisy" isn't repeated.`}
          >
            <a href='https://en.wikipedia.org/wiki/Daisy'>
              <Img src={Daisy} alt='' /> Daisy
            </a>
          </TestingAlert>
        </li>
        <li>
          <a href='https://en.wikipedia.org/wiki/Iris'>
            <Img src={Iris} alt='' /> Iris
          </a>
        </li>
        <li>
          <a href='https://en.wikipedia.org/wiki/Orchid'>
            <Img src={Orchid} alt='' /> Orchid
          </a>
        </li>
        <li>
          <TestingAlert
            isBug
            show={showHints}
            popOver={`The "Rose" link doesn't change appearance when it has focus.`}
          >
            <a
              href='https://en.wikipedia.org/wiki/Rose'
              style={{ outline: 'none' }}
            >
              <Img src={Rose} alt='' /> Rose
            </a>
          </TestingAlert>
        </li>
        <li>
          <a href='https://en.wikipedia.org/wiki/Tulip'>
            <Img src={Tulip} /> Tulip
          </a>
        </li>
      </ul>

      <div>
        <Form.Label htmlFor='favFlower'>Favorite flower</Form.Label>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`You can activate this select using the arrow keys.  You select an item with the Enter/Return key or use escape to close the drop-down.  The user is not allowed to tab outside this element when it is expanded preventing them from putting focus on a item that is under the drop-down.`}
        >
          <Form.Select id='favFlower'>
            <option>Select a flower</option>
            <option value='1'>Daisy</option>
            <option value='2'>Iris</option>
            <option value='3'>Orchid</option>
            <option value='4'>Rose</option>
            <option value='5'>Tulip</option>
          </Form.Select>
        </TestingAlert>
      </div>

      <SectionDivider />
      <h3>Next section</h3>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`The "Link you cannot see" link is not visible when it receives focus.`}
      >
        <a
          href='https://random.responsiveimages.io/'
          style={
            showHints
              ? {}
              : {
                  position: 'absolute',
                  left: '-99999px',
                  height: '1px',
                  width: '1px',
                  overflow: 'hidden',
                }
          }
        >
          Link you cannot see!
        </a>
      </TestingAlert>
      <Accordion>
        <Card>
          <Card.Header>
            <CustomToggle eventKey='0' text='Daisy' />
          </Card.Header>
          <Accordion.Collapse
            eventKey='0'
            id='card0'
            role='region'
            aria-labelledby='toggle0'
          >
            <Card.Body>
              <BigImg src={Daisy} alt='Daisies' /> All about daisies.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <TestingAlert
              isBug
              show={showHints}
              popOver={`You cannot activate the "Iris" section using the Enter/Return key.`}
            >
              <CustomToggle eventKey='1' text='Iris' mouseOnly />
            </TestingAlert>
          </Card.Header>
          <Accordion.Collapse
            eventKey='1'
            id='card1'
            role='region'
            aria-labelledby='toggle1'
          >
            <Card.Body>
              <BigImg src={Iris} alt='Irises' /> All about irises
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <TestingAlert
              isBug
              show={showHints}
              popOver={`You cannot tab to the "Orchid" section.`}
            >
              <CustomToggle eventKey='2' text='Orchid' noTab />
            </TestingAlert>
          </Card.Header>
          <Accordion.Collapse
            eventKey='2'
            id='card2'
            role='region'
            aria-labelledby='toggle2'
          >
            <Card.Body>
              <BigImg src={Orchid} alt='Orchids' /> All about orchids
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <SectionDivider />
      <h3>Last section</h3>

      <Row xs={1} md={3}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Daisy</Card.Title>

              <p>
                Bellis perennis is a perennial herbaceous plant growing to 20
                centimetres (8 inches) in height. It has short creeping rhizomes
                and rosettes of small rounded or spoon-shaped leaves that are
                from 2 to 5 cm (3⁄4–2 in) long and grow flat to the ground.
                longer.
              </p>
              <p>
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={`While the "more" link correctly has an indicator that it will open in a new window/tab, the text "more" isn't descriptive enough out of context. `}
                >
                  <ExternalLink href='https://en.wikipedia.org/wiki/Bellis_perennis'>
                    more
                  </ExternalLink>
                </TestingAlert>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Iris</Card.Title>

              <p>
                Irises are perennial plants, growing from creeping rhizomes
                (rhizomatous irises) or, in drier climates, from bulbs (bulbous
                irises). They have long, erect flowering stems which may be
                simple or branched, solid or hollow, and flattened or have a
                circular cross-section.
              </p>
              <p>
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={`The "more" link doesn't look like a link or button.  There is only a slight color change when moused over.  This color change may be missed by some color-blind users.`}
                >
                  <SneakyLink href='https://en.wikipedia.org/wiki/Iris_(plant)'>
                    more
                  </SneakyLink>
                </TestingAlert>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Tulip</Card.Title>

              <p>
                There are about seventy-five species, and these are divided
                among four subgenera. The name "tulip" is thought to be derived
                from a Persian word for turban, which it may have been thought
                to resemble by those who discovered it.
              </p>
              <p>
                <TestingAlert
                  isWarning
                  show={showHints}
                  popOver={`The "more" link opens in a new window/tab but there is no indication that it will do this.`}
                >
                  <ExternalLink
                    href='https://en.wikipedia.org/wiki/Tulip'
                    noLogo
                  >
                    more
                  </ExternalLink>
                </TestingAlert>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Cypripedium_reginae'>
          Wikipedia
        </ExternalLink>
        . Icons are from the{' '}
        <ExternalLink href='https://thenounproject.com/'>
          Noun Project
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default KeyboardNavigation;
