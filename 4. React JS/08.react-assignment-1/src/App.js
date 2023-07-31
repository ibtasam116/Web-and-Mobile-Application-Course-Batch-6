import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Scroll_up from './components/scroll_up/Scroll_up';
import './css/styles.css';
import './css/swiper-bundle.min.css'
import AboutHalloween from './pages/aboutHalloween/AboutHalloween';
import DiscountOnNewProducts from './pages/discountOnNewProducts/DiscountOnNewProducts';
import FavoriteScareCategory from './pages/favoriteScareCategory/FavoriteScareCategory';
import HomePage from './pages/HomePage/HomePage';
import NewArrivals from './pages/newArrivals/NewArrivals';
import Newsletter from './pages/newsletter/Newsletter';
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
        <Newsletter />

      </main>

      <Footer />
      <Scroll_up />
    </>
  );
}

export default App;
