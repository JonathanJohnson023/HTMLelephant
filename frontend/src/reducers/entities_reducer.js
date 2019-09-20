import { combineReducers } from 'redux'
// import users from './users_reducer'
import documents from "./documents_reducer";
import tags from "./tags_reducer";

const entitiesReducer = combineReducers({
  //  users,
  documents,
  tags
 });

export default entitiesReducer