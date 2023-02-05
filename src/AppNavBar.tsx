/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, PropsWithChildren } from 'react';
import { useMatches, NavLink } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const NavItem: React.FC<PropsWithChildren<{ to: string; end?: boolean }>> = ({
  to,
  end,
  children,
}) => (
  <Breadcrumb.Item
    active={end}
    linkAs={NavLink}
    linkProps={{
      to,
    }}
  >
    {children}
  </Breadcrumb.Item>
);

const AppNavBar = (): ReactElement => {
  const matches = useMatches();
  const crumbs: { pathname: string; label: string }[] = matches
    .filter((match) => Boolean(match.handle))
    // @ts-ignore
    .map((match) => ({ label: match.handle.label, pathname: match.pathname }));

  if (crumbs.length === 1) {
    return <></>;
  }
  return (
    <Breadcrumb>
      {crumbs.map((crumb, index) => (
        <NavItem
          to={crumb.pathname}
          end={index === crumbs.length - 1}
          key={crumb.pathname}
        >
          {crumb.label}
        </NavItem>
      ))}
    </Breadcrumb>
  );
};

export default AppNavBar;
