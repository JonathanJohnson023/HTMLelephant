import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

const App = () => (

  <div>
    
    <Switch>
      <Route exact path="/"></Route>

    </Switch>
  </div>
)



export default App;