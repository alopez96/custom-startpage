import React, { useState, useEffect } from 'react';
import axois from 'axios';
import Settings from './../settings/Settings';

function Home (){

    const [router, setRoute] = useState('home');

    const onRouteChange = route => {
        setRoute(route);
      }

    return(
        <div className='home'>
            {router == 'settings'
            ?<Settings></Settings>
            :<div>
                <a className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                onClick={(e) => onRouteChange('settings')}>Settings
                </a>
            </div>
            }
        </div>
    )
}

export default Home;