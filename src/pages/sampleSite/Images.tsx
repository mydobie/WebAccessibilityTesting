import React, { ReactElement } from 'react';
import TestingAlert from '../../components/TestingAlert';
import {
  FileEarmarkPdf,
  Linkedin,
  Facebook,
  Github,
  Reddit,
} from 'react-bootstrap-icons';
import Template, { useHints } from './Template';
import imageText from '../../images/Lotus_Flower_text.png';
import lotusYogaPose from '../../images/lotusYogaPose.png';
import lotusBud from '../../images/lotusBud.png';
import lotusBlossom from '../../images/lotusBlossom.png';

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Images have appropriate alternative text',
    'Images applied via CSS have appropriate alternative text',
  ];

  const iconSize = 20;

  return (
    <Template
      showHints={showHints}
      title='Images'
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

      <TestingAlert isCorrect show={showHints} id='pp2'>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          ante semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim
          in posuere varius. Proin ut ligula ex. Donec ut accumsan sapien.
          Vestibulum ac tortor orci. Quisque dapibus massa quis elit pharetra
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
          then lifted up slowly and placed on the opposite thigh in a
          symmetrical way. The knees are in contact with the ground.
        </p>
      </TestingAlert>

      <TestingAlert
        isBug
        show={showHints}
        id='pp4'
        popOver={`"Lotus Flower" image is missing an alt text. The alt text should be set to "" (empty).`}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          ante semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim
          in posuere varius. Proin ut ligula ex. Donec ut accumsan sapien.
          Vestibulum ac tortor orci. Quisque dapibus massa quis elit pharetra
          faucibus. Duis auctor pharetra lorem.
        </p>
      </TestingAlert>

      <hr style={{ clear: 'both' }} />
      <h2>SVG images</h2>
      <p>Links with icons:</p>
      <ul>
        <li>
          <a href='myfavorite.pdf'>
            My favorite file{' '}
            <FileEarmarkPdf aria-hidden='true' size={iconSize + 5} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/'>
            <Linkedin aria-label='Linked in' size={iconSize} role='img' />
          </a>
        </li>
        <li>
          <a href='https://facebook.com/'>
            <Facebook aria-hidden size={iconSize} /> Facebook
          </a>
        </li>
        <li>
          <a href='https://reddit.com/'>
            <Reddit size={iconSize} />
          </a>
        </li>
        <li>
          <a href='https://github.com'>
            <Github title='GitHub' size={iconSize} role='img' />
          </a>
        </li>
      </ul>
      <h2>
        CSS Images<small>(using CSS)</small>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        ante semper, bibendum ex id, auctor tortor. Maecenas pellentesque enim
        in posuere varius. Proin ut ligula ex. Donec ut accumsan sapien.
        Vestibulum ac tortor orci. Quisque dapibus massa quis elit pharetra
        faucibus. Duis auctor pharetra lorem.{' '}
      </p>
      <p>
        From the common sitting down on the floor (Indian Style, Cross-legged)
        position, one foot is placed on top of the opposite thigh with its sole
        facing upward and heel close to the abdomen. The other foot is then
        lifted up slowly and placed on the opposite thigh in a symmetrical way.
        The knees are in contact with the ground.
      </p>
    </Template>
  );
};

export default Images;
