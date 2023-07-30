import './App.css';

function App() {
  return (
    <>
      <div className='h-96 py-48 bg-purple-700'>
        <div className="container m-auto flex justify-center">
          <div className="card border-white p-8 border-8 bg-purple-700-50 flex">
            <input type="text" className='py-1 ps-2 w-60 outline-none ' placeholder='Add new task'/>
            <button className='text-center bg-white text-purple-700 font-bold uppercase ms-3 px-4 py-1 text-[20px]'>Add Task</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
