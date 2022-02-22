import axios from 'axios';
//REFACTOR THIS FUNCTION:: TODO --> function returns the base url and thas it; will need to rename function

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:9000/api"
    });
}

export default axiosWithAuth;