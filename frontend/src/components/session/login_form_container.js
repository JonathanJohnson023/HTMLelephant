import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import {createDocument} from '../../actions/document_actions';
import {saveTagCollection} from "../../actions/tag_actions"

const mapStateToProps = state => ({
    errors: state.errors.session,
    document: state.entities.documents,
    tags: state.entities.tags
});


const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    createDocument: (data) => dispatch(createDocument(data)),
    saveTagCollection: (tags) => dispatch(saveTagCollection(tags))
    
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);