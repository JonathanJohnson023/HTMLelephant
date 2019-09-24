import {connect} from 'react-redux';
import EditDocument from "./edit_document"
import { createDocument, addNewDocument, editDocument, fetchDocument } from '../../actions/document_actions';
import {editingTag, createTag, saveTagCollection, addTags, fetchDocumentTags, deleteTag, updateTag} from "../../actions/tag_actions"
import {openModal } from "../../actions/modal_actions";
import {withRouter} from "react-router"
import {tagSelector} from "../../util/tag_selector"

const mapStateToProps = (state, ownProps) => {
  const document = state.entities.documents
  const isAuthenticated = state.session.isAuthenticated
  return {
    currentUser: state.session.user,
    tags: tagSelector(state.entities.tags, document, isAuthenticated),
    editing: state.ui.editing,
    isAuthenticated,
    document
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: data => dispatch(createDocument(data)),
    addNewDocument: (doc) => dispatch(addNewDocument(doc)),
    addTags: (tags) => dispatch(addTags(tags)),
    saveTagCollection: data => dispatch(saveTagCollection(data)),
    createTag: data => dispatch(createTag(data)),
    editingTag: id => dispatch(editingTag(id)),
    openModal: modal => dispatch(openModal(modal)),
    editDocument: (doc) => dispatch(editDocument(doc)),
    fetchDocumentTags: (id) => dispatch(fetchDocumentTags(id)),
    fetchDocument: (id) => dispatch(fetchDocument(id)),
    deleteTag: (id, index) => dispatch(deleteTag(id, index)),
    updateTag: (tag) => dispatch(updateTag(tag))

  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditDocument));