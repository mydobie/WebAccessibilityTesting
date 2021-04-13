import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Bug from './Bug';

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
  border-color: ${({ showhint }) => (showhint ? '#ffeeba' : '')};
`;

const IncorrectExample = (props: Props) => {
  const { showHint, children, hintText } = props;

  return (
    <CardStyled body showhint={showHint}>
      {children}
      <Bug show={showHint}>{hintText}</Bug>
    </CardStyled>
  );
};

IncorrectExample.defaultProps = defaultProps;

export default IncorrectExample;
