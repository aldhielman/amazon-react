import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/merch/web/web_hero_banner//WebHeroBanner_BluePlanetII_3000x600._CB1516041724_UR3000,600_SX1500_FMjpg_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="chekout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
