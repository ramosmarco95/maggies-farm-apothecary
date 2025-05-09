import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition duration-300 text-center h-100 d-flex flex-column justify-content-between">
      <img
         src={product.picture}
         alt={product.name}
         className="img-fluid rounded"
         style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="">{product.description}</p>
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
