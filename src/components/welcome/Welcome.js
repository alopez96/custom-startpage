import React, { Component } from 'react';
import Grid from './Grid';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Grid></Grid>
        <a class="f5 link dim br1 ph3 pv2 mb2 dib white bg-black" href="#0">
          Create custom page
        </a>
      </div>

    );
  }
}

export default Welcome;
