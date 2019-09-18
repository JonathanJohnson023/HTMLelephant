import { connect } from 'react-redux';
import { createDocument } from '../../actions/document_actions';


const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createDocument: data => dispatchEvent(createDocument(data)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(createDocument);