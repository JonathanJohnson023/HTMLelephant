import React from "react";
import {connect} from "react-redux";
import NavBar from './navbar';
import {logout} from "../../actions/session_actions";
import {openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) =>({
  // user: state.entities.session
})

const mapDispatchToProps = (dispatch) =>({ 
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)