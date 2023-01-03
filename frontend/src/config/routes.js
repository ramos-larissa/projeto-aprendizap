import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Error from '../pages/Error';
import Home from '../pages/Home';

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesConfig;
