import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';
import Credit from '../../components/Credit';
import ExternalLink from '../../components/ExternalLink';
import Template, { useHints } from '../sampleSite/Template';
import styled from 'styled-components';
import { checks } from '../sampleSite/Color';
import ROUTES from '../../AppRouteNames';
import GraceHopperHandout from '../../docs/GraceHopperHandout';
import Daisy from '../../images/daisyText.png';

const CheckBox = styled(Form.Check)`
  .form-check-input:checked[type='checkbox'] {
    background-image: none;
  }

  .form-check-input:checked {
    background-color: #d6d6d6;
    border: 1px solid rgb(0 0 0 / 25%) !important;
  }
`;

const SneakyLink = styled(ExternalLink)`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
const Quote = styled.div`
  color: #d4a068;
  font-size: 30px;
  text-align: center;
  padding: 20px;
  font-style: italic;
`;

const Headings = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const [sampleChecked, setSampleChecked] = React.useState(true);

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_COLOR.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.color}
      bugTotal={5}
      sampleRoute={ROUTES.COLOR}
    >
      <h2>Daisy</h2>
      <TestingAlert
        isCorrect
        show={showHints}
        popOver={
          'The underline provides an extra visual clue beyond color for links.'
        }
      >
        <p>
          Bellis perennis, the daisy, is a European species of the family{' '}
          <ExternalLink href='https://en.wikipedia.org/wiki/Asteraceae' noLogo>
            Asteraceae
          </ExternalLink>
          , often considered the archetypal species of the name daisy. To
          distinguish this species from other plants known as daisies, it is
          sometimes qualified as common daisy, lawn daisy or English daisy.
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={'With only color alone, it is difficult to identify links'}
      >
        <p>
          It blooms from March to September and exhibits the phenomenon of{' '}
          <SneakyLink href='https://en.wikipedia.org/wiki/Heliotropism' noLogo>
            heliotropism
          </SneakyLink>
          , in which the flowers follow the position of the sun in the sky.
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={
          'The image "Daisies" contains test that does not have enough contrast'
        }
      >
        <p>
          {/* #E79E36 */}
          <img src={Daisy} alt='Daisies' />
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={
          'There is not enough contrast between the checked and non-checked state'
        }
      >
        <CheckBox
          label='Checkbox 1'
          name='group1'
          type='checkbox'
          id={`checkbox1`}
          checked={sampleChecked}
          onChange={() => setSampleChecked(!sampleChecked)}
        />
        <CheckBox
          label='Checkbox 2'
          name='group1'
          type='checkbox'
          id={`checkbox2`}
        />
      </TestingAlert>

      <TestingAlert
        isCorrect
        show={showHints}
        popOver={
          'Has enough contrast between checked and non-checked state and has a non-color indicator'
        }
      >
        <Form.Check
          label='Checkbox 3'
          name='group1'
          type='checkbox'
          id={`checkbox3`}
        />
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={
          'Not enough contrast between the pie sections.  In addition only color is used to identify each section.'
        }
      >
        <p>
          <img
            src='https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/colour-is-not-enough/_media/pie-chart-only-colour-large.png'
            alt='Not enough contrast - Pie chart of apples, oranges, and bananas'
          />
        </p>
      </TestingAlert>
      <TestingAlert
        isCorrect
        show={showHints}
        popOver={
          'Enough contrast between the section border and the section background. In addition the text clearly identifies each section'
        }
      >
        <p>
          <img
            src='https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/colour-is-not-enough/_media/pie-chart-colour-outline-labels-inline-large.png'
            alt='Good contrast - Pie chart of apples, oranges, and bananas'
          />
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        popOver={'Not enough contrast between the text color and background'}
      >
        <Quote>Daisies are like sunshine to the ground - Drew Barrymore</Quote>
      </TestingAlert>
      <Credit>
        Information is from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Bellis_perennis'>
          Wikipedia
        </ExternalLink>
        . Pie charts are from{' '}
        <ExternalLink href='https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/colour-is-not-enough/'>
          Colour is not enough
        </ExternalLink>
      </Credit>
    </Template>
  );
};

export default Headings;
