import React from 'react';
// https://www.npmjs.com/package/react-router-dom
// https://reactrouter.com/web/guides/quick-start

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  CreateAccount,
  EmailLanding,
  LogInPage,
  useAuth,
  ProtectedRoute,
} from '../auth';

import {
  PickDateTime,
  EventPage,
}
from '../cal';

import './App.css';

export function App() {
  const { initializing, user } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/log-in'>
          <LogInPage />
        </Route>
        
        <Route path='/create-account'>
          <CreateAccount />
        </Route> 
                   
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/cal'>
          <PickDateTime />
        </ProtectedRoute>
          <Route path='/email-verf/good'>
            <EmailLanding success />
          </Route>
          <Route path='/email-verf/bad'>
            <EmailLanding />
          </Route>
     

        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/' exact>
        <div>Something1</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/event-page'>
        <EventPage/>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/soemthing3'>
          <div>Something3</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/soemthing4'>
          <div>Something4</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/soemthing5'>
          <div>Something5</div>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}



