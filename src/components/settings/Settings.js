import React from 'react';
import Background from './Background';
import Form from './Form';
import Link from './Link';
import axios from 'axios';

function Settings ({ userid, onRouteChange, links, setLinks, background, setBackground }) {

    const OnSubmit = () => {
        //POST request to /update/:id
        axios.put(`http://localhost:3000/update/${userid}`, {
            background: background,
            links: links
        })
        .then(response => {
            if(response.status === 200){
                console.log('response', response.data)
                onRouteChange('Home')
            }
            else{
                console.log('Settings.js: error onSubmit', response.status)
            }
        })
        .catch( err => {
            console.log( err )
        })
    }

    const imageClick = (value) => {
        setBackground(value)
    }

    const removeLink = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    }

    const addLink = text => {
        const newLinks = [...links, text];
        setLinks(newLinks);
      }


    return(
        <div>
            <button style={settingBtn}
            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
            onClick={(e) => onRouteChange('home')}>Cancel
            </button>

            <article className="br3 ba dark-gray b--black-10 mv4 w-350 w-150-m w-50-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw5 ph0 mh0">Update Settings</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6">Background</label>
                    <Background imageClick={imageClick}></Background>
                </div>

                {links.map((link, index) => (
                <Link
                    key={index}
                    index={index}
                    link={link}
                    removeLink={removeLink}
                />
                ))}
                <Form addLink={addLink} style={margin}></Form>
            </fieldset>
            <div className="">
                <input
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                type="submit"
                value="submit"
                onClick={() => OnSubmit()}
                />
            </div>
            </div>
        </main>
        </article>
        
        </div>
    )
}

const settingBtn = {
    top: 5,
    right: 5,
    position: 'fixed'
}

const margin = {
    marginTop: 20,
}

export default Settings;