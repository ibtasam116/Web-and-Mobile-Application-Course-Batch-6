import "./App.scss"

import "bootstrap/dist/js/bootstrap.bundle"

import Navbar from "./components/Header/Navbar/Navbar";

import Header_Main from "./components/Header/Header_Main/Header_Main";
import Header_Menus from "./components/Header/Header_Menus/Header_Menus";
import HowWork from "./components/Main/HowWork/HowWork";
import Popular_items from "./components/Main/Popular_items/Popular_items";
import Featured_Restaurants from "./components/Main/Featured_Restaurants/Featured_Restaurants";
import Search_Food from "./components/Main/Search_Food/Search_Food";

function App() {
  return (
    <>
      <Navbar />

      <Header_Main />

      <Header_Menus />

      <HowWork />

      <Popular_items />

      <Featured_Restaurants />

      <Search_Food />
    </>
  );
}

export default App;
