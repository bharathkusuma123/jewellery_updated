import React from "react";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction/Introduction";
import LatestUpdate from "./LatestUpdate/LatestUpdate";
// import Video from "./Video/Video";
 import ProductQuality from "./ProductQuality/ProductQuality";
// import Testimonials from "./Testimonials/Testimonials";
// import Stores from "./Stores/Stores";
import HomeCallToAction from "./HomeCallToAction/HomeCallToAction";


function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ProductQuality />
      <LatestUpdate />
      {/* <Video /> */}
      
      {/* <Testimonials /> */}
      {/* <Stores /> */}
      <HomeCallToAction />
    </div>
  );
}

export default Home;
