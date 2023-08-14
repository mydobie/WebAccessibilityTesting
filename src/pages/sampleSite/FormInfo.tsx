import React, { ReactElement } from 'react';

import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import { Form, FloatingLabel } from 'react-bootstrap';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

const FormGroup = styled(Form.Group).attrs({
  className: 'mb-3',
})``;

const RequiredLabel = styled(Form.Label)`
  ::before {
    content: '* ';
  }
`;

const Forms = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Form labels are associated with their elements.',
    'You can easily get to and control all actionable items only using the keyboard.',
    'The tab order of form elements make sense.',
    'A form element that has “focus” ( tabbed or arrowed to) looks visually different.',
    'Help and error text is connected to the form field.',
    'Required items have a visual indicator and are marked as required in the code',
  ];

  return (
    <Template
      showHints={showHints}
      title={ROUTES.FORM_INFO.label}
      route={ROUTES.FORM_INFO.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      {/* Correct required */}
      <TestingAlert
        isCorrect
        show={showHints}
        id='years'
        popOver={`Form input marked as required via the "required" attribute.`}
      >
        <FormGroup controlId='exampleInputYears'>
          <RequiredLabel>Years gardening</RequiredLabel>
          <Form.Control type='text' required />
        </FormGroup>
      </TestingAlert>

      {/* Missing required indicator */}
      <TestingAlert
        isBug
        show={showHints}
        id='vegetable'
        popOver={`The 'vegetable' field is  marked as required in the code, but is missing the visual indicator.`}
      >
        <FormGroup controlId='exampleInputVegetable'>
          <Form.Label>Favorite vegetable</Form.Label>
          <Form.Control type='text' required />
        </FormGroup>
      </TestingAlert>

      {/* Correct aria-required*/}
      <TestingAlert
        isCorrect
        show={showHints}
        id='flowers'
        popOver={`Form input marked as required via the "aria-required" attribute.`}
      >
        <FormGroup controlId='exampleInputFlower'>
          <RequiredLabel>Favorite flower</RequiredLabel>
          <Form.Control type='text' aria-required='true' />
        </FormGroup>
      </TestingAlert>

      {/* Missing required */}
      <TestingAlert
        isBug
        show={showHints}
        id='tree'
        popOver={`The 'tree' field has the required visual indicator (*) but is not marked as required in the code.`}
      >
        <FormGroup controlId='exampleInputTree'>
          <RequiredLabel>Favorite tree</RequiredLabel>
          <Form.Control type='text' />
        </FormGroup>
      </TestingAlert>

      {/* Info message not connected */}
      <TestingAlert
        isBug
        show={showHints}
        id='email'
        popOver={`The directions for the 'email' field are not connected to the input field.`}
      >
        <FormGroup controlId='exampleInputEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' />
          <Form.Text muted>
            Please enter an email that you check regularly.
          </Form.Text>
        </FormGroup>
      </TestingAlert>

      {/* Correct - info message*/}
      <TestingAlert isCorrect show={showHints} id='comments'>
        <FormGroup>
          <FloatingLabel controlId='exampleInputComments' label='Comments'>
            <Form.Control
              as='textarea'
              style={{ height: '100px' }}
              aria-describedby='commentsHelpBlock'
            />
            <Form.Text id='commentsHelpBlock' muted>
              All comments will be read by an administrator. Please be as
              descriptive as possible.
            </Form.Text>
          </FloatingLabel>
        </FormGroup>
      </TestingAlert>

      {/* Error validation should be a new file - then can address browser based validation */}
    </Template>
  );
};

export default Forms;
