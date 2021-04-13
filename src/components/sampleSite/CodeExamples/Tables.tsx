import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const CaptionStyled = styled.caption`
  text-align: left;
  caption-side: top;
`;
const RowHeaderStyled = styled.th`
  font-weight: normal;
`;

export const correctDataTable1 = (
  <Table>
    <CaptionStyled>Children</CaptionStyled>
    <thead>
      <tr>
        <th scope='col'>Name</th>
        <th scope='col'>Age</th>
        <th scope='col'>Birth Day</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <RowHeaderStyled scope='row'>Alex</RowHeaderStyled>
        <td>5</td>
        <td>Jan. 5</td>
      </tr>
      <tr>
        <RowHeaderStyled scope='row'>Pat</RowHeaderStyled>
        <td>7</td>
        <td>Oct. 25</td>
      </tr>
      <tr>
        <RowHeaderStyled scope='row'>Ari</RowHeaderStyled>
        <td>3</td>
        <td>July 12</td>
      </tr>
    </tbody>
  </Table>
);

export const incorrectDataTable1 = (
  <Table>
    <CaptionStyled>Code used to represent colors in HTML and CSS</CaptionStyled>
    <thead>
      <tr>
        <th>Color</th>
        <th>Hex Code</th>
        <th>RGB Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Red</td>
        <td>#ff0000</td>
        <td>255,0,0</td>
      </tr>
      <tr>
        <td>Green</td>
        <td>#00ff00</td>
        <td>0,255,0</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td>#0000ff</td>
        <td>0,0,255</td>
      </tr>
    </tbody>
  </Table>
);

export const incorrectDataTable2 = (
  <Table>
    <thead>
      <tr style={{ fontWeight: 'bold' }}>
        <td>Name</td>
        <td>Season</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>Beacon</td>
        <td>Early</td>
        <td>
          Bright red apple with soft, juicy flesh and a slightly tart flavor.{' '}
        </td>
      </tr>
      <tr>
        <td>Honeycrisp</td>
        <td>Mid</td>
        <td>
          Large, dappled red fruit with a well-balanced flavor, outstanding
          crispness and juiciness.
        </td>
      </tr>
      <tr>
        <td>Frostbite</td>
        <td>Late</td>
        <td>Intensely sweet, firm and juicy flesh.</td>
      </tr>
    </thead>
  </Table>
);

export const correctLayoutTable1 = (
  <Table role='none'>
    <tbody>
      <tr>
        <td style={{ padding: '10px' }}>
          <h3 id='sample_story_1_6'>Sample Story 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            condimentum nibh. Cras aliquet odio quam, in pretium nisi tempus nec
            ...
          </p>
        </td>
        <td style={{ padding: '10px' }}>
          <h3>Sample Story 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            condimentum nibh. Cras aliquet odio quam, in pretium nisi tempus nec
            ...
          </p>
        </td>
      </tr>
    </tbody>
  </Table>
);
