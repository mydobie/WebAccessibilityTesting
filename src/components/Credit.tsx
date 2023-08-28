import React, { PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line @typescript-eslint/ban-types
type CreditProps = {};

// eslint-disable-next-line no-empty-pattern
const Credit: React.FC<PropsWithChildren<CreditProps>> = ({ children }) => (
  <Card
    bg={'light'}
    text={'dark'}
    style={{ marginTop: '30px', marginBottom: '30px' }}
  >
    <Card.Header>Content attribution</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>{children}</Card.Text>
    </Card.Body>
  </Card>
);

export default Credit;
