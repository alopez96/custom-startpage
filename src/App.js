import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome></Welcome>
      </header>
    </div>
  );
}

export default App;
