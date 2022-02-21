import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = () => {      
    const { push } = useHistory();
    let [goodbye,setGoodbye] = useState();

    useEffect(()=> {
        axiosWithAuth()
            .get('/auth/logout')
            .then(resp => {
                //res.message !
                setGoodbye(resp.message)
                push('/login');
            });
    }, []);  //eslint-disable-line
    return(<div>
        <h2>{goodbye}</h2>
    </div>);
}

export default Logout;