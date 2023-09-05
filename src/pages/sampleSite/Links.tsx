import React, { ReactElement } from 'react';

// import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import { Container, Row, Col } from 'react-bootstrap';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

// const FormGroup = styled(Form.Group).attrs({
//   className: 'mb-3',
// })``;

// const RequiredLabel = styled(Form.Label)`
//   ::before {
//     content: '* ';
//   }
// `;

const Links = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks: string[] = [];

  return (
    <Template
      showHints={showHints}
      title={ROUTES.LINKS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <Container>
        <Row>
          <Col>
            <h2>A news story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex tellus, euismod eu faucibus et, porttitor non lectus. Duis
              maximus mi nec tincidunt pretium.
            </p>
            <TestingAlert
              isBug
              show={showHints}
              id='morelink1'
              popOver={`"Read more" link is not descriptive to let the user know where the link will go.  In addition, there multiple links with the same text.`}
            >
              <p>
                <a href='https://google.com'>Read more</a>
              </p>
            </TestingAlert>
          </Col>
          <Col>
            <h2>Another story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex tellus, euismod eu faucibus et, porttitor non lectus. Duis
              maximus mi nec tincidunt pretium.
            </p>
            <TestingAlert
              isBug
              show={showHints}
              id='morelink2'
              popOver={`"Read more" link is not descriptive to let the user know where the link will go.  In addition, there multiple links with the same text.`}
            >
              <p>
                <a href='https://google.com'>Read more</a>
              </p>
            </TestingAlert>
          </Col>
          <Col>
            <h2>Last story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex tellus, euismod eu faucibus et, porttitor non lectus. Duis
              maximus mi nec tincidunt pretium.
            </p>
            <TestingAlert
              isWarning
              show={showHints}
              id='morelink3'
              popOver={`Screen readers users have a more descriptive link, but for non-screen reader users, the link text is not unique.`}
            >
              <p>
                <a href='https://google.com'>
                  Read more
                  <span className='visually-hidden'> about last story</span>
                </a>
              </p>
            </TestingAlert>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Helpful links</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ex tellus, euismod eu faucibus et, porttitor non lectus. Duis
              maximus mi nec tincidunt pretium.
            </p>
            {/*
            TODO:
            button vs link

            accessible name is different than the visible name
            */}
          </Col>
        </Row>
      </Container>
    </Template>
  );
};

export default Links;
