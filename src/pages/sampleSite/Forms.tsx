import React, { ReactElement } from 'react';

import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

// TODO: Make sure there is an example of a visible label that doesn't match the the accessible label

const Forms = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Form labels are associated with their elements.',
    'You can easily get to and control all actionable items only using the keyboard.',
    'The tab order of form elements make sense.',
    'A form element that has “focus” ( tabbed or arrowed to) looks visually different.',
  ];

  const FormGroup = styled(Form.Group).attrs({
    className: 'mb-3',
  })``;

  return (
    <Template
      showHints={showHints}
      title={ROUTES.FORMS.label}
      route={ROUTES.FORMS.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <div style={{ position: 'relative', paddingBottom: '50px' }}>
        <TestingAlert
          isBug
          show={showHints}
          id='submit'
          popOver={`The tab order doesn't follow the logical flow of the form.`}
          style={{ position: 'absolute', bottom: 0 }}
        >
          <Button>Submit</Button>
        </TestingAlert>
        <div style={{ position: 'relative', paddingBottom: '80px' }}>
          <TestingAlert
            isCorrect
            show={showHints}
            id='lastName'
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
          >
            <FormGroup controlId='exampleInputLastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control type='text' />
            </FormGroup>
          </TestingAlert>
          <TestingAlert
            isBug
            show={showHints}
            id='firstName'
            popOver={`The "First name" label is not associated with its text field.`}
          >
            <FormGroup>
              <Form.Label>First name</Form.Label>
              <Form.Control type='text' />
            </FormGroup>
          </TestingAlert>
        </div>
        <div style={{ position: 'relative', paddingBottom: '80px' }}>
          <TestingAlert
            isWarning
            show={showHints}
            id='zip'
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
            popOver={`Label is set with the aria-label attribute.  This means that the label is only viewable by screen readers.`}
          >
            <FormGroup>
              <Form.Control
                type='text'
                placeholder='Zip'
                aria-label='Zip code'
              />
            </FormGroup>
          </TestingAlert>
          <TestingAlert
            isBug
            show={showHints}
            id='Address'
            popOver={`The "Address" field is missing a label.  Placeholder text is not a replacement for a label.`}
          >
            <FormGroup controlId='exampleInputAddress'>
              <Form.Control type='text' placeholder='Address' />
            </FormGroup>
          </TestingAlert>

          <TestingAlert isCorrect show={showHints} id='City'>
            <FloatingLabel controlId='exampleInputCity' label='City'>
              <Form.Control type='text' placeholder='City' />
            </FloatingLabel>
          </TestingAlert>

          <TestingAlert
            isCorrect
            show={showHints}
            id='color'
            popOver={`Radio button include a fieldset with a legend to describe the set.  Each radio button correctly has a label attached.`}
          >
            <fieldset>
              <legend>Favorite Color</legend>
              <Form.Check
                label='Red'
                name='group1'
                type='radio'
                id='redRadio'
                value='red'
              />
              <Form.Check
                label='Green'
                name='group1'
                type='radio'
                id='greenRadio'
                value='green'
              />
              <Form.Check
                label='Blue'
                name='group1'
                type='radio'
                id='blueRadio'
                value='blue'
              />
            </fieldset>
          </TestingAlert>
        </div>
      </div>
    </Template>
  );
};

export default Forms;
