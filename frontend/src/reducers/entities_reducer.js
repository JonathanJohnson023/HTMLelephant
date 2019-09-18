import { combineReducers } from 'redux'
// import users from './users_reducer'
import document from "./documents_reducer";
import tags from "./tags_reducer";

const entitiesReducer = combineReducers({
  //  users,
  document,
  tags
 });

export default entitiesReducer