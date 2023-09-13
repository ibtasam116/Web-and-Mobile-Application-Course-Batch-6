import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/navbar/Navbar';

import Main01 from './sections/main_01/Main_01';

import Main_02_03 from './sections/main_02_03/Main_02_03';

import Cards from './sections/cards/Cards';

import Footer from './components/footer/Footer';

function App() {
  return (
    <>

      <Navbar />

      <Main01 />

      <Main_02_03 />

      <Cards />

      <Footer />

    </>
  );
}

export default App;
