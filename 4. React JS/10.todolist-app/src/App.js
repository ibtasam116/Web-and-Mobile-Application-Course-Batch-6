import { useState } from 'react';
import './App.css';


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([])
  function addItem() {
    if (!newItem) {
      alert("Please Enter Items")
      return;
    }
    console.log(newItem)
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(items)
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
    console.log(id);
  }


  return (
    <>
      <div className='h-[100vh] bg-purple-700'>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 p-3 pt-8'>
          <div className='bg-white lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-4 sm:col-start-1 sm:col-end-4 p-3 md:p-6'>
            <div className='bg-purple-700 p-2 sm:p-4 text-center shadow-lg'>
              <input onChange={e => setNewItem(e.target.value)} value={newItem} type="text" className='w-[100%] md:w-[70%] p-2  outline-none' placeholder='Add new task'/>
              <button onClick={() => addItem()} className='md:text-[15px] bg-white w-[100%] md:w-[26%] mt-2 md:mt-0  p-2 ms-0 md:ms-2 hover:bg-orange-400 hover:text-white'>Add Task</button>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 p-3 pt-8'>
          <div className='bg-white lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-4 sm:col-start-1 sm:col-end-4 px-3 md:px-6 pb-3 md:pb-6 '>
            <h3 className='text-center font-serif text-[30px] hover:underline transi'>TODOS</h3>
            <div className='bg-purple-700 p-2 sm:p-4 text-center shadow-lg'>
              <ul>
                {items.map(item => {
                  return (
                    <>
                      <li key={item.id} className='bg-white w-[100%] md:w-[100%] lg:w-[60%] text-left p-2 inline-block my-2'>{item.value}
                      </li>
                      <div className='inline md:block lg:inline'>
                      <button onClick={() => deleteItem(item.id)} className='w-[40%] lg:w-[18%] p-2 lg:ms-2 bg-white hover:bg-red-700 hover:text-white'>Delete</button>
                      <button onClick={() => deleteItem(item.id)} className='w-[40%] lg:w-[18%] p-2 ms-2 bg-white hover:bg-green-700 hover:text-white'>Edit</button>
                      </div>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
