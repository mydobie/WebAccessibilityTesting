import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'; // Use HashRouter  when you can't control the URL ... like GitHub pages

import AppTemplate from './AppTemplate';
import ROUTES from './AppRouteNames';

import Home from './pages/Home';
import FourOhFour from './pages/FourOhFour';

// SAMPLE SITE
import SampleSiteHome from './pages/sampleSite/Home';
import Headings from './pages/sampleSite/Headings';
import Images from './pages/sampleSite/Images';
import KeyboardNavigation from './pages/sampleSite/KeyboardNav';
import Forms from './pages/sampleSite/Forms';
import Zoom from './pages/sampleSite/Zoom';
import Color from './pages/sampleSite/Color';

import Tables from './pages/sampleSite/Tables';
import FormInfo from './pages/sampleSite/FormInfo';
import FormValidation from './pages/sampleSite/FormValidation';
import Links from './pages/sampleSite/Links';

// DEMO SITE
import Demo from './pages/demoSite/Home';
import DemoHeadings from './pages/demoSite/Headings';
import DemoImages from './pages/demoSite/Images';
import DemoKeyboardNavigation from './pages/demoSite/KeyboardNav';
import DemoForms from './pages/demoSite/Forms';
import DemoZoom from './pages/demoSite/Zoom';
import DemoColor from './pages/demoSite/Color';

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
            path: ROUTES.HEADINGS.path,
            element: <Headings />,
            handle: {
              label: ROUTES.HEADINGS.label,
            },
          },
          {
            path: ROUTES.IMAGES.path,
            element: <Images />,
            handle: { label: ROUTES.IMAGES.label },
          },
          {
            path: ROUTES.KEYBOARD.path,
            element: <KeyboardNavigation />,
            handle: { label: ROUTES.KEYBOARD.label },
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
            path: ROUTES.ZOOM.path,
            element: <Zoom />,
            handle: { label: ROUTES.ZOOM.label },
          },
          {
            path: ROUTES.COLOR.path,
            element: <Color />,
            handle: { label: ROUTES.COLOR.label },
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
            path: ROUTES.DEMO_HEADINGS.path,
            element: <DemoHeadings />,
            handle: { label: ROUTES.DEMO_HEADINGS.label },
          },
          {
            path: ROUTES.DEMO_IMAGES.path,
            element: <DemoImages />,
            handle: { label: ROUTES.DEMO_IMAGES.label },
          },
          {
            path: ROUTES.DEMO_KEYBOARD.path,
            element: <DemoKeyboardNavigation />,
            handle: { label: ROUTES.DEMO_KEYBOARD.label },
          },
          {
            path: ROUTES.DEMO_FORMS.path,
            element: <DemoForms />,
            handle: { label: ROUTES.DEMO_FORMS.label },
          },
          {
            path: ROUTES.DEMO_ZOOM.path,
            element: <DemoZoom />,
            handle: { label: ROUTES.DEMO_ZOOM.label },
          },
          {
            path: ROUTES.DEMO_COLOR.path,
            element: <DemoColor />,
            handle: { label: ROUTES.DEMO_COLOR.label },
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
