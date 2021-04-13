import React, { useState } from 'react';

import IntroBox from '../../components/sampleSite/IntroBox';
import Incorrect from '../../components/sampleSite/IncorrectExample';
import Correct from '../../components/sampleSite/CorrectExample';
import NextButton from '../../components/sampleSite/NextButton';

import {
  correctDataTable1,
  incorrectDataTable1,
  incorrectDataTable2,
  correctLayoutTable1,
} from '../../components/sampleSite/CodeExamples/Tables';

interface Props {}

const defaultProps = {};

const Tables = (props: Props) => {
  // const {} = props;

  const [showHints, setShowHints] = useState(false);

  return (
    <>
      <h1>Tables</h1>
      <IntroBox
        intro='This is an introduction.'
        toCheckFor={[
          'Data tables have column headings and row headings (if applicable).',
          'Layout tables do not contain any column or row headings.',
        ]}
        toggleHints={(checked) => {
          setShowHints(checked);
        }}
      />
      <Correct>
        <h2>Sample table 1 - Children</h2>
        {correctDataTable1}
      </Correct>

      <Incorrect
        showHint={showHints}
        hintText={
          <p>
            The color table is missing row columns. In addition, no scope is set
            for the existing headers (should be set to &quot;col&quot; for
            column.)
          </p>
        }
      >
        <h2>Sample table 2 - Colors</h2>
        {incorrectDataTable1}
      </Incorrect>

      <Incorrect
        showHint={showHints}
        hintText={
          <p>
            The Minnesota apples is both row and column headers. Screenreaders
            will assume this is a layout table.
          </p>
        }
      >
        <h2>Sample table 3 - Apples</h2>
        {incorrectDataTable2}
      </Incorrect>

      <Correct>
        <h2>Sample table 4 - News Stories</h2>
        {correctLayoutTable1}
      </Correct>
      <div>
        <NextButton />
      </div>
    </>
  );
};

Tables.defaultProps = defaultProps;

export default Tables;
