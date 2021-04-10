// NOTE This is a sample page and should either be
// modified or removed from a real project

import React from 'react';

import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

interface Props {
  helloMessage?: string;
}

const defaultProps = {
  helloMessage: 'Hello World!',
};

const Home = (props: Props) => {
  const { helloMessage } = props;
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1 className='display-3' id='helloId'>
              {helloMessage}
            </h1>
            <p className='lead'>This is the home page for an application</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

// interface State {
//   sampleState: string;
// }

// class Home extends React.Component<Props, State> {
//   static defaultProps = { helloMessage: 'Hello world!!!' };

//   constructor(props: Props) {
//     super(props);
//     this.state = { sampleState: props.helloMessage };
//   }

//   render() {
//     const { helloMessage } = this.props;
//     const { sampleState } = this.state;
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <Jumbotron>
//               <h1 className='display-3' id='helloId'>
//                 {helloMessage}
//               </h1>
//               <p className='lead'>This is the home page for an application</p>
//               <p>{sampleState}</p>
//             </Jumbotron>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

Home.defaultProps = defaultProps;
export default Home;
