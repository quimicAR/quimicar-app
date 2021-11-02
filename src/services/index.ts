import axios from 'axios';
// https://quimicar-api.herokuapp.com/api
const api = axios.create({
  baseURL: 'https://quimicar-api.herokuapp.com/api',
});

export default api;
