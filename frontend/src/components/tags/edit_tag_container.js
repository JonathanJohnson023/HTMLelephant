import {connect} from 'react-redux';
import EditTag from './create_tag'
import { createTag } from '../../actions/tag_actions';

const mapStateToProps = state => {
  debugger
  return {
    currentUser: state.session.user,
    document: state.entities.document,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTag: data => dispatchEvent(createTag(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditTag);