/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Wikipedia } from 'react-bootstrap-icons';
import TestingAlert from '../../components/TestingAlert';

//import styled from 'styled-components';
import Credit from '../../components/Credit';
import Template, { useHints } from './Template';

import ROUTES from '../../AppRouteNames';
import ExternalLink from '../../components/ExternalLink';
// import PandaIcon from '../../images/PandaIcon';
import Monarch from '../../images/Monarch';
import BambooIcon from '../../images/BambooIcon';
import TextDivider from '../../images/noun-divider.png';
import GraceHopperHandout from '../../docs/GraceHopperHandout';
import { Link } from 'react-router-dom';

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
      docHeader={GraceHopperHandout.sections.images}
      bugTotal={3}
      helper={
        <>
          <Link
            to={`../../${ROUTES.DEMO.path}/${ROUTES.DEMO_IMAGES.path}#image_examples`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Example images
          </Link>{' '}
          to compare WAVE icons
        </>
      }
    >
      <h2>Monarch butterfly</h2>

      <h3>About</h3>

      <div className='clearfix'>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`Image of a single butterfly has appropriate alt text of "Female Monarch butterfly". `}
        >
          <div style={{ float: 'right' }}>
            {/* href="https://commons.wikimedia.org/wiki/File:Grosser_Panda.JPG" */}

            <img
              width='256'
              alt='Female Monarch butterfly'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monarch_In_May.jpg/800px-Monarch_In_May.jpg'
            />
          </div>
          <p>
            The monarch butterfly or simply monarch (Danaus plexippus) is a
            milkweed butterfly in the family Nymphalidae. Other common names,
            depending on region, include milkweed, common tiger, wanderer, and
            black-veined brown. It is amongst the most familiar of North
            American butterflies and an iconic pollinator, although it is not an
            especially effective pollinator of milkweeds. Its wings feature an
            easily recognizable black, orange, and white pattern, with a
            wingspan of 8.9–10.2 cm (3.5–4.0 in).
          </p>
        </TestingAlert>
      </div>

      <div className='clearfix mb-4'>
        <h3>Diet</h3>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`Image of wild carrot has appropriate alt text of "wild carrot" set by the aria-label attribute. `}
        >
          <div style={{ float: 'left' }}>
            <BambooIcon size='100px' /> {/* ARIA -label set */}
          </div>
          <p>
            Although larvae eat only milkweed, adult monarchs feed on the nectar
            of many plants, including: Indian hemp, milkweed, New World aster,
            thistle, wild carrot, teasel, coneflower, horseweed, spotted Joe-Pye
            weed, common boneset, blazing stars, alfalfa , goldenrod, lilac, red
            clover and tall ironweed.
          </p>
        </TestingAlert>
      </div>

      <div className='clearfix'>
        <h3>Larva</h3>
        <TestingAlert
          isBug
          show={showHints}
          popOver={`Image of the caterpillars is missing alt text. `}
        >
          <div style={{ float: 'right' }}>
            {/* href='https://commons.wikimedia.org/wiki/File:Chengdu-pandas-d18.jpg' */}

            <img
              width='256'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Swallowtail_Caterpillar%2C_Monarch_Caterpillar_%26_Queen_Caterpillar_in_Florida_%2827224446333%29.jpg/256px-Swallowtail_Caterpillar%2C_Monarch_Caterpillar_%26_Queen_Caterpillar_in_Florida_%2827224446333%29.jpg'
            />
          </div>
          <p>
            The second-instar larva develops a characteristic pattern of white,
            yellow, and black transverse bands. The larva has a yellow triangle
            on the head and two sets of yellow bands around this central
            triangle. It is no longer translucent, and is covered in short
            setae. Pairs of black tentacles begin to grow, a larger pair on the
            thorax and a smaller pair on the abdomen. The second instar is
            usually between 6 mm (0.24 in) and 1 cm (0.39 in) long.
          </p>
        </TestingAlert>
      </div>
      <div className='clearfix mb-4'>
        <h3>Migration</h3>
        <TestingAlert
          isBug
          show={showHints}
          popOver={`The alt text for image of migrating monarchs is too long.  The entire alt text is read/displayed instead of the image.  This can be very annoying for users.`}
        >
          <div style={{ float: 'left', paddingRight: '10px' }}>
            {/* href="https://commons.wikimedia.org/wiki/File:Giant_Pandas_having_a_snack.jpg" */}
            <img
              width='256'
              alt='Migrating monarchs resting on a pine tree in Fire Island National Seashore on Long Island, New York.  Taken on September 2021'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Migrating_monarch_butterflies_on_pine_tree.jpg/256px-Migrating_monarch_butterflies_on_pine_tree.jpg'
            />
          </div>
          <p>
            In North America, monarchs migrate both north and south on an annual
            basis, in a long-distance journey that is fraught with risks. This
            is a multi-generational migration, with individual monarchs only
            making part of the full journey. The population east of the Rocky
            Mountains attempts to migrate to the sanctuaries of the Mariposa
            Monarca Biosphere Reserve in the Mexican state of Michoacán and
            parts of Florida. The western population tries to reach
            overwintering destinations in various coastal sites in central and
            southern California. The overwintered population of those east of
            the Rockies may reach as far north as Texas and Oklahoma during the
            spring migration. The second, third, and fourth generations return
            to their northern locations in the United States and Canada in the
            spring.
          </p>
        </TestingAlert>
      </div>

      <h3>Learn more</h3>
      <p>
        There is a lot of information about Monarch butterflies available on the
        web. Wikipedia is a great place to start:
      </p>
      <TestingAlert
        isBug
        show={showHints}
        popOver={`The alt doesn't describe the function of the image. The image is the logo for Wikipedia, so the alt text should be set to "Wikipedia".`}
      >
        <p>
          <a href='https://en.wikipedia.org/wiki/Monarch_butterfly'>
            <Wikipedia size={50} aria-label='large W' />
          </a>
        </p>
      </TestingAlert>
      <div className='text-center'>
        <TestingAlert
          isCorrect
          show={showHints}
          popOver={`The butterfly image is decorative and is correctly hidden using the aria-hidden attribute`}
        >
          <Monarch size='200px' /> {/* aria hidden */}
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
        <ExternalLink href='https://en.wikipedia.org/wiki/Monarch_butterfly'>
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
