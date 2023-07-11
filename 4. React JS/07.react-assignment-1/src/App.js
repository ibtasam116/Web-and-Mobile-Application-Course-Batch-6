import Navbar from './components/navbar/Navbar';
import './css/styles.css';
import './css/swiper-bundle.min.css'
import FavoriteScareCategory from './pages/favoriteScareCategory/FavoriteScareCategory';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <>
      <Navbar />

      <main class="main">

        <HomePage />
        <FavoriteScareCategory />

      </main>


    </>
  );
}

export default App;
