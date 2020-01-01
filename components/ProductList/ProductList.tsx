import React from "react";
import Product from "../Product/Product";
import "./productList.scss";

const ProductList = ({ products }) => (
  <div className="productList">
    {products.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </div>
);

export default ProductList;
