import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  
const addValue=()=>{
  console.log("clicked",counter);
  counter=counter+1
   setCounter(counter)
}
const remove_value=()=>{
setCounter(counter-1);
}
  return (
    <>
      
          <h1>Chai or react</h1>
          <h2>counter value:{counter}</h2>
          <button onClick={addValue}>ADD VALUE:</button>
          <br />
          <button onClick={remove_value}>remove value</button>
    </>
  )
}

export default App
