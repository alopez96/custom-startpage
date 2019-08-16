import React, { useState } from 'react';
import axios from 'axios';

function Login ({onRouteChange, updateUser}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    const onEmailChange = email => {
        if(!email) return;
        setEmail(email);
    }

    const onPasswordChange = pass => {
        if(!pass) return;
        setPassword(pass);
    }

    const onLoginClicked = () => {
        axios.post(`http://localhost:3000/login/`, {
          email, password
        })
        .then(response => {
            if (response.status == 200) {
                updateUser(response.data.user._id)
                onRouteChange('home')
            }
        })
        //handle error to post
        .catch( err => {
          console.log(err.response.data)
          //setResponse(err.response.data)
        });
      }

    return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Login</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange = {e => onEmailChange(e.target.value)}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange = {e => onPasswordChange(e.target.value)} />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Login"
              onClick={() => onLoginClicked()}
            />
          </div>
          <br/>
          <p className="black f6">New here?</p>
        <input
            className="black f6 ba bg-transparent grow pointer"
            type="submit"
            value="Register"
            style={{borderWidth:0}}
            onClick={e => {onRouteChange('register')}}
        />
        </div>
      </main>
    </article>
    )
}

export default Login;