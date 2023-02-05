import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom';

import App from '../components/App';

const router = createBrowserRouter([
  {
    path: "/docs",
    element: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('app')
);