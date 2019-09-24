import axios from 'axios';

export const uploadDocument = data => {
    return axios.post('/api/uploads', data);   
};