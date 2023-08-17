import React from "react";
import NavBar from "./components/Navbar";
import Card from "./components/ImgExperience";
import Gridcontainer from "./components/Gridcontainer";
import Cards from "./components/Card";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import SlideShow from "./components/SlideShow";
import Patner from "./components/Patner";
import PopularDestinations from "./components/Slider/BestThailand";
import Popular from "./components/Slider/BestIndia";
import Popular1 from "./components/Slider/BestEurope";
import Popular2 from "./components/Slider/BestIsland";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <NavBar />
      <Card />
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
