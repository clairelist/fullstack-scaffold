import React from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

class Login extends React.Component{
    //DATA SECTION !
    constructor(props){
        super(props);
        this.state = {
            credentials: {
              username: '',
              password: '',
              error: 'USERNAME & PASSWORD MUST MATCH THE REGISTER'
            }
          };
    }
    
   
    //LOGIC section!
      handleChange = e => {
        
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      login = event => {
        event.preventDefault();

        axios.post('http://localhost:9000/api/auth/login', this.state.credentials)
          .then(res=> {
            // const { password, username } = res.data; --> what are we returning from our server?
            this.props.history.push('/view');
          })
          .catch(err => {
            console.log(err);
          })
      };

    render(){
        return(
<div className='login-class'>
    <h2>Please LOG-IN !</h2>
<form onSubmit={this.login}>
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
          <button id='submit'>Log in</button>
        </form>
</div>
        )
    }
}

export default Login;