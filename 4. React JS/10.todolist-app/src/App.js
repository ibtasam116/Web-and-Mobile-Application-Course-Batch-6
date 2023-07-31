import { useState } from 'react';
import './App.css';


function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([])
  const handleClick = () => {
    if (value !== "" && todo !== "") {
      setTodo(...todo, value)
      setValue('');
    }
  }


  return (
    <>
      <div className='h-[100vh] bg-purple-700'>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4'>
          <div className='bg-white lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-4 sm:col-start-2 sm:col-end-4 p-6'>
            <div className='bg-purple-700 p-4 text-center'>
              <input onChange={e => setNewItem(e.target.value)} value={newItem} type="text" className='w-[70%] p-2' />
              <button onClick={handleClick} className='bg-white w-[26%] p-2 ms-3'>Add TAsk</button>
            </div>
          </div>
        </div>
        <div>
          <ol>
            {todo.map((todos) => <li key={hi}>{todos}</li>)}
          </ol>
          {/* 
          <ol>
            {todo.map((todos => <li>{todos}</li>))}
          </ol> */}
        </div>
      </div>
    </>
  );
}

export default App;
