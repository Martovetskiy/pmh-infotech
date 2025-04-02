import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_WEBAPI_CERT,
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default api;
