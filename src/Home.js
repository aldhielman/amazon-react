import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={378.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
        />

        <Product
          id="2"
          title="
          Roll over image to zoom in
          AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
          price={40.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="AmazonBasics Foldable, 14 Metal Platform Bed Frame with Tool-Free Assembly, No Box Spring Needed - Full"
          price={76.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91395kFBwxL._AC_SL1500_.jpg"
        />

        <Product
          id="4"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={309.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
        />

        <Product
          id="5"
          title="Singer Mesin Jahit Portable"
          price={11.0}
          rating={1}
          image="https://static.bmdstatic.com/pk/product/medium/SINGER-Mesin-Jahit-Portable-3210-Merchant--SKU06916774-20168313956.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5"
          title="ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34"
          price={498.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
