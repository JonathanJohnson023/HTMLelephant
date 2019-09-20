import React from "react";
import {connect} from "react-redux";
import NavBar from './navbar';
import {logout} from "../../actions/session_actions";
import {openModal } from "../../actions/modal_actions";
import { createDocument } from '../../actions/document_actions';

const mapStateToProps = (state) =>({
  user: state.session.isAuthenticated
})

const mapDispatchToProps = (dispatch) =>({ 
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  createDocument: (data) => dispatch(createDocument(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)