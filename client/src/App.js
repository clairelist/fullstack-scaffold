import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import View from './components/View';
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
    <h2>Hello from app !</h2>
    <Link to='/register'>Click ME to sign UP !</Link>
    <Link to ='/logout'>Click ME to log OUT !</Link>

    <Route exact path='/'>
      <Login />
    </Route>
    <Route path='/register'>
      <Register />
    </Route>
    <Route exact path='/view' component={View} />
    <Route path='/logout'>
      <Logout />
    </Route>
   
    </div>
  );
}

export default App;
