import React, { ReactElement } from 'react';
// import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
// import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import { checks } from '../sampleSite/Headings';
import ROUTES from '../../AppRouteNames';

const Headings = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_HEADINGS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={5}
    >
      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Tulip'>
          Wikipedia
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default Headings;
