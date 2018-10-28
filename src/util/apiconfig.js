import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 3000,
    headers: {'Authorization': 'read-project-udacity'}
});