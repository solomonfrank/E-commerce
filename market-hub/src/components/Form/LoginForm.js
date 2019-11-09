import React, { Component } from 'react';
import  { signInwithGoogle, auth } from '../../firebase/firebase.utils';
import InputField from './InputField';


import './form.scss';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    formElements:  [
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        id: 1
      },
      {
        type: 'password',
        label: 'Password',
        name: 'password',
        id: 2
      },
     
    ]
}
  submitHandler = async event => {
  event.preventDefault();
  const { email, password } = this.state;
 
  try {
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({
       email: '',
       password: ''
      })
  } catch (err) {
    console.log(err.stack)
  }

  }
 

  getUserInput = event => {
   const { value, name } = event.target;
   this.setState({ [name]: value})
  }

  render() {
    return (
    <div className="form__wrapper">
    <div className='form__wrapper--image'>
      <div> <p className='image__title'>Welcome, Sign in to manage to your shopping activities</p></div>
      <figure className='image__figure'>
        <img src='images/signin.png' className='image__pix' alt='signin pix'/>
      </figure>
    </div>
    <div className='form__wrapper--formContainer'>
    <div className='form__title'><p> { this.props.title} </p></div>
    <form onSubmit={this.submitHandler}>
      { this.state.formElements.map( item =>( <InputField type={ item.type} name={item.name} getUserInput={ this.getUserInput } label={item.label} key={item.id }/> ))}
      <div className='form-group form__group--btn'>
        <button className='btn__form btn__signin' type='submit'>Login</button>
      </div>
      <p className='signin__subtext'>or</p>
          <div className='form-group form__group--btn3'>
            <button onClick = {() => signInwithGoogle() } className='btn__form btn__signin3' type='submit'>Signin with Google</button>
          </div>
    
    </form>
    </div>
   </div>
    )
  }
}

export default LoginForm;