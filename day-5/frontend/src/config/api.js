import axios from'axios';

const api = axios.create({
    baseURL:"https://backup-2-82m0.onrender.com/api/users"
})


export default api;