import React, { useState } from 'react';
import './App.css';
import pages from './pages';

function App() {
  const [ user, setUser ] = useState({})

  return (
    <div>
      Hello, { user.username }.
      <pages.LoginPage setUser={setUser} />
    </div>
  );
}

export default App;
