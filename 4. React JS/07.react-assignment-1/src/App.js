import Navbar from './components/navbar/Navbar';
import './css/styles.css';
import './css/swiper-bundle.min.css'
import AboutHalloween from './pages/aboutHalloween/AboutHalloween';
import DiscountOnNewProducts from './pages/discountOnNewProducts/DiscountOnNewProducts';
import FavoriteScareCategory from './pages/favoriteScareCategory/FavoriteScareCategory';
import HomePage from './pages/homePage/HomePage';
import NewArrivals from './pages/newArrivals/NewArrivals';
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
        <DiscountOnNewProducts />
        <NewArrivals />

      </main>


    </>
  );
}

export default App;
