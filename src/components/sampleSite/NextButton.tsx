import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

interface Props {}

const defaultProps = {};

const NextButton = (props: Props) => {
  // eslint-disable-next-line no-console
  console.log(useLocation());
  return (
    <div>
      <Button>This is the next button</Button>
    </div>
  );
};

NextButton.defaultProps = defaultProps;

export default NextButton;
