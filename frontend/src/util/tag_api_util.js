import axios from 'axios';


export const getDocumentTags = document_id => {
    return axios.get(`/api/tags/document/${document_id}`)
};

export const addTag = data => {
    return axios.post('/api/tags', data)
};

export const saveTagCollection = data => {
    return axios.post('/api/tags/collection', data)
}