import Axios from 'axios';

const api = Axios.create({
  baseURL: 'viacep.com.br/ws',
});

export default api;
