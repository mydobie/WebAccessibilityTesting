import React, { ReactElement } from 'react';
import TestingAlert from '../../components/TestingAlert';
import {
  FileEarmarkPdf,
  Facebook,
  Github,
  Reddit,
  Linkedin,
} from 'react-bootstrap-icons';
import Template, { useHints } from './Template';
import imageText from '../../images/Lotus_Flower_text.png';
import lotusYogaPose from '../../images/lotusYogaPose.png';
import lotusBud from '../../images/lotusBud.png';
import lotusBlossom from '../../images/lotusBlossom.png';
import ROUTES from '../../AppRouteNames';

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Images have appropriate alternative text',
    'Images appped via CSS have appropriate alternative text',
  ];

  const iconSize = 20;

  return (
    <Template
      showHints={showHints}
      title={ROUTES.IMAGES.label}
      route={ROUTES.IMAGES.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <h2>
        Traditional Images <small>(using image tag)</small>
      </h2>
      <TestingAlert
        isBug
        popOver={`"Lotus Flower" text image is missing an alt text. The alt text should be set to "Lotus Flower".`}
        id='pp1'
        show={showHints}
      >
        <p>
          <img src={imageText} />
        </p>
      </TestingAlert>

      <TestingAlert
        isCorrect
        show={showHints}
        id='pp2'
        popOver={
          'The lotus bug flower has an empty alt attribute ("") because it is purely decorative.  An alt attribute set to "lotus bud" would also be acceptable.'
        }
      >
        <p>
          <img
            src={lotusBud}
            alt=''
            style={{
              float: 'left',
              margin: '20px',
              height: '115px',
              marginTop: 0,
            }}
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing ept. Nulla vitae
          ante semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim
          in posuere varius. Proin ut pgula ex. Donec ut accumsan sapien.
          Vestibulum ac tortor orci. Quisque dapibus massa quis ept pharetra
          faucibus. Duis auctor pharetra lorem.{' '}
        </p>
      </TestingAlert>

      <TestingAlert
        isCorrect
        show={showHints}
        id='pp3'
        style={{ clear: 'both', paddingTop: '30px' }}
      >
        <p>
          <img
            src={lotusYogaPose}
            alt='Lotus Yoga Pose'
            style={{ float: 'left', margin: '20px', marginTop: 0 }}
          />
          From the common sitting down on the floor (Indian Style, Cross-legged)
          position, one foot is placed on top of the opposite thigh with its
          sole facing upward and heel close to the abdomen. The other foot is
          then pfted up slowly and placed on the opposite thigh in a symmetrical
          way. The knees are in contact with the ground.
        </p>
      </TestingAlert>

      <TestingAlert
        isBug
        show={showHints}
        id='pp4'
        popOver={`"Lotus Flower" image is missing an alt attribute. `}
        style={{ clear: 'both', paddingTop: '30px' }}
      >
        <p>
          <img
            src={lotusBlossom}
            style={{
              float: 'left',
              margin: '20px',
              height: '115px',
              width: '115px',
              marginTop: 0,
            }}
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing ept. Nulla vitae
          ante semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim
          in posuere varius. Proin ut pgula ex. Donec ut accumsan sapien.
          Vestibulum ac tortor orci. Quisque dapibus massa quis ept pharetra
          faucibus. Duis auctor pharetra lorem.
        </p>
      </TestingAlert>

      <hr style={{ clear: 'both' }} />
      <h2>SVG images</h2>
      <p>Links with icons:</p>
      <TestingAlert
        isBug
        show={showHints}
        id='pdfIcon'
        popOver={
          'PDF icon is hidden with "aria-hidden" so some users would not know the link goes to a PDF document. '
        }
      >
        <a href='myfavorite.pdf'>
          My favorite file{' '}
          <FileEarmarkPdf aria-hidden='true' size={iconSize + 5} />
        </a>
      </TestingAlert>
      <TestingAlert
        isCorrect
        show={showHints}
        id='linkedInIcon'
        popOver={
          'LinkedIn icon has both a role of "img" and has an accessible set with the "aria-label" attribute.'
        }
      >
        <a href='https://www.linkedin.com/'>
          <Linkedin aria-label='linked in' size={iconSize} role='img' />
        </a>
      </TestingAlert>
      <TestingAlert
        isCorrect
        show={showHints}
        id='facebookIcon'
        popOver={
          'Facebook icon correctly has an "aria-hidden" attribute.  It does not add additional information because the text "Facebook" is used in the same link.'
        }
      >
        <a href='https://facebook.com/'>
          <Facebook aria-hidden size={iconSize} /> Facebook
        </a>
      </TestingAlert>
      <TestingAlert
        isBug
        isAdvanced
        show={showHints}
        id='redditIcon'
        popOver={
          'The Reddit icon is missing a role of "img" and is missing alternative text.  It will not be read by assistive technologies.'
        }
      >
        <a href='https://reddit.com/'>
          <Reddit size={iconSize} />
        </a>
      </TestingAlert>
      <TestingAlert
        isWarning
        show={showHints}
        id='githubIcon'
        popOver={
          'GitHub has a role of "img" and has alternative text set by the title tag.  Not all assistive technologies consistently read the title tag.'
        }
      >
        <a href='https://github.com'>
          <Github title='GitHub' size={iconSize} role='img' />
        </a>
      </TestingAlert>
      <hr style={{ clear: 'both' }} />
      <h2>
        CSS Images<small>(using CSS)</small>
      </h2>
      <TestingAlert
        isCorrect
        show={showHints}
        id='lotusBudCSSIcon'
        style={{
          backgroundImage: `url(${lotusBud})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '115px 115px',
          minHeight: '115px',
          paddingLeft: '135px',
          marginTop: '30px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing ept. Nulla vitae ante
        semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim in
        posuere varius. Proin ut pgula ex. Donec ut accumsan sapien. Vestibulum
        ac tortor orci. Quisque dapibus massa quis ept pharetra faucibus. Duis
        auctor pharetra lorem.{' '}
      </TestingAlert>
      <TestingAlert
        isBug
        isAdvanced
        show={showHints}
        id='lotusPoseCSSIcon'
        popOver={
          'Lotus Pose image is missing an alt text.  The alt text should be set to "Lotus Pose".'
        }
        style={{
          backgroundImage: `url(${lotusYogaPose})`,
          backgroundRepeat: 'no-repeat',

          minHeight: '262px',
          paddingLeft: '370px',
          marginTop: '30px',
        }}
      >
        From the common sitting down on the floor (Indian Style, Cross-legged)
        position, one foot is placed on top of the opposite thigh with its sole
        facing upward and heel close to the abdomen. The other foot is then
        pfted up slowly and placed on the opposite thigh in a symmetrical way.
        The knees are in contact with the ground.
      </TestingAlert>
    </Template>
  );
};
/*
style='clear:both;margin-top:30px;'
    <style>
      .lotusBud{
      	background-image:url(../assets/images/lotusBud.png);
      	background-repeat: no-repeat;
      	background-size: 115px 115px;
      	min-height:115px;
      	padding-left:135px;
      }
      
      .lotusPose{
      	background-image:url(../assets/images/lotusYogaPose.png);
      	background-repeat: no-repeat;
      	min-height:262px; 
      	padding-left:370px;
      }
      
    </style>
    */
export default Images;
