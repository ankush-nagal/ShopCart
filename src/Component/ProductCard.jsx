import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product, addToCart, theme }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } max-w-xs mx-auto`}
    >
      {/* Product image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Product info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-green-500 hover:text-green-700"
            title="Add to Cart"
          >
            <FaCartPlus size={20} /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
 