import React, { PropsWithChildren, ReactElement } from 'react';
import { Row, Col, Button, Card as BSCard, Badge } from 'react-bootstrap';
import { CardChecklist, CheckSquare } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { docLink } from '../../js/helpers';
import ExternalLink from '../../components/ExternalLink';

export const useHints = () => {
  const [showHints, setHints] = React.useState(false);
  const toggleHints = () => setHints(!showHints);
  return { showHints, toggleHints };
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
};

const Template: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  showHints,
  toggleHints,
  checks = [],
  docHeader = '',
}) => {
  const [numBugs, setNumBugs] = React.useState(0);

  const onClick = () => {
    toggleHints();
    let counter = 0;
    React.Children.forEach(children, function (child: any) {
      if (child.props.isBug) {
        counter++;
      }
    });
    setNumBugs(counter);
  };

  return (
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

        <div>{children}</div>
      </Col>
    </Row>
  );
};

export default Template;
