import React from 'react';

function Link ({link, index, removeLink}) {

    return(
        <div style={linkStyle}>
            <div className="b pa2 bg-transparent w-100">{link}</div>
            <button style={btnStyle} onClick={() => removeLink(index)}>x</button>
        </div>
    )
}

const linkStyle = {
    display: 'flex',
    justifyContent:'space-around',
    margin: 2
}

const btnStyle = {
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white'
}
export default Link;