import React, { ReactElement } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';
import styled from 'styled-components';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

const SubHeading = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
`;

const Headings = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Headings show on a headings list',
    'The page title is a level 1 heading',
    'Headings are in order and do not skip levels',
  ];
  return (
    <Template
      showHints={showHints}
      title={ROUTES.HEADINGS.label}
      route={ROUTES.HEADINGS.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <TestingAlert isCorrect show={showHints} id='pp1'>
        <h2>Classification</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet risus non eros dapibus lobortis. Etiam egestas lacinia
          libero, non posuere arcu lacinia non. In suscipit dapibus tortor ac
          commodo.
        </p>
      </TestingAlert>
      <SubHeading>
        <TestingAlert isCorrect show={showHints} id='pp2'>
          <h3>Taxonomy</h3>
          <p>
            Morbi consequat enim a nisi dignissim mattis. Morbi leo ante,
            commodo vitae laoreet non, maximus vitae turpis. Vivamus eu lacus
            sapien. Nulla rhoncus gravida molestie.
          </p>
        </TestingAlert>
        <TestingAlert
          isWarning
          popOver={`If possible all heading text is unique.`}
          show={showHints}
          id='pp3'
        >
          <h3>Details</h3>
          <p>
            Morbi consequat enim a nisi dignissim mattis. Morbi leo ante,
            commodo vitae laoreet non, maximus vitae turpis. Vivamus eu lacus
            sapien. Nulla rhoncus gravida molestie.
          </p>
        </TestingAlert>
      </SubHeading>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`"Botany" is not coded as a heading and does not show in a headings
            list.`}
        id='pp4'
      >
        <div className='h2'>Botany</div>

        <p>
          Morbi consequat enim a nisi dignissim mattis. Morbi leo ante, commodo
          vitae laoreet non, maximus vitae turpis. Vivamus eu lacus sapien.
          Nulla rhoncus gravida molestie.
        </p>
      </TestingAlert>
      <SubHeading>
        <TestingAlert
          isWarning
          popOver={`If possible all heading text is unique.`}
          show={showHints}
          id='pp5'
        >
          <h3>Details</h3>
          <p>
            Morbi consequat enim a nisi dignissim mattis. Morbi leo ante,
            commodo vitae laoreet non, maximus vitae turpis. Vivamus eu lacus
            sapien. Nulla rhoncus gravida molestie.
          </p>
        </TestingAlert>
      </SubHeading>
      <TestingAlert isCorrect show={showHints} id='pp6'>
        <h2>Uses</h2>
        <p>
          Morbi consequat enim a nisi dignissim mattis. Morbi leo ante, commodo
          vitae laoreet non, maximus vitae turpis. Vivamus eu lacus sapien.
          Nulla rhoncus gravida molestie.
        </p>
      </TestingAlert>

      <TestingAlert
        isBug
        show={showHints}
        popOver={`"Edibles" heading is out of order.`}
        id='pp7'
        style={{ marginLeft: '50px', marginBottom: '50px' }}
      >
        <h4>Edibles</h4>

        <p>
          Morbi consequat enim a nisi dignissim mattis. Morbi leo ante, commodo
          vitae laoreet non, maximus vitae turpis. Vivamus eu lacus sapien.
          Nulla rhoncus gravida molestie.
        </p>
      </TestingAlert>
    </Template>
  );
};

export default Headings;
