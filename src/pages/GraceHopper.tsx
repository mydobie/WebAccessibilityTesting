// Page rendered when url doesn't match route in App.jsx

import React, { ReactElement } from 'react';
import {
  Icon1Circle,
  Icon2Circle,
  Icon3Circle,
  Icon4Circle,
  Icon5Circle,
} from 'react-bootstrap-icons';
import ExternalLink from '../components/ExternalLink';

const iconProps = { size: '25' };
import { Row, Col } from 'react-bootstrap';

// *** Main component ***
const GraceHopper = (/* props */): ReactElement => (
  <Row>
    <Col>
      <h1>Grace Hopper Celebration</h1>

      <p>Things to do:</p>
      <ol className='grace-hopper-todo-list'>
        <li>
          <Icon1Circle {...iconProps} title='step 1' />
          Install{' '}
          <ExternalLink href='https://wave.webaim.org/extension/'>
            WAVE browser extension
          </ExternalLink>
        </li>
        <li>
          <Icon2Circle {...iconProps} title='step 2' />
          Install{' '}
          <ExternalLink href='https://www.deque.com/axe/browser-extensions/'>
            axe Dev tools (free version)
          </ExternalLink>{' '}
          (optional)
        </li>
        <li>
          <Icon3Circle {...iconProps} title='step 3' />
          (Mac only){' '}
          <ExternalLink href='https://articulate.com/support/article/How-to-Enable-Tab-Key-Navigation-on-a-Mac'>
            Enable tab navigation
          </ExternalLink>
        </li>
        <li>
          <Icon4Circle {...iconProps} title='step 4' />
          Bookmark{' '}
          <ExternalLink href='https://docs.google.com/document/d/1cap2XjzHsKvB8JgHDAyM-5KT5_KOqGdMo87lNJ6leAU'>
            hand-out
          </ExternalLink>
        </li>
        <li>
          <Icon5Circle {...iconProps} title='step 5' />
          Bookmark sample site (Coming soon)
        </li>
      </ol>
    </Col>
  </Row>
);

export default GraceHopper;
