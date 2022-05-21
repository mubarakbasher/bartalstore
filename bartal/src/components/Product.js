import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import ProductImage from "./images/88.png";

function Product() {
  return (
    <div className="product">
      <img src={ProductImage} alt="" />
      <div className="product-info">
        <Link to={`/product/${1221}`}>
          <h3 className="product-name">Product name</h3>
        </Link>
        <p className="product-description">
          Amet reprehenderit cillum occaecat excepteur elit ipsum adipisicing
          cillum esse id. Et laborum voluptate incididunt cillum mollit nostrud
          anim voluptate adipisicing cillum deserunt aliqua adipisicing sint.
        </p>
        <p className="price">
          1929<span>SDG</span>
        </p>
        <button>أضف للسلة</button>
      </div>
    </div>
  );
}

export default Product;
