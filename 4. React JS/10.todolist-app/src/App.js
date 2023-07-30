import './App.css';

function App() {
  return (
    <>
      <div className='h-[100vh] pt-[5%] bg-purple-700'>
        <div className="flex justify-center">
          <div className="bg-white w-[90%] sm:w-[70%] md:w-[40%] max-h-[70vh] p-6">
            <div className='bg-purple-700 max-h-[70vh] shadow-2xl p-5'>
              <input type="text" className='outline-none w-[75%] p-2'/>
              <button className='bg-white w-[21%] ms-3 p-2'>Add Task</button>
              {/* <div className=' py-[2%] px-[5%]'>
              <input type="text" className='py-1 ps-2 w-60 outline-none ' placeholder='Add new task' />
              <button className='text-center bg-white text-purple-700 font-bold uppercase ms-3 px-4 py-1 text-[20px]'>Add Task</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
