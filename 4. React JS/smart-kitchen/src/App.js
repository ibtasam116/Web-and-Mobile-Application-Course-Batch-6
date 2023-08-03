import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Alert from './components/alert/Alert';
import Navbar from './components/nabar/Navbar';
import Header from './sections/header/Header';
import Happy_Menu from './sections/happy_menu/Happy_Menu';
import Our_Deals from './sections/our_Deals/Our_Deals';

function App() {
  return (
    <>
      <Alert heading="HURRAY!" title=" You should check our new " link="happy menu" />
      <Navbar />
      <Header />
      <Happy_Menu />
      <Our_Deals />

    </>
  );
}

export default App;
