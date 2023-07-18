import "./App.scss"

import "bootstrap/dist/js/bootstrap.bundle"

import Navbar from "./components/Header/Navbar/Navbar";

import Header_Main from "./components/Header/Header_Main/Header_Main";
import Header_Menus from "./components/Header/Header_Menus/Header_Menus";
import HowWork from "./components/Main/HowWork/HowWork";
import Popular_items from "./components/Main/Popular_items/Popular_items";
import Featured_Restaurants from "./components/Main/Featured_Restaurants/Featured_Restaurants";
import Search_Food from "./components/Main/Search_Food/Search_Food";
import App_Download from "./components/Main/App_Download/App_Download";
import Deals from "./components/Main/Deals/Deals";
import Footer_Header from "./components/Footer/Footer_Header/Footer_Header";
import Footer_Main from "./components/Footer/Footer_Main/Footer_Main";
import Footer_Bottom from "./components/Footer/Footer_Bottom/Footer_Bottom";
import Proceed_Order_Button from "./components/proceed_order_button/Proceed_Order_Button";

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

      <App_Download />

      <Deals />

      <Proceed_Order_Button />

      <div class="footer">
        <div class="container py-5">

          <Footer_Header />

          <Footer_Main />

          <Footer_Bottom />
          
        </div>
      </div>
    </>
  );
}

export default App;
