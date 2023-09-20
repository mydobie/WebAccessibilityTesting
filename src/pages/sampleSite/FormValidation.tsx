import React, { ReactElement } from 'react';

// import styled from 'styled-components';
// import TestingAlert from '../../components/TestingAlert';
// import { Form, FloatingLabel } from 'react-bootstrap';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

// const FormGroup = styled(Form.Group).attrs({
//   className: 'mb-3',
// })``;

// const RequiredLabel = styled(Form.Label)`
//   ::before {
//     content: '* ';
//   }
// `;

const Forms = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks: string[] = [];

  return (
    <Template
      showHints={showHints}
      title={ROUTES.FORM_VALIDATION.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      Hello world
      {/* 
      
TODO:
Color only validation

Error message is not connected (warn)

Error message doesn't describe how to fix the issue



      */}
    </Template>
  );
};

export default Forms;
