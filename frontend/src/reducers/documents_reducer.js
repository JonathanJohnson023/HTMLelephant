import { ADD_NEW_DOCUMENT, EDIT_DOCUMENT, } from '../actions/document_actions';
import { RECEIVE_DOCUMENT_TAGS } from '../actions/tag_actions';

const documentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case ADD_NEW_DOCUMENT:
            return action.document
        case EDIT_DOCUMENT: 
            debugger
            let newState = Object.assign({}, state);
            // newState[action.document.id] = action.document
            return newState
        // case RECEIVE_DOCUMENTS: 
        //     return action.documents
        default:
            return state;
    }
};

export default documentsReducer;