import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://applyflow-backend-3vi9.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
