import HomeLanding from "../elements/HomeLanding.jsx";
import React from "react";
import LandingBelow from "../elements/LandingBelow.jsx";
import { InfiniteMovingCardsElement } from "../elements/InfinteMovingCardsElement.jsx";

const Home = () => {
  return (
    <section id="home">
      <HomeLanding />
      <LandingBelow />

    </section>
  );
};

export default Home;
