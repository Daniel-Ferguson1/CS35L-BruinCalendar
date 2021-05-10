import React from 'react';
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoutes from "./PrivateRoutes"
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return (
  	
	  	<div>
	  		<Router>
	  			<AuthProvider>
	  				<Switch>
	  					<PrivateRoutes exact path='/' component={Dashboard}/>
	  					<Route path='/signup' component={Signup}/>
	  					<Route path='/login' component={Login}/>
	  				</Switch>
	  			</AuthProvider>
	  		</Router>
	  	</div>
  
  	);
}

export default App;
