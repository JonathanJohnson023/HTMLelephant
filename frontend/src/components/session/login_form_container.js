import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
});


const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);