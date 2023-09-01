import DigitButton from './DigitButton';
import { useState } from 'react';
import './App.css';

 export const ACTION={
  ADD :'add-digit',
  Choose:'choose-operation',
  Clear : 'clear',
  DELETE:'delete-digit',
  EVALUATE:'evaluate'
}

function reducer( state, {type,payload}){
switch(type){
case ACTION.ADD:
  return{
    ...state,
    current: `${current || ""}${payload.digit}`,
  }
}
}

function App() {
  const[{current,previous,operation},dispatch]=useState( reducer,{});
 
  return (
  <div className='claculation-grid'>
    <div className='output'>
      
      <div className='previous'> {previous} {operation}</div>
        <div className='current'>{current} </div>

    </div>
    <button className='span-2'>AC</button>
    <button>DEL</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className='span-2'>=</button>
  </div>
  );
}

export default App;
