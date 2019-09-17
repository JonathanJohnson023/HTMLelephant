import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Modal from "./modal/modal"
import NavBarContainer from "./navbar/navbar_container";

const App = () => (

  <div id="main">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    {/* <Switch>
      {/* <Route exact path="/" component={}/> */}
    {/* </Switch> */} 
  </div>
);



export default App;