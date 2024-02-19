// src/pages/HomePage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const HomePage = ({ products }) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
        <ProductCard product={product} />
      </Link>
      ))}
    </div>
  );
};

export default HomePage;
