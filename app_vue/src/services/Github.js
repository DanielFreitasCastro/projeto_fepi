import axios from 'axios';

const Github = axios.create({
    baseURL: 'https://api.github.com/search/'
})

export default Github;