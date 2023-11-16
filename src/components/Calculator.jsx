import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  
  const [fieldNumber, setFieldNumber] = useState('0');
  let result,temp;

  function pressedNumber(num) {
    switch(num) {
      case 'clear':
        setFieldNumber("0");
        break;
      case 'negative':
        temp = fieldNumber;
        setFieldNumber((parseInt(temp, 10)*-1).toString());
        break;
      case 'equal':
        result = fieldNumber;
        // eslint-disable-next-line
      setFieldNumber(eval(result))
        break;
      default:
        temp = fieldNumber;
        if(temp === "0") {
          setFieldNumber(num);
        } else {
          setFieldNumber(temp+=num);
        }
    }
  }

  return (
    <div className="container">
        <div className="first-row">
            <div className="i1" name="inputValue" value="Value">
                {fieldNumber}
            </div>
        </div>
        <div><button className='btn gray' onClick={() => {pressedNumber("clear")}}>C</button></div>
        <div><button className='btn gray' onClick={() => {pressedNumber("negative")}}>+/-</button></div>
        <div><button className='btn gray' onClick={() => {pressedNumber("%")}}>%</button></div>
        <div><button className='btn orange' onClick={() => {pressedNumber("/")}}>÷</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("7")}}>7</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("8")}}>8</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("9")}}>9</button></div>
        <div><button className='btn orange' onClick={() => {pressedNumber("*")}}>×</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("4")}}>4</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("5")}}>5</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("6")}}>6</button></div>
        <div><button className='btn orange' onClick={() => {pressedNumber("-")}}>-</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("1")}}>1</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("2")}}>2</button></div>
        <div><button className='btn' onClick={() => {pressedNumber("3")}}>3</button></div>
        <div><button className='btn orange' onClick={() => {pressedNumber("+")}}>+</button></div>
        <div className="area0"><button className='btn' onClick={() => {pressedNumber("0")}}>0</button></div>
        <div><button className='btn' onClick={() => {pressedNumber(".")}}>.</button></div>
        <div><button className='btn orange' onClick={() => {pressedNumber("equal")}}>=</button></div>
    </div>  
  );
}

export default Calculator;
