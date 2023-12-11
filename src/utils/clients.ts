import axios from 'axios';

const baseURL: string = 'http://localhost:3001';

export const apiClient = axios.create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': 'localhost:3000'
    }
});

apiClient.interceptors.response.use((response) => response);
