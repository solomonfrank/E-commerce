import React, { Component } from 'react';
import InputField from './InputField';
import { auth } from '../../firebase/firebase.utils';
import { storeUserInFirebase } from '../SideBar/SideBar'

import './form.scss';

class SignUpForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    formTitle: 'sign up',
    formElements:  [
      {
          type: 'text',
          label: 'Full name',
          name: 'fullName',
         id: 1,
          
      },
      {
          type: 'email',
          label: 'Email address',
          name: 'email',
          id: 2
      },
      {
          type: 'password',
          label: 'Password',
          name: 'password',
          id: 3
      },
      {
          type: 'password',
          label: 'Confirm Password',
          name: 'confirmPassword',
          id: 4
      }
    ]
}

handleSubmit = async (event) => {
  event.preventDefault();
 const { email, password, fullName } = this.state;
 
 try {
   const { user } =  await auth.createUserWithEmailAndPassword(email, password);
   await storeUserInFirebase(user, { displayName: fullName, });
   this.setState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 } catch (err) {
  console.log(err.stack)
 }
}
  
  getUserInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value}, ()=> {
      console.log(this.state)
    })
  }

  render() {
    return (
    <div className="form__wrapper">
    <div className='form__wrapper--image'>
      <div> <p className='image__title'>Welcome, Sign in to manage to your shopping activities</p></div>
      <figure className='image__figure'>
        <img src='images/signin.png' className='image__pix' />
      </figure>
    </div>
    <div className='form__wrapper--formContainer'>
    <div className='form__title'><p> { this.props.title} </p></div>
    <form onSubmit={this.handleSubmit}>
      { this.state.formElements.map( item =>(   <InputField type={ item.type} getUserInput={ this.getUserInput } name={ item.name } label={item.label} key={item.id }/> ))}
      <div className='form-group form__group--btn'>
        <button className='btn__form btn__signin' type='submit'>Sign up</button>
      </div>
   
    </form>
    </div>
   </div>
    )
  }
}

export default SignUpForm;