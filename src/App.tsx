import React, { ReactElement } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'; // Use HashRouter  when you can't control the URL ... like GitHub pages

import AppTemplate from './AppTemplate';
import ROUTES from './AppRouteNames';

import Home from './pages/Home';
import SampleSiteHome from './pages/sampleSite/Home';
import Headings from './pages/sampleSite/Headings';
import Images from './pages/sampleSite/Images';
import Tables from './pages/sampleSite/Tables';
import Forms from './pages/sampleSite/Forms';
import FourOhFour from './pages/FourOhFour';

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
            handle: { label: ROUTES.HEADINGS.label },
          },
          {
            path: ROUTES.IMAGES.path,
            element: <Images />,
            handle: { label: ROUTES.IMAGES.label },
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
