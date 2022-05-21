import React from "react";
import "./productdetails.css";
import ProductImage from "./images/88.png";

function ProductDetails() {
  return (
    <div className="product-detail">
      <div className="detail-head">
        <div className="product-images">
          <div className="mini-images">
            <img src={ProductImage} alt="" />
            <img src={ProductImage} alt="" />
            <img src={ProductImage} alt="" />
            <img src={ProductImage} alt="" />
          </div>
          <div className="main-image">
            <img src={ProductImage} alt="" />
          </div>
        </div>
        <div className="product-title">
          <h2 className="product-name">
            Occaecat laborum sit consectetur sunt quis minim in pariatur culpa.
          </h2>
          <div className="product-color">
            <h2>إختار لون</h2>
            <img src={ProductImage} alt="" />
            <img src={ProductImage} alt="" />
            <img src={ProductImage} alt="" />
          </div>
          <div>
            <h2>إختار مقاس</h2>
            <span>40</span>
            <span>41</span>
            <span>42</span>
            <span>43</span>
            <span>44</span>
          </div>
        </div>
        <div className="add-to-cart">
          <h3>إختار اللون و المقاس</h3>
          <button>شراء الان</button>
          <button>إضف للسلة</button>
        </div>
      </div>
      <div className="detail-body"></div>
      <div className="more-item"></div>
    </div>
  );
}

export default ProductDetails;
