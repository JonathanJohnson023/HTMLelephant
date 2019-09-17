import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import LoginFormContainer from "./session/login_from_container"

const App = () => (

  <div>    
    <Switch>
      <Route exact path="/" component={LoginFormContainer}/>
    </Switch>
  </div>
);



export default App;