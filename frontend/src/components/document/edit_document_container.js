import {connect} from 'react-redux';
import EditDocument from "./edit_document"
import { createDocument } from '../../actions/document_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    tags: state.entities.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDocument: data => dispatchEvent(createDocument(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditDocument);