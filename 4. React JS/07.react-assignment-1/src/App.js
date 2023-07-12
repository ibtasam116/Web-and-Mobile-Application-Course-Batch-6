import Navbar from './components/navbar/Navbar';
import './css/styles.css';
import './css/swiper-bundle.min.css'
import AboutHalloween from './pages/aboutHalloween/AboutHalloween';
import FavoriteScareCategory from './pages/favoriteScareCategory/FavoriteScareCategory';
import HomePage from './pages/homePage/HomePage';
import TrickOrTreat from './pages/trickOrTreat/TrickOrTreat';

function App() {
  return (
    <>
      <Navbar />

      <main class="main">

        <HomePage />
        <FavoriteScareCategory />
        <AboutHalloween />
        <TrickOrTreat />

      </main>


    </>
  );
}

export default App;
