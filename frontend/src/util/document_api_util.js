import axios from 'axios';

export const createDocument = (data) => {
  return axios.post("/api/documents", data)
};

export const editDocument = (data) => {
  debugger
  return axios.patch(`/api/documents/${data.id}`, data)
}

export const fetchDocument = id => {
  return axios.get(`/api/documents/${id}`)
}