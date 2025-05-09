// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import Products from '../../data/products.json';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(Products);
    };
    fetchProducts();
  }, []);

  return (
    <section className="p-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">Our Products</h1>
            <div className="row g-3">
              {products.map((product, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
