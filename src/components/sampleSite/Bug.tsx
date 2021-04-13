import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import BugImage from '../../images/Bug';

const BugImageStyled = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const AlertStyled = styled(Alert)`
  padding-left: 50px;
  min-height: 60px;
`;

interface Props {
  show?: boolean;
  children: React.ReactNode;
}

const defaultProps = { show: true };

const Bug = (props: Props) => {
  const { show, children } = props;
  return show ? (
    <AlertStyled variant='warning'>
      <BugImageStyled>
        <BugImage />
      </BugImageStyled>{' '}
      {children}
    </AlertStyled>
  ) : null;
};
Bug.defaultProps = defaultProps;

export default Bug;
