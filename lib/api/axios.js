import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for your backend
});

export default instance;
