import { ADD_NEW_DOCUMENT } from '../actions/document_actions';

const documentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case ADD_NEW_DOCUMENT:
            return action.document;
        default:
            return state;
    }
};

export default documentsReducer;