import { BrowserRouter as Router, Route } from 'react-router-dom';

import Account from '../Account/Account'
import Login from '../Login/Login'
import Home from '../Home/Home'

function Main() {

  return (
    <Router>
      <Route exact path='/account'>
        <Account />
      </Route>

      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/'>
        <Login />
      </Route>
    </Router>
  )
}

export default Main