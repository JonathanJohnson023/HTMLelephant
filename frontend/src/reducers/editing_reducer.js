import { EDITING_TAG, UPDATE_TAGS } from '../actions/tag_actions';

const editReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case EDITING_TAG:
          return action.index
      case UPDATE_TAGS:
          return action.index
        default:
          return null;
    }
};

export default editReducer;