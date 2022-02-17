import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {      
    const { push } = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('/auth/logout')
            .then(resp => {
                localStorage.removeItem('cookie');
                push('/login');
            });
    }, []);  //eslint-disable-line
    return(<div></div>);
}

export default Logout;