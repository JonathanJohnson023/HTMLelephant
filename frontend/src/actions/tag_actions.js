import * as TagAPIUtil from '../util/tag_api_util';
export const RECEIVE_DOCUMENT_TAGS = "RECEIVE_DOCUMENT_TAGS"
export const ADD_NEW_TAG = "ADD_NEW_TAG"
export const RECEIVE_CURRENT_TAG = "RECEIVE_CURRENT_TAG"

export const receiveDocumentTags = tags => ({
    type: RECEIVE_DOCUMENT_TAGS,
    tags
});

export const addNewTag = tag => ({
    type: ADD_NEW_TAG,
    tag
});

export const currentTag = currentTag => ({
    type: RECEIVE_CURRENT_TAG,
    currentTag
});

export const fetchDocumentTags = id => dispatch => (
    TagAPIUtil.getDocumentTags(id)
    .then(tags => dispatch(receiveDocumentTags(tags)))
    .catch(err => console.log(err))
);

export const createTag = data => dispatch => (
    TagAPIUtil.addTag(data)
    .then(tag => dispatch(addNewTag(tag)))
    .catch(err => console.log(err))
);

