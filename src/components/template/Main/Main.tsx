import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

function Main() {

  return (

    <Router>
      <Route exact path='/account'>
        <h1>Account</h1>
      </Route>

      <Route exact path='/account'>
        <h1>Home</h1>
      </Route>

      <Route exact path='/'>
        <h1>Login</h1>
      </Route>
    </Router>

  );
}

export default Main