import React, { ReactElement } from 'react';
import { Card as BSCard, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import { checks } from '../sampleSite/Zoom';
import Iris from '../../images/iris.svg';
import ROUTES from '../../AppRouteNames';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

const Card = styled(BSCard)`
  margin-bottom: 20px;
`;

const LandscapeOnly = styled.div`
  @media (orientation: landscape) {
    display: none;
  }
`;

const PortraitOnly = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
`;

const Zoom = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_ZOOM.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.zoom}
      bugTotal={3}
      sampleRoute={ROUTES.ZOOM}
    >
      <TestingAlert
        isCorrect
        show={showHints}
        popOver={
          'The text inside the "Irises by Van Gogh" section is always readable regardless of zoom or screen size.'
        }
      >
        <Card>
          <Card.Body>
            <img
              width='128'
              alt='Irises by Van Gogh'
              style={{
                float: 'left',
                paddingRight: '15px',
                paddingBottom: '15px',
              }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/500px-Irises-Vincent_van_Gogh.jpg'
            />
            Irises is one of several paintings of irises by the Dutch artist
            Vincent van Gogh, and one of a series of paintings he made at the
            Saint Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France, in
            the last year before his death in 1890. Van Gogh started painting
            Irises within a month of entering the asylum, in May 1889, working
            from nature in the hospital garden.
          </Card.Body>
        </Card>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        id='pp2'
        popOver={
          'This section forces the user to scroll horizontally or causes the text to be extremely small when the width is set to 320 px'
        }
      >
        <div style={{ minWidth: '700px' }}>
          <Card>
            <Card.Body>
              <img
                width='128'
                alt='Iris bloom'
                style={{
                  float: 'left',
                  paddingRight: '15px',
                  paddingBottom: '15px',
                }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg/256px-Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg'
              />
              Iris is a flowering plant genus of 310 accepted species[1] with
              showy flowers. As well as being the scientific name, iris is also
              widely used as a common name for all Iris species, as well as some
              belonging to other closely related genera. A common name for some
              species is flags, while the plants of the subgenus Scorpiris are
              widely known as junos, particularly in horticulture. It is a
              popular garden flower.
            </Card.Body>
          </Card>
        </div>
      </TestingAlert>{' '}
      <TestingAlert
        isBug
        show={showHints}
        popOver={'The text is cut off when the text is zoomed in.'}
      >
        <div
          style={{
            maxHeight: '145px',
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Card>
            <Card.Body>
              <img
                width='128'
                alt='Iris bloom'
                style={{
                  float: 'left',
                  paddingRight: '15px',
                  paddingBottom: '15px',
                }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%D8%B2%D9%86%D8%A8%D9%82_%D8%AE%D9%88%D8%AF%D8%B1%D9%88_%D8%AF%D8%B1_%D8%A8%D9%87%D8%A8%D9%87%D8%A7%D9%86.jpg/256px-%D8%B2%D9%86%D8%A8%D9%82_%D8%AE%D9%88%D8%AF%D8%B1%D9%88_%D8%AF%D8%B1_%D8%A8%D9%87%D8%A8%D9%87%D8%A7%D9%86.jpg'
              />
              Iris is extensively grown as ornamental plant in home and
              botanical gardens. Presby Memorial Iris Gardens in New Jersey, for
              example, is a living iris museum with over 10,000 plants, while in
              Europe the most famous iris garden is arguably the Giardino
              dell&apos;Iris in Florence (Italy) which every year hosts a well
              attended iris breeders&apos; competition. Irises, especially the
              multitude of bearded types, feature regularly in shows such as the
              Chelsea Flower Show. <img width={30} src={Iris} alt='' />
            </Card.Body>
          </Card>
        </div>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={
          'The content is only available when the browser window is set to portrait (width is less than height)'
        }
      >
        <Card>
          <Card.Body>
            <LandscapeOnly>
              <img
                width='128'
                alt='Yellow iris'
                style={{
                  float: 'left',
                  paddingRight: '15px',
                  paddingBottom: '15px',
                }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Iris_pseudoacorus_flowering.jpg/128px-Iris_pseudoacorus_flowering.jpg'
              />
              In water purification, yellow iris (I. pseudacorus) is often used.
              The roots are usually planted in a substrate (e.g. lava-stone) in
              a reedbed-setup. The roots then improve water quality by consuming
              nutrient pollutants, such as from agricultural runoff. This highly
              aggressive grower is now considered a noxious weed and prohibited
              in some states of the US where it is found clogging natural
              waterways.
            </LandscapeOnly>
            <PortraitOnly>
              <Alert>Change to portrait to see me</Alert>
            </PortraitOnly>
          </Card.Body>
        </Card>
      </TestingAlert>
      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Iris_(plant)'>
          Wikipedia Iris flower
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Irises_(painting)'>
          Wikipedia Irises painting
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default Zoom;
