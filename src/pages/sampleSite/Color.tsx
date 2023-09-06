import React, { ReactElement, PropsWithChildren } from 'react';
import { Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import ROUTES from '../../AppRouteNames';
import stateFairAttendance from '../../images/stateFairAttendance.png';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import star from '../../images/noun-star.svg';

export const checks = [
  'Page content makes sense without color',
  'There is at least a 3 : 1 contrast ratio for larger text',
  'There is at least 4.5 : 1 contrast ratio for smaller text',
];

const UnstyledLink = styled.a`
  text-decoration: none;
`;

const StyledLink = styled.a``;

const StyledRow = styled.tr`
  background-color: #e7f0fd;
`;

const Key = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #e7f0fd;
  background-image: url(${star});
  background-position: center;
  background-repeat: no-repeat;
`;

const ImageCaption = styled.figcaption`
  font-style: italic;
  color: #a1a1a1;
`;

const RepeatCell: React.FC<PropsWithChildren> = ({ children }) => (
  <td>
    {children} <img alt='repeat performer' src={star} />
  </td>
);

const Color = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const iconColor = '#8080FF';
  return (
    <Template
      showHints={showHints}
      title={ROUTES.COLOR.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={5}
    >
      <h1>Minnesota State Fair</h1>
      <Row className='mb-4'>
        <Col>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'It is difficult to tell that the text "Minnesota: and "University of Minnesota" are links without color'
            }
          >
            <p>
              The Minnesota State Fair is the state fair of the U.S. state of{' '}
              <UnstyledLink href='https://en.wikipedia.org/wiki/Minnesota'>
                Minnesota
              </UnstyledLink>
              . Also known by its slogan, &quot;The Great Minnesota
              Get-Together&quot;, it is the largest state fair in the United
              States by average daily attendance and the second-largest state
              fair in the United States by total attendance, trailing only the
              State Fair of Texas, which generally runs twice as long as the
              Minnesota State Fair. The state fairgrounds, adjacent the Saint
              Paul campus of the{' '}
              <UnstyledLink href='https://umn.edu'>
                University of Minnesota
              </UnstyledLink>
              , are in Falcon Heights, Minnesota, midway between the
              state&apos;s capital city of Saint Paul and the adjacent city of
              Roseville, near the Como Park and Saint Anthony Park neighborhoods
              of Saint Paul.
            </p>
          </TestingAlert>
          <h2>Butter sculpture</h2>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={
              'It is easy to tell that the links are links without color.  The link color has enough contrast with the background.'
            }
          >
            <p>
              One of the first annual events to occur is the creation of a{' '}
              <StyledLink href='https://en.wikipedia.org/wiki/Butter_sculpture'>
                butter sculpture
              </StyledLink>
              . Each year, a new{' '}
              <StyledLink href='https://en.wikipedia.org/wiki/Princess_Kay_of_the_Milky_Way'>
                Princess Kay of the Milky Way
              </StyledLink>{' '}
              is selected to promote Minnesota&apos;s dairy industry. Part of
              the job involves posing for several hours in a walk-in,
              glass-walled refrigerator as a 90-pound (41 kg) block of butter is
              carved into a head with her likeness. Butter makers started
              sculpting their products at the fair as far back as 1898, although
              the head-sculpting tradition did not begin until 1964.
            </p>
          </TestingAlert>

          <Card color='light' style={{ backgroundColor: '#F0F0F0' }}>
            <Card.Body>
              <h3>Links</h3>
              <TestingAlert
                isBug
                show={showHints}
                popOver={
                  'There is not enough contrast between the link color and the background color'
                }
              >
                <ul>
                  <li>
                    <UnstyledLink href='https://www.mnstatefair.org/'>
                      Minnesota State Fair homepage
                    </UnstyledLink>
                  </li>
                  <li>
                    <UnstyledLink href='https://www.mnstatefair.org/transportation/free-park-and-ride/'>
                      Park and ride information
                    </UnstyledLink>
                  </li>
                  <li>
                    <UnstyledLink href='https://www.facebook.com/minnesotastatefair/'>
                      Minnesota State Fair Facebook page
                    </UnstyledLink>
                  </li>
                </ul>
              </TestingAlert>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <h2>Minnesota State Fair attendance</h2>
              <TestingAlert
                isBug
                show={showHints}
                popOver={
                  'Without color it is difficult to know what line belongs to each year'
                }
              >
                <ExternalLink
                  href='https://infogram.com/mn-state-fair-attendance-1g43mn7jo9442zy'
                  noLogo
                >
                  <img
                    src={stateFairAttendance}
                    alt='minnesota state fair attendance per day per year'
                    style={{ width: '100%' }}
                  />
                </ExternalLink>
              </TestingAlert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col>
          <h2>Mascot</h2>
          <p>
            The fair&apos;s mascots are two anthropomorphized gophers. The
            choice of gopher as mascots was an homage to the University of
            Minnesota mascot which is also a gopher and was a historical
            reference to the expansion of railroads in Minnesota, towns popping
            up across the state like gophers. For these reasons, Minnesota is
            sometimes referred to as the gopher state. Fairchild, the original
            mascot, was suggested in a statewide contest by Gladys Anderson
            Brown in 1966 in honor of Henry S. Fairchild who advocated using the
            former Ramsey County Poor Farm as the permanent site of the fair.
          </p>
        </Col>

        <Col sm={5}>
          <Card>
            <Card.Body>
              <figure>
                <img
                  style={{ width: '100%' }}
                  alt='Fairchild - Minnesota State Fair mascot'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fairchild.JPG/512px-Fairchild.JPG'
                />
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={
                    'There is not contrast between the text and background colors'
                  }
                >
                  <ImageCaption>
                    The State Fair Gopher &apos;Fairchild&apos; greets
                    fairgoers.
                  </ImageCaption>
                </TestingAlert>
              </figure>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col>
          <h2> Grandstand shows (2023)</h2>
          <TestingAlert
            isCorrect
            show={showHints}
            popOver={
              'Users can identify rows with repeat performers without color.  The star icon helps identify rows without solely relying on color.'
            }
          >
            <Table>
              <thead>
                <tr>
                  <th>Performer/Act</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <StyledRow>
                  <RepeatCell>The Black Keys with the Velveteers</RepeatCell>
                  <td>Aug. 24, 2023</td>
                </StyledRow>
                <StyledRow>
                  <RepeatCell>The CHICKS with Wild Rivers</RepeatCell>
                  <td>Aug. 25, 2023</td>
                </StyledRow>
                <StyledRow>
                  <RepeatCell>Keith Urban with Lindsay Ell</RepeatCell>
                  <td>Aug. 26, 2023</td>
                </StyledRow>
                <tr>
                  <td>Boyz II Men and Chaka Khan with NUNNABOVE</td>
                  <td>Aug. 27, 2023</td>
                </tr>
                <tr>
                  <td>
                    The Turtles, Little Anthony, Gary Puckett & The Union Gap,
                    The Vogues, The Classics IV and The Cowsills
                  </td>
                  <td>Aug. 28, 2023</td>
                </tr>
                <StyledRow>
                  <RepeatCell>Brandi Carlile with Wynonna Judd</RepeatCell>
                  <td>Aug. 29, 2023</td>
                </StyledRow>
                <tr>
                  <td>Yung Gravy with bbno$</td>
                  <td>Aug. 30, 2023</td>
                </tr>
                <tr>
                  <td>DURAN DURAN with Bastille and Nile Rodgers & CHIC</td>
                  <td>Aug. 31, 2023</td>
                </tr>
                <tr>
                  <td>Jonas Brothers with Lawrence</td>
                  <td>Sept. 1, 2023</td>
                </tr>
                <tr>
                  <td>
                    The Hold Steady with Bob Mould Band and Dillinger Four
                  </td>
                  <td>Sept. 2, 2023</td>
                </tr>
                <StyledRow>
                  <RepeatCell>
                    Minnesota State Fair 50th Annual Amateur Talent Contest
                    Finals
                  </RepeatCell>
                  <td>Sept. 3, 2023</td>
                </StyledRow>
              </tbody>
            </Table>
          </TestingAlert>
          <div aria-hidden>
            <Key /> Repeat performer
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>State Fair social media</h2>
          <TestingAlert
            isBug
            show={showHints}
            popOver={
              'There is not enough contrast between the icon image and the background.  This is important because the icon is the only content of a link.'
            }
          >
            <ListGroup horizontal>
              <ListGroup.Item>
                <ExternalLink
                  noLogo
                  href='https://www.facebook.com/minnesotastatefair/'
                >
                  <Facebook color={iconColor} aria-label='Facebook' />
                </ExternalLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink noLogo href='https://twitter.com/mnstatefair'>
                  <Twitter color={iconColor} aria-label='Twitter' />
                </ExternalLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <ExternalLink
                  noLogo
                  href='https://www.instagram.com/mnstatefair/'
                >
                  <Instagram color={iconColor} aria-color='Instagram' />
                </ExternalLink>
              </ListGroup.Item>
            </ListGroup>
          </TestingAlert>
        </Col>
      </Row>
      <Credit>
        Information from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Minnesota_State_Fair'>
          Wikipedia
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href='https://www.mnstatefair.org/'>
          Minnesota State Fair homepage
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default Color;
