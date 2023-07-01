import axios from 'axios';

const URL = 'https://649f255d245f077f3e9d6017.mockapi.io/';
axios.defaults.baseURL = URL;

export const getUsers = async ()=>{
    const data = await axios.get('users')
    return data.data;
}