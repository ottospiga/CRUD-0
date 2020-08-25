import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/login';
import Contact from '../pages/register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
}