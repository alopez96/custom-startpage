import React from 'react';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onPasswordChange = (event) => {
    //update password state
  }

  onRegisterClick = () => {
    console.log('register clicked')
  }

  onLoginClick = () => {
    console.log('login clicked')
  }

  render(){

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
              onChange = {this.onNameChange}  />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange = {this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange = {this.onPasswordChange} />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={this.onRegisterClick}
            />
          </div>
          <br/>
          <p className="black f6">Already have an account?</p>
        <input
            className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Login"
            onClick={this.onLoginClick}
        />
        </div>
      </main>
    </article>
    </div>
  );
  }
}


export default Register;
