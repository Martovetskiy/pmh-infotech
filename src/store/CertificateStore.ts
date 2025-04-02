import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7007/api', // Замените на ваш базовый URL
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default api;
