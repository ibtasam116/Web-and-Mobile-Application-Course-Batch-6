import './App.css';
import { useState } from 'react';


function App() {

  const [initialValue, Setincrement] = useState(0)
  // var initialValue = 0

  const increment = () => {
    Setincrement(initialValue + 1);
  };

  const decrement = () => {
    Setincrement(initialValue - 1);
  };

  const reset = () => {
    Setincrement(0);
  };

  return (
    <>
        <h1 id='heading'>Counter App</h1>
      <div id='main'>
        <button onClick={decrement} className='incre'>DECRE -</button>
        <span className='count'>Count: {initialValue}</span>
        <button onClick={increment} className='decre'>INCRE +</button>
        <br />
        <button onClick={reset} className='reset'>Reset</button>
      </div>
      
    </>
  );
}

export default App;
