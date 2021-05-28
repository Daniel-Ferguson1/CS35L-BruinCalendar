import React from 'react';
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoutes from "./PrivateRoutes"
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AddEvent from './AddEvent';
import homePage from './homePage';
import FriendList from './FriendList'

function App() {
  return (
  	
	  	<div>
	  		<Router>
	  			<AuthProvider>
	  				<Switch>
	  					<PrivateRoutes exact path='/' component={homePage}/>
	  					<Route path='/signup' component={Signup}/>
	  					<Route path='/login' component={Login}/>
						<Route path='/addEvent' component={AddEvent}/>
						<Route path='/Dashboard' component={Dashboard}/>
						<Route path='/FriendList' component={FriendList}/>
	  				</Switch>
	  			</AuthProvider>
	  		</Router>
	  	</div>
  
  	);
}

export default App;