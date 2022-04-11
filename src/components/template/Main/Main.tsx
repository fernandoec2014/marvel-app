import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Account from '../Account/Account';
import Login from '../Login/Login';
import Home from '../Home/Home';

import { LocalDataService } from '../../../service/LocalDataService';

function Main() {

  const user = LocalDataService.getAuthentication()

  return (

    <Router>
      <Route exact path='/account'>
        <Account />
      </Route>
      
      {/* <Route exact path='/home' render={() => {
        return user === 'ok' ? <Home /> : <Redirect to='/' />
      }}>
      </Route> */}

      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/'>
        <Login />
      </Route>
    </Router>

  );
}

export default Main