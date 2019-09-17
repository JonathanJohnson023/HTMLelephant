import axios from 'axios';

export const createDocument = (data) => {
  return axios.post("/api/document", data)
};