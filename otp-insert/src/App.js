import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const firstDigitRef = useRef()
  const secondDigitRef = useRef()
  const thirdDigitRef = useRef()
  const forthDigitRef = useRef()

  const oneChange = (e) => {
    const value = e.target.value
    if(value.length>0){
      secondDigitRef.current.focus()
    }
  }
  const twoChange = (e) => {
    const value = e.target.value
    if(value.length > 0) {
      thirdDigitRef.current.focus()
    }
    if(value.length === 0) {
      firstDigitRef.current.focus()
    }
  }
  const threeChange = (e) => {
    const value = e.target.value
    if(value.length > 0) {
      forthDigitRef.current.focus()
    }
    if(value.length === 0) {
      secondDigitRef.current.focus()
    }
  }

  const fourChange = (e) => {
    const value = e.target.value
    if(value.length === 0) {
      thirdDigitRef.current.focus()
    }
  }

  return (
    <div className="App">
      <input type={"number"} ref={firstDigitRef} onChange={oneChange}/>    
      <input type={"number"} ref={secondDigitRef} onChange={twoChange}/>    
      <input type={"number"} ref={thirdDigitRef} onChange={threeChange}/>    
      <input type={"number"} ref={forthDigitRef} onChange={fourChange}/>    
    </div>
  );
}

export default App;
