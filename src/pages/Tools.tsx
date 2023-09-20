import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Card } from './sampleSite/Template';

import ROUTES from '../AppRouteNames';
import ExternalLink from '../components/ExternalLink';
import Wrench from '../images/noun-wrench';
import { Link } from 'react-router-dom';
// import { routerArray } from '../App';

const Ul = styled.ul`
  margin-bottom: 40px;

  li {
    margin-bottom: 10px;
  }
`;

// *** Main component ***
const Tools = (): ReactElement => (
  <Row>
    <Col>
      <h1>Tools</h1>
      <Card>
        <Card.Body>
          <Row>
            <Col className='d-none d-sm-block' sm={1}>
              <Wrench />
            </Col>
            <Col>
              <p>Free tools to assist with web accessibility testing</p>
              <p>
                While tools, standards, and checklists are great, remember that
                accessibility is about people and allowing them to fully
                interact with a web site.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <h2 className='h3'>Demonstration</h2>
      <Ul>
        <li>
          <Link to={`../../${ROUTES.DEMO.path}`}>Demonstration site</Link>
        </li>
        <li>
          <ExternalLink href='https://docs.google.com/document/d/1cap2XjzHsKvB8JgHDAyM-5KT5_KOqGdMo87lNJ6leAU'>
            No One Left Behind handout
          </ExternalLink>
        </li>
      </Ul>
      <h2 className='h3'>Browser plugins/Add-ons/Extensions</h2>

      <h3 className='h4'>Automated checking</h3>
      <Ul>
        <li>
          <ExternalLink href='https://wave.webaim.org/extension/'>
            WAVE browser extension (Chrome, FireFox, Edge)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://www.deque.com/axe/browser-extensions/'>
            axe DevTools (Chrome, FireFox, Edge)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://www.siteimprove.com/integrations/browser-extensions/'>
            Siteimprove (Chrome, FireFox, Edge, Opera)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://www.ibm.com/able/toolkit/verify/automated'>
            IBM Accessibility Checker (Chrome, FireFox)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/lera/neninfnjnhknniefcpognoooalfdaofc'>
            LERA (Chrome)
          </ExternalLink>
        </li>
      </Ul>
      <h3 className='h4'>Specific issues checking</h3>
      <Ul>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck'>
            ARIA dev tools
          </ExternalLink>{' '}
          Displays landmarks
        </li>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg'>
            Colorblindly (Chrome)
          </ExternalLink>{' '}
          Simulates colorblindness
        </li>
        <li>
          <ExternalLink href='https://silktide.com/tools/toolbar/'>
            Disability simulator (Chrome)
          </ExternalLink>{' '}
          Simulates color blindness and dyslexia. Also includes a screen reader
          simulator
        </li>
        <li>
          <ExternalLink href='https://chrispederick.com/work/web-developer/'>
            Web developer (Chrome, Firefox)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf'>
            Color contrast checker (Chrome)
          </ExternalLink>{' '}
        </li>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/zoom-text-only/jamhfhbppcmkgghlkeieococonlbppjg'>
            Text zoom only (Chrome)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi'>
            HeadingsMap (Chrome)
          </ExternalLink>{' '}
          Shows headings as a nested list
        </li>
      </Ul>
      <h2 className='h3'>Bookmarklets</h2>
      <Ul>
        <li>
          <ExternalLink href='https://accessibility-bookmarklets.org/'>
            Accessibility bookmarklets
          </ExternalLink>{' '}
          Bookmarklets for finding landmarks, headings, lists, images, and form
          elements
        </li>
        <li>
          <ExternalLink href='https://khan.github.io/tota11y/'>
            tota11y
          </ExternalLink>{' '}
          Bookmarklets for finding headings, contrast, link text, labels, alt
          text. landmarks and screen reader output
        </li>
        <li>
          <ExternalLink href='https://pauljadam.com/bookmarklets/focus.html'>
            Bookmarklet to help show what item has focus
          </ExternalLink>
        </li>
      </Ul>
      <h2 className='h3'>Screen Readers</h2>
      <Ul>
        <li>
          <ExternalLink href='https://www.nvaccess.org/'>
            NVDA (Windows)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://www.freedomscientific.com/products/software/jaws/'>
            JAWS (Windows)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://support.apple.com/guide/voiceover/welcome/10'>
            VoiceOver(Mac)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://support.google.com/chromebook/answer/7031755?hl=en'>
            ChromeVox (Chrome)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://help.gnome.org/users/orca/stable/index.html.en'>
            Orca (Linux)
          </ExternalLink>
        </li>
      </Ul>
      <h2 className='h3'>Resources</h2>
      <Ul>
        <li>
          <ExternalLink href='https://webaim.org/articles/'>
            WebAIM
          </ExternalLink>{' '}
          Great set of articles and information
        </li>
        <li>
          <ExternalLink href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'>
            W3C Web Accessibility Initiative (WAI) Introduction to accessibility
          </ExternalLink>{' '}
          Great set of articles and information
        </li>
        <li>
          <ExternalLink href='https://developer.mozilla.org/en-US/docs/Web/Accessibility'>
            MDN Accessibility
          </ExternalLink>{' '}
          Numerous articles and documentation - tends to be a little bit more
          technical
        </li>
        <li>
          <ExternalLink href='https://www.w3.org/WAI/ARIA/apg/patterns/'>
            ARIA Authoring practices
          </ExternalLink>{' '}
          Describes how to navigate more complex widgets
        </li>
      </Ul>
      <h2 className='h3'>WCAG web accessibility guidelines </h2>
      <Ul>
        <li>
          <ExternalLink href='https://www.w3.org/WAI/standards-guidelines/wcag/glance/'>
            WCAG 2.1 at a Glance
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://www.w3.org/TR/WCAG21/'>
            WCAG 2.1 Guidelines
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://webaim.org/standards/wcag/checklist'>
            WCAG checklist
          </ExternalLink>
        </li>
      </Ul>
    </Col>
  </Row>
);

export default Tools;
