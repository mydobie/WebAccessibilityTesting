/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Button, Modal, Figure, Container, Row, Col } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';

import { SneakyLink, SectionDivider } from '../../components/Styled';
import Credit from '../../components/Credit';
import Template, { useHints } from './Template';
import OrchidIcon from '../../images/noun-orchid.png';

import ROUTES from '../../AppRouteNames';
import ExternalLink from '../../components/ExternalLink';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

export const checks = [
  'You can get to and activate all interactive items with a keyboard',
  'Interactive items are easily identifiable without relying on color',
  'Focused items are visually displayed on the screen',
  'Focused items visually look different',
  'Tab order follows the flow of the page',
  'Links that open a new window/tab are marked',
  'You can skip over large sets of items (aka skip links)',
  'Link/button text makes sense and is descriptive out of context',
];

const KeyboardNavigation = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  const [imageModalURL, setImageModalURL] = React.useState<string | null>(null);
  const [imageModalCredit, setImageModalCredit] = React.useState('');
  const [imageModalTitle, setImageModalTitle] = React.useState('');

  const handleModalOpen = (url: string, credit: string, title: string) => {
    setImageModalURL(url);
    setImageModalCredit(credit);
    setImageModalTitle(title);
  };

  const handleModalClose = () => setImageModalURL(null);

  return (
    <Template
      showHints={showHints}
      title={ROUTES.KEYBOARD.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.keyboard}
      bugTotal={7}
      helper={
        <>
          <ul>
            <li>
              <ExternalLink href='https://articulate.com/support/article/How-to-Enable-Tab-Key-Navigation-on-a-Mac'>
                Enable keyboard navigation on a Mac
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.w3.org/WAI/ARIA/apg/patterns/'>
                ARIA Patterns
              </ExternalLink>{' '}
              - how different widgets should behave
            </li>
          </ul>
        </>
      }
    >
      <h2>Showy Lady Slipper</h2>
      <h3>About</h3>

      <p>
        Cypripedium reginae, known as the showy lady's slipper, pink-and-white
        lady's-slipper, or the queen's lady's-slipper, is a rare lady's-slipper
        orchid native to northern North America. Although never common, this
        plant has vanished from much of its historical range due to habitat
        loss.
      </p>

      <TestingAlert
        isBug
        show={showHints}
        popOver={`The link text of "Learn more" is not descriptive enough when taken out of context.  A better text would be "More about Lady Slippers".`}
      >
        <p>
          <ExternalLink href='https://en.wikipedia.org/wiki/Cypripedium_reginae'>
            Learn more
          </ExternalLink>
        </p>
      </TestingAlert>
      <h4>Images (in modal)</h4>
      <ul>
        <li>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={`The "Leaves link/button will open the modal by using a mouse click or using the keyboard Return/Enter key.`}
          >
            <Button
              variant='link'
              onClick={() =>
                handleModalOpen(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Cypripedium_reginae_imported_from_iNaturalist_photo_706956.jpg/265px-Cypripedium_reginae_imported_from_iNaturalist_photo_706956.jpg',
                  '(c) Aaron Carlson, some rights reserved (CC BY)',
                  'Lady slipper leaves'
                )
              }
            >
              Leaves
            </Button>
          </TestingAlert>
        </li>
        <li>
          <TestingAlert
            isBug
            show={showHints}
            popOver={`The "Blooms" button/link  does not open the modal when using the Return/Enter key.`}
          >
            <Button
              variant='link'
              onMouseDown={() =>
                handleModalOpen(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/3014b_Cyp_reginae.jpg/256px-3014b_Cyp_reginae.jpg',
                  'Orchidhunter1939, CC BY-SA 3.0',
                  'Lady slipper blooms'
                )
              }
            >
              Blooms
            </Button>
          </TestingAlert>
        </li>
        <li>
          <TestingAlert
            isBug
            show={showHints}
            popOver={`The "Alba (white) form" button/link  does not look different when receiving focus`}
          >
            <Button
              className='shadow-none'
              variant='link'
              onClick={() =>
                handleModalOpen(
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cypripedium_reginae_fma._album_%27-190405%27_Walter%2C_Fl._Carol._222_%281788%29_%2848031312983%29.jpg/256px-Cypripedium_reginae_fma._album_%27-190405%27_Walter%2C_Fl._Carol._222_%281788%29_%2848031312983%29.jpg',
                  'sunoochi from Sapporo, Hokkaido, Japan, CC BY 2.0',
                  'Lady slipper Alba form'
                )
              }
            >
              Alba (white) form
            </Button>
          </TestingAlert>
        </li>
      </ul>
      <Modal show={!!imageModalURL} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={`The modal prevents the user from tabbing outside of the modal so they don't go to a link under the modal.`}
            placement='bottom'
          >
            <Modal.Title>{imageModalTitle}</Modal.Title>
          </TestingAlert>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <Figure.Image alt={imageModalTitle} src={imageModalURL || ''} />
            <Figure.Caption>{imageModalCredit}</Figure.Caption>
          </Figure>
        </Modal.Body>
        <Modal.Footer>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={`The "Close" button is clear.  The user can also use the "escape" key activate this button.  The user is then returned to the item that opened the modal.`}
          >
            <Button variant='secondary' onClick={handleModalClose}>
              Close
            </Button>
          </TestingAlert>
        </Modal.Footer>
      </Modal>

      {/* ********************************************* */}
      <SectionDivider />
      <h3>State flower</h3>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`The link with the text "Minnesota" doesn't look like a link.  Even when hovered over with a mouse there is only a change in color that would be hard for some color blind users to pick up.`}
      >
        <p>
          {/* https://www.sos.state.mn.us/about-minnesota/state-symbols/state-flower-pink-ladys-slipper/ */}
          The showy lady’s slipper was adopted as the{' '}
          <SneakyLink href='https://mn.gov/'>Minnesota</SneakyLink> state flower
          in 1902. Since 1925 this rare wildflower has been protected by state
          law (it is illegal to pick the flowers or to uproot or unearth the
          plants)
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`The tab order of these three links is out of order compared to what would be expected (left to right).`}
      >
        <Container>
          <Row>
            <Col xs={{ order: 'last' }}>
              <ExternalLink href='https://www.sos.state.mn.us/about-minnesota/state-symbols/state-flower-pink-ladys-slipper/'>
                Secretary of State
              </ExternalLink>
            </Col>
            <Col xs>
              <ExternalLink href='https://www.revisor.mn.gov/statutes/cite/1.142'>
                State statute
              </ExternalLink>
            </Col>
            <Col xs={{ order: 'first' }}>
              <ExternalLink href='https://www.dnr.state.mn.us/snapshots/plants/showyladysslipper.html'>
                Department of Resources
              </ExternalLink>
            </Col>
          </Row>
        </Container>
      </TestingAlert>

      {/* ********************************************** */}
      <SectionDivider />
      <h3>Growth conditions</h3>
      <p>
        Cypripedium reginae grows in wetlands such as fens, wooded swamps, and
        riverbanks. Cyp. reginae thrives in neutral to basic soils but can be
        found in slightly acidic conditions. The plants often form in clumps by
        branching of the underground rhizomes. Its roots are typically within a
        few inches of the top of the soil. It prefers very loose soils and when
        growing in fens it will most often be found in mossy hummocks.
      </p>

      {/* hidden, bad external link */}

      <ul>
        {' '}
        <li>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={`The "Sargent's Nursery" link looks like a link, has descriptive text, works with both a keyboard and mouse, and has an indication it will open in a new window/tab.`}
          >
            <ExternalLink href='https://sargentsnursery.com/ladys-slippers/'>
              Sargent's Nursery
            </ExternalLink>
          </TestingAlert>
        </li>
        <li
          style={
            showHints
              ? {}
              : { position: 'absolute', left: '-99999px', height: '1px' }
          }
        >
          <TestingAlert
            isBug
            show={showHints}
            popOver={`The "University of Minnesota" link is not visible when it receives focus.`}
          >
            <a href='https://seasonwatch.umn.edu/showy-ladys-slipper'>
              University of Minnesota
            </a>
          </TestingAlert>
        </li>
        <li>
          <TestingAlert
            isWarning
            show={showHints}
            popOver={`The "Minnesota Wildflowers" link does not give the user an indication that it opens in a new window/tab.`}
          >
            <ExternalLink
              noLogo
              href='https://www.minnesotawildflowers.info/flower/showy-ladys-slipper'
            >
              Minnesota Wildflowers
            </ExternalLink>
          </TestingAlert>
        </li>
      </ul>

      {/* ********************************  */}
      <SectionDivider />
      <TestingAlert
        isBug
        show={showHints}
        popOver={`Because the orchid icon is ignored by assistive technologies (due to aria-hidden attribute) the link has no text available to assistive technologies.  Either descriptive text or an appropriate alt text on the image is needed.`}
      >
        <div className='text-center'>
          <a href='https://en.wikipedia.org/wiki/Cypripedium_reginae'>
            <img
              src={OrchidIcon}
              alt=''
              aria-hidden
              style={{ width: '150px' }}
            />
          </a>
        </div>
      </TestingAlert>
      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Cypripedium_reginae'>
          Wikipedia
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://www.sos.state.mn.us/about-minnesota/state-symbols/state-flower-pink-ladys-slipper/'>
          Minnesota Secretary of State
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
