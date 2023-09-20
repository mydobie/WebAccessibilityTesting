import React, { ReactElement } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';
import northShore from '../../images/northShore.png';
import wordText from '../../images/pictograph-text.png';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

export const checks = [
  'No scrolling is required when screen is 320px wide.  All content is readable.',
  'No scrolling is needed when text is zoomed to 200%.  All content is readable.',
  'All content is available regardless of orientation (landscape vs portrait)',
];

const LandscapeOnly = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
`;

const Zoom = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.ZOOM.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.zoom}
      bugTotal={3}
    >
      <h1>Gichigami (Lake Superior)</h1>
      <TestingAlert
        isBug
        show={showHints}
        popOver={
          'Lake Superior content and shoreline photograph are not displayed in portrait mode (width is less than height) '
        }
      >
        <LandscapeOnly>
          <Row className='mb-4'>
            <Col>
              Lake Superior is the largest freshwater lake in the world by
              surface area and the third-largest by volume, holding 10% of the
              world&apos;s surface fresh water. Located in central North
              America, it is the northernmost and westernmost of the Great Lakes
              of North America, straddling the Canada–United States border with
              the Canadian province of Ontario to the north and east and the
              U.S. states of Minnesota to the west and Wisconsin and Michigan to
              the south.
              <div className='text-center mt-4'>
                <img
                  src={northShore}
                  alt='Lake Superior shoreline'
                  style={{ width: '85%' }}
                />
              </div>
            </Col>
          </Row>
        </LandscapeOnly>
      </TestingAlert>
      <TestingAlert
        isCorrect
        show={showHints}
        popOver={
          'Port of Duluth content and video respond to smaller screen widths and zoom so all content is always available'
        }
      >
        <Row>
          <Col>
            <h2>Port of Duluth</h2>
            <p>
              The Duluth Ship Canal is an artificial canal cut through Minnesota
              Point, providing direct access to Duluth harbor from Lake
              Superior. Begun privately in 1871, it was put under federal
              supervision and maintenance several years later. It is still an
              important component of the harbor facilities.
            </p>
            <p>
              In its current configuration, the canal is defined by a pair of
              breakwaters 1,720 feet (520 m) long and 300 feet (91 m) apart,
              constructed of concrete set on timber and stone cribbing. The
              canal is maintained at 245 feet (75 m) wide and 28 feet (8.5 m)
              LWD, allowing passage of ocean-going ships.
            </p>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h2>Duluth canal live cam (no audio)</h2>
                <iframe
                  width='100%'
                  height='215'
                  src='https://www.youtube.com/embed/9k_sg8rhsgk?si=jfCPq-33TU2ICm5X'
                  title='Duluth canal live cam (no audio)'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </TestingAlert>
      <div style={{ minWidth: '900px' }}>
        <h2>History</h2>
        <div className='clearfix'>
          <div className={'float-start pe-3'}>
            <img
              width='256'
              alt='Pictographs at Lake Superior Provincial Park, Ontario'
              src='https://upload.wikimedia.org/wikipedia/commons/3/39/AgawaRock23.jpg'
            />
            <br />
            <TestingAlert
              isBug
              show={showHints}
              popOver={
                'The "Pictographs, Ontario" text is actually an image so it does not increase in size when the text is zoomed and can become blurry when zoomed it.'
              }
            >
              <img alt='Pictographs, Ontario' src={wordText} />
            </TestingAlert>
          </div>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The history content requires horizontal scrolling on zoom or smaller widths'
            }
          >
            The Anishinaabe people (an ethnic grouping including the
            Ojibwe/Chippewa) have inhabited the Lake Superior region for over
            five hundred years and were preceded by the Dakota, Meskwaki (Fox),
            Menominee, Nipigon, Noquet and Gros Ventres. After the arrival of
            Europeans, the Anishinaabe made themselves middle-men between the
            French fur traders and other Native peoples. They soon became the
            dominant Native American nation in the region: they forced out the
            Sioux and Fox and won a victory against the Iroquois west of Sault
            Ste. Marie in 1662. By the mid-18th century, the Ojibwe occupied all
            of Lake Superior&apos;s shores.
          </TestingAlert>
        </div>
      </div>
      <Credit>
        Information and photographs are from Wikipeida{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Lake_Superior'>
          Lake Superior
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Duluth_Ship_Canal'>
          Duluth Ship Canal
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

export default Zoom;
