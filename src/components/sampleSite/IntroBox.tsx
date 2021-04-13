import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Switch from 'react-switch';
import AboutImage from '../../images/About';

// import styled from 'styled-components';

interface Props {
  toCheckFor?: Array<string>;
  toggleHints?: (checked: boolean) => void;
  docHref?: string;
  display?: boolean;
  intro: React.ReactNode;
}

const defaultProps = {
  toCheckFor: [],
  toggleHints: () => {},
  docHref: '',
  display: true,
  intro: <div />,
};

const IntroBox = (props: Props) => {
  const { toCheckFor, toggleHints, docHref, display, intro } = props;

  const [checked, setChecked] = useState(false);

  if (!display) return null; // escape early

  const checkList = () => {
    if (toCheckFor?.length === 0) return null;
    return (
      <>
        <h2>Introduction</h2>
        {intro}
        <h2>Things to check for</h2>
        <ul>
          {toCheckFor?.map((item, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={key}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  const docLink = (linkText: string) =>
    docHref === '' ? null : <a href={docHref}>{linkText}</a>;

  return (
    <>
      <Card style={{ backgroundColor: '#efe9ed' }}>
        <Card.Body>
          {checkList()}
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <span>Hints </span>
            <Switch
              checked={checked}
              onChange={(state) => {
                if (toggleHints) toggleHints(state);
                setChecked(state);
              }}
            />
          </label>

          {docLink('How to check')}
          <a href='#foo'>
            <AboutImage label='About this site' />
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

IntroBox.defaultProps = defaultProps;

export default IntroBox;
