import React from 'react'
import {SlideButton} from './StyledFormButton';

function FormButton(props) {
  const {onClick} = props
  return (
    <SlideButton  onClick={onClick}/>
  )
}

export default FormButton
