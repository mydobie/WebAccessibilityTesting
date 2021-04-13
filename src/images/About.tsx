import React from 'react';

/* https://thenounproject.com/search/?q=about&i=2508117 */

interface Props {
  size?: string;
  color?: string;
  label?: string;
}

const defaultProps = {
  size: '32',
  color: '#856404',
  label: undefined,
};

const About = (props: Props) => {
  const { color, size, label } = props;
  return (
    <svg
      height={`${size}px`}
      width={`${size}px`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      x='0px'
      y='0px'
      role='img'
      aria-label={label}
    >
      {label ? <title>{label}</title> : null}
      <path d='M50,5A45,45,0,1,0,95,50,45.05046,45.05046,0,0,0,50,5Zm0,82A37,37,0,1,1,87,50,37.0413,37.0413,0,0,1,50,87ZM45,25.00006a5,5,0,1,1,5,5A5,5,0,0,1,45,25.00006Zm16,46v4a2,2,0,0,1-2,2H41a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h2a2,2,0,0,0,2-2v-19a2,2,0,0,0-2-2H41a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2H53a2,2,0,0,1,2,2v27a2,2,0,0,0,2,2h2A2,2,0,0,1,61,71.00006Z' />
    </svg>
  );
};

About.defaultProps = defaultProps;

export default About;
