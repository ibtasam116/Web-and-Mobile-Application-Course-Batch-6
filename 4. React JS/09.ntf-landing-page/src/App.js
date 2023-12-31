import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import Navigation from './components/navigation/Navigation';
import Hero_section from './sections/hero_section/Hero_section'
import Trending_Collection from './sections/trending_collection/Trending_Collection';
import Top_Creators from './sections/top_creators/Top_Creators';
import Discover_More from './sections/discover_more/Discover_More';
import Browse_Categories from './sections/browse_categories/Browse_Categories';
import Magic_Mashrooms from './sections/magic_mashrooms/Magic_Mashrooms';
import How_it_works from './sections/how_it_works/How_it_works';
import Subscribe from './sections/subscribe/Subscribe';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero_section />
      <Trending_Collection />
      <Top_Creators />
      <Discover_More />
      <Browse_Categories />
      <Magic_Mashrooms />
      <How_it_works />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
