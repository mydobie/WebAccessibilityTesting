// Contains routing and any application wide items like headers, footers and navigation
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Use `HashRouter as Router` when you can't control the URL ... like GitHub pages
import { Alert } from 'react-bootstrap';

// START FEATURE FLAGS
// eslint-disable-next-line import/order
import { loadFeatureFlags } from 'feature_flags';
import { isDev, isTest } from './js/whichEnv';
import { featureFlagArray } from './feature-flags.config';
// END FEATURE FLAGS

import AppNavBar from './AppNavBar';
import AppRoutes from './AppRoutes';

import SetAxios from './components/SetAxios';

const envBanner = (): JSX.Element | null => {
  if (isDev()) {
    return (
      <Alert variant='warning'>
        This is a <strong>development</strong> environment.
      </Alert>
    );
  }
  if (isTest()) {
    return (
      <Alert variant='primary'>
        This is a <strong>test</strong> environment.
      </Alert>
    );
  }
  return null;
};

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
        {envBanner()}
        <Router basename={basename}>
          <SetAxios />

          <AppNavBar />
          <main>
            <AppRoutes onFeatureChange={this.reRenderApp} />
          </main>
        </Router>
      </div>
    );
  }
}
export default App;
