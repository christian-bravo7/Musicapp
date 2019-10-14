import axios from 'axios';
import config from '@/services/config';

const musicService = axios.create({
    baseURL: config.apiUrl
});

export default musicService;
