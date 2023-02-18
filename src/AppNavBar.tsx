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
  <Nav.Item as='li'>
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      to={to}
      end={end}
    >
      {children}
    </NavLink>
  </Nav.Item>
);

const AppNavBar = ({
  parentPath = '',
  hideParent = false,
  asList = false,
}): ReactElement => {
  const parent =
    !parentPath || parentPath === ''
      ? routerArray[0]
      : routerArray[0].children?.find((path) => path.path === parentPath);

  const className = asList ? 'flex-column' : '';
  return !parent ? (
    <></>
  ) : (
    <nav>
      <Nav className={className} as='ul'>
        {!hideParent ? (
          <NavItem to={parent.path} end>
            {parent.handle?.label}
          </NavItem>
        ) : null}
        {parent.children?.map((mainRoute) =>
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
