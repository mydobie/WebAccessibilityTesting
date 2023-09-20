/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactElement } from 'react';
import {
  Row,
  Col,
  Button,
  Card as BSCard,
  Badge,
  Alert,
} from 'react-bootstrap';
import { CardChecklist, CheckSquare } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { docLink } from '../../js/helpers';
import ExternalLink from '../../components/ExternalLink';
import { routerArray } from '../../App';
import ROUTES from '../../AppRouteNames';
import lightBulb from '../../images/lightBulb.svg';
import { Link, useLocation } from 'react-router-dom';
import Gears from '../../images/noun-gears';

export const useHints = () => {
  const [showHints, setHints] = React.useState(false);
  const toggleHints = () => setHints(!showHints);
  return { showHints, toggleHints };
};

const useIsDemo = () => {
  const { pathname } = useLocation();
  const routePath = pathname.split('/');
  const parentRoute = routePath[routePath.length - 2];

  return parentRoute === ROUTES.DEMO.path;
};

export const useNextPrevious = () => {
  const { pathname } = useLocation();
  const routePath = pathname.split('/');
  const currentRoute = routePath[routePath.length - 1];
  const parentRoute = routePath[routePath.length - 2];

  const parent = routerArray[0].children.find(
    (path) => path.path === parentRoute
  );

  const parentArray = parent?.children;

  if (!parentArray || parentArray.length === 0) {
    return { previous: undefined, next: undefined };
  }

  let currentRouteIndex = -1;

  const current = parentArray.find((page, index) => {
    if (page.path === currentRoute) {
      currentRouteIndex = index;
      return true;
    }
    return false;
  });

  const previous = { ...parentArray[currentRouteIndex - 1] };
  const next = { ...parentArray[currentRouteIndex + 1] };

  if (!previous.handle) {
    // @ts-ignore
    previous.handle = { label: parent.handle.label || '' };
  }
  if (!next.handle) {
    // @ts-ignore
    next.handle = { label: parent.handle.label || '' };
  }
  return {
    previous,
    next,
    current,
  };
};

// ////////////////////////

const Icon = styled(CardChecklist).attrs({ size: 100 })`
  position: absolute;
  left: var(--bs-card-spacer-x);
  top: var(--bs-card-spacer-y);
`;

export const Card = styled(BSCard)`
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
  helper?: ReactElement | string;
  docHeader: string;
  bugTotal?: number;
  sampleRoute?: {
    path: string;
    label: string;
  };
  noHints?: boolean;
};

const Template: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  showHints,
  toggleHints,
  checks = [],
  docHeader = '',
  bugTotal,
  helper,
  sampleRoute,
  noHints,
}) => {
  const [numBugs, setNumBugs] = React.useState(0);
  const isDemo = useIsDemo();
  const { previous, next } = useNextPrevious();

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
              {noHints ? null : (
                <>
                  <Button variant='primary' onClick={onClick}>
                    {showHints ? 'Hide' : 'Show'} hints{' '}
                    {showHints ? <Badge bg='secondary'>{numBugs}</Badge> : null}
                  </Button>{' '}
                </>
              )}

              <ExternalLink buttonVariant='secondary' href={docLink(docHeader)}>
                How to test
              </ExternalLink>
            </CardBody>
          </Card>
          {helper ? (
            <Alert variant='primary'>
              <Row>
                <Col sm='auto' className='.d-none .d-sm-block'>
                  <img src={lightBulb} alt='Learn more' />
                </Col>
                <Col>{helper}</Col>
              </Row>
            </Alert>
          ) : null}

          <div>{children}</div>
        </Col>
      </Row>
      {isDemo ? (
        <Alert variant='secondary'>
          <Gears size='50px' />
          <Link
            to={`/${ROUTES.SAMPLE.path}${
              sampleRoute ? `/${sampleRoute.path}` : ''
            }`}
          >
            Sample site{sampleRoute ? ` - ${sampleRoute.label}` : ''}
          </Link>
        </Alert>
      ) : null}
      <Row>
        <Col>
          <Link to={`../${previous?.path || ''}`} className='btn btn-secondary'>
            {prevLabel}
          </Link>{' '}
          <Link to={`../${next?.path || ''}`} className='btn btn-primary'>
            {nextLabel}
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Template;
