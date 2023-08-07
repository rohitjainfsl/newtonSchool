import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ecommerceContext } from "./App";

function Products() {
  const { cart, setCart } = useContext(ecommerceContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response.data)
      setProducts(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])

  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  console.log(cart);

  return (
    <div className="products">
      <h3>Products</h3>
      {products.map((product, index) => {
        return (
          <div key={index} className="product">
            <img src={product.image} alt="product" />
            <h4>{product.title}</h4>
            <Link to="" onClick={(e) => handleAddToCart(e, product)}>
              Add To Cart
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
