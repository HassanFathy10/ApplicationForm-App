import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './pages/RootLayout';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import ApplicationInfo from './pages/ApplicationInfo';
import ProgramDetails from './pages/programDetails';
import ApplicationForm from './pages/applicationform';
import Workflow from './pages/workflow';
import Preview from './pages/preview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ApplicationInfo />},
      { path: '/ProgramDetails', element: <ProgramDetails />},
      { path: '/ApplicationForm', element: <ApplicationForm /> },
      { path: '/Workflow', element: <Workflow /> },
      { path: '/Preview', element: <Preview />}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
