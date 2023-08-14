// Contains routing and any application wide items like headers, footers and navigation

import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom'; // Use `HashRouter as Router` when you can't control the URL ... like GitHub pages
import { Container, Card } from 'react-bootstrap';

// import SkipMenu from 'skip-menu-react';

import { Breadcrumbs } from './AppNavBar';

import './scss/index.scss';

const Header = (): ReactElement => (
  <header>
    <Card bg='dark' text='white' className='app-header'>
      <Card.Body>
        <Card.Title>Web Accessibility Testing For Everyone</Card.Title>
      </Card.Body>
    </Card>
  </header>
);

const Footer = (): ReactElement => (
  <footer>
    <Card bg='light' className='app-footer'>
      <Card.Body>Kim Doberstein</Card.Body>
    </Card>
  </footer>
);

const AppTemplate = (): ReactElement => (
  <>
    {/* <SkipMenu theme='bootstrap' alwaysShow={false} useAccessKey /> */}
    <Header />
    <Breadcrumbs />
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
    <Footer />
  </>
);

export default AppTemplate;
