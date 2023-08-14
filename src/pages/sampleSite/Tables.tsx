import React, { ReactElement } from 'react';
//import TestingAlert from '../../components/TestingAlert';
import { Table as BSTable } from 'react-bootstrap';
import styled from 'styled-components';
import TestingAlert from '../../components/TestingAlert';
import Template, { useHints } from './Template';
import ROUTES from '../../AppRouteNames';

const PseudoHeaderRow = styled.tr`
  font-weight: bold;
`;

const Table = styled(BSTable)`
  tbody {
    th {
      font-weight: normal;
    }
  }
  caption-side: top;
`;

const StoryCell = styled.td`
  padding: 10px;
`;

const Images = (): ReactElement => {
  const { showHints, toggleHints } = useHints();
  const checks = [
    'Data tables have column headings and row headings (if applicable)',
    'Layout tables do not contain any column or row headings',
  ];

  return (
    <Template
      showHints={showHints}
      title={ROUTES.TABLES.label}
      route={ROUTES.TABLES.path}
      toggleHints={toggleHints}
      checks={checks}
      docHeader=''
    >
      <h2>Children and their birth dates</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui eros,
        suscipit eget risus ut, vulputate feugiat neque. Vestibulum tincidunt
        dolor at augue rhoncus, at mollis tellus placerat. Integer vitae tellus
        et nibh suscipit vehicula non non ex. Vivamus convallis feugiat
        efficitur. Nunc malesuada mi nulla, nec sodales tellus efficitur varius.
        Donec aliquet, nibh in viverra ornare, ante sem commodo ligula, eu porta
        risus diam sit amet sem. Suspendisse potenti. Sed varius sed magna ac
        congue. Donec tincidunt mauris non blandit tincidunt. Donec a nisl at
        leo eleifend commodo non sed nunc.
      </p>
      <TestingAlert isCorrect id='childrenTable' show={showHints}>
        <Table>
          <caption>Brook&apos;s children</caption>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Birth Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>Alex</th>
              <td>5</td>
              <td>Jan. 5</td>
            </tr>
            <tr>
              <th scope='row'>Pat</th>
              <td>7</td>
              <td>Oct. 25</td>
            </tr>
            <tr>
              <th scope='row'>Ari</th>
              <td>3</td>
              <td>July 12</td>
            </tr>
          </tbody>
        </Table>
      </TestingAlert>
      <hr />
      <h2>A look at colors</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui eros,
        suscipit eget risus ut, vulputate feugiat neque. Vestibulum tincidunt
        dolor at augue rhoncus, at mollis tellus placerat. Integer vitae tellus
        et nibh suscipit vehicula non non ex. Vivamus convallis feugiat
        efficitur. Nunc malesuada mi nulla, nec sodales tellus efficitur varius.
        Donec aliquet, nibh in viverra ornare, ante sem commodo ligula, eu porta
        risus diam sit amet sem. Suspendisse potenti. Sed varius sed magna ac
        congue. Donec tincidunt mauris non blandit tincidunt. Donec a nisl at
        leo eleifend commodo non sed nunc.
      </p>
      <TestingAlert
        isBug
        show={showHints}
        id='colors'
        popOver={` The color table is missing row headers. In addition, no scope is set for
        the existing headers (should be set to "col" for column.)`}
      >
        <Table>
          <caption>Code used to represent colors in HTML and CSS</caption>
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
      </TestingAlert>

      <hr />
      <h2>Minnesota Apples</h2>
      <TestingAlert
        isBug
        show={showHints}
        id='appleTable'
        popOver={` The Minnesota apples is missing both row and column headers. Screenreaders will
        assume this is a layout table.`}
      ></TestingAlert>
      <Table>
        <thead>
          <PseudoHeaderRow>
            <td>Name</td>
            <td>Season</td>
            <td>Description</td>
          </PseudoHeaderRow>
          <tr>
            <td>Beacon</td>
            <td>Early</td>
            <td>
              Bright red apple with soft, juicy flesh and a slightly tart
              flavor.{' '}
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
      <hr />
      <h2>In today&apos;s news</h2>
      <TestingAlert
        isWarning
        id='storyTable'
        show={showHints}
        popOver={
          <>
            <p>
              Table is correctly coded as a layout table. Screenreaderes will
              treat this table as straight text, so there is not an immediate
              accessibility issue.
            </p>
            <p> If possible use CSS instead of tables for layout.</p>
          </>
        }
      >
        <Table>
          <tr>
            <StoryCell>
              <h3>Sample Story 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in condimentum nibh. Cras aliquet odio quam, in pretium nisi
                tempus nec ...
              </p>
            </StoryCell>
            <StoryCell>
              <h3>Sample Story 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                in condimentum nibh. Cras aliquet odio quam, in pretium nisi
                tempus nec ...
              </p>
            </StoryCell>
          </tr>
        </Table>
      </TestingAlert>
    </Template>
  );
};

export default Images;
