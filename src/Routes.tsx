import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import App from './pages/home/homePage.jsx';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<App />} />
    </ReactRoutes>
  );
}

