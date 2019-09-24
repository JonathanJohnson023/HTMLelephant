import { combineReducers } from 'redux'
// import users from './users_reducer'
import documents from "./documents_reducer";
import tags from "./tags_reducer";
import previews from './previews_reducer';

const entitiesReducer = combineReducers({
  //  users,
  documents,
  tags,
  previews
 });

export default entitiesReducer