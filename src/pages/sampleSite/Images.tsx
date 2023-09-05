/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Wikipedia } from 'react-bootstrap-icons';
import TestingAlert from '../../components/TestingAlert';

//import styled from 'styled-components';
import Credit from '../../components/Credit';
import Template, { useHints } from './Template';

import ROUTES from '../../AppRouteNames';
import ExternalLink from '../../components/ExternalLink';
import PandaIcon from '../../images/PandaIcon';
import BambooIcon from '../../images/BambooIcon';
import TextDivider from '../../images/noun-divider.png';

export const checks = [
  'Images have appropriate alternative text',
  'Alternative text is short',
  'Decorative images have an empty alternative text',
];

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.IMAGES.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
      bugTotal={3}
    >
      <h2>Pandas</h2>

      <h3>About</h3>

      <div className='clearfix'>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`Image of a single panda has appropriate alt text of "Great panda". `}
        >
          <div style={{ float: 'right' }}>
            {/* href="https://commons.wikimedia.org/wiki/File:Grosser_Panda.JPG" */}

            <img
              width='256'
              alt='Great panda'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/256px-Grosser_Panda.JPG'
            />
          </div>
          <p>
            The giant panda (Ailuropoda melanoleuca, sometimes panda bear or
            simply panda) is a bear species endemic to China. It is
            characterized by its bold black-and-white coat and rotund body. The
            name "giant panda" is sometimes used to distinguish it from the red
            panda, a neighboring musteloid.
          </p>
        </TestingAlert>
      </div>

      <div className='clearfix'>
        <h3>Diet</h3>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`Image of bamboo has appropriate alt text of "Bamboo plan" set by the aria-label attribute. `}
        >
          <div style={{ float: 'left' }}>
            <BambooIcon size='100px' /> {/* ARIA -label set */}
          </div>
          <p>
            The giant panda's diet is primarily herbivorous, consisting almost
            exclusively of bamboo. The most important part of their bamboo diet
            is the shoots, that are rich in starch which they have a higher
            capability to digest than strict carnivores, and have up to 32%
            protein content.
          </p>
        </TestingAlert>
      </div>

      <div className='clearfix'>
        <h3>Cubs</h3>
        <TestingAlert
          isBug
          show={showHints}
          popOver={`Image of the panda cub is missing alt text. `}
        >
          <div style={{ float: 'right' }}>
            {/* href='https://commons.wikimedia.org/wiki/File:Chengdu-pandas-d18.jpg' */}

            <img
              width='256'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Chengdu-pandas-d18.jpg/256px-Chengdu-pandas-d18.jpg'
            />
          </div>
          <p>
            The normal reproductive rate is considered to be one young every two
            years. Giant pandas give birth to twins in about half of
            pregnancies. If twins are born, usually only one survives in the
            wild. When the cub is first born, it is pink, blind, and toothless,
            weighing only 90 to 130 g.
          </p>
        </TestingAlert>
      </div>
      <div className='clearfix'>
        <h3>In the wild</h3>
        <TestingAlert
          isBug
          show={showHints}
          popOver={`The alt text for image of 3 pandas is too long.  The entire alt text is read/displayed instead of the image.  This can be very annoying for users.`}
        >
          <div style={{ float: 'left', paddingRight: '10px' }}>
            {/* href="https://commons.wikimedia.org/wiki/File:Giant_Pandas_having_a_snack.jpg" */}
            <img
              width='256'
              alt='Three white and black great bands sit in a vertical row eating plants with really long stems - possibly bamboo.'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Giant_Pandas_having_a_snack.jpg/256px-Giant_Pandas_having_a_snack.jpg'
            />
          </div>
          <p>
            In 2006, scientists reported that the number of pandas living in the
            wild may have been underestimated at about 1,000, but using a new
            method scientists believe the wild population may be as large as
            3,000. In 2006, there were 40 panda reserves in China.
          </p>
        </TestingAlert>
      </div>

      <h3>Learn more</h3>
      <p>
        There is a lot of information about pandas available on the web.
        Wikipedia is a great place to start:
      </p>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`The alt doesn't describe the function of the image. The image is the logo for Wikipedia, so the alt text should be set to "Wikipedia".`}
      >
        <p>
          <a href='https://en.wikipedia.org/wiki/Giant_panda'>
            <Wikipedia size={50} aria-label='large W' />
          </a>
        </p>
      </TestingAlert>
      <div className='text-center'>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`The panda image is decorative and is correctly hidden using the aria-hidden attribute`}
        >
          <PandaIcon size='200px' /> {/* aria hidden */}
        </TestingAlert>
        <hr />
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`The section separator and is correctly hidden using an empty alt text.`}
        >
          <img
            alt=''
            src={TextDivider}
            style={{ display: 'block', width: '100%', height: '75px' }}
          />
        </TestingAlert>
      </div>

      <Credit>
        Information and photographs are from{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Giant_panda'>
          Wikipedia
        </ExternalLink>
        . Icons are from the{' '}
        <ExternalLink href='https://thenounproject.com/'>
          Noun Project
        </ExternalLink>
        .
      </Credit>
    </Template>
  );
};

export default Images;
