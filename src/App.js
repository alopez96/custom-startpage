import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register></Register>
      </header>
    </div>
  );
}

export default App;
