const axios = require('axios')


const getUsersApi = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const getUserById = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}


module.exports = {
    getUsersApi,
    getUserById
}