import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import TestingAlert from '../../components/TestingAlert';
import swirlImage from '../../images/swirl.png';
import celebrateImage from '../../images/celebrate.png';
import balloonImage from '../../images/balloons.png';
import carImage from '../../images/car.png';
import planeImage from '../../images/plane.png';
import trainImage from '../../images/train.png';
import gitLabImage from '../../images/noun-github.png';
import { RoseImage, DaisyImage } from '../../images/SampleSVGs';
import styled from 'styled-components';
import Template, { useHints } from '../sampleSite/Template';
import { checks } from '../sampleSite/Images';
import ROUTES from '../../AppRouteNames';
import GraceHopperHandout from '../../docs/GraceHopperHandout';

const iconsize = 70;

const Car = styled.span`
  width: ${iconsize}px;
  height: ${iconsize}px;
  background-image: url(${carImage});
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Plane = styled.div`
  width: ${4 * iconsize}px;
  height: ${iconsize}px;
  background-image: url(${planeImage});
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Train = styled.div`
  width: ${4 * iconsize}px;
  height: ${iconsize}px;
  background-image: url(${trainImage});
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Hr = styled.hr`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();

  return (
    <Template
      showHints={showHints}
      title={ROUTES.DEMO_IMAGES.label}
      toggleHints={toggleHints}
      checks={checks}
      docHeader={GraceHopperHandout.sections.images}
      sampleRoute={ROUTES.IMAGES}
    >
      <h2>Images</h2>

      <TestingAlert
        isCorrect
        show={showHints}
        id='pp1'
        popOver={
          "The image doesn't provide any additional information.  It is correctly marked with an empty alt and the image will be ignored by assistive technologies."
        }
      >
        <p>
          <img src={swirlImage} alt='' width={iconsize} /> When developing or
          refining a website it is important to recheck accessibility at every
          change.
        </p>
      </TestingAlert>

      <TestingAlert
        isCorrect
        show={showHints}
        id='pp2'
        popOver={
          "The image correctly describes the intent or meaning of the image and doesn't blindly describe the contents of the image."
        }
      >
        <p>
          <img src={celebrateImage} alt='celebrate' width={iconsize} /> When all
          users regardless of ability or technology and use your website, this
          makes happy users.
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        id='pp3'
        popOver={
          "The alt text doesn't describe the function of the image.  The image represents 'GitHub'.  The word 'GitHub' would be a better alt text."
        }
      >
        <p>
          <a href='https://github.com'>
            <img
              src={gitLabImage}
              alt='Octocat'
              width={iconsize}
              style={{ borderBottom: '1px solid #00f' }}
            />
          </a>
          Most code is stored in our private repo.
        </p>
      </TestingAlert>
      <TestingAlert
        isCorrect
        show={showHints}
        id='pp4'
        popOver={
          'The image uses the alt-label attribute instead of a traditional alt text attribute.  This is an valid alternative.'
        }
      >
        <p>
          <Car aria-label='car' /> Some web designers consider their designs the
          vehicle a person uses in order to achieve their tasks or goals. Link
          how a car is how a person gets to a physical destination.
        </p>
      </TestingAlert>
      <TestingAlert
        isBug
        show={showHints}
        id='pp5'
        popOver={
          'This image is missing an alternative text.  Assistive technologies will read the image file name instead which rarely makes sense to end users.'
        }
      >
        <p>
          <img src={balloonImage} width={iconsize} /> Let&apos;s celebrate
          lifting all users to allow them to perform tasks independently and
          effectively.
        </p>
      </TestingAlert>
      <TestingAlert
        isWarning
        show={showHints}
        id='pp6'
        popOver={
          'This image may not be read/shown to assistive technologies.  It may have a title attribute (shown when a user hovers over the image by a mouse) that may be read/shown by some assistive technologies.  A better approach would be to mark the image as "hidden" or provide an appropriate alt text.'
        }
      >
        <p>
          <RoseImage /> Once you empower a user with good accessibility and
          usability, you may be surprised how far they will bloom.
        </p>
      </TestingAlert>

      <Hr />

      <h2 id='image_examples'>Other image examples</h2>
      <Table>
        <thead>
          <tr>
            <th scope='col'>Example</th>
            <th scope='col'>Description</th>
            <th scope='col'>Action needed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={swirlImage} alt='' width={iconsize} />
            </td>
            <td>
              Image with an empty alt text. This will not be read to assistive
              technologies.
            </td>
            <td>Verify that image does not contain any needed information.</td>
          </tr>
          <tr>
            <td>
              <img src={celebrateImage} alt='celebrate' width={iconsize} />
            </td>
            <td>
              Image with alt text of “celebrate”. This alt text will be read by
              assistive technologies.
            </td>
            <td>
              Verify alt text describes the content and/or function of the
              image.
            </td>
          </tr>
          <tr>
            <td>
              <img src={balloonImage} width={iconsize} />
            </td>
            <td>Image with a missing alt text. </td>
            <td>Alt text needs to be added. This is an error.</td>
          </tr>
          <tr>
            <td>
              <Car aria-label='car' />
            </td>
            <td>
              Image with alt text of “car” This alt text will be read by
              assistive technologies.
            </td>
            <td>
              Verify alt text describes the content and/or function of the
              image.
            </td>
          </tr>
          <tr>
            <td>
              <span id='planeText'>Plane</span>{' '}
              <Plane aria-labelledby='planeText' />
            </td>
            <td>
              Image with alt text from text already on the page with an HTML id
              of “planeText”.
            </td>
            <td>
              Verification will require looking at the code. Verify the text in
              the HTML object with the “planeText” id describing the content
              and/or function of the image. Unfortunately, WAVE does not show
              the id of elements.
            </td>
          </tr>
          <tr>
            <td>
              <DaisyImage aria-hidden />
            </td>
            <td>
              Image will be ignored by assistive technologies because the
              aria-hidden attribute was applied.
            </td>
            <td>Verify that image does not contain any needed information.</td>
          </tr>
          <tr>
            <td>
              <RoseImage />
            </td>
            <td>
              When the mouse cursor hovers over the image, alternative text is
              shown. For most assistive technologies “rose” will be read
            </td>
            <td>
              Consider using another method like aria-label to set alternative
              text
            </td>
          </tr>

          <tr>
            <td>
              <Train />
            </td>
            <td>
              Image without any alt text. May be ignored by assistive
              technologies depending on how it is implemented
            </td>
            <td>
              If this element is not to be read, consider adding an aria-hidden
              attribute.
            </td>
          </tr>
        </tbody>
      </Table>
    </Template>
  );
};

export default Images;
