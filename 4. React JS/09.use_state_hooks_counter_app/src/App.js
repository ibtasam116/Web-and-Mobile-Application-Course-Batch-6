import './App.css';
import { useState } from 'react';


function App() {

  const [initialValue, Setincrement] = useState(0)
  // var initialValue = 0

  const increment = () => {
    Setincrement(initialValue + 1);
  };

  const decrement = () =>{
    Setincrement(initialValue - 1);
  };

  const reset =()=>{
    Setincrement(0);
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <p>Coount: {initialValue}</p>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
