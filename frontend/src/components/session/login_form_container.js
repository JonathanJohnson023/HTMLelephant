import { connect } from 'react-redux';
import { removeModal } from '../../actions/ui_actions';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
});


const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    removeModal: () => dispatch(removeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);