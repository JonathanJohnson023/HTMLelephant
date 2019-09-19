import {connect} from 'react-redux';
import EditDocument from "./edit_document"
import { createDocument } from '../../actions/document_actions';
import {editingTag} from "../../actions/tag_actions"

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    tags: state.entities.tags,
    editing: state.ui.editing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: data => dispatchEvent(createDocument(data)),
    editingTag: id => dispatch(editingTag(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditDocument);