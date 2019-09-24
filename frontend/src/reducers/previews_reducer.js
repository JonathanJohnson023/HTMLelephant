// import { ADD_NEW_DOCUMENT, EDIT_DOCUMENT, } from '../actions/document_actions';
import { UPLOAD_DOCUMENT_SUCCESS } from '../actions/upload_document_actions';

const previewReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case UPLOAD_DOCUMENT_SUCCESS:
            let newState = state.slice();
            newState.push(action.data);
            return newState;
        default:
            return state;
    }
};

export default previewReducer;