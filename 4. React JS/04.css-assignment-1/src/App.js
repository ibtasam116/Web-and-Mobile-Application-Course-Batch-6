import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/header/navbar/Navbar';

import Main01 from './components/Main/main01/Main01';

import Main02 from './components/Main/main_02_03/Main_02_03';

import Footer from './components/Footer/Footer';



import Eyes from './components/Main/Eyes/Eyes';

import Main3 from './components/Main/Main3/Main3';

import Main4 from './components/Main/Main4/Main4';

function App() {
  return (
    <>
      <Navbar />

      <Main01 />
      
      <Main02 />
      
      {/* 


      <Eyes />

      <Main3 />

      <Main4 />

      <Footer /> */}
    </>
  );
}

export default App;
