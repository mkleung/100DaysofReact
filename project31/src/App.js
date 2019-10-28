import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
//test
// firebase.firestore().collection("times").add({
//   title: 'test',
//   time_seconds: 45
// })




function App(){
	return (
    <AuthProvider>
		<Router>
			<div>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/register'>register</Link></li>
					</ul>
				</nav>
				<PrivateRoute exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</div>
		</Router>
    </AuthProvider>

	);
}

export default App;
