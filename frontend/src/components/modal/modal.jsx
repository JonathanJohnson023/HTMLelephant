import React from 'react';
import {closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateDocumentContainer from "../document/create_document_container"
import './modal.css'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let background = "modal-background";
  let child = "modal-child"
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    // case 'createDocument':
    //   component = <CreateDocumentContainer />
    default:
      return null;
  }

  return (
    <div className={background} onClick={closeModal}>
      <div className={child} onClick={e => e.stopPropagation()}>
      <h1>{modal}</h1>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
