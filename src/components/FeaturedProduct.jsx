import React from "react";
import "../css/featured-product.css";

export default function FeaturedProduct({ name, price, imageUrl }) {
  return (
    <section className="featured-product">
      <h2>Featured Product:</h2>
      <h3>{name}</h3>
      <p>
        Experience luxury and celebration with our best-selling Champagne Life
        Candle. Hand-poured with care, this candle embodies the effervescence
        and elegance of a sparkling toast. With notes of crisp champagne, juicy
        berries, and a hint of golden amber, it creates a rich, sophisticated
        aroma that turns any space into a moment of indulgence.
      </p>
      <p>
        Made with a clean-burning soy wax blend and infused with premium
        essential oils, the Champagne Life Candle not only delivers a
        long-lasting scent but also enhances your atmosphere with a touch of
        glamour. Whether you're setting the mood for a cozy evening, a festive
        gathering, or simply treating yourself, this candle is the ultimate home
        luxury.
      </p>
      <img src={imageUrl} alt={name} />
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </section>
  );
}
