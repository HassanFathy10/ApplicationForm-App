import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './pages/RootLayout';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store';
import ErrorPage from './pages/ErrorPage';
import ApplicationForm from './pages/ApplicationForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/ApplicationForm', element: <ApplicationForm />}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
