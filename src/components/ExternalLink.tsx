import React, { PropsWithChildren } from 'react';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

type Props = {
  href: string;
  buttonVariant?: string;
  className?: string;
};

const ExternalLink: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  buttonVariant,
  className = '',
  ...otherProps
}) => (
  <a
    href={href}
    className={`${
      buttonVariant ? `btn btn-${buttonVariant}` : ''
    } ${className}`}
    target='_blank'
    rel='noopener noreferrer'
    {...otherProps}
    role='button'
  >
    {children} <BoxArrowUpRight size={15} />{' '}
    <span className='visually-hidden'>opens in new window</span>
  </a>
);

export default ExternalLink;
