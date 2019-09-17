import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);