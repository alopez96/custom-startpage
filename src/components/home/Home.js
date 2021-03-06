import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Settings from './../settings/Settings';
import awsPrefix from './../aws';
import './Home.css';

function Home ({ userid }){

    const [router, setRoute] = useState('home');
    const [background, setBackground] = useState('');
    const [backgroundLink, setBackgroundLink] = useState('');
    const [links, setLinks] = useState([]);

    const onRouteChange = route => {
        setRoute(route);
      }
  
      //We only want to fetch data when the component mounts. 
      //That’s why we provide an empty array as second argument 
      //similar to componentDidMount
      useEffect(() => {
        axios.get(`http://localhost:3000/getUser/${userid}`)
        .then(response => {
            if(response.status === 200){
                console.log('response ' + response.data.email)
                if(response.data.background){
                    setBackgroundLink(awsPrefix + response.data.background)
                    setBackground(response.data.background)
                }
                if(response.data.links){
                    setLinks(response.data.links)
                }
            }
        })
        .catch( err => {
            if(err.response){
                //the request was made and the server responded with
                //a status code outside the 2xx range
                console.log(err.response.data)
            }
            else if(err.request){
                //request was made but no response was recieved
                console.log(err.request)
            }
            else{
                //something happened in setting up the request and triggered an Error
                console.log('error', err.message)
                console.log(err)
            }
            
        })
    }, []);


    //handle onCLick
    const onLinkClick = (url) => {
        //open new windown with url
        var win = window.open(url, '_blank');
        win.focus();
    }

    const listItems = links.map((link, key) =>
        <li className="grow pointer" key={key} 
            onClick={() => onLinkClick(link)}>
            {link}
        </li>
    );

    return(
        <div className='home'>
            {router === 'home'
            ?<div>
                <button style={settingBtn}
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                onClick={(e) => onRouteChange('settings')}>Settings
                </button>
                {background ? <img src={backgroundLink} style={imageStyle}></img> : null}
                {links ? <ul> {listItems} </ul> : null}
            </div>

            :<Settings userid={userid} onRouteChange={onRouteChange} 
                links={links} setLinks={setLinks} background={background} 
                setBackground={setBackground} setBackgroundLink={setBackgroundLink}>
            </Settings>
            }
        </div>
    )
}

const imageStyle = {
    width: '60%'
};

const settingBtn = {
    top: 5,
    right: 5,
    position: 'fixed'
}

export default Home;