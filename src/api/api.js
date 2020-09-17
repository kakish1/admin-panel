import axios from 'axios'

export const addUser = (id) => {
    return axios.post(`https://reqres.in/api/users/${id}`);
}

export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}
