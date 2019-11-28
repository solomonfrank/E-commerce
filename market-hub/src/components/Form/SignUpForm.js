import React, { Component } from 'react';
import InputField from './InputField';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { storeUserInFirebase } from '../SideBar/SideBar'

import { signupUserAction } from '../../redux/reducer/actionCreators/userActionCreator';

import './form.scss';

class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',

    formElements:  [
      {
          type: 'text',
          label: 'first name',
          name: 'firstName',
         id: 1,
          
      },
      {
        type: 'text',
        label: 'last name',
        name: 'lastName',
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
 const { email, password, firstName, lastName, confirmPassword } = this.state;
 
 this.props.createAccount({ email, password, firstName, lastName, confirmPassword });
 
//  try {
//    const { user } =  await auth.createUserWithEmailAndPassword(email, password);
//    await storeUserInFirebase(user, { displayName: firstName, });
//    this.setState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })
//  } catch (err) {
//   console.log(err.stack)
//  }
}

  
  getUserInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value})
  }



  renderAlert = (content) => {
   
    return  <div className="alert">
    <span  onClick={ this.hideAlert } className="closebtn">&times;</span>
    {content.message}
  </div>
  
  }
  render() {
    return (
  
    <div className="form__wrapper">

    <div className='form__wrapper--image'>
      <div> <p className='image__title'>Welcome, Sign up to manage to your shopping activities</p></div>
      <figure className='image__figure'>
        <img src='images/signin.png' className='image__pix' alt='signup pic' />
      </figure>
    </div>
    <div className='form__wrapper--formContainer'>
   
          {  (this.props.errorMessage)? this.props.errorMessage.map(item => (this.renderAlert(item))) : '' } 
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

const mapDispatchToProp = (dispatch) =>{
  return {
    createAccount: (user) => dispatch(signupUserAction(user))
  }
}
const mapStateToProps = ( { errorMessage: { error }} ) => {
  return {
    errorMessage: error
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(SignUpForm);