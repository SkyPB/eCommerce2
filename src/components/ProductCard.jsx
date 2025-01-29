import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-size">{product.size}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
