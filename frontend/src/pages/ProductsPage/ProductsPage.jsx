// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // You would fetch from your API here
    const fetchProducts = async () => {
      // Temporary mock data
      const mockProducts = [
        {
          name: "Organic Face Cream",
          description: "Nourishing cream made with natural ingredients.",
          price: 29.99,
          inStock: true,
          picture: "https://img.freepik.com/free-photo/orange-colored-water-cup-with-lemon-tea-kinds-high-angle-view-sack-cloth-dark-wooden-background_176474-5170.jpg?uid=R189543507&ga=GA1.1.1308985919.1740763072&semt=ais_hybrid&w=740"
        },
        {
          name: "Herbal Shampoo",
          description: "Refreshing shampoo with herbal extracts.",
          price: 19.99,
          inStock: false,
          picture: "https://img.freepik.com/free-photo/orange-colored-water-cup-with-lemon-tea-kinds-high-angle-view-sack-cloth-dark-wooden-background_176474-5170.jpg?uid=R189543507&ga=GA1.1.1308985919.1740763072&semt=ais_hybrid&w=740"
        }
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
