/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactElement } from 'react';
import { Row, Col, Button, Card as BSCard, Badge } from 'react-bootstrap';
import { CardChecklist, CheckSquare } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { docLink } from '../../js/helpers';
import ExternalLink from '../../components/ExternalLink';
import { routerArray } from '../../App';
import ROUTES from '../../AppRouteNames';
import { Link } from 'react-router-dom';

export const useHints = () => {
  const [showHints, setHints] = React.useState(false);
  const toggleHints = () => setHints(!showHints);
  return { showHints, toggleHints };
};

const nextPrevious = (currentRoute: string) => {
  const sampleSitePages = routerArray[0].children.find(
    (path) => path.path === ROUTES.SAMPLE.path
  )?.children;

  const returnValue = { previous: undefined, next: undefined };
  if (!sampleSitePages || sampleSitePages.length === 0) {
    return returnValue;
  }
  const currentRouteIndex = sampleSitePages.findIndex(
    (page) => page.path === currentRoute
  );

  return {
    previous: sampleSitePages[currentRouteIndex - 1],
    next: sampleSitePages[currentRouteIndex + 1],
  };
};

// ////////////////////////

const Icon = styled(CardChecklist).attrs({ size: 100 })`
  position: absolute;
  left: var(--bs-card-spacer-x);
  top: var(--bs-card-spacer-y);
`;

const Card = styled(BSCard)`
  margin-bottom: 20px;
  background-color: #efe9ed;
`;

const CardBody = styled(Card.Body)`
  padding-left: 140px;
`;

const ListIcon = styled(CheckSquare).attrs({})`
  position: absolute;
  left: 0;
  top: 5px;
`;

const ListItemLi = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 1em;
`;

const ListItem: React.FC<PropsWithChildren> = ({ children }) => (
  <ListItemLi>
    <ListIcon />
    {children}
  </ListItemLi>
);

// ////////////////////////

type Props = {
  toggleHints: () => void;
  showHints: boolean;
  title: string;
  checks?: Array<string | ReactElement>;
  docHeader: string;
  route: string;
  bugTotal?: number;
};

const Template: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  route,
  showHints,
  toggleHints,
  checks = [],
  docHeader = '',
  bugTotal,
}) => {
  const [numBugs, setNumBugs] = React.useState(0);

  const { previous, next } = nextPrevious(route);

  const onClick = () => {
    toggleHints();
    if (bugTotal) {
      setNumBugs(bugTotal);
    } else {
      let counter = 0;
      React.Children.forEach(children, function (child: any) {
        if (child.props.isBug) {
          counter++;
        }
      });
      setNumBugs(counter);
    }
  };

  const nextLabel = next?.handle?.label
    ? `Next - ${next?.handle?.label}`
    : ROUTES.SAMPLE.label;
  const prevLabel = previous?.handle?.label
    ? `Previous - ${previous?.handle?.label}`
    : ROUTES.SAMPLE.label;

  return (
    <>
      <Row>
        <Col>
          <h1>{title}</h1>
          <Card>
            <CardBody>
              <Icon />
              <Card.Title>Things to check for:</Card.Title>
              <ul className='list-unstyled'>
                {checks.map((check, index) => (
                  <ListItem key={index}>{check}</ListItem>
                ))}
              </ul>
              <Button variant='primary' onClick={onClick}>
                {showHints ? 'Hide' : 'Show'} hints{' '}
                {showHints ? <Badge bg='secondary'>{numBugs}</Badge> : null}
              </Button>{' '}
              <ExternalLink buttonVariant='secondary' href={docLink(docHeader)}>
                How to test
              </ExternalLink>
            </CardBody>
          </Card>
          <p>HELPER</p>
          <div>{children}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={`../${previous?.path || ''}`}>
            <Button>{prevLabel}</Button>
          </Link>{' '}
          <Link to={`../${next?.path || ''}`}>
            <Button>{nextLabel}</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Template;
