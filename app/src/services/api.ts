import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.100:3333',
});

export default api;

// se for emulador 10.0.0.2;
// ser for dispositivo fisico usa o ip do pc
