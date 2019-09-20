import * as DocumentAPIUtil from '../util/document_api_util';
export const ADD_NEW_DOCUMENT = "ADD_NEW_DOCUMENT"
export const EDIT_DOCUMENT = "EDIT_DOCUMENT"
// export const RECEIVE_DOCUMENTS =

export const addNewDocument = document => ({
    type: ADD_NEW_DOCUMENT,
    document
});

export const updateDocument = data => ({
    type: EDIT_DOCUMENT,
    data
});

export const createDocument = data => dispatch => {
    return(
        DocumentAPIUtil.createDocument(data)
        .then(doc => dispatch(addNewDocument(doc.data)))
        .catch(err => console.log(err))
    )
};

export const editDocument = data => dispatch => {
    return(
        DocumentAPIUtil.editDocument(data)
        .then(doc => dispatch(updateDocument(doc.data)))
        .catch(err => console.log(err))
    )
};

export const fetchDocument = id => dispatch => {
    return (
        DocumentAPIUtil.fetchDocument(id)
        .then(doc => dispatch(addNewDocument(doc.data)))
        .catch(err => console.log(err))
    )
}