import React, { PropsWithChildren } from 'react';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

type Props = {
  href: string;
  buttonVariant?: string;
  className?: string;
  noLogo?: boolean; // This isn't a good idea - just used to cause an error
};

const ExternalLink: React.FC<PropsWithChildren<Props>> = ({
  children,
  href,
  buttonVariant,
  className = '',
  noLogo,
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
  >
    {children}{' '}
    {noLogo ? null : (
      <BoxArrowUpRight size={15} aria-label='opens in a new window' />
    )}
  </a>
);

export default ExternalLink;
