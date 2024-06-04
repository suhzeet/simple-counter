import { useState } from 'react'
import './App.css'

function App() {
  const [counterValue, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counterValue + 1);
  }
  const removeValue = () => {
    setCounter(counterValue - 1);
  }

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>VALUE: {counterValue}</h2>
      <h3><button
      onClick={addValue}>ADD</button></h3>
      <h3><button
      onClick={removeValue}>REMOVE</button></h3>

    </>
  )
}

export default App
