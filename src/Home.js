import React from "react";
import "./home.css";
import imgaback from "./images/zonemovies.jpg";
import imgaharry from "./images/harry.jfif";
import imgamac from "./images/macbook.jpg";
import imgaearphones from "./images/earphones.jpg";
import imgawatch from "./images/watch.jpeg";
import imgaphone from "./images/phone.webp";
import imgatv from "./images/tv.webp";
import Product from "./product";
function Home() {
  return (
    <div className="Home">
      <div className="home__comtainer">
        <img className="home_image" src={imgaback} alt="zone movies" />
      </div>

      <div className="home_row">
        <Product
          title="Harry Potter Box Set: The Complete
                Collection (Set of 7 Volumes)   
                Paperback – Box set, 1 December 
                2014"
          price={2990.0}
          image={imgaharry}
          rating={5}
        />
        <Product
          title="2020 Apple MacBook Pro 
                (13.3-inch/33.78 cm, Apple M1
                chip with 8-core CPU and 
                8-core GPU,8GB RAM, 512GB SSD) 
                - Space Grey"
          price={126990.0}
          image={imgamac}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          title="Marshall 4090939 Mode Wired 
              in Ear Headphone with Mic 
             (Black/White)"
          price={2745.0}
          image={imgaearphones}
          rating={4}
        />
        <Product
          title="Fossil Minimalist Analog
                 Black Dial Men's 
                 Watch-FS5848"
          price={12495.0}
          image={imgawatch}
          rating={3}
        />
        <Product
          title="New Apple iPhone 12 Pro 
                (256GB) - Pacific Blue"
          price={102900.0}
          image={imgaphone}
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          title="Samsung LC49RG90SSUXEN 49' 
                 Curved LED Gaming Monitor 
                 - Super Ultra Wide Dual 
                 WQHD 5120 x 1440"
          price={85900.0}
          image={imgatv}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
