import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-6a04f.firebaseio.com/'
});

export default instance;