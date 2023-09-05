import React, { ReactElement } from 'react';
import { Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import styled from 'styled-components';
// import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import { checks } from '../sampleSite/Headings';
import ROUTES from '../../AppRouteNames';
import stateFairAttendance from '../../images/stateFairAttendance.png';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

/*

ADD table of performer that uses color, but also has another icon
https://assets.mnstatefair.org/pdf/21-gs-entertainers-year.pdf
*/

const UnstyledLink = styled.a`
  text-decoration: none;
`;

const StyledLink = styled.a``;

const ImageCaption = styled.figcaption`
  font-style: italic;
  color: #a1a1a1;
`;

const Color = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const iconColor = '#8080FF';
  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_HEADINGS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={5}
    >
      <h1>Minnesota State Fair</h1>
      <Row>
        <Col>
          <p>
            The Minnesota State Fair is the state fair of the U.S. state of{' '}
            <UnstyledLink href='https://en.wikipedia.org/wiki/Minnesota'>
              Minnesota
            </UnstyledLink>
            . Also known by its slogan, &quot;The Great Minnesota
            Get-Together&quot;, it is the largest state fair in the United
            States by average daily attendance and the second-largest state fair
            in the United States by total attendance, trailing only the State
            Fair of Texas, which generally runs twice as long as the Minnesota
            State Fair. The state fairgrounds, adjacent the Saint Paul campus of
            the{' '}
            <UnstyledLink href='https://umn.edu'>
              University of Minnesota
            </UnstyledLink>
            , are in Falcon Heights, Minnesota, midway between the state&apos;s
            capital city of Saint Paul and the adjacent city of Roseville, near
            the Como Park and Saint Anthony Park neighborhoods of Saint Paul.
          </p>

          <h2>Butter sculpture</h2>
          <p>
            One of the first annual events to occur is the creation of a{' '}
            <StyledLink href='https://en.wikipedia.org/wiki/Butter_sculpture'>
              butter sculpture
            </StyledLink>
            . Each year, a new{' '}
            <StyledLink href='https://en.wikipedia.org/wiki/Princess_Kay_of_the_Milky_Way'>
              Princess Kay of the Milky Way
            </StyledLink>{' '}
            is selected to promote Minnesota&apos;s dairy industry. Part of the
            job involves posing for several hours in a walk-in, glass-walled
            refrigerator as a 90-pound (41 kg) block of butter is carved into a
            head with her likeness. Butter makers started sculpting their
            products at the fair as far back as 1898, although the
            head-sculpting tradition did not begin until 1964.
          </p>

          <Card color='light' style={{ backgroundColor: '#F0F0F0' }}>
            <Card.Body>
              <h3>Links</h3>
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
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <h2>Minnesota State Fair attendance</h2>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
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

        <Col>
          <Card>
            <Card.Body>
              <figure>
                <img
                  style={{ width: '100%' }}
                  alt='Fairchild - Minnesota State Fair mascot'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fairchild.JPG/512px-Fairchild.JPG'
                />
                <ImageCaption>
                  The State Fair Gopher &apos;Fairchild&apos; greets fairgoers.
                </ImageCaption>
              </figure>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> Grandstand shows (2023)</h2>
          <Table>
            <thead>
              <tr>
                <th>Performer/Act</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Black Keys with the Velveteers</td>
                <td>Aug. 24, 2023</td>
              </tr>
              <tr>
                <td>The CHICKS with Wild Rivers</td>
                <td>Aug. 25, 2023</td>
              </tr>
              <tr>
                <td>Keith Urban with Lindsay Ell</td>
                <td>Aug. 26, 2023</td>
              </tr>
              <tr>
                <td>Boyz II Men and Chaka Khan with NUNNABOVE</td>
                <td>Aug. 27, 2023</td>
              </tr>
              <tr>
                <td>
                  The Turtles, Little Anthony, Gary Puckett & The Union Gap, The
                  Vogues, The Classics IV and The Cowsills
                </td>
                <td>Aug. 28, 2023</td>
              </tr>
              <tr>
                <td>Brandi Carlile with Wynonna Judd</td>
                <td>Aug. 29, 2023</td>
              </tr>
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
                <td>The Hold Steady with Bob Mould Band and Dillinger Four</td>
                <td>Sept. 2, 2023</td>
              </tr>
              <tr>
                <td>
                  Minnesota State Fair 50th Annual Amateur Talent Contest Finals
                </td>
                <td>Sept. 3, 2023</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>State Fair social media</h2>
          <ListGroup horizontal>
            <ListGroup.Item>
              <Facebook color={iconColor} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Twitter color={iconColor} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Instagram color={iconColor} />
            </ListGroup.Item>
          </ListGroup>
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

export default Color;
