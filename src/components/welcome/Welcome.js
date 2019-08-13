import React, { Component } from 'react';
import Grid from './Grid';

function Welcome ({ onRouteChange }) {
  return (
    <div>
      <Grid></Grid>
      <button className="f5 link dim br1 ph3 pv2 mb2 dib white bg-black" 
      onClick={e => onRouteChange('register')}>
        Create custom page
      </button>
    </div>
  );

}

export default Welcome;
