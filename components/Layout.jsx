import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Hero from "./hero/index";
import Ads from "./ads/Ads";
import Beyin from "./beyin/Beyin";
import Card from "./card/Card";
import Price from "./prices/Prices";
// import Cards from "./prices/Card";
import Work from "./work/Works";
import Works from "./works/Works"
import Footer from "./footer/Footer";

import * as location from "./json/1055-world-locations.json";

const defaultOptions1 = {


  animationData: location.default,

};

function Layout() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {

          setLoading(true);

          setTimeout(() => {
            setCompleted(true);
          }, 1000);
        });
    }, 1000);


  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={100} width={100} />
          ) : (
            <Lottie options={defaultOptions1} />
          )}
        </>
      ) : (
        <>
          <>
            {/* <Navbar /> */}
            <Hero />
            <Ads />
            <Works />
            <Beyin />
            <Card />
            <Price />
            {/* <Cards /> */}
            <Work />
            <Footer />
          </>
        </>
      )}
    </>
  );
}
export default Layout;
