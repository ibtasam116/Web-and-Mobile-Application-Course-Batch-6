import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import Navigation from './components/navigation/Navigation';
import Hero_section from './sections/hero_section/Hero_section'
import Trending_Collection from './sections/trending_collection/Trending_Collection';
import Top_Creators from './sections/top_creators/Top_Creators';

function App() {
  return (
    <>
      <Navigation />
      <Hero_section />
      <Trending_Collection />
      <Top_Creators />
    </>
  );
}

export default App;
