import { RECEIVE_DOCUMENT_TAGS, ADD_NEW_TAG } from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_DOCUMENT_TAGS:
            return action.tags;
        case ADD_NEW_TAG:
            return Object.assign({}, state, {})
        default:
            return state;
    }
};

export default tagsReducer;