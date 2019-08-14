import React, { useState, useEffect } from 'react';
import axois from 'axios';

function Home ({userid}){

    useEffect(() => {
        axois.get(`http://localhost:3000/getUser/${userid}`,{})
        .then(response => {
            console.log('response ' + response.data.email)
        })
        .catch( err => console.log(err));
    });

    return(
        <div className='home'>
            Home
        </div>
    )
}

export default Home;