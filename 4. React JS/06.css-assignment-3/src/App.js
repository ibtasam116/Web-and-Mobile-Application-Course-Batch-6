import "./App.scss"

import "bootstrap/dist/js/bootstrap.bundle"

import Navbar from "./components/Header/Navbar/Navbar";

import Header_Main from "./components/Header/Header_Main/Header_Main";

function App() {
  return (
    <>
      <Navbar />
      <Header_Main />
      <h1 className="text-center">Heelo</h1>
      hi
    </>
  );
}

export default App;
