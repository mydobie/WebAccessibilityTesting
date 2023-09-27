// Page rendered when url doesn't match route in App.jsx

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Icon1Circle,
  Icon2Circle,
  Icon3Circle,
  Icon4Circle,
  Icon5Circle,
} from 'react-bootstrap-icons';
import Crowd from '../images/noun-crowd';
import Working from '../images/noun-working';
import ExternalLink from '../components/ExternalLink';
import ROUTES from '../AppRouteNames';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const iconProps = { size: '25' };
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

const ListGroupItem = styled(ListGroup.Item).attrs((/* props */) => ({
  as: 'li',
  className: 'list-group-item',
}))`
  svg {
    margin-right: 10px;
  }
`;

const StyledListGroup = styled(ListGroup).attrs(() => ({
  as: 'ol',
  className: 'list-group',
}))``;

// *** Main component ***
const GraceHopper = (/* props */): ReactElement => (
  <>
    <Row>
      <Col>
        <h1>Grace Hopper Celebration Session</h1>

        <div className='h2'>
          No One Left Behind: Easy and Engaging Web Accessibility Testing
        </div>
        <p>
          Web accessibility doesn&apos;t need to be hard, complicated or require
          a lot of fancy tools. We will learn some techniques that anyone can do
          to help catch some of the major accessibility issues. Before we get
          started, there are a couple of things that we need.
        </p>
      </Col>

      <Col sm={3} className='d-none d-sm-block'>
        <Crowd />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card bg={'light'}>
          <Card.Body>
            <Card.Title>Things to do</Card.Title>

            <StyledListGroup>
              <ListGroupItem>
                <Icon1Circle {...iconProps} title='step 1' />
                Install{' '}
                <ExternalLink href='https://wave.webaim.org/extension/'>
                  WAVE browser extension
                </ExternalLink>
                {/*                 {' '} 
                (preferred) . OR Bookmark{' '}
                <ExternalLink href='https://wave.webaim.org/'>
                  online WAVE evaluator
                </ExternalLink>*/}
              </ListGroupItem>
              <ListGroupItem>
                <Icon2Circle {...iconProps} title='step 2' />
                Install{' '}
                <ExternalLink href='https://www.deque.com/axe/browser-extensions/'>
                  axe Dev tools (free version)
                </ExternalLink>{' '}
                (optional)
              </ListGroupItem>
              <ListGroupItem>
                <Icon3Circle {...iconProps} title='step 3' />
                (Mac only){' '}
                <ExternalLink href='https://articulate.com/support/article/How-to-Enable-Tab-Key-Navigation-on-a-Mac'>
                  Enable tab navigation
                </ExternalLink>{' '}
                or use Chrome
              </ListGroupItem>
              <ListGroupItem>
                <Icon4Circle {...iconProps} title='step 4' />
                Bookmark{' '}
                <ExternalLink href='https://docs.google.com/document/d/1cap2XjzHsKvB8JgHDAyM-5KT5_KOqGdMo87lNJ6leAU'>
                  Hand-out
                </ExternalLink>
              </ListGroupItem>
              <ListGroupItem>
                <Icon5Circle {...iconProps} title='step 5' />
                Bookmark{' '}
                <Link
                  to={`../${ROUTES.SAMPLE.path}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sample site{' '}
                  <BoxArrowUpRight
                    size={15}
                    aria-label='opens in a new window'
                  />
                </Link>
              </ListGroupItem>
            </StyledListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xs={12}>
        <h2>Presenter</h2>
      </Col>
      <Col sm={2} className='d-none d-sm-block'>
        <Working />
      </Col>

      <Col>
        <p>
          <strong>Kim Doberstein</strong>
          <br />
          Principal Front End Developer at Red Hat
          <br />
          Mom, Minnesotan, Dancer, Runner, Bath fizzy maker, Yogi <br />
          kdoberst@redhat.com or kimdobie@gmail.com
        </p>
      </Col>
    </Row>
  </>
);

export default GraceHopper;
