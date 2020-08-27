import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import Registar from '../pages/register';
import Dashboard from '../pages/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/registrar" exact component={Registar} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}