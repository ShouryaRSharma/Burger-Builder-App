import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7e939.firebaseio.com/'
});

export default instance;