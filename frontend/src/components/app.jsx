import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Modal from "./modal/modal"
import NavBarContainer from "./navbar/navbar_container";
import './modal/modal.css'
import EditDocumentContainer from "../components/document/edit_document_container"

const App = () => (

  <div id="main">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <div id='testyboy'></div>
    <Switch>
      <Route exact path="/" component={EditDocumentContainer} /> 
    </Switch> 
  </div>
);



export default App;