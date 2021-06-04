import React from 'react';
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoutes from "./PrivateRoutes"
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AddEvent from './AddEvent';
import HomePage from './HomePage';
import FriendList from './FriendList'
import FriendProfile from './FriendProfile';
import AddFriendEvent from './AddFriendEvent';

function App() {
  return (
  	
	  	<div>
	  		<Router>
	  			<AuthProvider>
	  				<Switch>
	  					<PrivateRoutes exact path='/' component={HomePage}/>
	  					<Route path='/signup' component={Signup}/>
	  					<Route path='/login' component={Login}/>
						<Route path='/addEvent' component={AddEvent}/>
						<Route path='/Dashboard' component={Dashboard}/>
						<Route path='/FriendList' component={FriendList}/>
						<Route path='/friendProfile' component={FriendProfile}/>
						<Route path='/bookTime' component={AddFriendEvent}/>
	  				</Switch>
	  			</AuthProvider>
	  		</Router>
	  	</div>
  
  	);
}

export default App;