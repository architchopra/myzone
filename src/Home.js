import React from "react";
import "./home.css";
import imga from "./images/zonemovies.jpg";
import imga2 from "./images/zonemovies2.jpg";
import Product from "./product";
function Home() {
  return (
    <div className="Home">
      <div className="home__comtainer">
        <img className="home_image" src={imga} alt="zone movies" />
        <img className="home_title" src={imga2} alt="zone movies" />
      </div>

      <div className="home_row">
        <Product />
      </div>

      <div className="home_row"></div>

      <div className="home_row"></div>
    </div>
  );
}

export default Home;
