import axios from 'axios';

const apiAddInfo = axios.create({
    baseURL: import.meta.env.VITE_URL_WEBAPI_ADD,
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default apiAddInfo;
