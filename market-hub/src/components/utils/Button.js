import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
color: ${ props => props.color}
background-color: ${props => props.background}
border: 1px solid rgba(0,0,0,0.08)
border-radius: 3px;
cursor: pointer
display: inline-block
width: 200px;
font-size: 24px;
margin-top: 30px

`;

const ButtonLink = ( {children, ...otherProps}) => {
   
    return ( <Button {...otherProps } to='/'>{ children }</Button> )
}
export default ButtonLink;
