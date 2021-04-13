import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

interface Props {
  showHint?: boolean;
  children: React.ReactNode;
  hintText?: React.ReactNode;
}

const defaultProps = {
  showHint: false,
  hintText: <div />,
};

const CardStyled = styled(Card)`
  border-width: 3px;
  margin-top: 20px;
`;

const CorrectExample = (props: Props) => {
  const { children } = props;

  return <CardStyled body>{children}</CardStyled>;
};

CorrectExample.defaultProps = defaultProps;

export default CorrectExample;
