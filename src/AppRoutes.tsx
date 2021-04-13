// Contains routing for entire application

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// FEATURE FLAGS
import { FeatureFlagsUI } from 'feature_flags';
import { isProd } from './js/whichEnv';
// END FEATURE FLAGS

import {
  HOME_ROUTE,
  VERSION_ROUTE,
  FEATURE_FLAGS_ROUTE,
  ABOUT_ROUTE,
  TOOLS_ROUTE,
  TESTING_ROUTE,
  TESTING_HOME_ROUTE,
  TESTING_TABLES_ROUTE,
} from './AppRouteNames';

import Home from './pages/Home';
import Version from './pages/Version';
import FourOhFour from './pages/FourOhFour';

import Tools from './pages/Tools';

import Tables from './pages/SampleSite/Tables';

interface Props {
  onFeatureChange?: () => void;
}

const defaultProps = { onFeatureChange: () => {} };

const AppRoutes = (props: Props) => {
  const { onFeatureChange } = props;

  return (
    <div>
      <Switch>
        <Route path={HOME_ROUTE} exact>
          <Home />
        </Route>

        <Route path={ABOUT_ROUTE}>
          <div>HOME PAGE - change in app routes page</div>
        </Route>

        <Route path={TOOLS_ROUTE}>
          <Tools />
        </Route>

        <Route path={TESTING_TABLES_ROUTE}>
          <Tables />
        </Route>
        <Route path={TESTING_HOME_ROUTE}>
          <div> TESTING HOME - change in app routes page</div>
        </Route>

        <Route path={TESTING_ROUTE}>
          <Redirect to={TESTING_HOME_ROUTE} />
        </Route>

        <Route path={VERSION_ROUTE}>
          <Version />
        </Route>

        {/* // START FEATURE FLAGS */}
        {/* Only show feature flags UI for non production */}
        {!isProd() ? (
          <Route path={FEATURE_FLAGS_ROUTE}>
            <FeatureFlagsUI onFeatureChange={onFeatureChange} />
          </Route>
        ) : null}
        {/* // END FEATURE FLAGS */}

        <Route path='/'>
          <FourOhFour />
        </Route>
      </Switch>
    </div>
  );
};

AppRoutes.defaultProps = defaultProps;
export default AppRoutes;
