import React, { useState } from 'react';
import './App.css';
import pages from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [ user, setUser ] = useState({})

  return (
    <div>
      Hello, { user.username }.
      <Switch>
        <Route path='/' render={routerProps => <pages.LoginPage {...routerProps} setUser={setUser} />} />
      </Switch>
    </div>
  );
}

export default App;
