import React from 'react';
import morning from './../../images/morning.jpg';
import sunflower from './../../images/sunflower.jpg';
import turntable from './../../images/turntable.jpg';

function Background () {

    const imageClick = (value) => {
        console.log('image clicked ' + value);
    }

    return(
        <div>
        <article>
        <h2 className="f3 fw4 pa3 mv0">Select Background</h2>
        <div className="cf pa2">
            <a className="fl w-50 w-25-m w-25-l pa2 grow pointer" 
                onClick={(e) => imageClick('morning')}>
                <img src={morning} alt="morning" className="w-100 db outline black-10"/>
            </a>
            <div className="fl w-50 w-25-m w-25-l pa2 grow pointer"
            onClick={(e) => imageClick('sunflower')}>
                <img src={sunflower} alt="sunflower" className="w-100 db outline black-10"/>      
            </div>
            <div className="fl w-50 w-25-m w-25-l pa2 grow pointer"
            onClick={(e) => imageClick('turntable')}>
                <img src={turntable} alt="turtable" className="w-100 db outline black-10"/>
            </div>
        </div>
    </article>
        </div>
    )
}

export default Background;