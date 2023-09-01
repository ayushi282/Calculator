import React from 'react';
import { ACTION } from './App';

const DigitButton = ({dispatch,digit}) => {
  return (
    <button onClick={()=>dispatch({type:ACTION.ADD,payload:{digit}})}>{digit}</button>
  )
}

export default DigitButton