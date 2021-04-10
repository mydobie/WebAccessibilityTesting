/*
Simple component to display a loading icon
*/

import React from 'react';
import { Spinner } from 'react-bootstrap';

interface Props {
  size?: string;
  color?: string;
  children?: string;
}

const defaultProps = {
  color: 'secondary',
  size: '60px',
  children: 'Loading',
};

const Loading = (props: Props) => {
  const { size, color, children } = props;

  return (
    <div style={{ display: 'inline-block' }}>
      <Spinner
        style={{ width: size, height: size }}
        variant={color}
        animation='border'
      />
      <span className='sr-only'>{children}</span>
    </div>
  );
};

Loading.defaultProps = defaultProps;

export default Loading;
