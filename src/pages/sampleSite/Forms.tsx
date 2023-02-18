import React, { ReactElement } from 'react';

//import styled from 'styled-components';
// import TestingAlert from '../../components/TestingAlert';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

const Forms = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Data tables have column headings and row headings (if applicable)',
    'Layout tables do not contain any column or row headings',
  ];

  return (
    <Template
      showHints={showHints}
      title={ROUTES.FORMS.label}
      route={ROUTES.FORMS.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    ></Template>
  );
};

export default Forms;
