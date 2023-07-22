import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import Navigation from './components/navigation/Navigation';
import Hero_section from './sections/hero_section/Hero_section'
import Trending_Collection from './sections/trending_collection/Trending_Collection';
import Top_Creators from './sections/top_creators/Top_Creators';
import Discover_More from './sections/discover_more/Discover_More';

function App() {
  return (
    <>
      <Navigation />
      <Hero_section />
      <Trending_Collection />
      <Top_Creators />
      <Discover_More />

    </>
  );
}

export default App;
