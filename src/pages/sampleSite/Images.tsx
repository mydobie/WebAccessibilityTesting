import React, { ReactElement } from 'react';
// import TestingAlert from '../../components/TestingAlert';
import swirlImage from '../../images/swirl.png';
import celebrateImage from '../../images/celebrate.png';
import balloonImage from '../../images/balloons.png';
import carImage from '../../images/car.png';
import planeImage from '../../images/plane.png';
import trainImage from '../../images/train.png';
import { RoseImage, IrisImage, DaisyImage } from '../../images/SampleSVGs';
import styled from 'styled-components';
import Template, { useHints } from './Template';

import ROUTES from '../../AppRouteNames';

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Images have appropriate alternative text',
    'Images appped via CSS have appropriate alternative text',
  ];

  const iconsize = 70;

  const Car = styled.div`
    width: ${4 * iconsize}px;
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

  return (
    <Template
      showHints={showHints}
      title={ROUTES.IMAGES.label}
      route={ROUTES.IMAGES.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <h2>Images</h2>
      <p>
        Empty alt <img src={swirlImage} alt='' width={iconsize} />
      </p>
      <p>
        Proper alt <img src={celebrateImage} alt='celebrate' width={iconsize} />
      </p>
      <p>
        Missing alt <img src={balloonImage} width={iconsize} />
      </p>
      <p>
        CSS image aria-label
        {/* <img src={carImage} aria-label='car' width={iconSize} /> */}
        <Car aria-label='car' />
      </p>
      <p>
        CSS image aria-labelledby <span id='planeText'>Plane</span>{' '}
        <Plane aria-labelledby='planeText' />
      </p>
      <p>
        CSS image no label <Train />
      </p>
      <p>
        SVG hidden - not needed <DaisyImage aria-hidden />
      </p>
      <p>
        SVG title <RoseImage />
      </p>
      <p>
        SVG none <IrisImage />
      </p>
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
