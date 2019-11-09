import React from 'react';

import './input.scss';

const InputField = ({type, name, label, getUserInput }) => {

    return (
        <div  className='form__group'>
            <input type= {type}  name={ name } className='form__group--input'  onChange={ getUserInput } autoFocus='off' required placeholder= { label } id='form__elem'/>
            <label className='form__group--label' htmlFor='form__elem'>{label}</label>

        </div>
    )
}

export default InputField;