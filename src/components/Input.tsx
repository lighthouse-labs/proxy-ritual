import React, { useRef, useState, useEffect } from 'react';
import '../styles.scss';

import { useGlobalContext } from '../GlobalContext';
import InputFormItem from './InputFormItem';

interface Props{
  setRender: React.Dispatch<React.SetStateAction<string>>
}

// COMPONENT
const Input: React.FC<Props> = ({setRender}: Props ) => {
const { values, setValues, handleSubmit } = useGlobalContext();
const [ inputRender, setInputRender ] = useState<string>("begin");

const inputElement:any = useRef();

const focusInput:() => void = ()=> {
  inputElement.current.focus();  
}

// VIEW
  return (
    <form 
      className='Input__container' 
      onSubmit={(e) => {
        handleSubmit(e)
        setRender("Images")
    }}>

     {inputRender === "begin" && 
       <button 
       type="button" className="begin__button" 
       onClick={() => {
         let inputForm: any = (document.getElementById(`test`) as HTMLInputElement);
         focusInput()
         inputForm.classList.toggle("reveal");
         setInputRender("process")
       }}>
         Begin Ritual
       </button>
     }
      <InputFormItem 
        inputElement={inputElement}
        focusInput={focusInput}
      />

     {inputRender === "process" &&
        <button className="input__button">INVOKE</button>
    }
    </form>
  )
}

export default Input