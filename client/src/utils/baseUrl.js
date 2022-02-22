import axios from 'axios';

const baseUrl = ()=> {
    return axios.create({
        baseURL: "http://localhost:9000/api"
    });
}

export default baseUrl;