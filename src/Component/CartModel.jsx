import React from 'react';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

const CartModel = ({
  cart,
  onClose,
  updateQuantity,
  removeFromCart,
  total,
  theme,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className={`w-full sm:w-[400px] bg-white dark:bg-gray-800 text-black dark:text-white p-4 overflow-y-auto`}>
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <FaTimes className="text-xl hover:text-red-600" />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="mb-4 flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <FaMinus className="text-sm" />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <FaPlus className="text-sm" />
                  </button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-600">
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-4 flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModel;
