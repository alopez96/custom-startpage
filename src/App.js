import React, { useState } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {

  const [router, setRoute] = useState('landing');
  const [userid, setUserid] = useState('');

  const onRouteChange = route => {
    setRoute(route);
  }

  const updateUser = id => {
    setUserid(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        {router === 'landing' 
        ?<Welcome onRouteChange={onRouteChange}></Welcome>
        :(router === 'home'
        ?<Home userid={userid}></Home>
        :
          (router === 'register'
          ?<Register onRouteChange={onRouteChange} updateUser={updateUser}></Register>
          :<Login onRouteChange={onRouteChange} updateUser={updateUser}></Login>
          )
        )
        }
        
      </header>
    </div>
  );
}

export default App;
