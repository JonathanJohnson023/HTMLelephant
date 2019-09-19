import { EDITING_TAG  } from '../actions/tag_actions';

const editReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case EDITING_TAG:
          debugger
          return action.index
        default:
          return null;
    }
};

export default editReducer;