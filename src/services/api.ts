import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3001/api', 
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; 
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    console.error('Erro de autenticação, redirecionando...');
  }
  return Promise.reject(error);
});

export default api;
