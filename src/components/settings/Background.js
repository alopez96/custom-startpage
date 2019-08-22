import React from 'react';
import morning from './../../images/morning.jpg';
import sunflower from './../../images/sunflower.jpg';
import turntable from './../../images/turntable.jpg';

function Background ({imageClick}) {


    return(
        <div>
        <article>
        <div className="cf pa2" style={imageStyle}>
            <a className="fl w-50 w-25-m w-25-l pa2 grow pointer" 
                onClick={(e) => imageClick('morning.jpg')}>
                <img src={morning} alt="morning" className="w-100 db outline black-10"/>
            </a>
            <div className="fl w-50 w-25-m w-25-l pa2 grow pointer"
            onClick={(e) => imageClick('sunflower.jpg')}>
                <img src={sunflower} alt="sunflower" className="w-100 db outline black-10"/>      
            </div>
            <div className="fl w-50 w-25-m w-25-l pa2 grow pointer"
            onClick={(e) => imageClick('turntable.jpg')}>
                <img src={turntable} alt="turtable" className="w-100 db outline black-10"/>
            </div>
        </div>
    </article>
        </div>
    )
}

const imageStyle = {
    display: 'flex',
    justifyContent:'space-around',
    margin: 2,
    width: 400
}

export default Background;