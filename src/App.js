import React from "react";
import NavBar from "./components/Navbar";
import Card from "./components/Card";
import Gridcontainer from "./components/Gridcontainer";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import SlideShow from "./components/SlideShow";
import Patner from "./components/Patner";
import PopularDestinations from "./components/PopularDestination";
import Popular from "./components/Slider/Popular";
import Popular1 from "./components/Slider/Popular1";
import Popular2 from "./components/Slider/Popular2";
import Hero from "./components/Hero";


const App = () => {
  return (
    <div>
      <NavBar />
      <Card/>
      <Gridcontainer />
      <Cards />
      <Popular />
      <Popular1 />
      <Popular2 />
      <PopularDestinations />

      <Banner />
      <SlideShow />
     
      <Patner />
      <Footer />
    </div>
  );
};

export default App;
