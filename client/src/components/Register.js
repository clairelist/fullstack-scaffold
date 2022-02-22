import React from 'react';
import axios from 'axios';
//register endpoint :: http://localhost:9000/api/auth/register 

class Register extends React.Component{
    //DATA SECTION !
    state = {
        credentials: {
          username: '',
          password: '',
        },
        message: ''
      };

    //LOGIC section!
      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      register = event => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/auth/register', this.state.credentials)
          .then(res=> {
            //TODO:: get the actual user to be displayed on registration !
            //this is on the res object itself
            res.data = this.state.message;
           
            this.props.history.push('/view');
          })
          .catch(err => {
            console.log(err);
          })
      };

    render(){
        return(
<div className='register-class'>
    <h2>Please REGISTER !</h2>
<form onSubmit={this.register}>
          <input
            id='username'
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            id='password'
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button id='submit'>REGISTER USER</button>
        </form>
        <div className = 'welcome-message'>
        {this.state.message ? 
          <h2>WELCOME {this.state.message}</h2> : <h2>Please REGISTER !</h2>}
          </div>
</div>
        )
    }
}

export default Register;