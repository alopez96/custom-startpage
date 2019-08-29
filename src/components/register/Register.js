import React, { useState } from 'react';
import axios from 'axios';

function Register ({onRouteChange, updateUser}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onPasswordChange = event => {
    setPassword(event.target.value)
  }

  const onRegisterClick = () => {
    //create joined variable with this date
    const joined = new Date();

    axios.post(`http://localhost:3000/register/`, {
      email, password, name, joined
    })
    .then(response => {
        if (response.status === 200) {
          updateUser(response.data._id)
          onRouteChange('home')
        }
        //handle any other response status
        else{
            console.log('upload error', response.data)
        }
    })
    //handle error to post
    .catch( err => console.log(err));
  }

  return(
    <div className=''>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text"
              name="name"  
              id="name"
              onChange = {e => onNameChange(e)}/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange = {e => onEmailChange(e)}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange = {e => onPasswordChange(e)}/>
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={() => onRegisterClick()}/>
          </div>
          <br/>
          <p className="black f6">Already have an account?</p>
        <input
            className="black f6 ba bg-transparent grow pointer"
            type="submit"
            value="Login"
            style={{borderWidth:0}}
            onClick={e => {onRouteChange('login')}}/>
        </div>
      </main>
    </article>
    </div>
  );
}


export default Register;
