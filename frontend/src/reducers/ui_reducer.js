import { combineReducers } from 'redux';
import modal from './modal_reducer';
import editing from './editing_reducer'

const uiReducer = combineReducers({
    modal,
    editing
});

export default uiReducer;