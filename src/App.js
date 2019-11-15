import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [ user, setUser ] = useState({})

  return (
    <div>
      Hello, { user.username }.
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
