import React, { ReactElement } from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';
import Minnesota from '../../images/noun-minnesota.svg';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

export const checks = [
  'Heading text describes the content underneath',
  'No skipping levels',
  'The page title is a H1',
  'All elements are in an appropriate landmark (or role)',
];

const Headings = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.HEADINGS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.headings}
      bugTotal={5}
    >
      <Row>
        <Col>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={'This alert has the correct role of "alert".'}
          >
            <Alert variant='warning'>
              As the temperatures start to drop, watch out for loon fallout
              where loons will fall from the sky.
              <br />
              <Alert.Link href='https://bringmethenews.com/minnesota-news/loons-are-falling-from-the-sky-in-minnesota-and-wisconsin'>
                Read more about loon fallout
              </Alert.Link>
              .
            </Alert>
          </TestingAlert>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={
              'The heading "Common Loon" functions as the page title and is correctly coded as a "h1"'
            }
          >
            <h1>Common Loon</h1>
          </TestingAlert>
          <div className='clearfix'>
            <h2>About</h2>
            <img
              className='float-start'
              style={{ paddingRight: '15px', paddingBottom: '15px' }}
              width='256'
              alt='Common Loon swimming'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Gavia_immer_-Minocqua%2C_Wisconsin%2C_USA_-swimming-8.jpg/256px-Gavia_immer_-Minocqua%2C_Wisconsin%2C_USA_-swimming-8.jpg'
            />
            <p>
              The common loon or great northern diver (Gavia immer) is a large
              member of the loon, or diver, family of birds.
            </p>
          </div>

          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'There is normally only 1 H1 per page.  The H1 should be the page title.'
            }
          >
            <h1 className='h2'>Appearance</h1>
          </TestingAlert>
          <p>
            Breeding adults have a plumage that includes a broad black head and
            neck with a greenish, purplish, or bluish sheen, blackish or
            blackish-grey upperparts, and pure white underparts except some
            black on the undertail coverts and vent. The sexes look alike,
            though males are significantly heavier than females.
          </p>
          <TestingAlert
            isWarning
            show={showHints}
            popOver={
              'If possible, heading names should be unique.  The heading "Habitat is used twice.'
            }
          >
            <h2>Habitat</h2>
          </TestingAlert>

          <p>
            Their summer habitat ranges from wooded lakes to tundra ponds. The
            lakes must be large enough for flight take-off, and provide a large
            population of small fish. Deep lakes with warm surface waters,
            relatively low biological productivity and low turbidity where their
            fish prey are easy to see are habitats where breeding loons are more
            successful in raising young. For protection from predators, common
            loons favour lakes with islands and coves.
          </p>
          <h2>Behavior</h2>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The "Feeding" header skips a level.  It should be coded as a H3'
            }
          >
            <h5 className='h3'>Feeding</h5>
          </TestingAlert>
          <p>
            Fish account for about 80% of the diet of the common loon. It
            forages on fish of up to 26 cm (10 in) in length, including minnows,
            suckers, gizzard shad, rock bass, alewife, northern pike, whitefish,
            sauger, brown bullhead, pumpkinseed, burbot, walleye, bluegill,
            white crappie, black crappie, rainbow smelt, and killifish.
          </p>
          <TestingAlert
            isWarning
            show={showHints}
            popOver={
              'If possible, heading names should be unique.  The heading "Habitat is used twice.'
            }
          >
            <h3>Habitat</h3>
          </TestingAlert>
          <p>
            Loons exhibit a strong tendency to settle as breeders on a lake that
            resembles their natal one, a phenomenon termed natal habitat
            imprinting. This preference is based on two lake attributes: size
            and pH.
          </p>
          <h3>Breeding</h3>
          <p>
            The common loon&apos;s mating system is serially monogamous;
            breeding pairs jointly defend a territory consisting of an entire
            small lake or a protected bay within a large lake. A given male and
            female remain together throughout a breeding attempt, rear their own
            biological offspring, reunite each spring, and may breed together
            for many consecutive years.
          </p>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'The "Young" text acts like a header but is not coded as a  header.'
            }
          >
            <p className='h4'>Young</p>
          </TestingAlert>
          <p>
            Eggs from first clutches are typically laid in May or early June,
            the timing depending largely upon the date that lakes become
            ice-free and inhabitable. A clutch consists of two (occasionally
            one) olive-brown oval eggs with dark brown spots. Incubation is
            carried out jointly by male and female and lasts about 28 days.
            Loons often place nests along steep lake shorelines where adults can
            quickly dive underwater when approached by predators. The eggs are
            about 88 mm (3.5 in) long and 55 mm (2.2 in) wide and the two eggs
            are laid with an interval of one to three days between them, and
            hatch asynchronously. Newly hatched chicks are dark chocolate brown
            in color and have a white belly. Within hours of hatching, the young
            begin to leave the nest with the parents, swimming close by and
            sometimes riding on one parent&apos;s back.
          </p>
          <h3>Vocalizations</h3>
          <p>
            The common loon produces a variety of vocalizations, the most common
            of which are the tremolo, the yodel, the wail, and the hoot. Each of
            these calls communicates a distinct message. The frequency at which
            it vocalizes has been shown to vary based on time of day, weather,
            and season.{' '}
          </p>
        </Col>
        <Col xs={4}>
          <Card role='complementary' style={{ marginBottom: '20px' }}>
            <Card.Body>
              <TestingAlert
                isCorrect
                show={showHints}
                popOver={
                  'The "Loon calls" section is correctly coded as a complementary landmark.'
                }
              >
                <Card.Title as='h2'>Loon calls</Card.Title>
              </TestingAlert>

              <h3 className='h5'>Tremolo</h3>
              <p>
                The tremolo call—sometimes called the laughing call—is
                characterized by its short, wavering quality. It often uses this
                call to signal distress or alarm caused by territorial disputes
                or perceived threats.
              </p>
              <audio controls>
                <source
                  src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Common_loon_tremolo.ogg'
                  type='audio/ogg'
                />
                Your browser does not support the audio element.
              </audio>
              <TestingAlert
                isCorrect
                show={showHints}
                popOver={
                  'Even though the "Yodel" is not styled as "h3" it is correctly coded as a "h3"'
                }
              >
                <h3 className='h5 mt-4'>Yodel</h3>
              </TestingAlert>
              <p>
                The yodel is a long and complex call made only by the male. It
                is used in the establishment of territorial boundaries and in
                territorial confrontations, and the length of the call
                corresponds with the loon&apos;s level of aggression.
              </p>
              <audio controls>
                <source
                  src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Loon_yodel.ogg'
                  type='audio/ogg'
                />
                Your browser does not support the audio element.
              </audio>
            </Card.Body>
          </Card>
          <Card role='search'>
            <Card.Body>
              <TestingAlert
                isBug
                show={showHints}
                popOver={
                  'The state bird section has a role of "search" but has no search items.'
                }
              >
                <Card.Title as='h2' className='h4'>
                  State bird
                </Card.Title>
              </TestingAlert>
              In 1961, the Common Loon was designated the state bird of
              <div className='text-center'>
                <img alt='' src={Minnesota} style={{ width: '50%' }} />
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={
                    'The word "Minnesota" is coded as a header but does not function as one.'
                  }
                >
                  <h2>Minnesota</h2>
                </TestingAlert>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Common_loon'>
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

export default Headings;
