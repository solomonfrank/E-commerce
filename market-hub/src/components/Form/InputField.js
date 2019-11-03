import React from 'react';

import './input.scss';

const InputField = ({type, label }) => {

    return (
        <div  className='form__group'>
            <input type= {type} className='form__group--input'  autoFocus='off' required placeholder= { label } id='form__elem'/>
            <label className='form__group--label' htmlFor='form__elem'>{label}</label>

        </div>
    )
}

export default InputField;