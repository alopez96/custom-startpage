import React, { Component } from 'react';
import morning from './images/morning.jpg';
import sunflower from './images/sunflower.jpg';
import turntable from './images/turntable.jpg';

class Grid extends Component {
  render() {
    return (
    <div>
    <article>
        <h2 class="f3 fw4 pa3 mv0">Welcome</h2>
        <div class="cf pa2">
            <div class="fl w-50 w-25-m w-25-l pa2">
                <img src={morning} alt='morning'/>
            </div>
            <div class="fl w-50 w-25-m w-25-l pa2">
                <img src={morning} class="w-100 db outline black-10"/>
            </div>
            <div class="fl w-50 w-25-m w-25-l pa2">
                <img src={sunflower} class="w-100 db outline black-10"/>      
            </div>
            <div class="fl w-50 w-25-m w-25-l pa2">
                <img src={turntable} alt="Kaytranada 99%" class="w-100 db outline black-10"/>
            </div>
        </div>
    </article>
    </div>
    );
  }
}

export default Grid;
