import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../css/catalog.css";

export default function Catalog({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/catalog");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  // Category filter change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  // Price filter change
  const handlePriceChange = (e) => {
    const newPriceRange = [...priceRange];
    newPriceRange[e.target.name === "min" ? 0 : 1] = e.target.value;
    setPriceRange(newPriceRange);
  };

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = [...products];
    // Filter by category (if one is selected)
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    // Filter by price range (if it's selected)
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  return (
    <div>
      <div className="filters">
        <label>
          Category:
          <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="candles">Candles</option>
            <option value="candle accessories">Accessories</option>
          </select>
        </label>

        <label>
          Price Range:
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
            placeholder="Min"
          />
          -
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
            placeholder="Max"
          />
        </label>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
