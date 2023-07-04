import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';

import Header from './components/Header';

import Footer from './components/Footer/Footer';

import Main1 from './components/Main/Main1/Main1';

import Main2 from './components/Main/Main2/Main2';

function App() {
  return (
    <>
      <Header />

      <Main1 />

      <Main2 />

      <Footer />
    </>
  );
}

export default App;
