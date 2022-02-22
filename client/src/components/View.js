import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'; //NOTE WE NEED TO RENAME THIS FUNCTION !!!!

const View=()=>{
    const [users,setUsers] = useState([]);

    useEffect(() => { //REMEMBER TO RENAME THIS FUNC HERE TOO CLAIRE !
        axiosWithAuth()
        .get('/users')
        .then(res=>{
            setUsers(res.data); //lives on 'res.data' !
        }).catch(err=>{
            console.error(err);
        })
  },[]); //'on first mount, do this'

  return(
      <div className='view-class'>
          {users.map(user => {
                        return <div key={user.id} user={user}>
                            <h1>{user}</h1>
                        </div>
                    })
                }
            <p>You reached the view component !</p>
      </div>
  )
}

export default View;