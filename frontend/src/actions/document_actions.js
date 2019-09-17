import * as DocumentAPIUtil from '../util/document_api_util';

export const addNewDocument = document => ({
    type: ADD_NEW_DOCUMENT,
    document
});

export const createDocument = data => dispatch => (
    DocumentAPIUtil.createDocument(data)
    .then(doc => dispatch(addNewDocument(doc)))
    .catch(err => console.log(err))
);