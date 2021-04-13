// Contains routing and any application wide items like headers, footers and navigation
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Use `HashRouter as Router` when you can't control the URL ... like GitHub pages
import { Container } from 'react-bootstrap';
// START FEATURE FLAGS
// eslint-disable-next-line import/order
import { loadFeatureFlags } from 'feature_flags';
import { featureFlagArray } from './feature-flags.config';
// END FEATURE FLAGS

import AppRoutes from './AppRoutes';

import SetAxios from './components/SetAxios';

import Header from './components/global/Header';

interface Props {}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.reRenderApp = this.reRenderApp.bind(this);
  }

  async componentDidMount() {
    // START FEATURE FLAGS
    // NOTE: featureFlagArray is from feature-flags.config.js file
    loadFeatureFlags(featureFlagArray, false, this.reRenderApp());
    // END FEATURE FLAGS
  }

  componentWillUnmount() {}

  reRenderApp(/* features */) {
    // NOTE:  You can do an ajax call to send updated feature flags here
    this.forceUpdate();
  }

  render() {
    const basename = '';
    return (
      <div>
        <Router basename={basename}>
          <SetAxios />
          <Header />

          <main>
            <Container>
              <AppRoutes onFeatureChange={this.reRenderApp} />
            </Container>
          </main>
        </Router>
      </div>
    );
  }
}
export default App;
