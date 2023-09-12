import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';
// import TestingAlert from '../../components/TestingAlert';
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

  /*
 - Items that are clickable but relay soley on color


 - Text not enough contrast - footer(ish)



 // https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/colour-is-not-enough/_media/pie-chart-colour-outline-pattern-large.png

  */

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
      <p>
        Bellis perennis, the daisy, is a European species of the family{' '}
        <ExternalLink href='Asteraceae' noLogo>
          Asteraceae
        </ExternalLink>
        , often considered the archetypal species of the name daisy. To
        distinguish this species from other plants known as daisies, it is
        sometimes qualified as common daisy, lawn daisy or English daisy.
      </p>
      <p>
        {/* #E79E36 */}
        <img src={Daisy} alt='Daisies' />
      </p>
      <CheckBox
        label='My label'
        name='group1'
        type='checkbox'
        id={`checkbox1`}
        checked={sampleChecked}
        onChange={() => setSampleChecked(!sampleChecked)}
      />
      <CheckBox
        label='My other label'
        name='group1'
        type='checkbox'
        id={`checkbox2`}
      />

      <img
        src='https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/colour-is-not-enough/_media/pie-chart-only-colour-large.png'
        alt='Pie chart of apples, oranges, and bananas'
      />

      <Quote>Daisies are like sunshine to the ground - Drew Barrymore</Quote>
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
