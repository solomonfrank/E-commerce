import React, { Component } from 'react';
import InputField from './InputField';

import './form.scss';


class LoginForm extends Component {

state =  {
formElements:  [
    {
        type: 'text',
        label: 'Full name',
        id: 1
    },
    {
        type: 'email',
        label: 'Email address',
        id: 2
    }
]
}
    render() {
        return (
            <div class="form__wrapper">
  <div className='form__wrapper--image'>
      <div> <p className='image__title'>Welcome, Sign in to manage to your shopping activities</p></div>
      <figure className='image__figure'>
          <img src='images/signin.png' className='image__pix' />
      </figure>
  </div>
    <div className='form__wrapper--formContainer'>
    <div className='form__title'><p>Sign in </p></div>
    <form>
        
                    { this.state.formElements.map( item =>(   <InputField type={ item.type}  label={item.label} key={item.id }/> ))}
                 <div className='form-group form__group--btn'>
                     <button className='btn__form btn__signin' type='submit'>Sign in</button>
                 </div>

                 <p className='signin__subtext'>or</p>
                 <div className='form-group form__group--btn3'>
                     <button className='btn__form btn__signin3' type='submit'>Signin with Google</button>
                 </div>

                
                </form>
    </div>
               
            </div>
        )
    }
}

export default LoginForm;