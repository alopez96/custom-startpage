import React, { useState, useEffect } from 'react';

function Settings ({ userid, onRouteChange }) {

    return(
        <div>
            <a style={settingBtn}
            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
            onClick={(e) => onRouteChange('home')}>Update
            </a>
        </div>
    )
}

const settingBtn = {
    top: 5,
    right: 5,
    position: 'fixed'
}

export default Settings;