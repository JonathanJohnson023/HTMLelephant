import {connect} from 'react-redux';
import EditTag from './edit_tag'
import { createTag } from '../../actions/tag_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    document: state.entities.document,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTag: data => dispatch(createTag(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditTag);