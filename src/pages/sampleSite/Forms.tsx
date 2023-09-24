import React, { ReactElement } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import * as formik from 'formik';
import * as yup from 'yup';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import TestingAlert from '../../components/TestingAlert';
import Template, { useHints } from '../sampleSite/Template';
import ROUTES from '../../AppRouteNames';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

export const checks = [
  'Can navigate to and interact with form element',
  'Form elements have a label and remain visible',
  'Clicking a label puts focus on the corresponding element',
  'Labels accurately describe the form element',
  'Visual indicators highlight required elements',
  'Error messages or indicators are displayed near the form element',
];

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
    lucy: yup.string().required('Enter the name of a bar or restaurant '),
    tots: yup
      .string()
      .required('Enter something')
      .oneOf(['Ore-Ida'], 'Nope - try again.'),
    pho: yup
      .string()
      .required('Enter the name of the restaurant that has the best pho'),
    spam: yup.string().notRequired(),
    lutefisk: yup.string().required('Select if you have ever tried lutefisk'),
    rice: yup.number().notRequired(),
    apples: yup.string().required('Select a Minnesota developed apple'),
  });

  return (
    <Template
      showHints={showHints}
      title={ROUTES.FORMS.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.forms}
      bugTotal={5}
    >
      <Formik
        validationSchema={schema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        initialValues={{
          lucy: '',
          tots: '',
          pho: '',
          spam: '',
          lutefisk: '',
          apples: '',
          rice: 3,
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
            <h1>Minnesota foods</h1>
            <Row>
              <Col>
                <Form.Group className='mb-4' controlId='lucy'>
                  <TestingAlert isCorrect show={showHints}>
                    <Form.Label>
                      Location of your favorite Juicy Lucy <Required />
                    </Form.Label>
                    <Form.Control
                      type='text'
                      name='lucy'
                      value={values.lucy}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.lucy && !errors.lucy}
                      isInvalid={!!errors.lucy}
                      aria-invalid={!!errors.lucy}
                      required
                      aria-describedby={errors.lucy ? 'lucyError' : undefined}
                    />
                    <Form.Control.Feedback type='invalid' id='lucyError'>
                      {errors.lucy}
                    </Form.Control.Feedback>
                  </TestingAlert>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:Jucy_Lucy_Cheeseburger.JPG'>
                  <img
                    width='128'
                    alt='Jucy Lucy Cheeseburger'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jucy_Lucy_Cheeseburger.JPG/128px-Jucy_Lucy_Cheeseburger.JPG'
                  />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className='mb-4' controlId='tots'>
                  <Form.Label>
                    Tater tots used for hot dish <Required />
                  </Form.Label>

                  <TestingAlert
                    isBug
                    show={showHints}
                    popOver={
                      'The error message for the "Tater tots" field does not help the user enter information.'
                    }
                  >
                    <Form.Control
                      type='text'
                      name='tots'
                      value={values.tots}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.tots && !errors.tots}
                      isInvalid={!!errors.tots}
                      aria-invalid={!!errors.tots}
                      required
                      aria-describedby={errors.tots ? 'totsError' : undefined}
                    />
                  </TestingAlert>
                  <Form.Control.Feedback type='invalid' id='totsError'>
                    {errors.tots}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:Hotdish.jpg'>
                  <img
                    width='128'
                    alt='Tater Tot Hotdish'
                    src='https://upload.wikimedia.org/wikipedia/commons/8/80/Hotdish.jpg'
                  />
                </a>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className='mb-4' controlId='pho'>
                  <TestingAlert
                    isBug
                    show={showHints}
                    popOver={
                      'The "Pho" field is required but is not an indicator letting the user know.'
                    }
                  >
                    <Form.Label>Best place for pho</Form.Label>
                    <Form.Control
                      type='text'
                      name='pho'
                      value={values.pho}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.pho && !errors.pho}
                      isInvalid={!!errors.pho}
                      aria-invalid={!!errors.pho}
                    />
                    <Form.Control.Feedback type='invalid' id='phoError'>
                      {errors.pho}
                    </Form.Control.Feedback>
                  </TestingAlert>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:Ph%E1%BB%9F_v%E1%BB%8Bt_quay.jpg'>
                  <img
                    width='128'
                    alt='Pho'
                    src='https://upload.wikimedia.org/wikipedia/commons/1/16/Ph%E1%BB%9F_v%E1%BB%8Bt_quay.jpg'
                  />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={
                    'The "lutefisk" field is not in the expected tab order'
                  }
                >
                  <fieldset className='mb-4'>
                    <legend style={{ fontSize: 'var(--bs-body-font-size)' }}>
                      Have you tried lutefisk? <Required />
                    </legend>

                    <Form.Check
                      tabIndex={1}
                      id='lutefish-yes'
                      label='Yes'
                      name='lutefisk'
                      value={'yes'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.lutefisk}
                      required
                      type='radio'
                      aria-invalid={!!errors.lutefisk}
                      aria-describedby={
                        errors.lutefisk ? 'lutefiskError' : undefined
                      }
                    />

                    <Form.Check
                      tabIndex={1}
                      id='lutefish-no'
                      label='No'
                      name='lutefisk'
                      value={'no'}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.lutefisk}
                      type='radio'
                      aria-invalid={!!errors.lutefisk}
                      aria-describedby={
                        errors.lutefisk ? 'lutefiskError' : undefined
                      }
                    />
                    <div
                      className='invalid-feedback'
                      id='lutefiskError'
                      style={{ display: errors.lutefisk ? 'block' : 'none' }}
                    >
                      {errors.lutefisk}
                    </div>
                  </fieldset>
                </TestingAlert>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:ForkLutefisk.jpg'>
                  <img
                    width='128'
                    alt='Lutefisk'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ForkLutefisk.jpg/128px-ForkLutefisk.jpg'
                  />
                </a>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className='mb-4'>
                  <TestingAlert isCorrect show={showHints}>
                    <Form.Label htmlFor='rice'>
                      Days per week you eat wild rice
                    </Form.Label>
                    <Form.Range
                      id='rice'
                      name='rice'
                      value={values.rice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      min='0'
                      max='7'
                    />
                    <span>Days: {values.rice}</span>
                  </TestingAlert>
                </div>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:Wildricecooked.jpg'>
                  <img
                    width='128'
                    alt='Wild Rice'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Wildricecooked.jpg/128px-Wildricecooked.jpg'
                  />
                </a>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className='mb-4'>
                  <TestingAlert
                    isBug
                    show={showHints}
                    popOver={
                      'The "Apple" field label is not connected to the corresponding drop-down'
                    }
                  >
                    <Form.Label>
                      Favorite apple <Required />
                    </Form.Label>
                  </TestingAlert>
                  <Form.Select
                    aria-label='Favorite apple'
                    id='apples'
                    name='apples'
                    value={values.apples}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.apples && !errors.apples}
                    isInvalid={!!errors.apples}
                    aria-invalid={!!errors.apples}
                    aria-describedby={errors.apples ? 'applesError' : undefined}
                    required
                  >
                    <option value=''>Select an apple</option>
                    <option value='SweeTango'>SweeTango</option>
                    <option value='Zestar!'>Zestar!</option>
                    <option value='Honeycrisp'>Honeycrisp</option>
                    <option value='StateFair'>State Fair</option>
                    <option value='Regent'>Regent</option>
                    <option value='Haralson'>Haralson</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid' id='applesError'>
                    {errors.apples}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xs={2}>
                <a href='https://commons.wikimedia.org/wiki/File:Honeycrisp-Apple.jpg'>
                  <img
                    width='128'
                    alt='Honeycrisp Apple'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/128px-Honeycrisp-Apple.jpg'
                  />
                </a>
              </Col>
            </Row>

            <Row>
              <Col>
                <TestingAlert
                  isBug
                  show={showHints}
                  popOver={
                    'The "spam" field label disappears once a use enters a value.'
                  }
                >
                  <Form.Control
                    as='textarea'
                    placeholder='How do you cook spam?'
                    style={{ height: '100px' }}
                    name='spam'
                    value={values.spam}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.spam && !errors.spam}
                    // isInvalid={!!errors.spam}
                    className='mb-4'
                  />
                </TestingAlert>
              </Col>
              <Col xs={2}>
                <a href='https://www.spam.com/varieties/spam-classic'>
                  <img
                    className='img-fluid'
                    src='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-classic-12oz-420x420.png'
                    alt='SPAM Classic'
                    width='128'
                  />
                </a>
              </Col>
            </Row>
            <Button type='submit' className='mb-4'>
              Submit form
            </Button>
          </Form>
        )}
      </Formik>

      <Credit>
        Photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/'>Wikipedia</ExternalLink>{' '}
        except for the can of Spam from{' '}
        <a href='https://www.spam.com/varieties/spam-classic'>Hormel Foods</a>.
      </Credit>
    </Template>
  );
};

export default Forms;
