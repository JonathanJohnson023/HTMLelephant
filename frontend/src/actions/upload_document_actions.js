import * as uploadDocumentAPIUtil from '../util/upload_document_util'; 
export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL';


export const uploadSuccess = data => {
    // debugger
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        data,
    };
};

export const uploadFail = error => {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        error,
    };
};

export const uploadDocumentRequest = img => dispatch => {
    // let data = new FormData();
    // data.append('file', file);
    
    
    return (
        uploadDocumentAPIUtil.uploadDocument(img)
            .then(response => dispatch(uploadSuccess(response)))
            .catch(error => dispatch(uploadFail(error)))
    ); 
};