import React from 'react';
import './App.css'; //??
// https://www.npmjs.com/package/react-router-dom
// https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  CreateAccount,
  LogInPage,
  useAuth,
  ProtectedRoute,
} from '../auth';

import './App.css';

export function App() {
  const { initializing, user } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-in'>
          <LogInPage />
        </Route>
        
        <Route path='/create-account'>
          <CreateAccount />
        </Route> 
        {/*                  
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/edit-profile'>
          <EditProfilePage />
        </ProtectedRoute>
        <Route path='/email-confirmation/success'>
          <EmailConfirmationLanderPage success />
        </Route>
        <Route path='/email-confirmation/failure'>
          <EmailConfirmationLanderPage />
        </Route>
        */}   

        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/' exact>
          <div>Something1</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/search'>
          <div>Something2</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/restaurants/:id'>
          <div>Something3</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/write-a-review/:id'>
          <div>Something4</div>
        </ProtectedRoute>
        <ProtectedRoute logInStatus={!!user} initializing={initializing} path='/review/thank-you'>
          <div>Something5</div>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}



/*


import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/