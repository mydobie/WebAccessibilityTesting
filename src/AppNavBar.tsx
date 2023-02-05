/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, PropsWithChildren } from 'react';
import { useMatches, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';

import { routerArray } from './App';

const NavItem: React.FC<PropsWithChildren<{ to: string; end?: boolean }>> = ({
  to,
  end,
  children,
}) => (
  <Nav.Item>
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      to={to}
      end={end}
    >
      {children}
    </NavLink>
  </Nav.Item>
);

const AppNavBar = (): ReactElement => {
  const home = routerArray[0];
  return (
    <nav>
      <Nav>
        <NavItem to={home.path} end>
          {home.handle.label}
        </NavItem>
        {home.children.map((mainRoute) =>
          mainRoute.handle ? (
            <NavItem to={mainRoute.path} key={mainRoute.path}>
              {mainRoute.handle.label}
            </NavItem>
          ) : null
        )}
      </Nav>
    </nav>
  );
};

const BreadcrumbItem: React.FC<
  PropsWithChildren<{ to: string; end?: boolean }>
> = ({ to, end, children }) => (
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

export const Breadcrumbs = (): ReactElement => {
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
        <BreadcrumbItem
          to={crumb.pathname}
          end={index === crumbs.length - 1}
          key={crumb.pathname}
        >
          {crumb.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default AppNavBar;
