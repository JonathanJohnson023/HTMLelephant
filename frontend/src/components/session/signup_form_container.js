import { connect } from 'react-redux';
import { removeModal } from '../../actions/ui_actions';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    removeModal: () => dispatch(removeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);