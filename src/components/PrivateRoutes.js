import React from 'react';
//import { Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoutes({component: Component, ...rest}) {
	const { currentUser } = useAuth()
    return (
	  	<Route {...rest} render={props => {
	  		return currentUser ? <Component {...props}/> : <Redirect to="/login" />
	  	}}>
	  	</Route>
  	);
}