import React from "react";
import "./ProductCard.css";
import myImage from "./Logo.jpg";
import Profile from "./Product1.webp";

// import { ProductImg } from "./src/Components/ProductImg";

export const ProductCard = () => {
  return (
    <div>
      <div className="productContainer">
        <div className="productCard">
          {/* <Logo /> */}

          <div className="productDetails">
            <div className="productName">
              <h3>1. Colourful Smoke</h3>
            </div>

            <div className="productImg">
              <img src={Profile} />
            </div>
          </div>

          <div className="priceMain">
            <p>1 Piece</p>
            <div className="pricing">
              <div className="price">
                {/* <p>1 Piece</p> */}
                <h3>
                  300 <span>500</span>
                </h3>
              </div>

              <div className="addToCart">
                <button>Add</button>
              </div>
            </div>
          </div>

          <div className="addContact">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
