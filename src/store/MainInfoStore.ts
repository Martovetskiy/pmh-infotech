import axios from 'axios';

const apiMainInfo = axios.create({
    baseURL: import.meta.env.VITE_URL_WEBAPI_MAIN,
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default apiMainInfo;
