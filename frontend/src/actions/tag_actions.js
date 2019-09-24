import * as TagAPIUtil from '../util/tag_api_util';
export const RECEIVE_DOCUMENT_TAGS = "RECEIVE_DOCUMENT_TAGS"
export const ADD_NEW_TAG = "ADD_NEW_TAG"
export const RECEIVE_CURRENT_TAG = "RECEIVE_CURRENT_TAG"
export const EDITING_TAG = "EDITING_TAG"
export const RECEIVE_TAGS = "RECEIVE_TAGS"
export const DELETE_TAG = "DELETE_TAG"

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

export const editingTag = index => ({
    type: EDITING_TAG,
    index
})

export const addTags = data => ({
    type: RECEIVE_TAGS,
    data
});

export const receiveDeleteTag = (data, index) => ({
    type: DELETE_TAG,
    data,
    index
})

export const fetchDocumentTags = id => dispatch => (
    TagAPIUtil.getDocumentTags(id)
    .then(tags => dispatch(receiveDocumentTags(tags.data)))
    .catch(err => console.log(err))
);

export const createTag = data => dispatch => (
    TagAPIUtil.addTag(data)
    .then(tag => dispatch(addNewTag(tag)))
    .catch(err => console.log(err))
);

export const saveTagCollection = data => dispatch => (
    TagAPIUtil.saveTagCollection(data)
     .then(tags => {
         return (
         dispatch(receiveDocumentTags(tags.data)))
     })
     .catch(err => console.log(err))
);

export const updateTag = data => dispatch => {
    return (
        TagAPIUtil.updateTag(data)
        .then(tag => dispatch(updateTag(tag.data)))
        .catch(err => console.log(err))
    )
};

export const deleteTag = (id, index) => dispatch => {
    return (
    TagAPIUtil.deleteTag(id)
        .then(response => dispatch(receiveDeleteTag(response.data, index)))
        .catch(err => console.log(err))
    )
};