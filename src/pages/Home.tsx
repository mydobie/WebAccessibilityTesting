// NOTE This is a sample page and should either be
// modified or removed from a real project

import React from 'react';

import { Jumbotron, Row, Col, Card, Button } from 'react-bootstrap';

interface Props {}

const defaultProps = {};

const Home = (props: Props) => (
  <>
    <Jumbotron>
      <h1>You Can Do This!</h1>
      <p>Web Accessibiltiy Testing for Everyone</p>
      <p>Making testing easier so everyone can participate.</p>
    </Jumbotron>
    <Row>
      <Col>
        <Card>
          <Card.Header as='h2'>Tools</Card.Header>
          <Card.Body>
            {/* <Card.Title>Tools</Card.Title> */}
            <Card.Text>
              There are numerous free tools you can use in a browser to make
              testing for accessibility easier.
            </Card.Text>
            <Button variant='primary'>Tools</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header as='h2'>How To&apos;s</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </Card.Text>
            <Button variant='primary'>How to</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header as='h2'>Sample Website</Card.Header>
          <Card.Body>
            {/* <Card.Subtitle>Card Subtitle</Card.Subtitle> */}
            <Card.Text>
              Sample website to practice your web accessibility testing skills.
              Errors are clearly marked.
            </Card.Text>
            <Button variant='primary'>Sample Site</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
);

Home.defaultProps = defaultProps;
export default Home;
