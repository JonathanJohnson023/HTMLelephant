import {connect} from 'react-redux';
import EditDocument from "./edit_document"
import { createDocument } from '../../actions/document_actions';
import {editingTag, createTag} from "../../actions/tag_actions"
import {openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    tags: state.entities.tags,
    editing: state.ui.editing,
    isAuthenticated: state.session.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: data => dispatchEvent(createDocument(data)),
    createTag: data => dispatch(createTag(data)),
    editingTag: id => dispatch(editingTag(id)),
    openModal: modal => dispatch(openModal(modal)),

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditDocument);