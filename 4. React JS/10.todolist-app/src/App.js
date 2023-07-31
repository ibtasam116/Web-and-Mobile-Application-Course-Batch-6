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
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4'>
          <div className='bg-white lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-4 sm:col-start-2 sm:col-end-4 p-6'>
            <div className='bg-purple-700 p-4 text-center'>
              <input onChange={e => setNewItem(e.target.value)} value={newItem} type="text" className='w-[70%] p-2' />
              <button onClick={() => addItem()} className='bg-white w-[26%] p-2 ms-3'>Add TAsk</button>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {items.map(item => {
              return (
                <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)} className='p-2 bg-white'>X</button></li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
