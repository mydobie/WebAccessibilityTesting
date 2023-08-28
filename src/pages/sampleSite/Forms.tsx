import React, { ReactElement } from 'react';
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import * as formik from 'formik';
import * as yup from 'yup';
import TestingAlert from '../../components/TestingAlert';
import Template, { useHints } from '../sampleSite/Template';
import ROUTES from '../../AppRouteNames';

export const checks = [
  'Can navigate to and interact with form element',
  'Form elements have a label and remain visible',
  'Clicking a label selects the corresponding element',
  'Labels accurately describe the form element',
  'Visual indicators highlight required elements',
  'Error messages or indicators are displayed near the form element',
];

/*
Minnesota 

Automated
Forms - 
Zoom - 
Text - state fair
Color - 
Images - black bears


Lake superior 
Jucy Lucy and/or hotdish

*/

const Required = styled.span`
  color: var(--bs-danger);

  ::after {
    content: '*';
  }
`;

const Forms = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required('Please enter a first name'),
    lastName: yup.string().required('Required!'),
    email: yup
      .string()
      .email()
      .required('Please enter a valid email like name@example.com'),
    favFlower: yup.string().notRequired(),
    monthly: yup.string().notRequired(),
    daily: yup.string().notRequired(),
    comments: yup
      .string()
      .required('Please tell us one thing you like about gardening'),
  });

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_FORMS.label}
      route={ROUTES.DEMO_FORMS.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={5}
    >
      <Formik
        validationSchema={schema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          favFlower: '',
          monthly: '',
          daily: '',
          comments: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          handleBlur,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {errors.comments ? (
              <Alert variant='danger' id='commentsError'>
                {errors.comments}
              </Alert>
            ) : null}
            <Form.Group className='mb-4' controlId='firstName'>
              <Form.Label>
                First name <Required />
              </Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
                aria-invalid={!!errors.firstName}
                required
                aria-describedby={
                  errors.firstName ? 'firstNameError' : undefined
                }
              />
              <Form.Control.Feedback type='invalid' id='firstNameError'>
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <TestingAlert
              isWarning
              show={showHints}
              popOver={
                'The error message of "Required!" does not help the user know exactly what is needed to fix the error.'
              }
            >
              <Form.Group className='mb-4' controlId='lastName'>
                <Form.Label>
                  Last name <Required />
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder=''
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                  aria-invalid={!!errors.lastName}
                  required
                  aria-describedby={
                    errors.lastName ? 'lastNameError' : undefined
                  }
                />
                <Form.Control.Feedback type='invalid' id='lastNameError'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </TestingAlert>

            <TestingAlert
              isBug
              show={showHints}
              popOver={'The field "email" does not have an attached label.'}
            >
              <Form.Group controlId='email' className='mb-4'>
                <Form.Control
                  type='email'
                  placeholder='Enter an email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'emailError' : undefined}
                />
                <Form.Control.Feedback type='invalid' id='emailError'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </TestingAlert>

            <TestingAlert
              isWarning
              show={showHints}
              popOver={
                'There is a label attached to the "Favorite flower" drop-down by using the aria label attribute.  Unfortunately visual users cannot see this label.'
              }
            >
              <div className='mb-4'>
                {/* <Form.Label htmlFor='favFlower'>Favorite flower</Form.Label> */}
                <Form.Select
                  aria-label='Favorite flower'
                  id='favFlower'
                  name='favFlower'
                  value={values.favFlower}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select your favorite flower</option>
                  <option value='1'>Daisy</option>
                  <option value='2'>Iris</option>
                  <option value='3'>Orchid</option>
                  <option value='4'>Rose</option>
                  <option value='5'>Tulip</option>
                </Form.Select>
              </div>
            </TestingAlert>

            <fieldset className='mb-4'>
              <legend>Newsletters</legend>
              <TestingAlert
                isBug
                show={showHints}
                popOver={'The field "Monthly newsletters" cannot be tabbed to.'}
              >
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  label='Monthly newsletters'
                  tabIndex={-1}
                  name='monthly'
                  value={values.monthly}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </TestingAlert>
              <TestingAlert
                isBug
                show={showHints}
                popOver={
                  'When you click on the "Daily how to grow tips" label, it selects the wrong input.'
                }
              >
                <Form.Check
                  type='switch'
                  id='custom-switch'
                  label='Daily "how to grow" tips'
                  name='daily'
                  value={values.daily}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </TestingAlert>
            </fieldset>
            <TestingAlert
              isBug
              show={showHints}
              popOver={
                <>
                  There are two issues with this field.
                  <ol>
                    <li className='mb-2'>
                      The &quot;Comments&quot; does not describe the field - the
                      users is suppose to enter on thing they like about
                      gardening.
                    </li>
                    <li>The error text is not close to the field.</li>
                  </ol>
                </>
              }
            >
              <FloatingLabel
                controlId='floatingTextarea2'
                label={
                  <>
                    Comments <Required />
                  </>
                }
                className='mb-4'
              >
                <Form.Control
                  as='textarea'
                  placeholder='Leave a comment here'
                  style={{ height: '100px' }}
                  name='comments'
                  value={values.comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.comments && !errors.comments}
                  isInvalid={!!errors.comments}
                  aria-invalid={!!errors.comments}
                  aria-describedby={
                    errors.comments ? 'commentsError' : undefined
                  }
                />
              </FloatingLabel>
            </TestingAlert>
            <Button type='submit' className='mb-4'>
              Submit form
            </Button>
          </Form>
        )}
      </Formik>

      {/* <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Tulip'>
          Wikipedia
        </ExternalLink>
        .
      </Credit> */}
    </Template>
  );
};

export default Forms;
