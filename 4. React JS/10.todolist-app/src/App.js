import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className='grid-rows-{n}'>

          <div className='columns-3'>
            <div className="flex bg-red-200">
              <h1 className="text-blue-200 mx-12 cursor-pointer">Hello World</h1>
              <h1 className="text-blue-900 mx-4">Hello World</h1>
            </div>
          </div>
          <div className='columns-3'>
            <div className="flex bg-red-200">
              <h1 className="text-blue-900 mx-12 cursor-pointer">Hello World</h1>
              <h1 className="text-blue-900 mx-4">Hello World</h1>
            </div>
          </div>
          <div className='columns-3'>
            <div className="flex bg-red-200">
              <h1 className="text-blue-900 mx-12 cursor-pointer">Hello World</h1>
              <h1 className="text-blue-900 mx-4">Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
