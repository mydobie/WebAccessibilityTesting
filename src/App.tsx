import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'; // Use HashRouter  when you can't control the URL ... like GitHub pages

import AppTemplate from './AppTemplate';
import ROUTES from './AppRouteNames';

import Home from './pages/Home';
// SAMPLE SITE
import SampleSiteHome from './pages/sampleSite/Home';
import Headings from './pages/sampleSite/Headings';
import Images from './pages/sampleSite/Images';
import Tables from './pages/sampleSite/Tables';
import Forms from './pages/sampleSite/Forms';
import FormInfo from './pages/sampleSite/FormInfo';
import FormValidation from './pages/sampleSite/FormValidation';
import Links from './pages/sampleSite/Links';
import FourOhFour from './pages/FourOhFour';

// DEMO SITE
import Demo from './pages/demoSite/Home';
import DemoImages from './pages/demoSite/Images';

// GRACE HOPPER
import GraceHopper from './pages/GraceHopper';

const basename = '/';

export const routerArray = [
  {
    path: ROUTES.HOME.path,
    element: <AppTemplate />,

    handle: { label: ROUTES.HOME.label },
    children: [
      { path: '', element: <Home /> },
      {
        path: ROUTES.SAMPLE.path,
        handle: { label: ROUTES.SAMPLE.label },
        children: [
          {
            path: '',
            element: <SampleSiteHome />,
          },
          {
            path: ROUTES.IMAGES.path,
            element: <Images />,
            handle: { label: ROUTES.IMAGES.label },
          },
          {
            path: ROUTES.HEADINGS.path,
            element: <Headings />,
            handle: { label: ROUTES.HEADINGS.label },
          },
          {
            path: ROUTES.TABLES.path,
            element: <Tables />,
            handle: { label: ROUTES.TABLES.label },
          },
          {
            path: ROUTES.FORMS.path,
            element: <Forms />,
            handle: { label: ROUTES.FORMS.label },
          },
          {
            path: ROUTES.FORM_INFO.path,
            element: <FormInfo />,
            handle: { label: ROUTES.FORM_INFO.label },
          },
          {
            path: ROUTES.FORM_VALIDATION.path,
            element: <FormValidation />,
            handle: { label: ROUTES.FORM_VALIDATION.label },
          },
          {
            path: ROUTES.LINKS.path,
            element: <Links />,
            handle: { label: ROUTES.LINKS.label },
          },
        ],
      },
      {
        path: ROUTES.DEMO.path,
        handle: { label: ROUTES.DEMO.label },

        children: [
          {
            path: '',
            element: <Demo />,
          },
          {
            path: ROUTES.DEMO_IMAGES.path,
            element: <DemoImages />,
            handle: { label: ROUTES.DEMO_IMAGES.label },
          },
        ],
      },
      {
        path: ROUTES.GRACE_HOPPER_HOME.path,
        handle: { label: ROUTES.GRACE_HOPPER_HOME.label },

        children: [
          {
            path: '',
            element: <GraceHopper />,
          },
        ],
      },
      { path: '*', element: <FourOhFour /> },
    ],
  },
];

const router =
  process.env.REACT_APP_USE_HASH_ROUTER === 'true'
    ? createHashRouter(routerArray, { basename })
    : createBrowserRouter(routerArray, { basename });

const App = (): ReactElement => <RouterProvider router={router} />;

export default App;
