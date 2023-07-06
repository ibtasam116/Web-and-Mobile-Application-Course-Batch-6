import './App.scss'

import 'bootstrap/dist/js/bootstrap.bundle'

import Navbar from './components/Header/Navbar/Navbar';

import Header from "./components/Header/Header/Header"

import Services from './components/Main/Services/Services';

import Fresh_Fruits from './components/Main/FreshFruits/Fresh_Fruits';

import Testimonial from './components/Main/Testimonial/Testimonial';

import ContactUs from './components/Main/ContactUs/ContactUs';

import Footer_Header from './components/Footer/Footer_Header/Footer_Header';

import Footer_bottom from './components/Footer/Footer_bottom/Footer_bottom';

function App() {
  return (
    <>
      <Navbar />

      <Header />

      <Services />

      <Fresh_Fruits />

      <Testimonial />

      <ContactUs />

      <Footer_Header />

      <Footer_bottom />
    </>
  );
}

export default App;
