import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'


const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const AuthButton = withRouter(({ history }) => (
  auth.isAuthenticated === true ?
    <p>Welcome! <button onClick={() => {
      auth.signout(() => history.pushState('/'))
    }}>Sign out </button></p>
    : <p>You are not logged in</p>

))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )
  }
  />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {

    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (redirectToReferrer === true) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must login to view this page at {from.pathname}</p>
        <button onClick={this.login}>Login</button>

      </div>
    )

  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/protected'>Protected</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>

          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />

          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
