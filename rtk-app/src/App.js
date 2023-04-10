import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Users from './features/users/Users';

function App() {
  return (
    <div className="container">
      <Counter />        

      <hr/>
      <Users />
    </div>
  );
}

export default App;
