
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-sm rounded-lg p-4 hover:shadow-md transition">
      <img
        src={product.picture}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
        style={{width:150, height: "auto"}}
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-2">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
      </div>
      {!product.inStock && (
        <p className="text-red-500 font-semibold mt-1">Out of Stock</p>
      )}
    </div>
  );
};

export default ProductCard;
