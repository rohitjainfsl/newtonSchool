import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("storedCart", JSON.stringify(cart))
  }, [cart])

  //State updates happens in batches in react

  function handleAddToCart(e, product){
    e.preventDefault()
    
    setCart([...cart, product]) //setCart( (cart) => [...cart , product] )
  }

  console.log(cart)

  return (
    <>
      <div className="products">
        <h2>Products</h2>
        <div className="product-container">
          {products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.image} alt="Product" />
                <h3>{product.title}</h3>
                <a href="" onClick={(e) => handleAddToCart(e, product)}>Add To Cart</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
