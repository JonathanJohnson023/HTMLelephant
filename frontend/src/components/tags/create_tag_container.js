import {connect} from 'react-redux';
import CreateTag from './create_tag'
import { createTag } from '../../actions/tag_actions';
import { uploadDocumentRequest, uploadSuccess } from "../../actions/upload_document_actions";

const mapStateToProps = state => {
  return {
    // currentUser: state.session.user,
    isAuthenticated: state.session.isAuthenticated,
    document: state.entities.document,
    previews: state.entities.previews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTag: data => dispatchEvent(createTag(data)),
    uploadRequest: data => dispatch(uploadDocumentRequest(data)),
    uploadSuccess: data => dispatch(uploadSuccess(data))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateTag);